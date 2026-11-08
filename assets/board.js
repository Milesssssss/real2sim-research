/* Real-to-Sim board node drawer · issue #5 · read-only mirror of propositions/cards */
(function () {
  "use strict";

  /** @type {Record<string, {title:string, fields:Record<string,string>, src:string}>} */
  var NODES = {
    "真实数据": {
      title: "① 真实数据",
      fields: {
        "目标": "为对象级建模与场景组织提供可标注、可追溯的真实输入（共用入口）",
        "输入": "待定义（统一「输入清单」字段待定义）",
        "输出": "对象/像素标注、多源材料（文本/图/视频/点云）供下游支路",
        "当前方案": "可拆积木与多源成景共用入口；见 board-intro 白话",
        "关键证据": "待定义（无单一方法卡；多卡输入侧）",
        "未解决问题": "统一「输入清单」字段待定义"
      },
      src: "映射：issue5-node-mapping §1 · board-intro.md"
    },
    "对象级建模": {
      title: "② 对象级建模 · 可拆积木",
      fields: {
        "目标": "对象/像素标注 → 可编辑可复用、可组合进仿真的对象级 GS 资产",
        "输入": "对象/像素标注",
        "输出": "对象级 GS（边界保真）",
        "当前方案": "假设：ObjectGS（对象 densify）+ DIGS（training-free 边界保真）",
        "关键证据": "ObjectGS、DIGS 已并网（见 knowledge/cards/）；本机 densify/边界协议字段待定义",
        "未解决问题": "本机 densify/边界协议字段待定义"
      },
      src: "propositions/可拆积木.md · cards/ObjectGS.md · DIGS.md"
    },
    "仿真资产": {
      title: "③ 仿真资产 · 可拆积木",
      fields: {
        "目标": "可编辑可复用、可组合进仿真的对象级 GS 资产",
        "输入": "对象/像素标注 · 对象级建模输出",
        "输出": "mesh / 凸碰撞+惯量 · 可进 MuJoCo/Isaac",
        "当前方案": "ObjectGS + DIGS → DISCOVERSE；平面 Flats∥AtlasGS；删除 RQS∥Inpaint360GS；导出 Scalable Real2Sim",
        "关键证据": "DISCOVERSE 卡（真机 ACT/DP 测量）；ObjectGS / DIGS / AtlasGS 已并网",
        "未解决问题": "Isaac 侧对象级可组合真机对照仍缺；Flats∥AtlasGS 本机同向；RQS∥Inpaint360GS 分轴 checklist"
      },
      src: "propositions/可拆积木.md · cards/DISCOVERSE.md"
    },
    "场景组织": {
      title: "④ 场景组织 · 多源成景",
      fields: {
        "目标": "多源输入 → 检索适配 + 约束摆放 → 过门禁的可仿真场景",
        "输入": "文本/图/视频/点云等",
        "输出": "约束摆放后的候选场景",
        "当前方案": "AffordCraft → LayoutVLM / Steerable（假设；默认栈不换）",
        "关键证据": "AffordCraft / LayoutVLM / Steerable / EmbodiedGen-V2 已并网",
        "未解决问题": "场景×资产单一联合协议仍缺"
      },
      src: "propositions/多源成景.md · cards/AffordCraft.md"
    },
    "仿真评估": {
      title: "⑤ 仿真评估 · 多源成景",
      fields: {
        "目标": "过门禁的可仿真场景（资产级 + 场景级接受）",
        "输入": "候选场景 + 元数据",
        "输出": "门禁通过/失败记录；可仿真场景",
        "当前方案": "门禁：SimReady FET + SimReadyBench（规范/工具轨）；场景级 SimFoundry↔YUBI↔Measuring↔X2Real↔R2S-Eval",
        "关键证据": "SimReady-Foundation / SimReadyBench（规范/工具）；X2Real 场景级相关度（测量）",
        "未解决问题": "库规模→gate-pass slope 仍缺；AffordCraft G ↔ FET 映射表"
      },
      src: "propositions/多源成景.md · evidence-grades.md · cards/SimReady-Foundation.md"
    },
    "真机对照": {
      title: "⑥ 真机对照",
      fields: {
        "目标": "仿真资产/场景与真机结果可对照、可辩护",
        "输入": "仿真侧资产或场景 + 真机协议",
        "输出": "真机对照记录（测量）",
        "当前方案": "可拆积木：DISCOVERSE MuJoCo 已有；多源成景：X2Real 等场景级相关度",
        "关键证据": "DISCOVERSE（MuJoCo ACT/DP 测量）；X2Real（progress/success r 测量）",
        "未解决问题": "Isaac 侧对象级可组合真机对照仍缺（关键缺口）"
      },
      src: "cards/DISCOVERSE.md · X2Real.md · open-questions.md"
    },
    "反馈": {
      title: "⑦ 反馈 · 判官台 / 不冻栈",
      fields: {
        "目标": "对照与开放问题回流选型与技能进化",
        "输入": "对照结果 + open-questions + stage-win 近失",
        "输出": "下一采矿窗 / 慢环提案 / 看板更新",
        "当前方案": "判官台总控采信；不冻栈 RSI 快环+慢环；dashboard-sync",
        "关键证据": "evidence-grades / maturity 口径已并网；技能清单见不冻栈命题",
        "未解决问题": "反馈写入看板的自动化字段待定义"
      },
      src: "propositions/判官台.md · 不冻栈.md · open-questions.md"
    }
  };

  var KEYS = ["目标", "输入", "输出", "当前方案", "关键证据", "未解决问题"];

  function renderFields(container, fields) {
    container.innerHTML = "";
    KEYS.forEach(function (k) {
      var row = document.createElement("div");
      row.className = "fl";
      var b = document.createElement("b");
      b.textContent = k;
      var s = document.createElement("span");
      s.textContent = fields[k] || "待定义";
      row.appendChild(b);
      row.appendChild(s);
      container.appendChild(row);
    });
  }

  function openNode(id) {
    var data = NODES[id];
    if (!data) return;

    var panel = document.getElementById("drawer-panel");
    var title = document.getElementById("drawer-title");
    var fields = document.getElementById("drawer-fields");
    var src = document.getElementById("drawer-src");
    var empty = document.getElementById("drawer-empty");

    if (empty) empty.hidden = true;
    if (panel) panel.hidden = false;
    if (title) title.textContent = data.title;
    if (fields) renderFields(fields, data.fields);
    if (src) src.textContent = "真源：" + data.src;

    document.querySelectorAll(".node-btn").forEach(function (el) {
      var active = el.getAttribute("data-node") === id;
      el.setAttribute("aria-pressed", active ? "true" : "false");
      el.classList.toggle("is-active", active);
    });

    var dlg = document.getElementById("drawer-dialog");
    if (dlg && window.matchMedia && window.matchMedia("(max-width: 980px)").matches) {
      var dt = dlg.querySelector("[data-dlg-title]");
      var df = dlg.querySelector("[data-dlg-fields]");
      var ds = dlg.querySelector("[data-dlg-src]");
      if (dt) dt.textContent = data.title;
      if (df) renderFields(df, data.fields);
      if (ds) ds.textContent = "真源：" + data.src;
      if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
    }
  }

  function closeDrawer() {
    var panel = document.getElementById("drawer-panel");
    var empty = document.getElementById("drawer-empty");
    if (panel) panel.hidden = true;
    if (empty) empty.hidden = false;
    document.querySelectorAll(".node-btn").forEach(function (el) {
      el.setAttribute("aria-pressed", "false");
      el.classList.remove("is-active");
    });
    var dlg = document.getElementById("drawer-dialog");
    if (dlg && dlg.open) dlg.close();
  }

  function onReady() {
    document.querySelectorAll(".node-btn").forEach(function (el) {
      el.addEventListener("click", function () {
        openNode(el.getAttribute("data-node"));
      });
      el.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          openNode(el.getAttribute("data-node"));
        }
      });
    });
    var closeBtn = document.getElementById("drawer-close");
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    var dlgClose = document.getElementById("dlg-close");
    if (dlgClose) dlgClose.addEventListener("click", closeDrawer);

    // TC3: ≥1 node openable — open 仿真资产 by default on load
    openNode("仿真资产");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
