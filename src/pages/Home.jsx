import { useState, useEffect } from "react";

// ── BRAND TOKENS ──────────────────────────────────────────────────────────────
const BLUE      = "#0096d6";
const BLUE_DARK = "#007ab5";
const BLUE_DIM  = "#005f8c";

const FONT_LIGHT = "https://base44.app/api/apps/69e38d2f4fb44f17c106a5f5/files/mp/public/69e38d2f4fb44f17c106a5f5/ea7293b47_ffd74e276_Seravek-Light.ttf";
const FONT_REG   = "https://base44.app/api/apps/69e38d2f4fb44f17c106a5f5/files/mp/public/69e38d2f4fb44f17c106a5f5/bcf15aa27_c0421a372_Seravek.ttf";
const FONT_BOLD  = "https://base44.app/api/apps/69e38d2f4fb44f17c106a5f5/files/mp/public/69e38d2f4fb44f17c106a5f5/19ae82a19_491670945_Seravek-Bold.ttf";

// ── THEME TOKENS ──────────────────────────────────────────────────────────────
const LIGHT = {
  bg:          "#ffffff",
  bgSub:       "#f7f8fa",
  bgCard:      "#ffffff",
  bgMuted:     "#f0f4f7",
  border:      "rgba(69,85,96,0.11)",
  borderStrong:"rgba(69,85,96,0.2)",
  text:        "#1a2530",
  textMid:     "#455560",
  textMuted:   "#6b7a84",
  textFaint:   "#9aaab4",
  navBg:       "rgba(255,255,255,0.92)",
  shadow:      "0 2px 24px rgba(0,0,0,0.06)",
  shadowHover: "0 12px 48px rgba(0,0,0,0.10)",
  heroText:    "#ffffff",
  statsText:   "#ffffff",
  darkSection: "#1a2530",
  darkText:    "rgba(255,255,255,0.55)",
  slashOpacity: 0.06,
  inputBg:     "#ffffff",
  inputBorder: "#d4dce2",
  successBg:   "#eef8fd",
};

const DARK = {
  bg:          "#0f1419",
  bgSub:       "#161d24",
  bgCard:      "#1c2530",
  bgMuted:     "#1c2530",
  border:      "rgba(255,255,255,0.08)",
  borderStrong:"rgba(255,255,255,0.15)",
  text:        "#e8edf2",
  textMid:     "#9db0bc",
  textMuted:   "#6e8796",
  textFaint:   "#4a6070",
  navBg:       "rgba(15,20,25,0.94)",
  shadow:      "0 2px 24px rgba(0,0,0,0.35)",
  shadowHover: "0 12px 48px rgba(0,0,0,0.45)",
  heroText:    "#ffffff",
  statsText:   "#ffffff",
  darkSection: "#0a0e12",
  darkText:    "rgba(255,255,255,0.45)",
  slashOpacity: 0.04,
  inputBg:     "#1c2530",
  inputBorder: "rgba(255,255,255,0.12)",
  successBg:   "rgba(0,150,214,0.1)",
};

// ── GLOBAL CSS ────────────────────────────────────────────────────────────────
const GlobalStyles = ({ dark }) => {
  const t = dark ? DARK : LIGHT;
  return (
    <style>{`
      @font-face {
        font-family: 'Seravek';
        src: url('${FONT_LIGHT}') format('truetype');
        font-weight: 300; font-style: normal; font-display: swap;
      }
      @font-face {
        font-family: 'Seravek';
        src: url('${FONT_REG}') format('truetype');
        font-weight: 400; font-style: normal; font-display: swap;
      }
      @font-face {
        font-family: 'Seravek';
        src: url('${FONT_BOLD}') format('truetype');
        font-weight: 700; font-style: normal; font-display: swap;
      }

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body {
        font-family: 'Seravek', -apple-system, 'Segoe UI', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.7;
        -webkit-font-smoothing: antialiased;
        background: ${t.bg};
        color: ${t.text};
        transition: background 0.35s ease, color 0.35s ease;
      }
      button, input, textarea, select {
        font-family: 'Seravek', -apple-system, 'Segoe UI', sans-serif;
      }

      /* Layout */
      .w    { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
      .w-sm { max-width: 800px;  margin: 0 auto; padding: 0 48px; }
      @media (max-width: 768px) { .w, .w-sm { padding: 0 22px; } }

      /* Sections */
      .sec    { padding: 112px 0; }
      .sec-sm { padding: 72px 0; }
      @media (max-width: 768px) {
        .sec    { padding: 72px 0; }
        .sec-sm { padding: 52px 0; }
      }

      /* Grids */
      .g2  { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
      .g3  { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; }
      .g2c { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
      @media (max-width: 900px) {
        .g2, .g2c { grid-template-columns: 1fr; gap: 48px; }
        .g3 { grid-template-columns: 1fr; gap: 20px; }
      }

      /* Nav */
      .nav-links  { display: flex; align-items: center; gap: 36px; }
      .nav-burger { display: none; }
      @media (max-width: 900px) {
        .nav-links  { display: none; }
        .nav-burger { display: flex; }
      }

      /* Stats */
      .stats-row { display: grid; grid-template-columns: repeat(4,1fr); }
      @media (max-width: 700px) { .stats-row { grid-template-columns: repeat(2,1fr); } }

      /* Services */
      .svc-layout { display: grid; grid-template-columns: 280px 1fr; gap: 60px; }
      @media (max-width: 860px) { .svc-layout { grid-template-columns: 1fr; } }
      .svc-tabs { display: flex; flex-direction: column; gap: 2px; }
      @media (max-width: 860px) { .svc-tabs { flex-direction: row; flex-wrap: wrap; gap: 8px; } }

      /* Footer */
      .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.2fr; gap: 64px; }
      @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 44px; } }
      @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr; gap: 36px; } }

      /* Why grid */
      .why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; }
      @media (max-width: 860px) { .why-grid { grid-template-columns: repeat(2,1fr); } }
      @media (max-width: 540px) { .why-grid { grid-template-columns: 1fr; } }

      /* Hero buttons */
      .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
      @media (max-width: 520px) { .hero-btns { flex-direction: column; } }

      /* Process */
      .proc-item { display: flex; gap: 40px; }
      @media (max-width: 540px) { .proc-item { gap: 22px; } }

      /* Quote/Contact */
      .qgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
      .cgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 88px; }
      @media (max-width: 860px) { .qgrid, .cgrid { grid-template-columns: 1fr; gap: 52px; } }

      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
      @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }

      /* Card */
      .card {
        background: ${t.bgCard};
        border: 1px solid ${t.border};
        transition: box-shadow 0.28s, transform 0.28s, border-color 0.28s;
      }
      .card:hover {
        box-shadow: ${t.shadowHover};
        transform: translateY(-4px);
        border-color: ${t.borderStrong};
      }

      /* Svc row */
      .svc-row {
        border-left: 3px solid transparent;
        transition: all 0.2s;
        cursor: pointer;
      }
      .svc-row:hover {
        border-left-color: ${BLUE};
        background: ${dark ? "rgba(0,150,214,0.07)" : "#f0f8fd"};
      }

      /* FAQ */
      .faq-item { border-bottom: 1px solid ${t.border}; }
      .faq-btn {
        width: 100%; text-align: left; background: none; border: none;
        padding: 22px 28px; cursor: pointer;
        display: flex; justify-content: space-between; align-items: center; gap: 18px;
        transition: background 0.18s;
        color: ${t.text};
      }
      .faq-btn:hover { background: ${t.bgMuted}; }
      .faq-answer  { padding: 0 28px 24px; background: ${t.bgMuted}; }

      /* Tag */
      .tag {
        display: inline-block;
        font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 700;
        color: ${BLUE};
        background: ${dark ? "rgba(0,150,214,0.15)" : "rgba(0,150,214,0.10)"};
        padding: 5px 12px; border-radius: 2px;
      }

      /* Buttons */
      .btn {
        display: inline-flex; align-items: center; justify-content: center;
        font-family: inherit; font-weight: 700;
        letter-spacing: 0.05em; border: none; border-radius: 2px;
        cursor: pointer; transition: all 0.2s; white-space: nowrap;
      }
      .btn-primary { background: ${BLUE}; color: #fff; }
      .btn-primary:hover { background: ${BLUE_DARK}; }
      .btn-ghost   { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.4); }
      .btn-ghost:hover { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.7); }
      .btn-outline { background: transparent; color: ${BLUE}; border: 1.5px solid ${BLUE}; }
      .btn-outline:hover { background: ${BLUE}; color: #fff; }
      .btn-dark    { background: ${t.text}; color: ${t.bg}; }
      .btn-dark:hover { opacity: 0.85; }
      .btn-muted   { background: ${t.bgMuted}; color: ${t.text}; border: 1px solid ${t.border}; }
      .btn-muted:hover { border-color: ${BLUE}; color: ${BLUE}; }
      .btn-lg  { padding: 18px 40px; font-size: 17px; }
      .btn-md  { padding: 15px 32px; font-size: 16px; }
      .btn-sm  { padding: 12px 24px; font-size: 15px; }
      .btn-full { width: 100%; }

      /* Label */
      .lbl     { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
      .lbl-bar { width: 24px; height: 2px; background: ${BLUE}; flex-shrink: 0; }
      .lbl-txt { font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; font-weight: 700; }
      .lbl-txt.dark  { color: ${BLUE}; }
      .lbl-txt.light { color: rgba(255,255,255,0.45); }

      /* Input */
      .inp {
        width: 100%; padding: 15px 18px;
        border: 1.5px solid ${t.inputBorder};
        border-radius: 2px;
        font-size: 17px; color: ${t.text};
        outline: none;
        background: ${t.inputBg};
        transition: border-color 0.18s;
      }
      .inp:focus { border-color: ${BLUE}; }
      .inp-label {
        display: block; font-size: 11px;
        letter-spacing: 0.2em; text-transform: uppercase;
        font-weight: 700; color: ${t.textMid}; margin-bottom: 9px;
      }
      textarea.inp { min-height: 130px; resize: vertical; }

      /* Fade up */
      .fade { animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: none; }
      }

      /* Theme toggle */
      .theme-toggle {
        width: 44px; height: 24px;
        border-radius: 12px;
        background: ${dark ? BLUE : t.bgMuted};
        border: 1.5px solid ${dark ? BLUE : t.border};
        cursor: pointer;
        position: relative;
        transition: background 0.3s, border-color 0.3s;
        flex-shrink: 0;
      }
      .theme-toggle::after {
        content: '';
        position: absolute;
        top: 2px; left: ${dark ? "18px" : "2px"};
        width: 16px; height: 16px; border-radius: 50%;
        background: ${dark ? "#fff" : t.textMid};
        transition: left 0.28s cubic-bezier(0.22,1,0.36,1);
      }

      /* Dark mode selection accent */
      ::selection { background: rgba(0,150,214,0.25); color: ${t.text}; }

      /* Scrollbar */
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: ${dark ? "rgba(255,255,255,0.12)" : "rgba(69,85,96,0.18)"}; border-radius: 4px; }

      /* Mobile */
      @media (max-width: 640px) {
        body { font-size: 17px; }
        .btn-lg  { padding: 17px 32px; font-size: 17px; }
        .btn-md  { padding: 15px 28px; font-size: 16px; }
        .btn-sm  { padding: 13px 22px; font-size: 15px; }
        .inp     { font-size: 16px !important; padding: 15px 16px !important; }
        .inp-label { font-size: 12px !important; }
        .tag     { font-size: 12px; }
        .lbl-txt { font-size: 12px; }
        .faq-btn { padding: 20px 18px !important; }
        .faq-answer { padding: 0 18px 22px !important; }
      }
    `}</style>
  );
};

// ── SVG ASSETS ────────────────────────────────────────────────────────────────
function LogoSlash({ color = BLUE, size = 32 }) {
  return (
    <svg width={size} height={Math.round(size * 1.37)} viewBox="0 0 166 227" fill="none">
      <polygon points="143.77,0 166.32,0 22.55,226.7 0,226.7" fill={color}/>
    </svg>
  );
}

function BKSLogo({ variant = "2color", height = 36, t }) {
  const slashColor = variant === "black" ? "#000" : BLUE;
  const textColor  = variant === "white" ? "#fff"
                   : variant === "black" ? "#000"
                   : t ? t.text : "#455560";
  const subColor   = variant === "white" ? "rgba(255,255,255,0.55)"
                   : t ? t.textMuted : "#6b7a84";
  const slashW = Math.round(height * 0.32);
  return (
    <div style={{ display:"flex", alignItems:"center", gap: Math.round(height * 0.34) }}>
      <LogoSlash color={slashColor} size={slashW} />
      <div style={{ display:"flex", flexDirection:"column", lineHeight:1 }}>
        <span style={{ fontFamily:"Seravek,sans-serif", fontWeight:700, fontSize: height * 0.60, color: textColor, letterSpacing:"0.1em", lineHeight:1 }}>BKS</span>
        <span style={{ fontFamily:"Seravek,sans-serif", fontWeight:300, fontSize: height * 0.26, color: subColor, letterSpacing:"0.32em", textTransform:"uppercase", lineHeight:1, marginTop: height * 0.06 }}>Conveyancing</span>
      </div>
    </div>
  );
}

function SlashMark({ color = BLUE, size = 48, opacity = 1 }) {
  return (
    <svg width={size} height={Math.round(size * 1.37)} viewBox="0 0 166 227" fill="none">
      <polygon points="143.77,0 166.32,0 22.55,226.7 0,226.7" fill={color} opacity={opacity}/>
      <polygon points="96.77,0 119.32,0 -24.45,226.7 -46.9,226.7" fill={color} opacity={opacity * 0.3}/>
    </svg>
  );
}

function BgSlashes({ color = BLUE, opacity = 0.055, count = 14 }) {
  const slashes = [];
  for (let i = 0; i < count; i++) {
    const x = i * 88;
    slashes.push(<line key={i} x1={x - 40} y1="110%" x2={x + 55} y2="-10%" stroke={color} strokeWidth="0.8" opacity={opacity}/>);
  }
  return (
    <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }} preserveAspectRatio="xMidYMid slice">
      {slashes}
    </svg>
  );
}

// ── ATOMS ─────────────────────────────────────────────────────────────────────
function Label({ children, light = false }) {
  return (
    <div className="lbl">
      <div className="lbl-bar" />
      <span className={`lbl-txt ${light ? "light" : "dark"}`}>{children}</span>
    </div>
  );
}

function Btn({ children, onClick, variant="primary", size="md", full=false, style:s={} }) {
  return (
    <button onClick={onClick} className={`btn btn-${variant} btn-${size}${full?" btn-full":""}`} style={s}>
      {children}
    </button>
  );
}

// ── THEME TOGGLE ──────────────────────────────────────────────────────────────
function ThemeToggle({ dark, setDark }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(d => !d)}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label="Toggle theme"
    >
      <span style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", fontSize:10, left: dark ? 5 : "auto", right: dark ? "auto" : 5, color: dark ? "rgba(255,255,255,0.55)" : "rgba(100,120,130,0.7)" }}>
        {dark ? "☀" : "☾"}
      </span>
    </button>
  );
}

// ── NAV ───────────────────────────────────────────────────────────────────────
function Nav({ page, setPage, dark, setDark, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = ["Home","About","Services","Process","Resources","Contact"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = p => { setPage(p); setOpen(false); };

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:300,
        height:68,
        background: t.navBg,
        backdropFilter:"blur(20px)",
        WebkitBackdropFilter:"blur(20px)",
        borderBottom: `1px solid ${scrolled ? t.borderStrong : t.border}`,
        boxShadow: scrolled ? t.shadow : "none",
        transition:"all 0.3s ease",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 36px"
      }}>
        <button onClick={() => go("Home")} style={{ background:"none", border:"none", cursor:"pointer", padding:0 }}>
          <BKSLogo height={38} t={t} />
        </button>

        <div className="nav-links" style={{ alignItems:"center", gap:32 }}>
          {links.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background:"none", border:"none", cursor:"pointer",
              fontSize:15, fontWeight: page===l ? 700 : 400,
              color: page===l ? BLUE : t.textMid,
              paddingBottom:3,
              borderBottom: `2px solid ${page===l ? BLUE : "transparent"}`,
              letterSpacing:"0.03em", transition:"all 0.18s"
            }}>{l}</button>
          ))}
          <ThemeToggle dark={dark} setDark={setDark} />
          <Btn onClick={() => go("Quote")} size="sm">Get a Quote</Btn>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:16 }} className="nav-burger-wrap">
          <ThemeToggle dark={dark} setDark={setDark} />
          <button onClick={() => setOpen(!open)} className="nav-burger" style={{
            background:"none", border:"none", cursor:"pointer", padding:"8px",
            display:"flex", flexDirection:"column", gap:5
          }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width:22, height:2, background:t.text, borderRadius:2, transition:"all 0.28s",
                transform: open&&i===0?"translateY(7px) rotate(45deg)":open&&i===2?"translateY(-7px) rotate(-45deg)":"none",
                opacity: open&&i===1?0:1
              }}/>
            ))}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{
          position:"fixed", top:68, left:0, right:0, bottom:0, zIndex:299,
          background:t.bg, padding:"8px 16px 24px",
          display:"flex", flexDirection:"column", gap:2, overflowY:"auto",
          borderTop: `1px solid ${t.border}`
        }}>
          {[...links, "Quote"].map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: page===l ? (dark?"rgba(0,150,214,0.12)":"#f0f8fd") : "transparent",
              border:"none", cursor:"pointer",
              padding:"17px 20px", textAlign:"left",
              fontSize:19, fontWeight: page===l?700:400,
              color: page===l?BLUE:t.text,
              borderRadius:3,
              borderLeft:`3px solid ${page===l?BLUE:"transparent"}`, width:"100%"
            }}>{l}</button>
          ))}
        </div>
      )}
    </>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer({ setPage, t, dark }) {
  const services = ["Buying Property","Selling Property","Residential Conveyancing","Related Party Transfers","Deceased Estates","Subdivisions"];
  const nav = ["Home","About","Services","Process","Resources","Quote","Contact"];
  return (
    <footer style={{ background: dark ? "#080c10" : "#1a2530", color:"#fff", padding:"80px 0 36px", position:"relative", overflow:"hidden" }}>
      <BgSlashes color="#fff" opacity={0.028} count={10} />
      <div className="w" style={{ position:"relative", zIndex:1 }}>
        <div className="footer-grid" style={{ marginBottom:64 }}>
          <div>
            <button onClick={() => setPage("Home")} style={{ background:"none", border:"none", cursor:"pointer", padding:0, marginBottom:28 }}>
              <BKSLogo variant="white" height={36} t={t} />
            </button>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.45)", lineHeight:1.85, fontWeight:300, maxWidth:270, marginBottom:18 }}>A licensed settlement agency providing conveyancing and property settlement services across Western Australia.</p>
            <p style={{ fontSize:14, color:"rgba(255,255,255,0.2)", lineHeight:1.7, maxWidth:270 }}>BKS Conveyancing WA is a licensed settlement agency. We do not provide legal advice.</p>
          </div>
          <div>
            <p style={{ fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.28)", marginBottom:20, fontWeight:700 }}>Services</p>
            {services.map(s => <p key={s} style={{ fontSize:16, color:"rgba(255,255,255,0.5)", marginBottom:12, fontWeight:300 }}>{s}</p>)}
          </div>
          <div>
            <p style={{ fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.28)", marginBottom:20, fontWeight:700 }}>Navigation</p>
            {nav.map(l => <button key={l} onClick={() => setPage(l)} style={{ display:"block", background:"none", border:"none", cursor:"pointer", fontSize:16, color:"rgba(255,255,255,0.5)", marginBottom:12, fontWeight:300, padding:0, textAlign:"left", transition:"color 0.15s" }}>{l}</button>)}
          </div>
          <div>
            <p style={{ fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.28)", marginBottom:20, fontWeight:700 }}>Contact</p>
            {["Perth, Western Australia","(08) 0000 0000","info@bksconveyancing.com.au","Mon – Fri · 8:30am – 5:00pm AWST"].map((v,i) => (
              <p key={i} style={{ fontSize:16, color:"rgba(255,255,255,0.5)", marginBottom:12, fontWeight:300 }}>{v}</p>
            ))}
            <div style={{ marginTop:28 }}>
              <Btn onClick={() => setPage("Quote")} variant="outline" size="sm">Request a Quote</Btn>
            </div>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:28, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12, alignItems:"center" }}>
          <p style={{ fontSize:14, color:"rgba(255,255,255,0.2)", fontWeight:300 }}>© {new Date().getFullYear()} BKS Conveyancing WA. All rights reserved.</p>
          <p style={{ fontSize:14, color:"rgba(255,255,255,0.2)", fontWeight:300 }}>Licensed Settlement Agency · Western Australia</p>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE: HOME ────────────────────────────────────────────────────────────────
function PageHome({ setPage, t, dark }) {
  const features = [
    { icon:"⚖", title:"Licensed & Regulated", desc:"Fully licensed settlement agency operating under the Settlement Agents Act 1981." },
    { icon:"🔍", title:"Title Search & Due Diligence", desc:"Comprehensive title searches and property report reviews before every settlement." },
    { icon:"📋", title:"Contract Management", desc:"Full preparation, review and management of all settlement documentation." },
    { icon:"🔗", title:"Coordinated Settlement", desc:"We liaise with banks, agents, and all parties to ensure a smooth, on-time result." },
    { icon:"📊", title:"Stamp Duty Guidance", desc:"We handle all FHOG and duty concession applications on your behalf." },
    { icon:"✅", title:"Post-Settlement Support", desc:"Our commitment doesn't end at settlement — we're here for any follow-up." },
  ];
  const stats = [
    { n:"500+", label:"Settlements Completed" },
    { n:"15+",  label:"Years Experience" },
    { n:"98%",  label:"Client Satisfaction" },
    { n:"WA",   label:"Licensed in Perth" },
  ];
  const why = [
    { title:"Boutique Service", body:"You'll always deal directly with a qualified conveyancer — never passed between staff." },
    { title:"Clear Communication", body:"Plain-language updates at every stage. No jargon, no surprises, no guesswork." },
    { title:"Fixed Fees", body:"Transparent, all-inclusive pricing. You'll know exactly what you're paying before we begin." },
    { title:"Precision Focus", body:"Conveyancing is all we do. That singular focus means every detail gets the attention it deserves." },
    { title:"Rapid Response", body:"We respond to every enquiry within one business day — usually much faster." },
    { title:"End-to-End Management", body:"From contract review to settlement day, we manage every element of your transaction." },
  ];
  const steps = [
    { n:"01", title:"Engage & Review", body:"We review your contract, explain your obligations, and confirm your key dates before anything is signed." },
    { n:"02", title:"Searches & Finance", body:"Title searches, council enquiries, and all necessary certificates are obtained and verified." },
    { n:"03", title:"Prepare Documents", body:"All settlement documentation is prepared, checked, and dispatched to all relevant parties." },
    { n:"04", title:"Settle & Transfer", body:"Funds are managed, keys are released, and title is transferred — on time, every time." },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight:"100vh", display:"flex", alignItems:"center",
        background: dark
          ? "linear-gradient(135deg, #0a0f14 0%, #0f1a25 50%, #0d1520 100%)"
          : "linear-gradient(135deg, #1a2d3e 0%, #1e3a50 50%, #162c3c 100%)",
        position:"relative", overflow:"hidden"
      }}>
        <BgSlashes color={BLUE} opacity={dark ? 0.035 : 0.05} count={18} />
        {/* Large background slash */}
        <div style={{ position:"absolute", right:"-6%", bottom:"-12%", opacity: dark ? 0.06 : 0.08, pointerEvents:"none" }}>
          <SlashMark color={BLUE} size={520} opacity={1} />
        </div>
        <div className="w" style={{ position:"relative", zIndex:2, paddingTop:120, paddingBottom:120 }}>
          <div style={{ maxWidth:720 }}>
            <div className="lbl" style={{ marginBottom:32 }}>
              <div className="lbl-bar" />
              <span className="lbl-txt light" style={{ color:"rgba(255,255,255,0.4)", letterSpacing:"0.3em" }}>Perth Settlement Agency · Western Australia</span>
            </div>
            <h1 style={{
              fontSize:"clamp(52px,8vw,96px)",
              fontWeight:700,
              lineHeight:1.0,
              color:"#fff",
              letterSpacing:"-0.01em",
              marginBottom:40
            }}>
              Structured.<br/>
              Precise.<br/>
              <span style={{ color:BLUE }}>Settled.</span>
            </h1>
            <p style={{ fontSize:"clamp(17px,2vw,21px)", color:"rgba(255,255,255,0.58)", fontWeight:300, lineHeight:1.8, maxWidth:520, marginBottom:48 }}>
              BKS Conveyancing WA manages property settlements across Western Australia with a focus on accuracy, compliance, and clear communication.
            </p>
            <div className="hero-btns">
              <Btn onClick={() => setPage("Quote")} variant="primary" size="lg">Request a Quote</Btn>
              <Btn onClick={() => setPage("Services")} variant="ghost" size="lg">Our Services</Btn>
            </div>
          </div>
        </div>
        {/* Scroll cue */}
        <div style={{ position:"absolute", bottom:36, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:0.3 }}>
          <div style={{ width:1, height:40, background:"#fff" }}/>
          <span style={{ fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:"#fff" }}>Scroll</span>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: dark ? "#0d1520" : "#1a2530" }}>
        <div className="w">
          <div className="stats-row">
            {stats.map((s,i) => (
              <div key={i} style={{
                padding:"40px 24px",
                borderRight: i < stats.length-1 ? `1px solid rgba(255,255,255,0.07)` : "none",
                textAlign:"center"
              }}>
                <p style={{ fontSize:"clamp(28px,3.5vw,40px)", fontWeight:700, color:"#fff", lineHeight:1, marginBottom:8 }}>{s.n}</p>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.4)", letterSpacing:"0.08em", fontWeight:300 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="sec" style={{ background:t.bg }}>
        <div className="w">
          <div className="g2">
            <div>
              <Label>What We Do</Label>
              <h2 style={{ fontSize:"clamp(30px,4vw,48px)", fontWeight:700, color:t.text, lineHeight:1.1, marginBottom:28, letterSpacing:"-0.01em" }}>
                Settlement expertise,<br/>boutique service.
              </h2>
              <p style={{ fontSize:18, color:t.textMuted, lineHeight:1.9, marginBottom:18, fontWeight:300 }}>
                In Western Australia, property conveyancing requires a licensed settlement agent. BKS Conveyancing WA handles every step — from contract review through to title transfer — with precision and care.
              </p>
              <p style={{ fontSize:18, color:t.textMuted, lineHeight:1.9, marginBottom:36, fontWeight:300 }}>
                We coordinate with banks, real estate agents, buyers, sellers and government bodies so your settlement happens on time, correctly, and without stress.
              </p>
              <Btn onClick={() => setPage("Services")} variant="outline" size="md">View Services →</Btn>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {features.map((f,i) => (
                <div key={i} className="card" style={{
                  padding:"28px 24px", borderRadius:3,
                  background: t.bgCard,
                  border: `1px solid ${t.border}`
                }}>
                  <div style={{ fontSize:26, marginBottom:14 }}>{f.icon}</div>
                  <p style={{ fontSize:15, fontWeight:700, color:t.text, marginBottom:8, lineHeight:1.3 }}>{f.title}</p>
                  <p style={{ fontSize:14, color:t.textMuted, lineHeight:1.75, fontWeight:300 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BKS */}
      <section className="sec" style={{ background: dark ? "#0d1520" : "#1a2530", position:"relative", overflow:"hidden" }}>
        <BgSlashes color={BLUE} opacity={dark ? 0.03 : 0.04} count={14} />
        <div className="w" style={{ position:"relative", zIndex:1 }}>
          <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 72px" }}>
            <Label light>Why BKS</Label>
            <h2 style={{ fontSize:"clamp(28px,4vw,46px)", fontWeight:700, color:"#fff", lineHeight:1.1, letterSpacing:"-0.01em" }}>
              Why clients choose us
            </h2>
          </div>
          <div className="why-grid">
            {why.map((item,i) => (
              <div key={i} style={{
                padding:"44px 40px",
                background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.04)",
                borderBottom: `1px solid rgba(255,255,255,0.06)`,
                borderRight: `1px solid rgba(255,255,255,0.06)`,
                transition:"background 0.2s"
              }}>
                <div style={{ width:32, height:3, background:BLUE, marginBottom:24, borderRadius:2 }}/>
                <p style={{ fontSize:18, fontWeight:700, color:"#fff", marginBottom:12, letterSpacing:"-0.01em" }}>{item.title}</p>
                <p style={{ fontSize:16, color:"rgba(255,255,255,0.45)", lineHeight:1.85, fontWeight:300 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec" style={{ background:t.bgSub }}>
        <div className="w">
          <div style={{ textAlign:"center", maxWidth:560, margin:"0 auto 80px" }}>
            <Label>How It Works</Label>
            <h2 style={{ fontSize:"clamp(28px,4vw,46px)", fontWeight:700, color:t.text, lineHeight:1.1, letterSpacing:"-0.01em" }}>
              Four steps to settlement
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:2 }}>
            {steps.map((s,i) => (
              <div key={i} style={{
                padding:"48px 36px",
                background:t.bgCard,
                border:`1px solid ${t.border}`,
                borderRadius:3,
                position:"relative", overflow:"hidden"
              }}>
                <div style={{ fontSize:"clamp(52px,6vw,72px)", fontWeight:700, color:BLUE, opacity:0.12, lineHeight:1, marginBottom:24, letterSpacing:"-0.02em" }}>{s.n}</div>
                <p style={{ fontSize:19, fontWeight:700, color:t.text, marginBottom:12, letterSpacing:"-0.01em" }}>{s.title}</p>
                <p style={{ fontSize:16, color:t.textMuted, lineHeight:1.85, fontWeight:300 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: dark ? "#060a0d" : "#0096d6", position:"relative", overflow:"hidden" }}>
        <BgSlashes color="#fff" opacity={0.05} count={12} />
        <div className="w" style={{ position:"relative", zIndex:1, textAlign:"center", maxWidth:680, margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(28px,4.5vw,52px)", fontWeight:700, color:"#fff", lineHeight:1.1, marginBottom:24, letterSpacing:"-0.01em" }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize:19, color:"rgba(255,255,255,0.62)", lineHeight:1.8, fontWeight:300, marginBottom:44 }}>
            Contact BKS Conveyancing WA today for a no-obligation quote on your property settlement.
          </p>
          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <Btn onClick={() => setPage("Quote")} variant="dark" size="lg">Get a Free Quote</Btn>
            <Btn onClick={() => setPage("Contact")} variant="ghost" size="lg">Speak With a Conveyancer</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── PAGE: ABOUT ───────────────────────────────────────────────────────────────
function PageAbout({ setPage, t, dark }) {
  const values = [
    { label:"Precision",      body:"Every detail matters in property settlement. We don't cut corners — ever." },
    { label:"Transparency",   body:"You'll always know where your transaction stands and exactly what you're paying." },
    { label:"Accountability", body:"We own every outcome. If something needs fixing, we fix it." },
    { label:"Responsiveness", body:"Your queries are answered promptly. We treat your timeline as our own." },
    { label:"Expertise",      body:"Conveyancing is all we do. Deep specialisation delivers better results." },
    { label:"Integrity",      body:"We act in our clients' best interests — always, without compromise." },
  ];
  const pts = ["Residential sales and purchases","Commercial property transactions","Related party transfers","Off-the-plan purchases","Deceased estate transfers","Subdivision settlements"];

  return (
    <div>
      <section style={{ background: dark ? "linear-gradient(135deg,#0a0f14,#0f1a25)" : "linear-gradient(135deg,#1a2d3e,#1e3a50)", padding:"140px 0 96px", position:"relative", overflow:"hidden" }}>
        <BgSlashes color={BLUE} opacity={0.04} count={14} />
        <div className="w" style={{ position:"relative", zIndex:1 }}>
          <Label light>About BKS</Label>
          <h1 style={{ fontSize:"clamp(36px,5.5vw,68px)", fontWeight:700, color:"#fff", lineHeight:1.05, maxWidth:700, letterSpacing:"-0.01em" }}>
            A boutique settlement agency built on precision.
          </h1>
        </div>
      </section>

      <section className="sec" style={{ background:t.bg }}>
        <div className="w">
          <div className="g2">
            <div>
              <Label>Our Story</Label>
              <p style={{ fontSize:19, color:t.textMuted, lineHeight:1.9, marginBottom:20, fontWeight:300 }}>
                We operate as a boutique settlement agency because we believe personalised service and deep specialisation produce better results for our clients.
              </p>
              <p style={{ fontSize:19, color:t.textMuted, lineHeight:1.9, fontWeight:300 }}>
                Property settlement is one of the most significant financial transactions most people will ever undertake. At BKS Conveyancing WA, we treat every matter with the seriousness and care it deserves.
              </p>
            </div>
            <div style={{ background:t.bgSub, borderRadius:4, padding:"44px 40px", border:`1px solid ${t.border}` }}>
              <Label>Our Foundation</Label>
              <p style={{ fontSize:15, letterSpacing:"0.18em", textTransform:"uppercase", color:BLUE, fontWeight:700, marginBottom:24 }}>Areas We Cover</p>
              {pts.map((pt,i) => (
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:16 }}>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:BLUE, marginTop:8, flexShrink:0 }}/>
                  <p style={{ fontSize:17, color:t.textMid, lineHeight:1.6 }}>{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background:t.bgSub }}>
        <div className="w">
          <div style={{ textAlign:"center", maxWidth:560, margin:"0 auto 72px" }}>
            <Label>Our Values</Label>
            <h2 style={{ fontSize:"clamp(28px,4vw,44px)", fontWeight:700, color:t.text, lineHeight:1.1, letterSpacing:"-0.01em" }}>The principles we work by</h2>
          </div>
          <div className="g3">
            {values.map((v,i) => (
              <div key={i} className="card" style={{ borderRadius:3, padding:"36px 32px", border:`1px solid ${t.border}` }}>
                <div style={{ width:24, height:3, background:BLUE, marginBottom:20, borderRadius:2 }}/>
                <p style={{ fontSize:19, fontWeight:700, color:t.text, marginBottom:12, letterSpacing:"-0.01em" }}>{v.label}</p>
                <p style={{ fontSize:16, color:t.textMuted, lineHeight:1.85, fontWeight:300 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── PAGE: SERVICES ────────────────────────────────────────────────────────────
function PageServices({ setPage, t, dark }) {
  const [active, setActive] = useState(0);
  const svcs = [
    {
      tag:"Residential", title:"Buying Property",
      desc:"Purchasing a home or investment property in Western Australia involves complex legal and administrative processes.",
      paras:[
        "BKS Conveyancing WA guides buyers through every stage of the settlement process — from reviewing the Offer and Acceptance contract through to final transfer of title.",
        "We handle title searches, preparation of transfer documents, liaison with your lender, and coordination with the seller's representative to ensure settlement occurs on time."
      ],
      pts:["Contract review and explanation","Title search and due diligence","Mortgage document coordination","Stamp duty and FHOG applications","Settlement and title transfer"]
    },
    {
      tag:"Residential", title:"Selling Property",
      desc:"Selling your property requires careful documentation management and precise coordination with all parties.",
      paras:[
        "As your settlement agent, BKS Conveyancing WA prepares and coordinates all documentation required to transfer your property to the buyer.",
        "We manage the discharge of any mortgage, prepare the transfer of land documents, and coordinate with the buyer's representative to ensure a smooth and timely settlement."
      ],
      pts:["Section 27 deposit release","Mortgage discharge coordination","Transfer documentation","Settlement statement preparation","Proceeds disbursement"]
    },
    {
      tag:"Specialist", title:"Related Party Transfers",
      desc:"Transferring property between family members or related parties requires specialised knowledge of duty exemptions and concessions.",
      paras:[
        "BKS Conveyancing WA has extensive experience managing related party transfers, including spousal transfers, family gifts, and transfers resulting from relationship breakdowns.",
        "We advise on applicable duty exemptions and concessions and manage all documentation to ensure a compliant and efficient transfer."
      ],
      pts:["Spousal and de facto transfers","Family gifting","Relationship breakdown orders","Duty exemption applications","FIRB consideration advice"]
    },
    {
      tag:"Specialist", title:"Deceased Estates",
      desc:"Transferring property following the death of an owner requires careful navigation of probate and estate processes.",
      paras:[
        "We work sensitively and efficiently with executors and beneficiaries to manage the transfer of property from a deceased estate.",
        "BKS Conveyancing WA coordinates with legal practitioners, financial institutions, and the Landgate to ensure title is transferred correctly and in accordance with the estate's requirements."
      ],
      pts:["Probate and letters of administration","Transmission applications","Transfer to beneficiaries","Estate account management","Liaison with legal advisors"]
    },
    {
      tag:"Specialist", title:"Off-the-Plan",
      desc:"Purchasing off-the-plan introduces unique settlement considerations that require specialist handling.",
      paras:[
        "Off-the-plan purchases often involve extended settlement periods, strata title creation, and complex documentation requirements.",
        "We monitor your contract conditions, manage any sunset clause considerations, and coordinate the settlement of your new property on practical completion."
      ],
      pts:["Contract condition monitoring","Strata title creation coordination","Practical completion coordination","Duty calculation on off-the-plan value","First Home Owner Grant applications"]
    },
    {
      tag:"Commercial", title:"Subdivisions",
      desc:"Subdivision settlements require coordination across multiple lots, government authorities, and financial institutions.",
      paras:[
        "BKS Conveyancing WA manages the settlement of subdivision lots, including coordination with the WAPC, local government, and Landgate.",
        "We handle the creation of new titles, discharge of head-title mortgages, and registration of new lot mortgages — managing the process with precision from start to finish."
      ],
      pts:["Survey plan lodgement coordination","WAPC and council liaison","Head title discharge management","New title creation","Individual lot settlements"]
    },
  ];
  const s = svcs[active];
  return (
    <div>
      <section style={{ background: dark?"linear-gradient(135deg,#0a0f14,#0f1a25)":"linear-gradient(135deg,#1a2d3e,#1e3a50)", padding:"140px 0 96px", position:"relative", overflow:"hidden" }}>
        <BgSlashes color={BLUE} opacity={0.04} count={14} />
        <div className="w" style={{ position:"relative", zIndex:1 }}>
          <Label light>Services</Label>
          <h1 style={{ fontSize:"clamp(36px,5.5vw,68px)", fontWeight:700, color:"#fff", lineHeight:1.05, maxWidth:680, letterSpacing:"-0.01em" }}>
            Everything your settlement requires.
          </h1>
        </div>
      </section>

      <section className="sec" style={{ background:t.bg }}>
        <div className="w">
          <div className="svc-layout">
            <div className="svc-tabs">
              {svcs.map((sv,i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  textAlign:"left", background: active===i?(dark?"rgba(0,150,214,0.12)":"#f0f8fd"):"transparent",
                  border:`1px solid ${active===i?BLUE:t.border}`,
                  borderRadius:3, padding:"18px 20px", cursor:"pointer", transition:"all 0.18s"
                }}>
                  <p style={{ fontSize:11, letterSpacing:"0.18em", textTransform:"uppercase", color:BLUE, fontWeight:700, marginBottom:5 }}>{sv.tag}</p>
                  <p style={{ fontSize:16, fontWeight:active===i?700:400, color:active===i?BLUE:t.text }}>{sv.title}</p>
                </button>
              ))}
            </div>
            <div className="fade" key={active}>
              <span className="tag" style={{ marginBottom:16, display:"inline-block" }}>{s.tag}</span>
              <h2 style={{ fontSize:"clamp(26px,3.5vw,38px)", fontWeight:700, color:t.text, marginBottom:20, lineHeight:1.15, letterSpacing:"-0.01em" }}>{s.title}</h2>
              <p style={{ fontSize:18, color:t.textMuted, lineHeight:1.9, marginBottom:20, fontWeight:300 }}>{s.paras[0]}</p>
              <p style={{ fontSize:18, color:t.textMuted, lineHeight:1.9, marginBottom:36, fontWeight:300 }}>{s.paras[1]}</p>
              <div style={{ background:t.bgSub, borderRadius:3, padding:"32px 28px", border:`1px solid ${t.border}` }}>
                <p style={{ fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", color:BLUE, fontWeight:700, marginBottom:20 }}>What's Included</p>
                {s.pts.map((pt,i) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:14 }}>
                    <div style={{ width:6, height:6, borderRadius:"50%", background:BLUE, marginTop:9, flexShrink:0 }}/>
                    <p style={{ fontSize:17, color:t.textMid, lineHeight:1.6 }}>{pt}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:36 }}>
                <Btn onClick={() => setPage("Quote")} variant="primary" size="md">Get a Quote for This Service</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── PAGE: PROCESS ─────────────────────────────────────────────────────────────
function PageProcess({ setPage, t, dark }) {
  const steps = [
    { n:"01", title:"Initial Consultation", body:"We discuss your transaction, review your contract, and explain all your key obligations, conditions, and important dates before you commit to anything." },
    { n:"02", title:"Engagement & Documentation", body:"Once engaged, we obtain all required searches and certificates — title searches, council rates, water rates, strata searches, and any other relevant enquiries." },
    { n:"03", title:"Finance & Special Conditions", body:"We monitor your finance approval deadline and any special conditions, keeping you informed at every stage and liaising with your lender as required." },
    { n:"04", title:"Pre-Settlement Preparation", body:"All transfer documents are prepared and reviewed. Settlement figures are calculated and confirmed. We book settlement and advise all parties of the arrangements." },
    { n:"05", title:"Settlement Day", body:"We attend settlement on your behalf, manage the exchange of funds and documents, and notify you the moment settlement is complete." },
    { n:"06", title:"Post-Settlement", body:"We confirm title registration at Landgate, ensure all rates adjustments are correct, and remain available for any post-settlement queries." },
  ];
  const faqs = [
    { q:"How long does settlement take?",              a:"A standard residential settlement in Western Australia typically takes 30–60 days from the date of the Offer and Acceptance contract, depending on the agreed settlement date and any special conditions." },
    { q:"What does a settlement agent do?",            a:"A licensed settlement agent manages the legal and administrative process of transferring property ownership — from contract review through to title registration at Landgate." },
    { q:"Do I need a settlement agent or a solicitor?",a:"For standard conveyancing in WA, a licensed settlement agent has the same authority as a solicitor. A solicitor is only required if your matter involves contested legal issues or complex advice beyond standard conveyancing." },
    { q:"What are your fees?",                         a:"BKS Conveyancing WA charges fixed, all-inclusive fees. Use our quote calculator for an estimate, or contact us for a formal quote tailored to your specific transaction." },
    { q:"Can you help with the First Home Owner Grant?",a:"Yes. We manage all FHOG applications as part of our standard service for eligible first home buyers." },
    { q:"What happens if settlement is delayed?",      a:"Delays can occur for many reasons — lender issues, title complications, or party-related delays. We proactively manage these situations and keep you informed throughout." },
  ];
  const [open, setOpen] = useState(null);

  return (
    <div>
      <section style={{ background: dark?"linear-gradient(135deg,#0a0f14,#0f1a25)":"linear-gradient(135deg,#1a2d3e,#1e3a50)", padding:"140px 0 96px", position:"relative", overflow:"hidden" }}>
        <BgSlashes color={BLUE} opacity={0.04} count={14} />
        <div className="w" style={{ position:"relative", zIndex:1 }}>
          <Label light>Our Process</Label>
          <h1 style={{ fontSize:"clamp(36px,5.5vw,68px)", fontWeight:700, color:"#fff", lineHeight:1.05, maxWidth:680, letterSpacing:"-0.01em" }}>
            From contract to keys — every step.
          </h1>
        </div>
      </section>

      <section className="sec" style={{ background:t.bg }}>
        <div className="w-sm">
          <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
            {steps.map((s,i) => (
              <div key={i} className="proc-item" style={{ padding:"44px 0", borderBottom:`1px solid ${t.border}` }}>
                <div style={{ flexShrink:0, paddingTop:6 }}>
                  <p style={{ fontSize:"clamp(42px,5vw,60px)", fontWeight:700, color:BLUE, opacity:0.2, lineHeight:1, letterSpacing:"-0.02em" }}>{s.n}</p>
                </div>
                <div>
                  <p style={{ fontSize:21, fontWeight:700, color:t.text, marginBottom:12, letterSpacing:"-0.01em" }}>{s.title}</p>
                  <p style={{ fontSize:17, color:t.textMuted, lineHeight:1.9, fontWeight:300 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background:t.bgSub }}>
        <div className="w-sm">
          <div style={{ marginBottom:56 }}>
            <Label>FAQs</Label>
            <h2 style={{ fontSize:"clamp(26px,4vw,42px)", fontWeight:700, color:t.text, lineHeight:1.1, letterSpacing:"-0.01em" }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ border:`1px solid ${t.border}`, borderRadius:3, overflow:"hidden" }}>
            {faqs.map((f,i) => (
              <div key={i} className="faq-item">
                <button className="faq-btn" onClick={() => setOpen(open===i?null:i)}>
                  <span style={{ fontSize:18, fontWeight:600, lineHeight:1.4 }}>{f.q}</span>
                  <span style={{ color:BLUE, fontSize:20, flexShrink:0, transition:"transform 0.2s", transform:open===i?"rotate(45deg)":"none" }}>+</span>
                </button>
                {open===i && (
                  <div className="faq-answer">
                    <p style={{ fontSize:17, color:t.textMuted, lineHeight:1.9, fontWeight:300 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop:56, textAlign:"center" }}>
            <Btn onClick={() => setPage("Contact")} variant="primary" size="lg">Still have questions? Contact us →</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── PAGE: RESOURCES ───────────────────────────────────────────────────────────
function PageResources({ t, dark }) {
  const checklists = [
    {
      title:"Buying a Property — Checklist",
      items:["Review Offer & Acceptance contract before signing","Confirm finance approval deadline","Arrange building and pest inspection","Confirm settlement date with your agent","Arrange home insurance from settlement date","Organise keys and change of address"]
    },
    {
      title:"Selling a Property — Checklist",
      items:["Provide agent authority and listing documentation","Review offers with agent before accepting","Confirm mortgage discharge instructions with lender","Ensure property is in agreed condition pre-settlement","Provide meter readings for adjustments","Vacate property and hand over keys at settlement"]
    },
  ];
  const duties = [
    { range:"Up to $120,000",          rate:"1.90%" },
    { range:"$120,001 – $150,000",     rate:"2.85%" },
    { range:"$150,001 – $360,000",     rate:"3.80%" },
    { range:"$360,001 – $725,000",     rate:"4.75%" },
    { range:"Over $725,000",           rate:"5.15%" },
  ];

  return (
    <div>
      <section style={{ background: dark?"linear-gradient(135deg,#0a0f14,#0f1a25)":"linear-gradient(135deg,#1a2d3e,#1e3a50)", padding:"140px 0 96px", position:"relative", overflow:"hidden" }}>
        <BgSlashes color={BLUE} opacity={0.04} count={14} />
        <div className="w" style={{ position:"relative", zIndex:1 }}>
          <Label light>Resources</Label>
          <h1 style={{ fontSize:"clamp(36px,5.5vw,68px)", fontWeight:700, color:"#fff", lineHeight:1.05, maxWidth:660, letterSpacing:"-0.01em" }}>
            Information to guide your settlement.
          </h1>
        </div>
      </section>

      <section className="sec" style={{ background:t.bg }}>
        <div className="w">
          <div className="g2c" style={{ marginBottom:88 }}>
            {checklists.map((cl,i) => (
              <div key={i} style={{ background:t.bgSub, borderRadius:3, padding:"44px 40px", border:`1px solid ${t.border}` }}>
                <Label>Checklist</Label>
                <p style={{ fontSize:20, fontWeight:700, color:t.text, marginBottom:28, letterSpacing:"-0.01em" }}>{cl.title}</p>
                {cl.items.map((item,j) => (
                  <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:16 }}>
                    <div style={{ width:20, height:20, border:`2px solid ${BLUE}`, borderRadius:2, flexShrink:0, marginTop:2, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <div style={{ width:8, height:8, background:BLUE, borderRadius:1 }}/>
                    </div>
                    <p style={{ fontSize:16, color:t.textMid, lineHeight:1.65, fontWeight:300 }}>{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div>
            <Label>Stamp Duty</Label>
            <h2 style={{ fontSize:"clamp(24px,3.5vw,38px)", fontWeight:700, color:t.text, marginBottom:8, letterSpacing:"-0.01em" }}>WA Transfer Duty Rates</h2>
            <p style={{ fontSize:17, color:t.textMuted, fontWeight:300, marginBottom:32, lineHeight:1.8 }}>General transfer duty rates for residential property in Western Australia (2024–25). First home buyer exemptions and concessions may apply.</p>
            <div style={{ border:`1px solid ${t.border}`, borderRadius:3, overflow:"hidden" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", background: dark?"#0d1520":"#1a2530", padding:"16px 28px" }}>
                <p style={{ fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", fontWeight:700 }}>Dutiable Value</p>
                <p style={{ fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", fontWeight:700 }}>Rate on Excess</p>
              </div>
              {duties.map((d,i) => (
                <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 1fr", padding:"18px 28px", borderTop:`1px solid ${t.border}`, background: i%2===0?t.bgCard:t.bgSub }}>
                  <p style={{ fontSize:16, color:t.text, fontWeight:300 }}>{d.range}</p>
                  <p style={{ fontSize:16, color:BLUE, fontWeight:700 }}>{d.rate}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize:14, color:t.textFaint, marginTop:16, fontWeight:300 }}>Duty exemption applies on properties up to $430,000 for eligible first home buyers. Concession available to $530,000. Rates subject to change — verify with RevenueWA.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── PAGE: QUOTE ───────────────────────────────────────────────────────────────
function PageQuote({ setPage, t, dark }) {
  const [type, setType]   = useState("purchase");
  const [price, setPrice] = useState("");
  const [fhb, setFhb]     = useState(false);
  const [calc, setCalc]   = useState(null);

  const calculate = () => {
    const p = parseFloat(price.replace(/[^0-9.]/g,""));
    if (!p || p < 1000) return;
    let duty = 0;
    if (type==="purchase") {
      const tiers = [[120000,0.019],[30000,0.0285],[210000,0.038],[365000,0.0475],[Infinity,0.0515]];
      let rem = p; let thresholds = [0,120000,150000,360000,725000];
      for (let i=0;i<tiers.length;i++) {
        const band = Math.min(rem, tiers[i][0]); if(band<=0)break; duty+=band*tiers[i][1]; rem-=band;
      }
      if (fhb && p <= 430000) duty = 0;
      else if (fhb && p <= 530000) duty = duty * ((p-430000)/100000);
    }
    const prof = type==="purchase" ? 1650 : 1450;
    const searches = type==="purchase" ? 380 : 280;
    const reg = 248;
    const total = duty + prof + searches + reg;
    setCalc({ duty, prof, searches, reg, total });
  };

  const fmt = n => "$" + Math.round(n).toLocaleString();

  return (
    <div>
      <section style={{ background: dark?"linear-gradient(135deg,#0a0f14,#0f1a25)":"linear-gradient(135deg,#1a2d3e,#1e3a50)", padding:"140px 0 96px", position:"relative", overflow:"hidden" }}>
        <BgSlashes color={BLUE} opacity={0.04} count={14} />
        <div className="w" style={{ position:"relative", zIndex:1 }}>
          <Label light>Quote Calculator</Label>
          <h1 style={{ fontSize:"clamp(36px,5.5vw,68px)", fontWeight:700, color:"#fff", lineHeight:1.05, maxWidth:680, letterSpacing:"-0.01em" }}>
            Estimate your settlement costs.
          </h1>
        </div>
      </section>

      <section className="sec" style={{ background:t.bg }}>
        <div className="w">
          <div className="qgrid">
            <div>
              <Label>Calculator</Label>
              <h2 style={{ fontSize:24, fontWeight:700, color:t.text, marginBottom:36, letterSpacing:"-0.01em" }}>Transaction Details</h2>

              <div style={{ marginBottom:24 }}>
                <label className="inp-label">Transaction Type</label>
                <div style={{ display:"flex", gap:10 }}>
                  {["purchase","sale"].map(v => (
                    <button key={v} onClick={() => setType(v)} style={{
                      flex:1, padding:"14px", border:`1.5px solid ${type===v?BLUE:t.border}`,
                      background:type===v?(dark?"rgba(0,150,214,0.12)":"#f0f8fd"):t.bgCard,
                      color:type===v?BLUE:t.textMid, borderRadius:2, cursor:"pointer",
                      fontFamily:"inherit", fontWeight:700, fontSize:16, transition:"all 0.18s"
                    }}>{v==="purchase"?"Purchase":"Sale"}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom:24 }}>
                <label className="inp-label">Property Value</label>
                <input className="inp" value={price} onChange={e=>setPrice(e.target.value)} placeholder="e.g. 650000" inputMode="numeric"/>
              </div>

              {type==="purchase" && (
                <div style={{ marginBottom:32 }}>
                  <label style={{ display:"flex", alignItems:"center", gap:14, cursor:"pointer" }}>
                    <input type="checkbox" checked={fhb} onChange={e=>setFhb(e.target.checked)} style={{ width:18, height:18, accentColor:BLUE }}/>
                    <span style={{ fontSize:16, color:t.textMid, fontWeight:400 }}>First Home Buyer</span>
                  </label>
                </div>
              )}

              <Btn onClick={calculate} variant="primary" size="lg" full>Calculate Estimate</Btn>

              {calc && (
                <div style={{ marginTop:36, background:t.bgSub, borderRadius:3, padding:"36px 32px", border:`1px solid ${t.border}` }} className="fade">
                  <p style={{ fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", color:BLUE, fontWeight:700, marginBottom:28 }}>Estimated Costs</p>
                  {[
                    ["Professional Fees", fmt(calc.prof)],
                    ["Searches & Certificates", fmt(calc.searches)],
                    ["Registration Fees", fmt(calc.reg)],
                    ["Transfer Duty", calc.duty===0?"$0 (FHB Exempt)":fmt(calc.duty)],
                  ].map(([label,val],i) => (
                    <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"13px 0", borderBottom:`1px solid ${t.border}` }}>
                      <p style={{ fontSize:16, color:t.textMuted, fontWeight:300 }}>{label}</p>
                      <p style={{ fontSize:17, fontWeight:700, color:t.text }}>{val}</p>
                    </div>
                  ))}
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:20 }}>
                    <p style={{ fontSize:17, fontWeight:700, color:t.text }}>Total Estimate</p>
                    <p style={{ fontSize:"clamp(24px,4vw,32px)", fontWeight:700, color:BLUE }}>{fmt(calc.total)}</p>
                  </div>
                  <p style={{ fontSize:13, color:t.textFaint, marginTop:20, lineHeight:1.7, fontWeight:300 }}>Indicative estimate only. Final fees may vary. Duty figures based on general rate — exemptions/concessions subject to eligibility. Contact us for a formal quote.</p>
                </div>
              )}
            </div>

            <div>
              <Label>Why BKS</Label>
              <h2 style={{ fontSize:24, fontWeight:700, color:t.text, marginBottom:24, letterSpacing:"-0.01em" }}>Fixed, all-inclusive pricing</h2>
              <p style={{ fontSize:17, color:t.textMuted, lineHeight:1.9, marginBottom:36, fontWeight:300 }}>At BKS Conveyancing WA, our fees are fixed and transparent. No hidden costs, no surprises, no hourly billing. You'll know exactly what you're paying before we begin.</p>
              {["Fixed professional fees — no hourly billing","All searches and certificate costs included","Government fees calculated accurately upfront","First Home Owner Grant assistance included","No charge for email or phone correspondence"].map((pt,i) => (
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:18 }}>
                  <div style={{ width:22, height:22, background:BLUE, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4L4 7L9 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>
                  </div>
                  <p style={{ fontSize:17, color:t.textMid, lineHeight:1.65 }}>{pt}</p>
                </div>
              ))}
              <div style={{ marginTop:44, background:t.bgSub, borderRadius:3, padding:"32px 28px", border:`1px solid ${t.border}` }}>
                <p style={{ fontSize:18, fontWeight:700, color:t.text, marginBottom:12 }}>Want a formal quote?</p>
                <p style={{ fontSize:16, color:t.textMuted, lineHeight:1.8, fontWeight:300, marginBottom:24 }}>Contact us directly for a detailed, obligation-free quote tailored to your specific transaction.</p>
                <Btn onClick={() => setPage("Contact")} variant="outline" size="md">Contact Us →</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── PAGE: CONTACT ─────────────────────────────────────────────────────────────
function PageContact({ t, dark }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"", message:"" });
  const [sent, setSent]  = useState(false);
  const set = (k,v) => setForm(f => ({...f,[k]:v}));

  return (
    <div>
      <section style={{ background: dark?"linear-gradient(135deg,#0a0f14,#0f1a25)":"linear-gradient(135deg,#1a2d3e,#1e3a50)", padding:"140px 0 96px", position:"relative", overflow:"hidden" }}>
        <BgSlashes color={BLUE} opacity={0.04} count={14} />
        <div className="w" style={{ position:"relative", zIndex:1 }}>
          <Label light>Contact</Label>
          <h1 style={{ fontSize:"clamp(36px,5.5vw,68px)", fontWeight:700, color:"#fff", lineHeight:1.05, maxWidth:640, letterSpacing:"-0.01em" }}>
            Let's talk about your settlement.
          </h1>
        </div>
      </section>

      <section className="sec" style={{ background:t.bg }}>
        <div className="w">
          <div className="cgrid">
            <div>
              <Label>Send a Message</Label>
              <h2 style={{ fontSize:24, fontWeight:700, color:t.text, marginBottom:36, letterSpacing:"-0.01em" }}>We'll respond within one business day</h2>
              {!sent ? (
                <>
                  <div className="form-row" style={{ marginBottom:20 }}>
                    <div><label className="inp-label">Full Name</label><input className="inp" value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Your name"/></div>
                    <div><label className="inp-label">Email Address</label><input className="inp" type="email" value={form.email} onChange={e=>set("email",e.target.value)} placeholder="your@email.com"/></div>
                  </div>
                  <div className="form-row" style={{ marginBottom:20 }}>
                    <div><label className="inp-label">Phone</label><input className="inp" value={form.phone} onChange={e=>set("phone",e.target.value)} placeholder="(08) XXXX XXXX"/></div>
                    <div><label className="inp-label">Subject</label><input className="inp" value={form.subject} onChange={e=>set("subject",e.target.value)} placeholder="e.g. Purchase settlement"/></div>
                  </div>
                  <div style={{ marginBottom:32 }}><label className="inp-label">Message</label><textarea className="inp" value={form.message} onChange={e=>set("message",e.target.value)} placeholder="Tell us about your property transaction..."/></div>
                  <Btn onClick={() => setSent(true)} size="lg" full>Send Message</Btn>
                </>
              ) : (
                <div className="fade" style={{ padding:"56px 44px", background:t.bgSub, borderLeft:`4px solid ${BLUE}`, borderRadius:3, textAlign:"center" }}>
                  <div style={{ width:60, height:60, background:BLUE, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px" }}>
                    <svg width="26" height="20" viewBox="0 0 26 20"><path d="M2 10L9 17L24 2" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/></svg>
                  </div>
                  <h3 style={{ fontSize:22, fontWeight:700, color:t.text, marginBottom:14 }}>Message sent</h3>
                  <p style={{ fontSize:17, color:t.textMuted, lineHeight:1.8, fontWeight:300 }}>Thank you for contacting BKS Conveyancing WA. We'll be in touch within one business day.</p>
                  <button onClick={() => setSent(false)} style={{ marginTop:28, background:"none", border:"none", color:BLUE, cursor:"pointer", fontSize:16, fontWeight:700 }}>Send another message →</button>
                </div>
              )}
            </div>

            <div>
              <Label>Contact Details</Label>
              <h2 style={{ fontSize:24, fontWeight:700, color:t.text, marginBottom:36, letterSpacing:"-0.01em" }}>Get in touch</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:28, marginBottom:44 }}>
                {[
                  { icon:"📍", label:"Location",     val:"Perth, Western Australia" },
                  { icon:"📞", label:"Phone",        val:"(08) 0000 0000" },
                  { icon:"✉️", label:"Email",        val:"info@bksconveyancing.com.au" },
                  { icon:"🕐", label:"Office Hours", val:"Monday – Friday, 8:30am – 5:00pm AWST" },
                ].map((c,i) => (
                  <div key={i} style={{ display:"flex", gap:20 }}>
                    <div style={{ width:48, height:48, background: dark?"rgba(0,150,214,0.1)":"rgba(0,150,214,0.07)", borderRadius:2, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{c.icon}</div>
                    <div>
                      <p style={{ fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase", color:BLUE, fontWeight:700, marginBottom:5 }}>{c.label}</p>
                      <p style={{ fontSize:18, color:t.text, lineHeight:1.5 }}>{c.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background:t.bgSub, borderRadius:3, padding:"28px 32px", borderLeft:`4px solid ${BLUE}` }}>
                <p style={{ fontSize:15, color:t.textMuted, lineHeight:1.85, fontWeight:300 }}>BKS Conveyancing WA is a licensed settlement agency. We are not a legal practice and do not provide legal advice. For legal advice relating to property matters, please consult a qualified solicitor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage]   = useState("Home");
  const [dark, setDark]   = useState(false);
  const t = dark ? DARK : LIGHT;

  const navigate = p => {
    setPage(p);
    setTimeout(() => window.scrollTo({ top:0, behavior:"smooth" }), 10);
  };

  const props = { setPage: navigate, t, dark };

  const pages = {
    Home:      <PageHome      {...props} />,
    About:     <PageAbout     {...props} />,
    Services:  <PageServices  {...props} />,
    Process:   <PageProcess   {...props} />,
    Resources: <PageResources {...props} />,
    Quote:     <PageQuote     {...props} />,
    Contact:   <PageContact   {...props} />,
  };

  return (
    <>
      <GlobalStyles dark={dark} />
      <Nav page={page} setPage={navigate} dark={dark} setDark={setDark} t={t} />
      <main style={{ paddingTop:68, transition:"background 0.35s ease" }}>
        {pages[page]}
      </main>
      <Footer setPage={navigate} t={t} dark={dark} />
    </>
  );
}
