/**
 * dsh-workflow-lite — 工作流版本的文件形状：`versions/<图名>/<序号>.json`。
 *
 * 一个版本一个文件，文件里是元信息加整张图：
 *
 * ```json
 * { "format": 1, "n": 3, "createdAt": 1759650000000, "note": "跑通了审查环", "document": { … } }
 * ```
 *
 * 切换到别的版本之前自动存的那份多一个 `autoBefore`（切到的版本号）。
 * 本模块只管读、写、比内容；锁、和磁盘上现在那份比对、切换时写回工作流，都在仓储里。
 *
 * @module @minglink/dsh-jailbreak-workflow/host/store/versions
 */

import type { Dirent } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { normalizeDocument, writeDocument } from '../../shared/model.ts'
import type { WorkflowDocument } from '../../shared/types.ts'
import { readFileText } from './atomic.ts'
import { isAbsentError, versionFile, versionsDir } from './paths.ts'

const FORMAT = 1
const FILE_NAME = /^([1-9]\d{0,8})\.json$/i
const MAX_VERSION_CACHE = 512

/** 读出来的一个版本；文件坏了 `document` 是 `null`。 */
export interface StoredVersion {
  n: number
  createdAt: number
  note: string
  autoBefore?: number
  document: WorkflowDocument | null
}

const versionCache = new Map<string, { text: string; version: StoredVersion }>()
const contentKeyCache = new WeakMap<WorkflowDocument, string>()

/** 版本文件的规范写法。 */
export function versionText(version: StoredVersion & { document: WorkflowDocument }): string {
  const payload = {
    format: FORMAT,
    n: version.n,
    createdAt: version.createdAt,
    note: version.note,
    ...(version.autoBefore === undefined ? {} : { autoBefore: version.autoBefore }),
    document: JSON.parse(writeDocument(version.document)) as unknown,
  }
  return `${JSON.stringify(payload, null, 2)}\n`
}

/** 解析一个版本文件；读不出来的字段给缺省，图读不出来就是 `null`。 */
export function parseVersion(text: string, n: number): StoredVersion {
  let raw: unknown
  try {
    raw = JSON.parse(text)
  } catch {
    return { n, createdAt: 0, note: '', document: null }
  }
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { n, createdAt: 0, note: '', document: null }
  }
  const record = raw as Record<string, unknown>
  const parsed = record.document === undefined ? null : normalizeDocument(record.document).document
  const autoBefore = record.autoBefore
  return {
    n,
    createdAt: typeof record.createdAt === 'number' ? record.createdAt : 0,
    note: typeof record.note === 'string' ? record.note : '',
    ...(typeof autoBefore === 'number' && Number.isInteger(autoBefore) ? { autoBefore } : {}),
    document: parsed,
  }
}

function readCachedVersion(file: string, text: string, n: number): StoredVersion {
  const cached = versionCache.get(file)
  if (cached !== undefined && cached.text === text && cached.version.n === n) {
    versionCache.delete(file)
    versionCache.set(file, cached)
    return cached.version
  }
  const version = parseVersion(text, n)
  versionCache.delete(file)
  versionCache.set(file, { text, version })
  while (versionCache.size > MAX_VERSION_CACHE) {
    const oldest = versionCache.keys().next()
    if (oldest.done) break
    versionCache.delete(oldest.value)
  }
  return version
}

/** 这个工作流存下的全部版本，新的在前。目录不在 = 没有版本。 */
export async function readVersions(dataDir: string, name: string): Promise<StoredVersion[]> {
  let entries: Dirent[]
  try {
    entries = await readdir(versionsDir(dataDir, name), { withFileTypes: true })
  } catch (error) {
    if (isAbsentError(error)) return []
    throw error
  }
  const numbers: number[] = []
  for (const entry of entries) {
    const match = entry.isFile() ? FILE_NAME.exec(entry.name) : null
    if (match !== null) numbers.push(Number(match[1]))
  }
  const loaded = await Promise.all(
    numbers.map(async (n) => {
      const file = versionFile(dataDir, name, n)
      const text = await readFileText(file)
      return text === null ? null : readCachedVersion(file, text, n)
    }),
  )
  return loaded
    .filter((version): version is StoredVersion => version !== null)
    .sort((a, b) => b.n - a.n)
}

/** 只数个数（列工作流时用，不读内容）。 */
export async function countVersions(dataDir: string, name: string): Promise<number> {
  try {
    const entries = await readdir(versionsDir(dataDir, name), { withFileTypes: true })
    return entries.filter((entry) => entry.isFile() && FILE_NAME.test(entry.name)).length
  } catch {
    return 0
  }
}

/**
 * 比内容用的键：规范写法，但不算视口——平移缩放画布不算改了工作流。
 * 卡片位置算（挪了卡片就是另一个样子，切换时会看到「布局」那一行）。
 */
export function contentKey(document: WorkflowDocument): string {
  const cached = contentKeyCache.get(document)
  if (cached !== undefined) return cached
  const computed = writeDocument({ ...document, viewport: { x: 0, y: 0, zoom: 1 } })
  contentKeyCache.set(document, computed)
  return computed
}
