/* ============================================================================
   POCUS CASES — APP LOGIC
   Hash-based router + renderers. No build step, no dependencies.
   ============================================================================ */

const app = document.getElementById("app");

const WAVEFORM_SVG = `
<svg class="waveform" viewBox="0 0 600 28" preserveAspectRatio="none">
  <path d="M0,14 L60,14 L72,4 L84,24 L96,14 L150,14 L162,6 L174,22 L186,14 L240,14
           L252,4 L264,24 L276,14 L330,14 L342,6 L354,22 L366,14 L420,14
           L432,4 L444,24 L456,14 L510,14 L522,6 L534,22 L546,14 L600,14"/>
</svg>`;

function esc(s){
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function findIndication(id){
  return DATA.indications.find(i => i.id === id);
}
function findCase(indId, caseId){
  const list = DATA.cases[indId] || [];
  return list.find(c => c.id === caseId);
}

/* ---------------------------------------------------------------------- */
/* ROUTER                                                                  */
/* ---------------------------------------------------------------------- */
function router(){
  const hash = window.location.hash.slice(1) || "/";
  const parts = hash.split("/").filter(Boolean);
  window.scrollTo(0,0);

  if(parts.length === 0){
    renderLanding();
  } else if(parts[0] === "indication" && parts[1]){
    renderIndication(parts[1]);
  } else if(parts[0] === "case" && parts[1] && parts[2]){
    renderCase(parts[1], parts[2]);
  } else {
    renderLanding();
  }
}
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

/* ---------------------------------------------------------------------- */
/* TOPBAR                                                                  */
/* ---------------------------------------------------------------------- */
function topbar(crumbs){
  const crumbsHtml = crumbs.map((c,i) => {
    const sep = i < crumbs.length - 1 ? `<span class="sep">/</span>` : "";
    if(c.href){
      return `<a href="${c.href}">${esc(c.label)}</a>${sep}`;
    }
    return `<span class="current">${esc(c.label)}</span>${sep}`;
  }).join("");

  return `
  <header class="topbar">
    <div class="wrap topbar-inner">
      <a href="#/" class="brand"><span class="dot"></span>POCUS Cases<small>Resident Curriculum</small></a>
      <nav class="crumbs">${crumbsHtml}</nav>
    </div>
  </header>`;
}

/* ---------------------------------------------------------------------- */
/* LANDING                                                                 */
/* ---------------------------------------------------------------------- */
function renderLanding(){
  const cards = DATA.indications.map((ind, i) => {
    const n = (DATA.cases[ind.id] || []).length;
    return `
    <a class="preset-card" href="#/indication/${ind.id}" style="--pc:${ind.accent}">
      <div class="idx">PRESET ${String(i+1).padStart(2,"0")} · ${n} CASE${n===1?"":"S"}</div>
      <h3>${esc(ind.name)}</h3>
      <div class="tagline">${esc(ind.tagline)}</div>
      <p>${esc(ind.blurb)}</p>
      <div class="go">OPEN PRESET &rarr;</div>
    </a>`;
  }).join("");

  app.innerHTML = `
    ${topbar([{label:"Presets"}])}
    <main>
      <div class="wrap">
        <section class="hero">
          <div class="hero-eyebrow">Point-of-Care Ultrasound</div>
          <h1>Learn POCUS the way you'll actually use it — one clinical case at a time.</h1>
          <p class="lede">Pick a chief complaint, work through the history and exam like a real consult, then scan every window yourself. Normal and abnormal findings, side by side, exactly as they'd appear on your machine.</p>
        </section>
        <div class="preset-grid">${cards}</div>
        ${WAVEFORM_SVG}
      </div>
    </main>
    <footer>POCUS CASES — FOR RESIDENT EDUCATION — NOT FOR CLINICAL USE</footer>
  `;
}

/* ---------------------------------------------------------------------- */
/* INDICATION (case list)                                                  */
/* ---------------------------------------------------------------------- */
function renderIndication(indId){
  const ind = findIndication(indId);
  if(!ind){ renderLanding(); return; }
  const cases = DATA.cases[indId] || [];

  const rows = cases.map((c,i) => `
    <a class="case-row" href="#/case/${indId}/${c.id}" style="--ind-accent:${ind.accent}">
      <div class="num">${String(i+1).padStart(2,"0")}</div>
      <div class="body">
        <h4>${esc(c.title)}</h4>
        <p>${esc(c.teaser)}</p>
      </div>
      <div class="arrow">VIEW CASE &rarr;</div>
    </a>`).join("") || `<p style="color:var(--text-dim)">No cases yet — add one in js/data.js.</p>`;

  app.innerHTML = `
    ${topbar([{label:"Presets", href:"#/"}, {label: ind.name}])}
    <main>
      <div class="wrap">
        <div class="indication-header" style="--ind-accent:${ind.accent}">
          <div class="tagline">${esc(ind.tagline)}</div>
          <h1>${esc(ind.name)}</h1>
          <p>${esc(ind.blurb)}</p>
        </div>
        <div class="case-list">${rows}</div>
      </div>
    </main>
    <footer>POCUS CASES — FOR RESIDENT EDUCATION — NOT FOR CLINICAL USE</footer>
  `;
}

/* ---------------------------------------------------------------------- */
/* CASE PAGE                                                                */
/* ---------------------------------------------------------------------- */
function renderCase(indId, caseId){
  const ind = findIndication(indId);
  const kase = findCase(indId, caseId);
  if(!ind || !kase){ renderIndication(indId || ""); return; }

  const vitalsHtml = Object.entries({
    HR: kase.vitals.hr, BP: kase.vitals.bp, RR: kase.vitals.rr,
    "SpO₂": kase.vitals.spo2, Temp: kase.vitals.temp
  }).map(([label,val]) => `
    <div class="vital">
      <div class="v-label">${esc(label)}</div>
      <div class="v-val">${esc(val)}</div>
    </div>`).join("");

  const labsHtml = kase.labs.map(l => `
    <tr>
      <td>${esc(l.name)}</td>
      <td>${esc(l.value)}${l.unit ? " " + esc(l.unit) : ""}</td>
      <td><span class="flag ${l.flag}">${l.flag.toUpperCase()}</span></td>
    </tr>`).join("");

  const systems = [
    { key: "cardiac", label: "Cardiac" },
    { key: "lung", label: "Lung" },
    { key: "abdomen", label: "Abdomen" }
  ];

  const tabsHtml = systems.map((s,i) => `
    <button class="tab-btn ${i===0?"active":""}" data-tab="${s.key}">${s.label}</button>
  `).join("");

  const panelsHtml = systems.map((s,i) => {
    const views = VIEW_META[s.key];
    const grid = views.map(v => {
      const finding = kase.findings[s.key][v.key];
      return `
      <button class="view-btn" data-system="${s.key}" data-view="${v.key}">
        <span class="vb-dot"></span>
        <div class="vb-name">${esc(v.name)}</div>
        <div class="vb-full">${esc(v.full)}</div>
      </button>`;
    }).join("");

    return `
    <div class="tab-panel ${i===0?"active":""}" data-panel="${s.key}">
      <div class="view-grid">${grid}</div>
      <div class="reveal-slot"></div>
    </div>`;
  }).join("");

  app.innerHTML = `
    ${topbar([
      {label:"Presets", href:"#/"},
      {label: ind.name, href:`#/indication/${indId}`},
      {label: kase.title}
    ])}
    <main>
      <div class="wrap">
        <div class="case-header" style="--ind-accent:${ind.accent}">
          <div class="tagline">${esc(ind.name)} · Case</div>
          <h1>${esc(kase.title)}</h1>
        </div>

        ${WAVEFORM_SVG}

        <div class="panel" style="--ind-accent:${ind.accent}">
          <div class="panel-head"><span class="step">1</span><h2>History of Present Illness</h2></div>
          <p class="hpi-text">${esc(kase.hpi)}</p>
        </div>

        <div class="panel" style="--ind-accent:${ind.accent}">
          <div class="panel-head"><span class="step">2</span><h2>Vitals &amp; Physical Exam</h2></div>
          <div class="vitals-grid">${vitalsHtml}</div>
          <p class="exam-text">${esc(kase.exam)}</p>
        </div>

        <div class="panel" style="--ind-accent:${ind.accent}">
          <div class="panel-head"><span class="step">3</span><h2>Relevant Labs</h2></div>
          <table class="labs-table">
            <thead><tr><th>Test</th><th>Result</th><th>Flag</th></tr></thead>
            <tbody>${labsHtml}</tbody>
          </table>
        </div>

        <div class="panel" style="--ind-accent:${ind.accent}">
          <div class="panel-head"><span class="step">4</span><h2>Ultrasound Findings</h2></div>
          <div class="tabs">${tabsHtml}</div>
          ${panelsHtml}
        </div>

        <div class="case-nav">
          <a class="btn" href="#/indication/${indId}">&larr; All ${esc(ind.name)} cases</a>
          <a class="btn" href="#/">All presets</a>
        </div>
      </div>
    </main>
    <footer>POCUS CASES — FOR RESIDENT EDUCATION — NOT FOR CLINICAL USE</footer>
  `;

  wireCaseInteractions(kase);
}

/* ---------------------------------------------------------------------- */
/* CASE PAGE INTERACTIONS: tabs + clickable view reveals                   */
/* ---------------------------------------------------------------------- */
function wireCaseInteractions(kase){
  // tab switching
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.tab;
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b === btn));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.dataset.panel === key));
    });
  });

  // view reveal
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const system = btn.dataset.system;
      const viewKey = btn.dataset.view;
      const finding = kase.findings[system][viewKey];
      const meta = VIEW_META[system].find(v => v.key === viewKey);
      const panel = btn.closest(".tab-panel");
      const slot = panel.querySelector(".reveal-slot");

      const alreadyOpen = btn.classList.contains("opened") && slot.dataset.open === viewKey;

      panel.querySelectorAll(".view-btn").forEach(b => b.classList.remove("opened"));

      if(alreadyOpen){
        slot.innerHTML = "";
        slot.dataset.open = "";
        return;
      }

      btn.classList.add("opened");
      slot.dataset.open = viewKey;

      const stageInner = finding.gif
        ? `<img src="${esc(finding.gif)}" alt="${esc(meta.full)} clip">`
        : `<div class="clip-placeholder"><div class="ph-icon">▮▮▮</div>NO CLIP LOADED<br>${esc(finding.label)}</div>`;

      slot.innerHTML = `
        <div class="reveal">
          <div class="reveal-head">
            <h4>${esc(meta.full)}</h4>
            <div style="display:flex; align-items:center; gap:10px;">
              <span class="badge ${finding.normal ? "normal" : "abnormal"}">${finding.normal ? "NORMAL" : "ABNORMAL"}</span>
              <button class="close-btn" aria-label="Close">&times;</button>
            </div>
          </div>
          <div class="clip-stage">
            ${stageInner}
            <div class="sweep"></div>
          </div>
          <div class="reveal-body">
            <strong>${esc(finding.label)}</strong>
            <p class="interp">${esc(finding.interpretation)}</p>
          </div>
        </div>`;

      slot.querySelector(".close-btn").addEventListener("click", () => {
        slot.innerHTML = "";
        slot.dataset.open = "";
        btn.classList.remove("opened");
      });

      slot.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}
