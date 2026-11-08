# ObjectGS 只链贴板 · 自测 TC1–TC7

- 基线：main `605f064`
- 分支：`objectgs-link-only`
- 门禁：`/workspace/viz-research/plans/objectgs-link-only-tc.md`
- 裁决：`issue8-ObjectGS逐张裁决/rows.md` 行1
- 不下二进制：无 ObjectGS png/jpg/webp 入库

| ID | 结果 | 证据摘要 |
|---|---|---|
| TC1 | 绿 | `#zone-assets` 旁注 `<a href>` → `ovs_lerfmask.jpg` + 项目页根；`target=_blank` `rel=noopener noreferrer` |
| TC2 | 绿 | 徽章/caption 含「非本机」+「权利 pending」+「禁托管」 |
| TC3 | 绿 | `git diff` assets 无 objectgs/ovs_/lerfmask 二进制；无 `<img>` 拉外链 jpg |
| TC4 | 绿 | `va-gen-case-objectgs-ext`：class=ext · pending · host_allowed=false · file_path 占位句 · source_url=主推 jpg |
| TC5 | 绿 | 三 concept `data-slot` + SVG 主位仍在；ObjectGS 为 `data-slot-aside` 辅链 |
| TC6 | 绿 | 决策台「下一项关键实验」「本周变化」无 ObjectGS/ovs_lerfmask |
| TC7 | 绿 | `.ext-link-aside` 无 min-width；links flex-wrap + overflow-wrap；未引入大图容器 |

硬红 TC3/4/5/6：无一命中。
