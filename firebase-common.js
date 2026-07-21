:root {
  --bg: #080b11;
  --surface: #10151f;
  --surface-2: #151c28;
  --text: #f5f7fb;
  --muted: #a7b0c0;
  --line: rgba(255,255,255,.10);
  --blue: #1fa3ff;
  --purple: #9d65ff;
  --white-accent: #e8edf5;
  --danger: #ff667a;
  --success: #51d995;
  --warning: #ffc857;
  --radius: 18px;
  --shadow: 0 22px 70px rgba(0,0,0,.35);
  --max: 1160px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 15% 0%, rgba(31,163,255,.10), transparent 32%),
    radial-gradient(circle at 85% 10%, rgba(157,101,255,.09), transparent 28%);
  z-index: -1;
}
img { max-width: 100%; display: block; }
a { color: inherit; }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }

.container { width: min(var(--max), calc(100% - 40px)); margin-inline: auto; }
.skip-link { position: absolute; left: -999px; }
.skip-link:focus { left: 16px; top: 16px; z-index: 999; padding: 10px 14px; background: #fff; color: #000; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(8,11,17,.82);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
}
.nav {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand { display: inline-flex; align-items: center; gap: 12px; text-decoration: none; font-weight: 800; letter-spacing: .08em; }
.brand img { width: 48px; height: 48px; object-fit: contain; }
.nav-links { display: flex; align-items: center; gap: 26px; }
.nav-links a { text-decoration: none; color: var(--muted); font-weight: 650; font-size: .95rem; }
.nav-links a:hover, .nav-links a[aria-current="page"] { color: var(--text); }
.nav-cta { padding: 10px 16px; border: 1px solid rgba(31,163,255,.45); border-radius: 999px; color: var(--text) !important; background: rgba(31,163,255,.10); }
.menu-btn { display: none; border: 0; background: transparent; color: var(--text); font-size: 1.6rem; }

.hero { min-height: 76vh; display: grid; align-items: center; position: relative; overflow: hidden; }
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(8,11,17,.98) 0%, rgba(8,11,17,.80) 47%, rgba(8,11,17,.28) 100%), url('../images/hero.jpg') center/cover no-repeat;
  z-index: -1;
}
.hero-grid { display: grid; grid-template-columns: minmax(0, 650px) 1fr; gap: 40px; padding: 110px 0 90px; }
.eyebrow { color: #7ecbff; text-transform: uppercase; letter-spacing: .18em; font-size: .78rem; font-weight: 800; }
h1, h2, h3 { line-height: 1.12; margin: 0 0 18px; }
h1 { font-size: clamp(3rem, 7vw, 6.2rem); letter-spacing: -.055em; }
h2 { font-size: clamp(2rem, 4vw, 3.4rem); letter-spacing: -.035em; }
h3 { font-size: 1.32rem; }
.lead { font-size: clamp(1.05rem, 2vw, 1.3rem); color: #d4dae5; max-width: 620px; }
.hero-actions, .button-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  border: 1px solid transparent;
  text-decoration: none;
  font-weight: 800;
}
.btn-primary { background: linear-gradient(110deg, var(--blue), var(--purple)); color: white; box-shadow: 0 14px 35px rgba(31,163,255,.18); }
.btn-secondary { border-color: var(--line); background: rgba(255,255,255,.05); color: white; }
.btn-danger { border-color: rgba(255,102,122,.35); background: rgba(255,102,122,.10); color: #ffd8de; }
.btn-small { min-height: 38px; padding: 0 14px; font-size: .9rem; }

.section { padding: 100px 0; }
.section-tight { padding: 72px 0; }
.section-head { max-width: 700px; margin-bottom: 44px; }
.section-head p, .muted { color: var(--muted); }

.about-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 70px; align-items: center; }
.about-card { border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); }
.about-copy p { color: #c2cad7; }
.facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 28px; }
.fact { padding: 18px; border: 1px solid var(--line); border-radius: 14px; background: rgba(255,255,255,.025); }
.fact strong { display: block; font-size: 1.35rem; }
.fact span { color: var(--muted); font-size: .88rem; }

.package-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.package-card { position: relative; overflow: hidden; border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); min-height: 500px; display: flex; flex-direction: column; }
.package-card img { height: 235px; width: 100%; object-fit: cover; }
.package-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
.package-body p { color: var(--muted); }
.package-body ul { margin: 10px 0 24px; padding-left: 18px; color: #d0d6e1; }
.package-body .btn { margin-top: auto; }
.package-label { display: inline-flex; width: fit-content; padding: 5px 10px; border-radius: 999px; font-size: .76rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 12px; }
.label-blue { background: rgba(31,163,255,.14); color: #72c6ff; }
.label-white { background: rgba(232,237,245,.12); color: #fff; }
.label-purple { background: rgba(157,101,255,.14); color: #c4a2ff; }

.callout { display: grid; grid-template-columns: 1.2fr .8fr; gap: 40px; align-items: center; padding: 42px; border-radius: 24px; border: 1px solid rgba(31,163,255,.24); background: linear-gradient(115deg, rgba(31,163,255,.09), rgba(157,101,255,.08)); }
.callout p { color: #cad1de; margin-bottom: 0; }
.callout .button-row { justify-content: flex-end; margin-top: 0; }

.contact-layout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 40px; align-items: start; }
.contact-info { position: sticky; top: 110px; }
.contact-info p { color: var(--muted); }
.note { padding: 18px; border-left: 3px solid var(--blue); background: rgba(31,163,255,.07); border-radius: 0 12px 12px 0; color: #d7e9f7; }
.form-card { border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); padding: 28px; box-shadow: var(--shadow); }
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.form-group { display: grid; gap: 8px; }
.form-group.full { grid-column: 1 / -1; }
label { font-weight: 750; font-size: .92rem; }
input, select, textarea {
  width: 100%;
  color: var(--text);
  background: #0a0f17;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 13px 14px;
  outline: none;
}
input:focus, select:focus, textarea:focus { border-color: rgba(31,163,255,.65); box-shadow: 0 0 0 3px rgba(31,163,255,.10); }
textarea { min-height: 130px; resize: vertical; }
fieldset { border: 0; padding: 0; margin: 0; }
.choice-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.choice { position: relative; }
.choice input { position: absolute; opacity: 0; pointer-events: none; }
.choice label { display: block; padding: 14px; border: 1px solid var(--line); border-radius: 12px; background: #0a0f17; cursor: pointer; text-align: center; }
.choice input:checked + label { border-color: var(--blue); background: rgba(31,163,255,.11); }
.conditional { display: none; grid-column: 1 / -1; }
.conditional.is-visible { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
.checkbox-line { display: flex; gap: 10px; align-items: flex-start; }
.checkbox-line input { width: auto; margin-top: 4px; }
.form-status { margin-top: 14px; min-height: 24px; color: var(--muted); }
.form-status.success { color: var(--success); }
.form-status.error { color: var(--danger); }

.subpage-hero { padding: 92px 0 55px; border-bottom: 1px solid var(--line); }
.subpage-hero p { max-width: 720px; color: var(--muted); }
.panel { border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); padding: 26px; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.hidden { display: none !important; }

.wish-shell { display: grid; grid-template-columns: .8fr 1.2fr; gap: 24px; align-items: start; }
.wish-list { display: grid; gap: 12px; }
.wish-item { padding: 18px; border: 1px solid var(--line); border-radius: 14px; background: var(--surface); display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: center; }
.wish-item h3 { margin: 0 0 4px; font-size: 1.05rem; }
.wish-meta { color: var(--muted); font-size: .88rem; }
.priority-badge { display: inline-flex; align-items: center; min-width: 34px; justify-content: center; padding: 4px 8px; border-radius: 999px; background: rgba(157,101,255,.14); color: #d8c3ff; font-weight: 800; }
.like-btn { min-width: 74px; border: 1px solid var(--line); border-radius: 999px; background: rgba(255,255,255,.04); color: var(--text); padding: 8px 12px; }
.like-btn:disabled { opacity: .55; cursor: not-allowed; }
.event-banner { margin-bottom: 18px; padding: 14px 16px; border-radius: 12px; background: rgba(81,217,149,.08); border: 1px solid rgba(81,217,149,.22); color: #d7ffea; }
.event-banner.error { background: rgba(255,102,122,.08); border-color: rgba(255,102,122,.22); color: #ffd8de; }

.admin-layout { display: grid; grid-template-columns: 340px 1fr; gap: 24px; align-items: start; }
.event-list { display: grid; gap: 10px; }
.event-button { text-align: left; width: 100%; padding: 13px; border: 1px solid var(--line); border-radius: 12px; background: #0a0f17; color: var(--text); }
.event-button.active { border-color: var(--blue); background: rgba(31,163,255,.10); }
.admin-wish { display: grid; grid-template-columns: 1fr auto; gap: 16px; padding: 18px; border-bottom: 1px solid var(--line); }
.admin-wish:last-child { border-bottom: 0; }
.admin-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; }
.status-pill { display: inline-flex; padding: 4px 9px; border-radius: 999px; font-size: .76rem; font-weight: 800; background: rgba(255,200,87,.12); color: #ffe1a0; }
.status-pill.played { background: rgba(81,217,149,.12); color: #bff8d6; }

.site-footer { border-top: 1px solid var(--line); padding: 34px 0; color: var(--muted); }
.footer-inner { display: flex; justify-content: space-between; gap: 24px; align-items: center; }
.footer-links { display: flex; flex-wrap: wrap; gap: 18px; }
.footer-links a { text-decoration: none; }

@media (max-width: 900px) {
  .menu-btn { display: block; }
  .nav-links { position: absolute; left: 20px; right: 20px; top: 78px; display: none; flex-direction: column; align-items: stretch; padding: 18px; border: 1px solid var(--line); border-radius: 16px; background: #0b1018; box-shadow: var(--shadow); }
  .nav-links.open { display: flex; }
  .hero-grid { grid-template-columns: 1fr; }
  .about-grid, .contact-layout, .callout, .wish-shell, .admin-layout { grid-template-columns: 1fr; }
  .package-grid { grid-template-columns: 1fr; }
  .package-card { min-height: 0; }
  .about-card { max-width: 600px; }
  .contact-info { position: static; }
  .callout .button-row { justify-content: flex-start; }
  .facts { grid-template-columns: 1fr; }
}

@media (max-width: 620px) {
  .container { width: min(var(--max), calc(100% - 24px)); }
  .section { padding: 74px 0; }
  .hero-grid { padding: 84px 0 72px; }
  h1 { font-size: clamp(2.65rem, 16vw, 4rem); }
  .form-grid, .conditional.is-visible, .two-col { grid-template-columns: 1fr; }
  .choice-row { grid-template-columns: 1fr; }
  .form-card, .panel, .callout { padding: 20px; }
  .footer-inner { align-items: flex-start; flex-direction: column; }
  .wish-item, .admin-wish { grid-template-columns: 1fr; }
  .admin-actions { justify-content: flex-start; }
}
