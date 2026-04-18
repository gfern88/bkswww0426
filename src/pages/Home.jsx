import { Link } from 'react-router-dom'
import { Layout, SlashPattern, SectionLabel, SlashDivider, CTAButton, BKS_BLUE, BKS_GREY } from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section style={{ minHeight: '92vh', background: BKS_GREY, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <SlashPattern opacity={0.12} color="#0096d6" count={16} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '38%', background: BKS_BLUE, opacity: 0.08, clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 40px', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 680 }}>
            <SectionLabel light>Perth Settlement Agency · Western Australia</SectionLabel>
            <h1 style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: '28px', letterSpacing: '-0.02em' }}>
              Structured.<br />Precise.<br /><span style={{ color: BKS_BLUE }}>Settled.</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 520, marginBottom: '40px', fontWeight: 300 }}>
              BKS Conveyancing WA manages property settlements across Western Australia with a focus on accuracy, compliance, and clear communication at every stage of the transaction.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <CTAButton to="/quote" variant="primary">Request a Quote</CTAButton>
              <CTAButton to="/contact" variant="ghost">Speak With a Conveyancer</CTAButton>
              <CTAButton to="/contact" variant="ghost">Send Us Your Contract</CTAButton>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.3)' }} />
          <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        </div>
      </section>

      {/* WHAT IS A SETTLEMENT AGENT */}
      <section style={{ padding: '100px 40px', background: '#fff' }}>
        <div className="two-col" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: BKS_GREY, lineHeight: 1.2, marginBottom: '24px', letterSpacing: '-0.01em' }}>
              What does a settlement agent do in WA?
            </h2>
            <SlashDivider />
            <p style={{ fontSize: '16px', color: '#6b7a84', lineHeight: 1.8, marginBottom: '16px', fontWeight: 300 }}>
              In Western Australia, a licensed settlement agent — also called a conveyancer — manages the legal and administrative process of transferring property ownership from one party to another.
            </p>
            <p style={{ fontSize: '16px', color: '#6b7a84', lineHeight: 1.8, marginBottom: '16px', fontWeight: 300 }}>
              We coordinate with banks, real estate agents, Landgate, the Office of State Revenue, and all other parties to ensure your settlement completes on time, accurately, and in compliance with WA legislation.
            </p>
            <p style={{ fontSize: '16px', color: '#6b7a84', lineHeight: 1.8, fontWeight: 300 }}>
              Whether you are buying, selling, or transferring property — BKS manages the entire settlement process on your behalf, keeping you informed throughout.
            </p>
          </div>
          <div>
            <div style={{ background: '#f4f7f9', borderRadius: '4px', padding: '48px', borderLeft: `4px solid ${BKS_BLUE}`, position: 'relative', overflow: 'hidden' }}>
              <SlashPattern opacity={0.06} color={BKS_BLUE} count={8} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                {[
                  { icon: '⚡', title: 'PEXA Electronic Settlements', desc: 'Fully equipped for digital settlement via the PEXA platform.' },
                  { icon: '📋', title: 'Legislation-Aware', desc: 'Deep knowledge of WA settlement legislation and Landgate requirements.' },
                  { icon: '🔔', title: 'Clear Communication', desc: 'Regular updates throughout your transaction — no surprises.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < 2 ? '32px' : 0 }}>
                    <div style={{ width: '40px', height: '40px', background: BKS_BLUE, borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <p style={{ fontWeight: 700, color: BKS_GREY, fontSize: '14px', marginBottom: '4px', letterSpacing: '0.04em' }}>{item.title}</p>
                      <p style={{ fontSize: '13px', color: '#8a9aa4', lineHeight: 1.6, fontWeight: 300 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section style={{ padding: '100px 40px', background: '#f7f9fa', position: 'relative', overflow: 'hidden' }}>
        <SlashPattern opacity={0.04} color={BKS_GREY} count={14} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <SectionLabel>How It Works</SectionLabel>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: BKS_GREY, letterSpacing: '-0.01em' }}>Simple. Structured. Sorted.</h2>
          </div>
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
            {[
              { num: '01', title: 'Engage BKS', body: 'Send us your signed contract or request a quote. We\'ll acknowledge promptly and issue your engagement documents within one business day.' },
              { num: '02', title: 'We Handle Everything', body: 'From title searches and bank coordination to Landgate lodgement and rate adjustments — our team manages every step of your settlement file.' },
              { num: '03', title: 'Settlement Day', body: 'Your settlement completes on time. We notify all parties, and the keys are yours. We follow up with final settlement confirmation and any post-settlement matters.' }
            ].map((step, i) => (
              <div key={i} style={{ background: '#fff', padding: '40px 36px', position: 'relative', overflow: 'hidden', borderTop: `3px solid ${i === 1 ? BKS_BLUE : 'transparent'}`, boxShadow: i === 1 ? '0 8px 40px rgba(0,150,214,0.1)' : '0 2px 16px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '52px', fontWeight: 700, color: i === 1 ? BKS_BLUE : 'rgba(69,85,96,0.12)', lineHeight: 1, display: 'block', marginBottom: '20px', letterSpacing: '-0.02em' }}>{step.num}</span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: BKS_GREY, marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: '#8a9aa4', lineHeight: 1.7, fontWeight: 300 }}>{step.body}</p>
                <svg style={{ position: 'absolute', bottom: 0, right: 0 }} width="60" height="60" viewBox="0 0 60 60">
                  <path d="M60 20L20 60" stroke={BKS_BLUE} strokeWidth="1.5" opacity="0.15" />
                  <path d="M60 35L35 60" stroke={BKS_BLUE} strokeWidth="1.5" opacity="0.1" />
                </svg>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <CTAButton to="/process">View Full Process</CTAButton>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: '100px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <SectionLabel>Our Services</SectionLabel>
              <h2 style={{ fontSize: '36px', fontWeight: 700, color: BKS_GREY, letterSpacing: '-0.01em' }}>Settlement services<br />across Western Australia</h2>
            </div>
            <CTAButton to="/services" variant="outline">All Services</CTAButton>
          </div>
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {[
              { title: 'Buying Property', desc: 'Residential purchases across Perth and regional WA, managed with precision from contract to settlement.' },
              { title: 'Selling Property', desc: 'Vendor settlements handled efficiently, with coordination of discharge of mortgage and key release.' },
              { title: 'Related Party Transfers', desc: 'Transfers between family members, companies, or related entities — handled with care and full compliance.' },
              { title: 'Deceased Estates', desc: 'Sensitive and structured management of property transfers arising from deceased estates.' },
              { title: 'Off-the-Plan', desc: 'Specialised settlement management for new developments, staged releases, and sunset clause monitoring.' },
              { title: 'PEXA Electronic Settlement', desc: 'Fully equipped for electronic conveyancing via the PEXA platform across all eligible transactions.' },
              { title: 'Subdivisions & Commercial', desc: 'Structural settlements, strata, and selected commercial transactions managed by experienced practitioners.' },
              { title: 'Title Transfers', desc: 'Name changes, severing joint tenancy, and other title variations registered correctly with Landgate.' },
              { title: 'Residential Conveyancing', desc: 'Full-service residential conveyancing for buyers and sellers throughout Western Australia.' },
            ].map((s, i) => (
              <Link key={i} to="/services" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '36px 32px', background: i % 2 === 0 ? '#fff' : '#f7f9fa', borderLeft: '3px solid transparent', transition: 'all 0.2s', cursor: 'pointer', position: 'relative', overflow: 'hidden', minHeight: '160px' }}
                  onMouseEnter={e => { e.currentTarget.style.borderLeftColor = BKS_BLUE; e.currentTarget.style.background = '#f0f8fd' }}
                  onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = i % 2 === 0 ? '#fff' : '#f7f9fa' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: BKS_GREY, marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: '#8a9aa4', lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</p>
                  <svg style={{ position: 'absolute', bottom: 8, right: 12 }} width="28" height="28" viewBox="0 0 28 28">
                    <path d="M28 8L8 28" stroke={BKS_BLUE} strokeWidth="1.5" opacity="0.15" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BKS */}
      <section style={{ padding: '100px 40px', background: BKS_GREY, position: 'relative', overflow: 'hidden' }}>
        <SlashPattern opacity={0.08} color={BKS_BLUE} count={14} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <SectionLabel light>Why Clients Choose BKS</SectionLabel>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>What makes BKS different</h2>
          </div>
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {[
              { title: 'Boutique, Not a Factory', body: 'We are not a volume conveyancing operation. Every file receives the attention it deserves — managed by experienced practitioners, not processing staff.' },
              { title: 'Genuine Communication', body: 'You will always know where your settlement is. We provide clear, timely updates without jargon, and we are genuinely accessible when you need us.' },
              { title: 'Process-Driven Precision', body: 'Our workflows are structured, documented, and followed consistently — so nothing slips through, no matter the complexity of the transaction.' },
              { title: 'WA Legislation Knowledge', body: 'We work exclusively within Western Australia\'s settlement framework and maintain current knowledge of legislation, Landgate requirements, and duty obligations.' },
              { title: 'Technology-Forward', body: 'BKS uses modern settlement management systems and is fully equipped for PEXA electronic conveyancing across all eligible transactions.' },
              { title: 'Complex Transactions Welcome', body: 'From deceased estates and related party transfers to subdivisions and off-the-plan purchases — we have the experience and the systems to manage complexity.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '3px', padding: '36px', borderLeft: `3px solid ${BKS_BLUE}` }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontWeight: 300 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '80px 40px', background: BKS_BLUE, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <SlashPattern opacity={0.1} color="#fff" count={12} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '16px', letterSpacing: '-0.01em' }}>Ready to get started?</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '36px', fontWeight: 300 }}>Request a quote, send through your contract, or call us to discuss your settlement.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CTAButton to="/quote" variant="ghost">Request a Quote</CTAButton>
            <CTAButton to="/contact" variant="ghost">Contact Us</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  )
}
