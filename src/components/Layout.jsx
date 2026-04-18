import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export const BKS_BLUE = '#0096d6'
export const BKS_GREY = '#455560'

export function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 4L8 40" stroke={BKS_BLUE} strokeWidth="8" strokeLinecap="round" />
      <path d="M20 4L0 40" stroke={BKS_BLUE} strokeWidth="3" strokeLinecap="round" opacity="0.35" />
    </svg>
  )
}

export function Logo({ light = false }) {
  const textColor = light ? '#ffffff' : BKS_GREY
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      <LogoMark size={28} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontWeight: 700, fontSize: '18px', color: textColor, letterSpacing: '0.08em' }}>BKS</span>
        <span style={{
          fontWeight: 300, fontSize: '11px',
          color: light ? 'rgba(255,255,255,0.75)' : BKS_GREY,
          letterSpacing: '0.22em', textTransform: 'uppercase'
        }}>Conveyancing</span>
      </div>
    </Link>
  )
}

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Resources', to: '/resources' },
  { label: 'Quote', to: '/quote' },
  { label: 'Contact', to: '/contact' },
]

export function Layout({ children }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ fontFamily: "'Seravek', sans-serif", minHeight: '100vh', background: '#fff' }}>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(69,85,96,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: '68px',
        boxShadow: '0 1px 16px rgba(0,0,0,0.05)'
      }}>
        <Logo />

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {NAV_LINKS.map(link => (
            <Link key={link.to} to={link.to} style={{
              textDecoration: 'none', fontSize: '13px', letterSpacing: '0.07em',
              fontWeight: location.pathname === link.to ? 600 : 400,
              color: location.pathname === link.to ? BKS_BLUE : BKS_GREY,
              paddingBottom: '2px',
              borderBottom: location.pathname === link.to ? `2px solid ${BKS_BLUE}` : '2px solid transparent',
              transition: 'all 0.2s',
            }}>{link.label}</Link>
          ))}
          <Link to="/quote" style={{
            background: BKS_BLUE, color: '#fff', padding: '9px 20px',
            borderRadius: '3px', textDecoration: 'none', fontSize: '13px',
            letterSpacing: '0.06em', fontWeight: 600,
          }}>Get a Quote</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px' }}
        >
          <div style={{ width: 22, height: 2, background: BKS_GREY }} />
          <div style={{ width: 22, height: 2, background: BKS_GREY }} />
          <div style={{ width: 22, height: 2, background: BKS_GREY }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99,
          background: '#fff', borderBottom: `2px solid ${BKS_BLUE}`,
          padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
        }}>
          {NAV_LINKS.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} style={{
              textDecoration: 'none', fontSize: '15px',
              color: location.pathname === link.to ? BKS_BLUE : BKS_GREY,
              fontWeight: location.pathname === link.to ? 600 : 400,
            }}>{link.label}</Link>
          ))}
        </div>
      )}

      {/* Page content */}
      <main style={{ paddingTop: '68px' }}>
        {children}
      </main>

      {/* FOOTER */}
      <footer style={{ background: BKS_GREY, color: '#fff', padding: '60px 40px 32px', position: 'relative', overflow: 'hidden' }}>
        <SlashPattern opacity={0.08} color="#fff" />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="four-col" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
            <div>
              <Logo light />
              <p style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontWeight: 300, maxWidth: 260 }}>
                A licensed settlement agency providing conveyancing and property settlement services across Western Australia.
              </p>
              <p style={{ marginTop: '16px', fontSize: '11px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, maxWidth: 260 }}>
                BKS Conveyancing WA is a licensed settlement agency. We are not a legal practice and do not provide legal advice.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 600 }}>Services</p>
              {['Buying Property', 'Selling Property', 'Residential', 'Related Party Transfers', 'Deceased Estates', 'Subdivisions'].map(s => (
                <p key={s} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontWeight: 300 }}>
                  <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>{s}</Link>
                </p>
              ))}
            </div>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 600 }}>Navigation</p>
              {NAV_LINKS.map(link => (
                <p key={link.to} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontWeight: 300 }}>
                  <Link to={link.to} style={{ color: 'inherit', textDecoration: 'none' }}>{link.label}</Link>
                </p>
              ))}
            </div>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px', fontWeight: 600 }}>Contact</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontWeight: 300 }}>Perth, Western Australia</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontWeight: 300 }}>
                <a href="tel:+61800000000" style={{ color: 'inherit', textDecoration: 'none' }}>(08) 0000 0000</a>
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontWeight: 300 }}>
                <a href="mailto:info@bksconveyancing.com.au" style={{ color: 'inherit', textDecoration: 'none' }}>info@bksconveyancing.com.au</a>
              </p>
              <Link to="/quote" style={{
                display: 'inline-block', border: `1px solid ${BKS_BLUE}`, color: BKS_BLUE,
                padding: '10px 20px', fontSize: '12px', letterSpacing: '0.08em', fontWeight: 600,
                textDecoration: 'none', borderRadius: '2px'
              }}>Request a Quote</Link>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>© 2025 BKS Conveyancing WA. All rights reserved.</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>Licensed Settlement Agency — Western Australia</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function SlashPattern({ opacity = 0.05, color = '#0096d6', count = 12 }) {
  const slashes = []
  for (let i = 0; i < count; i++) {
    slashes.push(
      <line key={i} x1={i * 80 - 20} y1="200" x2={i * 80 + 40} y2="-20"
        stroke={color} strokeWidth="1.5" opacity={opacity} />
    )
  }
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} preserveAspectRatio="xMidYMid slice">
      {slashes}
    </svg>
  )
}

export function SectionLabel({ children, light = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
      <div style={{ width: '20px', height: '2px', background: BKS_BLUE }} />
      <span style={{
        fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
        fontWeight: 600, color: light ? 'rgba(255,255,255,0.6)' : BKS_BLUE,
      }}>{children}</span>
    </div>
  )
}

export function SlashDivider({ color = BKS_BLUE }) {
  return (
    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" style={{ display: 'block', margin: '24px 0' }}>
      <path d="M20 22L36 2" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 22L26 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M30 22L46 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

export function CTAButton({ href, to, children, variant = 'primary', style: extraStyle = {}, onClick }) {
  const base = {
    display: 'inline-block', padding: '13px 28px', fontSize: '13px',
    letterSpacing: '0.08em', fontWeight: 600, textDecoration: 'none',
    borderRadius: '3px', transition: 'all 0.2s', cursor: 'pointer', border: 'none',
    ...extraStyle
  }
  const styles = variant === 'primary'
    ? { ...base, background: BKS_BLUE, color: '#fff' }
    : variant === 'outline'
      ? { ...base, background: 'transparent', color: BKS_BLUE, border: `2px solid ${BKS_BLUE}` }
      : { ...base, background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.5)' }

  if (to) return <Link to={to} style={styles}>{children}</Link>
  if (onClick) return <button onClick={onClick} style={styles}>{children}</button>
  return <a href={href} style={styles}>{children}</a>
}
