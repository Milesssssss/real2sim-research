/* Real-to-Sim board node drawer · issue #8 reader workbench V2
 * Links row: card/paper/github/project_page — only real https → <a>
 * Four tags: map evidence_tags full names → UI short names; no silent green
 * Retired: plain-text source path dump (issue #5)
 */
(function () {
  "use strict";

  var CARD_BLOB = "https://github.com/Milesssssss/real2sim-research/blob/main/knowledge/cards/";

  /** @type {Record<string, {title:string, fields:Record<string,string>, tags:Record<string,string>, links:Record<string,{label:string,href:string}|null>}>} */
  var NODES = {
    "真实数据": {
      title: "① 输入实体 · 真实数据",
      fields: {
        "目标": "为对象级建模与场景组织提供可标注、可追溯的真实输入（共用入口）",
        "输入": "待定义（统一「输入清单」字段待定义）",
        "输出": "对象/像素标注、多源材料（文本/图/视频/点云）供下游支路",
        "当前方案": "可拆积木与多源成景共用入口；见 board-intro 白话",
        "关键证据": "待定义（无单一方法卡；多卡输入侧）",
        "未解决问题": "统一「输入清单」字段待定义"
      },
      tags: { "外部证据": "无记录", "作者/第三方复现": "无记录", "本机实验": "无记录", "工程集成": "无记录" },
      links: { card: null, paper: null, github: null, project_page: null }
    },
    "对象级建模": {
      title: "② 对象建模 · 可拆积木",
      fields: {
        "目标": "对象/像素标注 → 可编辑可复用、可组合进仿真的对象级 GS 资产",
        "输入": "对象/像素标注",
        "输出": "对象级 GS（边界保真）",
        "当前方案": "假设：ObjectGS（对象 densify）+ DIGS（training-free 边界保真）",
        "关键证据": "ObjectGS、DIGS 已并网（见 knowledge/cards/）；本机 densify/边界协议字段待定义",
        "未解决问题": "本机 densify/边界协议字段待定义"
      },
      tags: { "外部证据": "待补", "作者/第三方复现": "无记录", "本机实验": "无记录", "工程集成": "无记录" },
      links: {
        card: { label: "card/ObjectGS", href: CARD_BLOB + "ObjectGS.md" },
        paper: { label: "论文 · arXiv:2507.15454", href: "https://arxiv.org/abs/2507.15454" },
        github: null,
        project_page: null
      }
    },
    "仿真资产": {
      title: "③ 仿真资产 · 可拆积木",
      fields: {
        "目标": "可编辑可复用、可组合进仿真的对象级 GS 资产",
        "输入": "对象/像素标注 · 对象级建模输出",
        "输出": "mesh / 凸碰撞+惯量 · 可进 MuJoCo/Isaac",
        "当前方案": "ObjectGS + DIGS → DISCOVERSE（假设栈）；平面 Flats∥AtlasGS；导出 Scalable Real2Sim",
        "关键证据": "DISCOVERSE 卡（真机 ACT/DP 测量·外部）；ObjectGS / DIGS / AtlasGS 已并网",
        "未解决问题": "Isaac 侧对象级可组合真机对照仍缺；Flats∥AtlasGS 本机同向"
      },
      tags: { "外部证据": "有", "作者/第三方复现": "有", "本机实验": "无记录", "工程集成": "无记录" },
      links: {
        card: { label: "card/DISCOVERSE", href: CARD_BLOB + "DISCOVERSE.md" },
        paper: { label: "论文 · arXiv:2507.21981", href: "https://arxiv.org/abs/2507.21981" },
        github: null,
        project_page: null
      }
    },
    "场景组织": {
      title: "④ 场景组织 · 多源成景",
      fields: {
        "目标": "多源输入 → 检索适配 + 约束摆放 → 过门禁的可仿真场景",
        "输入": "文本/图/视频/点云等",
        "输出": "约束摆放后的候选场景",
        "当前方案": "AffordCraft → LayoutVLM / Steerable（假设；默认栈维持·路线决策）",
        "关键证据": "AffordCraft / LayoutVLM / Steerable / EmbodiedGen-V2 已并网",
        "未解决问题": "场景×资产单一联合协议仍缺"
      },
      tags: { "外部证据": "待补", "作者/第三方复现": "无记录", "本机实验": "无记录", "工程集成": "无记录" },
      links: {
        card: { label: "card/AffordCraft", href: CARD_BLOB + "AffordCraft.md" },
        paper: { label: "论文 · arXiv:2610.06643", href: "https://arxiv.org/abs/2610.06643" },
        github: null,
        project_page: null
      }
    },
    "仿真评估": {
      title: "⑤ 仿真评估 · 多源成景",
      fields: {
        "目标": "过门禁的可仿真场景（资产级 + 场景级接受）",
        "输入": "候选场景 + 元数据",
        "输出": "门禁通过/失败记录；可仿真场景",
        "当前方案": "门禁：SimReady FET + SimReadyBench（规范/工具轨）；场景级 X2Real 等",
        "关键证据": "SimReady-Foundation / SimReadyBench（规范/工具）；X2Real 场景级相关度（测量·外部）",
        "未解决问题": "库规模→gate-pass slope 仍缺；AffordCraft G ↔ FET 映射表"
      },
      tags: { "外部证据": "无记录", "作者/第三方复现": "有", "本机实验": "无记录", "工程集成": "有" },
      links: {
        card: { label: "card/SimReady-Foundation", href: CARD_BLOB + "SimReady-Foundation.md" },
        paper: null,
        github: { label: "GitHub", href: "https://github.com/NVIDIA/simready-foundation" },
        project_page: null
      }
    },
    "真机对照": {
      title: "⑥ 真机对照",
      fields: {
        "目标": "仿真资产/场景与真机结果可对照、可辩护",
        "输入": "仿真侧资产或场景 + 真机协议",
        "输出": "真机对照记录（测量）",
        "当前方案": "可拆积木：DISCOVERSE MuJoCo 外部有；多源成景：X2Real 等场景级相关度",
        "关键证据": "DISCOVERSE（MuJoCo ACT/DP 测量·外部）；X2Real（progress/success r 测量·外部）",
        "未解决问题": "Isaac 侧对象级可组合真机对照仍缺（关键缺口）"
      },
      tags: { "外部证据": "有", "作者/第三方复现": "有", "本机实验": "无记录", "工程集成": "无记录" },
      links: {
        card: { label: "card/DISCOVERSE", href: CARD_BLOB + "DISCOVERSE.md" },
        paper: { label: "论文 · arXiv:2507.21981", href: "https://arxiv.org/abs/2507.21981" },
        github: null,
        project_page: null
      }
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
      tags: { "外部证据": "无记录", "作者/第三方复现": "无记录", "本机实验": "无记录", "工程集成": "待定" },
      links: { card: null, paper: null, github: null, project_page: null }
    }
  };

  var KEYS = ["目标", "输入", "输出", "当前方案", "关键证据", "未解决问题"];
  var TAG_ORDER = ["外部证据", "作者/第三方复现", "本机实验", "工程集成"];
  var LINK_ORDER = ["card", "paper", "github", "project_page"];

  function isHttps(href) {
    return typeof href === "string" && /^https:\/\//i.test(href);
  }

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

  function renderTags(container, tags) {
    if (!container) return;
    container.innerHTML = "";
    container.className = "etag-row";
    container.setAttribute("aria-label", "证据四标签");
    TAG_ORDER.forEach(function (name) {
      var state = (tags && tags[name]) || "无记录";
      var el = document.createElement("span");
      el.className = "etag";
      if (state === "有") el.classList.add("on");
      else if (state === "待定" || state === "待补") el.classList.add("mid");
      else el.classList.add("off");
      el.textContent = name + " · " + state;
      container.appendChild(el);
    });
  }

  function renderLinks(container, links) {
    if (!container) return;
    container.innerHTML = "";
    container.className = "drawer-links";
    container.setAttribute("aria-label", "一跳链接");
    var any = false;
    LINK_ORDER.forEach(function (slot) {
      var item = links && links[slot];
      if (item && isHttps(item.href)) {
        var a = document.createElement("a");
        a.href = item.href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = item.label || slot;
        container.appendChild(a);
        any = true;
      } else if (item === null && (slot === "card" || slot === "paper" || slot === "github")) {
        /* expected but missing: show 待补链接 as plain text, never <a href="#"> */
        /* Only show pending when node has at least one other real link (has primary card context) */
      }
    });
    /* If node has some links but missing expected github/paper when card exists — show pending for null slots that are commonly expected */
    if (links && links.card && isHttps(links.card.href)) {
      ["paper", "github"].forEach(function (slot) {
        if (links[slot] === null) {
          /* already skipped — optional pending */
          var hasSlot = false;
          Array.prototype.forEach.call(container.querySelectorAll("a"), function () { hasSlot = true; });
        }
      });
    }
    if (!any) {
      var span = document.createElement("span");
      span.className = "link-pending";
      span.textContent = "待补链接";
      container.appendChild(span);
    }
  }

  function openNode(id) {
    var data = NODES[id];
    if (!data) return;

    var panel = document.getElementById("drawer-panel");
    var title = document.getElementById("drawer-title");
    var fields = document.getElementById("drawer-fields");
    var tagsEl = document.getElementById("drawer-tags");
    var linksEl = document.getElementById("drawer-links");
    var empty = document.getElementById("drawer-empty");

    if (empty) empty.hidden = true;
    if (panel) panel.hidden = false;
    if (title) title.textContent = data.title;
    if (fields) renderFields(fields, data.fields);
    if (tagsEl) renderTags(tagsEl, data.tags);
    if (linksEl) renderLinks(linksEl, data.links);

    document.querySelectorAll(".node-btn, .stepper .body").forEach(function (el) {
      var nid = el.getAttribute("data-node");
      var active = nid === id;
      el.setAttribute("aria-pressed", active ? "true" : "false");
      el.classList.toggle("is-active", active);
    });

    var dlg = document.getElementById("drawer-dialog");
    if (dlg && window.matchMedia && window.matchMedia("(max-width: 980px)").matches) {
      var dt = dlg.querySelector("[data-dlg-title]");
      var df = dlg.querySelector("[data-dlg-fields]");
      var dtags = dlg.querySelector("[data-dlg-tags]");
      var dlinks = dlg.querySelector("[data-dlg-links]");
      if (dt) dt.textContent = data.title;
      if (df) renderFields(df, data.fields);
      if (dtags) renderTags(dtags, data.tags);
      if (dlinks) renderLinks(dlinks, data.links);
      if (typeof dlg.showModal === "function" && !dlg.open) dlg.showModal();
    }
  }

  function closeDrawer() {
    var panel = document.getElementById("drawer-panel");
    var empty = document.getElementById("drawer-empty");
    if (panel) panel.hidden = true;
    if (empty) empty.hidden = false;
    document.querySelectorAll(".node-btn, .stepper .body").forEach(function (el) {
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
    document.querySelectorAll(".stepper .body[data-node]").forEach(function (el) {
      el.addEventListener("click", function () {
        openNode(el.getAttribute("data-node"));
      });
    });
    var closeBtn = document.getElementById("drawer-close");
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    var dlgClose = document.getElementById("dlg-close");
    if (dlgClose) dlgClose.addEventListener("click", closeDrawer);

    openNode("仿真资产");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
