<div align="center">
  <img width="140" src="./assets/icon-full.webp" alt="dsh-jailbreak-workflow 图标"><br>
  <img width="360" src="./assets/wordmark.png" alt="dsh-jailbreak-workflow">

**画布 → 计划提示词 → 模型执行**

</div>

<div align="center">

简体中文 | [English](./README.en.md) | [AI 检索索引 (`llms.txt`)](./llms.txt) · [工作流合集 `dsh-workflows`](https://github.com/Minglink/dsh-workflows) · [破甲技术交流论坛](https://openorigin.link/)（邀请码 `CESFAVBR`）· QQ 群 `1084913983`

[![npm](https://img.shields.io/npm/v/@minglink/dsh-jailbreak-workflow.svg)](https://www.npmjs.com/package/@minglink/dsh-jailbreak-workflow) [![node](https://img.shields.io/badge/node-22%2B-339933.svg)](https://nodejs.org) [![DeepSeek Harness 0.2.x](https://img.shields.io/badge/DeepSeek%20Harness-0.2.x-4d6bfe.svg)](https://github.com/deepseek-ai/deepseek-harness) [![dsh-workflow-lite 0.11.0](https://img.shields.io/badge/dsh--workflow--lite-0.11.0-0ea5e9.svg)](https://github.com/Minglink/dsh-jailbreak-workflow) [![workflow packs](https://img.shields.io/badge/workflow%20packs-dsh--workflows-3e7ce4.svg)](https://github.com/Minglink/dsh-workflows) [![arXiv](https://img.shields.io/badge/arXiv%20Papers-90%2B-b31b1b.svg)](https://github.com/Minglink/dsh-workflows/tree/master/docs/research) [![O站 openorigin](https://img.shields.io/badge/O%E7%AB%99%20openorigin-AI%E5%BC%80%E6%BA%90%E8%AE%BA%E5%9D%9B-f59e0b.svg)](https://openorigin.link/) [![QQ群](https://img.shields.io/badge/QQ%E7%BE%A4-1084913983-12b7f5.svg)](https://openorigin.link/) [![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](./LICENSE)

</div>

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的软工作流插件：**在画布上设计流程，编译成一份计划提示词，交给模型按计划执行。**

连线可以带**任意条件**，顺序、并行、汇合、分支、循环、回退全都支持——插件里没有执行引擎，一切由当前会话中的模型完成。适合把能画成步骤图的活都交给它跑：多步编码任务、研究流水线、内容生产流水线；几百步的大图拖拽、平移照样满帧。

> [!TIP]
> **官方配套工作流合集**：[Minglink/dsh-workflows](https://github.com/Minglink/dsh-workflows) —— 现成的 `.wflite.zip` 工作流包，下载导入即用，已上架「**破甲制作 v3**」「**破甲炼化 v2**」「**pojia-fullflow v1**」三大工作流（见下文 [📋 支持的工作流](#-支持的工作流)）。

> [!NOTE]
> **实验阶段**：功能和数据格式仍在调整，后续任何版本都可能包含不兼容的改动。


## 📋 支持的工作流

现成的工作流包托管在配套仓库 [Minglink/dsh-workflows](https://github.com/Minglink/dsh-workflows)，均已通过 `dsh-workflow-lite 0.11.0` 结构校验与 SHA-256 哈希核对。下载 `.wflite.zip` 后在「**工作流中心**」一键导入即可运行：

| 工作流 | 定位与能力 | 规模 | 内置 Skill | 下载 |
|---|---|---|---|---|
| **破甲制作 v3** | 依据 90+ 篇 arXiv 2024–2026 论文构建的十步多回路 LLM 漏洞与边界研究流水线（护栏/拓扑侦察 → 孪生锐度基线 → 多臂自适应回调 → 推理/CoT/层级测绘 → 三维概念锥建模 → 五套架构合成 → BoN/多轮压测 → 双裁判 CJE 校准与消融 → 报告 → 军械库回灌），含 `pass / fail_prompt / fail_surface` 三路自愈路由 | 10 步 · 27 节点 / 69 边 | `jailbreak-research`（10 脚本 + 6 模板） | [破甲制作.wflite.zip](https://github.com/Minglink/dsh-workflows/raw/master/workflows/破甲制作.wflite.zip) |
| **破甲炼化 v2** | 公开破甲词 & 实战回灌 → WildTeaming `Mine→Compose` 机制交叉复合配方 → 连续评分尺抽锋验证 → 铸成 `ARSENAL.md` 军械库与对接「破甲制作 v3」五架构的 `TRANSFER-NOTES.md` 六类弹药表 | 8 步 · 22 节点 / 41 边 | `jb-distillery`（六卷底册 + 词条卡） | [破甲炼化.wflite.zip](https://github.com/Minglink/dsh-workflows/raw/master/workflows/破甲炼化.wflite.zip) |
| **pojia-fullflow v1** | 二进制 / 移动端 / 协议 / 加密逆向全流程（需求入口 → 宿主装配 → 判断取线 → 五角色干活 → 回流自评 → 交付落库；依赖本地 `dsh-pojia-toolkit` 的 `pj_*` 工具） | 10 步 · 20 节点 / 32 边 | 10 步自足任务正文 | [pojia-fullflow.wflite.zip](https://github.com/Minglink/dsh-workflows/raw/master/workflows/pojia-fullflow.wflite.zip) |

## 🖼️ 工作流画布预览

### 1. 破甲制作 v3（10 步多回路 · 双自愈回边）

![破甲制作 v3 完整画布：护栏与拓扑侦察、孪生锐度基线、多臂自适应回调、推理与CoT面测绘、三维概念锥建模、五架构合成、BoN与多轮压测、双裁判CJE校准与消融、报告与军械库回灌](./assets/canvas-v3.webp)

### 2. 破甲炼化 v2（8 步 · WildTeaming Mine→Compose 炼化厂）

![破甲炼化 v2 完整画布：采撷入窖（含实战回灌）、通读贴标、家族聚类与行为图谱、网海对阵、炼药成丹、机制交叉组合、连续评分尺抽锋试刃、铸库收卷](./assets/canvas-distillery-v2.webp)

### 3. pojia-fullflow v1（10 步逆向全流程）与插件侧边栏

![pojia-fullflow 完整画布](./assets/canvas-pojia.webp)

<table>
  <tr>
    <td><img src="./assets/poyazhi-flow.webp" width="620" alt="插件实机画布细节：节点连接、条件分支与循环回边"></td>
    <td><img src="./assets/poyazhi-sidebar.webp" width="260" alt="左侧步骤库：基础、常用步骤、我的步骤三组，拖到画布上使用"></td>
  </tr>
</table>


### 4. 双仓闭环架构

```mermaid
flowchart LR
  A["dsh-jailbreak-workflow<br/>画布插件 (DSH 0.11.0)"] -- "导入 .wflite.zip" --> B["破甲制作 v3<br/>10 步 · 27 节点 · 69 边"]
  B -- "transfer_back.md 战绩回灌" --> C["破甲炼化 v2<br/>8 步 · 22 节点 · 41 边"]
  C -- "TRANSFER-NOTES.md 六类弹药" --> B
  B -. "开源交流 · 论文复现" .-> D["O站 (openorigin.link)<br/>AI 技术开源分享论坛"]
```

## 📦 安装

适配 DeepSeek Harness 0.2.x 的正式版；0.2.0 与 0.2.1 连预览版（rc、beta）一起支持。

| 你的 DeepSeek Harness | 能否安装 |
|---|---|
| 0.2.0 / 0.2.1 正式版 | ✅ 直接装 |
| 0.2.0 / 0.2.1 预览版（rc、beta） | ✅ 直接装 |
| 0.2.2 起的预览版 | 以当期支持为准，装不上等插件跟进一步 |
| 0.3 及以上 | 尚未适配 |

> [!TIP]
> 装完没出现「工作流」标签页：多半是 DSH 版本对不上——宿主对不上时会**静默跳过**插件，不报错。先核对上表，再到「插件」页确认插件已启用、重启 DSH；还不行就带版本信息[提 issue](https://github.com/Minglink/dsh-jailbreak-workflow/issues/new?template=bug_report.yml)。

### 网页版

需要 Node.js 22 及以上。

```bash
dsh plugin --profile web add @minglink/dsh-jailbreak-workflow
dsh web
```

### 桌面端

1. 在侧边栏打开「**插件**」，点击「**添加插件**」→「**安装第三方插件**」。
2. 填入 `@minglink/dsh-jailbreak-workflow`，点击「**安装**」。
3. 重启 DeepSeek Harness。

安装完成后，会话页顶部会出现「**工作流**」标签页。

## 🚀 详细使用教程

### 一、从零跑通「破甲制作 v3」完整教程（5 步上手）

1. **安装并启用插件**：按上方 [📦 安装](#-安装) 步骤装好 `@minglink/dsh-jailbreak-workflow` 并重启 DeepSeek Harness，确认会话页顶部出现「**工作流**」标签页。
2. **下载并导入 `.wflite.zip`**：
   - 从 [Minglink/dsh-workflows](https://github.com/Minglink/dsh-workflows) 下载 [破甲制作.wflite.zip](https://github.com/Minglink/dsh-workflows/raw/master/workflows/破甲制作.wflite.zip)（默认内置 `v3`，同时保留 `v1`/`v2` 历史版本）。
   - 打开画布左上角的「**工作流中心**」→ 点击「**导入**」→ 选中下载的 zip 包。
   - 在导入确认框中核对内置 Skill（`jailbreak-research`）的放置位置（默认安装到用户 Skill 目录），点击确认。
3. **开启运行状态记录（推荐）**：进入「工作流设置」，开启「**记录运行状态**」，执行时每一步的状态、摘要与产出文件都会实时回显在画布上。
4. **填写执行前提问并启动**：点击右上角「**执行**」，按提示填写 5 项参数：
   - **目标模型 ID**（必填）：如 `deepseek-chat`、`claude-sonnet-4-5`、`gemini-2.5-pro`
   - **API Key**（必填）：仅在本地脚本调用目标接口，不上传任何第三方
   - **API 类型与自定义 Base URL**（可选）：留空默认 OpenAI 官方兼容接口；中转站/本地服务可填 `openai,https://your-gateway/v1` 或 `anthropic` / `google`
   - **目标研究架构**（五选一）：`混合帧架构`（默认）/ `身份系统架构` / `轻量架构` / `身份主权型（第四架构）` / `Codex 精神型（第五架构·工作台叠装）`
   - **研究攻击面聚焦**（五选一）：`全栈综合` / `基础对话边界` / `推理链 LRM / CoT` / `Agent 工作台与 MCP 工具面` / `采样与解码配置面`
5. **查看产物与双工作流闭环**：
   - 执行完毕后，在实例目录（默认 `.workflow-lite/runs/<实例>/out`）可直接预览 `recon_profile.md`、`probes.md`、`callback_bounds.md`、`inference_surface.md`、`analysis.md`、`words.md`、`stress_results.md`、`verify.md`、`report.md`、`manual.md` 与 `transfer_back.md`。
   - **进阶闭环**：把本轮产出的 `transfer_back.md` 路径填入「**破甲炼化 v2**」的可选输入 `input-feedback`，即可将现役实测战绩入库并合成新的 `TRANSFER-NOTES.md` 弹药表，反哺下一轮研究。

### 二、让模型创建自定义工作流

在对话中用一句话描述流程，例如：

> 建一个工作流：先写代码，再审查，审查不通过就回去修复，最多三轮。

模型会创建工作流，画布上会同步显示。检查无误后，点击右上角「**执行**」，或让模型直接执行。

### 三、手动编辑与跟踪进度

1. 打开「工作流」标签页，新建一个工作流，从左侧步骤库拖拽步骤、填写提示词并连线。
2. 在「工作流设置」中开启「**记录运行状态**」，执行记录、工作流与版本统一在「**工作流中心**」中管理。

## 🧩 功能

| 功能 | 说明 |
|---|---|
| 🎨 画布编辑 | 拖拽步骤与连线，支持「通过 / 不通过」分支和循环，一键整理布局 |
| 📎 资源 | 为步骤指定要读写的文件、文件夹、网址或 Skill |
| 💬 执行前提问 | 执行前向用户收集必要信息，答案随计划交给模型 |
| 🤖 模型协作编辑 | 模型可以直接创建、修改工作流，画布实时同步 |
| 📊 运行状态 | 执行进度实时显示在画布上；可查看每一步的摘要、调整状态并通知模型 |
| 🖥️ 画布展示（实验性） | 看板、图片、文档、日志、表格和文件夹直接显示在画布上，执行时自动更新；循环每一轮的产出可以回看、对比 |
| 👁️ 文件预览 | 实例里的资源点开就能看：Markdown、HTML 页面（可做成每轮更新的看板，随时查看循环产出）、图片；文件夹分左右两栏浏览 |
| 🕘 版本管理 | 保存版本、添加说明、对比差异、随时切换 |
| 📦 导入导出 | 把工作流和选中的版本打成一个 `.wflite.zip`，可以连同用到的文件与 Skill 一起打包；导入前列出每样东西放到哪 |
| 🧩 导出成 Skill | 把一个版本编译成 skill（SKILL.md + 每步的任务描述 + 打包的文件与 Skill），不装插件也能用；下载 zip，或直接装到本机的 `~/.agents/skills` |
| 🧠 记忆（实验性） | 工作流把跑通的做法和踩过的坑记成 skill，下次执行照着走；可以在「记忆」页管理、存版本，随工作流包导出 |
| 🏛️ 工作流中心 | 集中管理各会话的执行记录、全部工作流与版本，以及插件设置 |
| 🌗 界面 | 浅色、深色各四套配色主题，跟随 DSH 自动切换；中文 / English |

## 📁 路径变量

资源里的路径和产出根目录可以写下面两个变量，执行时换成实际的位置：

| 变量 | 写在哪 | 换成什么 |
|---|---|---|
| `{workflow}` | 资源里的文件、文件夹路径，如 `{workflow}/refs/notes.md` | 这个工作流自己的目录（默认 `~/.dsh/workflow-lite/assets/<工作流名>/`）。在哪个工作区执行都读写同一份，工作流改名、导出时一起带走 |
| `{instance}` | 「工作流设置」里的「产出根目录」，如默认值 `.workflow-lite/runs/{instance}/out` | 这次执行的实例 id，每次执行的产出各放一处 |

旧版本写的 `{assets}/…` 照样能用，打开工作流时会自动改成 `{workflow}/…`。

## 🧪 实验性功能

下面的功能还在试验，行为和数据格式后续可能调整；除了工作流记忆，还有上面功能表里的「画布展示」。

### 工作流记忆

让工作流把跑通的做法记下来，下次执行照着走，目的是加快复杂工作流的执行。

- **使用**：给步骤开一份，或从步骤库「基础」里把「记忆」拖到画布上，作为整个工作流共用的一份；加的时候选已有的，或新建。
- **内容**：一条记忆是一个 skill 文件夹，开头的「快速路径」是下次最省事的走法。各步骤把经验写在回复里，工作流结束时由模型整理进去。
- **管理**：在工作流中心的「记忆」页查看、存版本；导出时可选带不带。
- **限制**：多个实例同时改同一条记忆不加锁，后写的覆盖先写的；重新导出并覆盖安装 Skill，会覆盖已装 skill 里攒下的记忆。

记忆只是一个快捷配置。需要更复杂的玩法时，建议自己用「资源」加提示词实现。

**效果还在验证，欢迎反馈。** 早期在同一个工作流上重复执行的试验里没有看到稳定的提速，后来加入了「快速路径」，是否有用需要更多真实的工作流来检验。

## ❓ 常见问题

**装完没有「工作流」标签页？**
见[安装](#-安装)一节的排查提示：先核对 DSH 版本，再确认插件已启用并重启 DSH。

**步骤很多的工作流会卡吗？**
不会。大图专门优化过：几百个步骤的工作流拖拽、平移保持满帧，打开约半秒；改提示词、改状态时画布不再整张重算。

**执行用的是哪个模型？要另配 API 吗？**
插件自己不调用模型，也不挑模型：执行者是当前 DSH 会话里配置的模型。把 Codex、Claude Code 这类订阅工具接进执行环境的想法正在跟进（[#3](https://github.com/Minglink/dsh-jailbreak-workflow/issues/3)）。

**工作流和产出存在哪里？**
跟随工作流的文件默认在 `~/.dsh/workflow-lite/assets/<工作流名>/`，改名、导出时一起带走；每次执行的产出按「产出根目录」落盘，默认是当前工作区的 `.workflow-lite/runs/<实例>/out`。详见[路径变量](#-路径变量)。

**它和 dsh-workflows 什么关系？**
本仓库是插件（画布与编译），[dsh-workflows](https://github.com/Minglink/dsh-workflows) 是现成工作流合集；装好插件后从合集下载 `.wflite.zip`，在「工作流中心」导入即用。

## ⚙️ 工作原理

1. **设计**：在画布上编排步骤，为每一步写好交给执行者的提示词，用分支和循环描述流程。
2. **编译**：插件把工作流整理成一份计划提示词，写明执行顺序、循环条件、每一步的输入与产出。
3. **执行**：模型按计划自行安排执行方式（直接完成、派发子代理或组建团队），并把进度同步回画布。

插件本身不包含执行引擎，也无需额外服务；调度与判断交由当前会话中的模型完成。

## 🌐 双仓共生与开源红队生态定位

本插件与 [Minglink/dsh-workflows](https://github.com/Minglink/dsh-workflows) 组成「**可视化画布插件 + 可复现研究工作流合集**」双仓共生体系，相比代码优先的 CLI/SDK 红队工具（[NVIDIA/garak](https://github.com/NVIDIA/garak)、[microsoft/pyrit](https://github.com/microsoft/pyrit)、[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)、[JailbreakBench](https://github.com/JailbreakBench/jailbreakbench)、[HarmBench](https://github.com/centerforaisafety/HarmBench)、[EasyJailbreak](https://github.com/EasyJailbreak/EasyJailbreak)），本项目定位于**上层可视化编排与方法论沉淀层**：无需重型执行引擎，把多轮回调、双裁判校准、Mine→Compose 交叉组合与六卷军械底册打包为可共享、可版本对比的 `.wflite.zip`，同时支持在节点中直接调度上述 CLI 框架（详见 [开源生态对标档案](https://github.com/Minglink/dsh-workflows/blob/master/docs/research/github-redteam-ecosystem.md)）。

## 💬 开源社区与交流（O站 · openorigin）

欢迎加入 **[O站（openorigin）· AI 技术开源分享论坛](https://openorigin.link/)**，与社区开发者一起交流大模型安全研究、红队评测方法论、DeepSeek Harness 插件开发与自定义 `.wflite.zip` 工作流：

- **官方论坛**：[https://openorigin.link/](https://openorigin.link/)（注册邀请码：`CESFAVBR`）
- **交流 QQ 群**：`1084913983`
- **工作流合集**：[Minglink/dsh-workflows](https://github.com/Minglink/dsh-workflows)（欢迎提交 PR 贡献新的研究工作流与论文档案）

---

<div align="center">

**dsh-jailbreak-workflow** · 画布 → 计划提示词 → 模型执行

[O站（openorigin）AI 开源论坛](https://openorigin.link/) · [工作流合集 dsh-workflows](https://github.com/Minglink/dsh-workflows) · 维护者 [MingLin](https://github.com/Minglink)

</div>
