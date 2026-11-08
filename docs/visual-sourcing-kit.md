# Real-to-Sim 可视化素材包（2026-11-08）

> 交付对象：研究看板维护 Agent / Grok bot
>
> **本包提供 3 张原创 SVG 可直接嵌入，以及 6 个外部研究素材来源。图片是说明研究对象的工具，不是实验成功的证明。** PR 只添加素材和来源清单，不修改页面或研究评级。

## A. 可直接用的原创 SVG（已随本 PR 提交）

| 文件 | 页面位置 | 传达的信息 | 来源属性 |
|---|---|---|---|
| [real2sim-pipeline.svg](../assets/visuals/real2sim-pipeline.svg) | 首屏 Real→Sim→Real 主技术链 | 真实采集→对象级重建→资产与场景→仿真与真机实验；呈现模态与对象 | **原创概念示意**，非本机效果 |
| [object-asset-layers.svg](../assets/visuals/object-asset-layers.svg) | 对象资产 / 可拆积木 | RGB/Depth/Mask→对象 ID→独立对象 GS→mesh/collider，表现与物理分层 | **原创概念示意**，非 ObjectGS/DIGS 的实测截图 |
| [simready-validation.svg](../assets/visuals/simready-validation.svg) | 多源成景 / 仿真验收 | 几何→物理→关节→任务规则→验收记录，检查项**未运行、未默认通过** | **原创概念示意**，非 NVIDIA SimReady 执行报告 |

直接嵌入 GitHub Pages（站点部署在子路径 `/real2sim-research/`，**使用相对路径**）：

```html
<figure class="research-visual">
  <img src="assets/visuals/real2sim-pipeline.svg"
       loading="lazy"
       alt="Real-to-Sim 技术流程概念图：真实采集到仿真与真机验证"/>
  <figcaption>原创技术概念示意，不代表本机流程已打通或获得实验结果。</figcaption>
</figure>
```

SVG 的文字、布局和配色均可编辑；没有引入外部图片、字体、JS 或第三方图形依赖。建议保持以 SVG 源文件为真源；不要重绘为低清位图。

## B. 外部真实研究图：6 组优先参考素材

| 优先级 | 来源 / 原图定位 | 对应页面 | 最适合证明或解释 | 来源页面 |
|---|---|---|---|---|
| P0 | **ObjectGS** · Target / Method Overview / Results / comparison | 对象级建模主区 | 真实论文中的对象感知 GS、实例语义、一体化重建及 object-level 编辑方式 | https://ruijiezhu94.github.io/ObjectGS_page/ |
| P0 | **DISCOVERSE** · System Overview / Turnkey Real2Sim Solution / Zero-shot Sim2Real Transfer | 首页主链 + Sim2Real | 如何连接 3DGS 视觉与 MuJoCo 物理，系统级 Real2Sim2Real 例子 | https://air-discoverse.github.io/ |
| P1 | **AffordCraft** · Method / Results / Film / Library Explorer（具体区块以官方页为准） | 多源成景 · 任务可用资产 | 单 RGB 图与任务指令→检索可关节化资产→物理有效资产（**检索+拟合，不应画成无约束文生3D**） | https://affordcraft.github.io/ ；论文 https://arxiv.org/abs/2610.06643 |
| P1 | **NVIDIA SimReady** · Acceptance Workflow / Benchmark / FET003 Physics / FET004 Multibody / FET005 Grasp | SimReady 验收 | 资产检查规则、规范、profile 与验收报告关系；优先按官方文档自绘字段图 | https://nvidia.github.io/simready-foundation/latest/index.html |
| P1 | **X2Real** · Sim2real Correlation / Diversity / Task Suite | 证据与实验 | 仿真指标与真机结果一致性、任务与 OOD 轴；需要保留原始样本/指标背景 | https://x2robot.com/en/pages/x2real |
| P2 | **DIGS** · 原论文中 boundary Gaussians / open-vocabulary 3D segmentation 图 | 3DGS 边界问题小卡 | 混合标签边界高斯为什么导致分割不稳定；与 ObjectGS 互补而非直接等价 | https://arxiv.org/abs/2610.16177 |

### 外部图片的复用边界（必须执行）

1. **先确认具体媒体授权。** 论文开放阅读 ≠ 图像自动允许复制到 GitHub Pages。不要假设“有开源代码”就表示项目主页所有图片均可再发布。优先给外部链接、或使用本包原创 SVG；若需收录原图，逐张核对版权/许可、附图署名、原始 URL、图号、修改记录。
2. ObjectGS 官方页注明 CC BY-SA 4.0，但**具体素材是否覆盖在该声明之下仍应逐张核验**，引用时署名并遵守适用条款。DISCOVERSE、X2Real、AffordCraft 等未逐图确认授权的素材先列为“参考来源”，不直接复制入仓库。
3. 严禁把生成式 AI 概念图写成“外部项目原图”或“本机复现结果”；更不能由概念图推导定量结论。
4. 若重绘论文方法图，清楚注明“根据 XXX 方法重新绘制”，技术模块与原文一致，不创造新实验指标或虚假的技术依赖。
5. 如展示 X2Real 相关性或 DISCOVERSE 真实数据，必须指向**原始研究、实验指标定义和来源**，且明确为**作者报告的结果**，不能写“本机已验证”。

## C. 页面落地：按信息功能而非“装饰”使用

| 页面区 | 主图 | 补充图 | 必须有的读者动作 |
|---|---|---|---|
| 首屏技术链 | 本包 pipeline SVG，可后续替换为更详细的技术剖面图 | DISCOVERSE System Overview 来源入口 | 点击采集/对象/资产/仿真段，查看方法与证据 |
| 可拆积木 | 本包 object-asset-layers SVG | ObjectGS 官方结果图；DIGS 边界图（使用前核实授权） | 看到对象与场景如何分离，跳转论文、代码、证据卡 |
| 多源成景 | 任务级资产形成图（可据 AffordCraft 原理自绘） | 本包 SimReady SVG；相关官方字段资料 | 区分资产生成、场景组装、物理校验 |
| 证据与实验 | 方法对比矩阵（结构化数据表，**不是装饰柱图**） | 有依据时使用 X2Real 作者相关性图 | 区分论文、开源、第三方、本机四种证据 |
| Agent 治理 | 默认不放大图 | 小型工作流可选 | 不影响上方技术研究阅读 |

### 卡片最小注释样式

- **原创示意：** `概念示意 · 原创绘制 · 不代表本机实验结果`
- **来自研究项目：** `研究方公开图 · 项目/作者名 · 原始链接 · 非本机结果`
- **本机结果：** `本机测试 · 数据集/任务 · 运行日期 · commit · 环境 · 指标定义`

图片和对应的方法、来源、状态应在同一屏或同一张卡片可达；不要全部放在页面最底部的笼统版权声明。

## D. 建议给 Grok bot 的立即执行任务

1. 使用 3 个 SVG 替换原网页显眼的“真实案例位·空”与纯七矩形流程图，全部注明概念示意；不要将概念图当成真实研究结果，也不要直接使用它们作为论文结果对比。
2. 为 ObjectGS、DISCOVERSE、AffordCraft、SimReady、X2Real、DIGS 建立真实来源条目（`image_id / section / project / source_url / rights_status / attribution / evidence_scope / target_zone`）；**权利未核验的不落盘，只做链接**。
3. 每区只用 1 张主图 + 少量证据小图，控制图片密度；图片至少要回答“对象是什么、方法改变了什么、验证了什么”中的一个具体问题。
4. 保留当前 issue #1/#5 的证据分类改进；修复 #8 指出的“设计话术外露、论文与本机效果混淆、移动端流程横向滚动”。
5. 对图片做一次 1440×900、390×844 实际渲染截图评审；必须检查 SVG 字体回退、色彩对比与小屏文字可读性。

**完成判断：** 技术背景读者只看图片与图注，就能区分重建对象、仿真资产、场景、验证阶段；任何表现得像“实验结果”的图都能一跳找到可信的实际证据。