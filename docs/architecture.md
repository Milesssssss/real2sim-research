# 架构

```
用户
  └─ 刘亦菲（编排超脑）
        ├─ 沈括｜情报矿工  → A/B 回传（proposition-mine-return）
        ├─ 达摩｜RSI审计   → 慢环 ≤3 提案/周
        ├─ Pages（交互）   → 523c7b67 / 9acf96c1 / 6934fcdb
        └─ GitHub 本库     → 持久落库
```

工作流（每条命题共用）：

命题 → 诊断(六步) → B卡 → 采矿(仅A/B) → 核链(URL+指标) → 并网(Page+本库) → 开放问题 → 再诊断

并行：RSI 快环（task skill）+ 慢环（meta / harness）。
