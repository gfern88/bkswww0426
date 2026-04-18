import { Layout, SlashPattern, SectionLabel, SlashDivider, CTAButton, BKS_BLUE, BKS_GREY } from "../components/Layout";

export default function About() {
  return (
    <Layout>
      {/* PAGE HERO */}
      <section style={{ background: "#f7f9fa", padding: "80px 40px 64px", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.05} color={BKS_BLUE} count={10} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel>About BKS</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, color: BKS_GREY, letterSpacing: "-0.02em", maxWidth: 640 }}>
            A boutique settlement agency built on process, precision, and trust.
          </h1>
        </div>
      </section>

      {/* MAIN INTRO */}
      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <SlashDivider />
            <p style={{ fontSize: "18px", color: BKS_GREY, lineHeight: 1.75, marginBottom: "24px", fontWeight: 300 }}>
              BKS Conveyancing WA is a Perth-based licensed settlement agency providing professional conveyancing and property settlement services across Western Australia.
            </p>
            <p style={{ fontSize: "16px", color: "#6b7a84", lineHeight: 1.8, marginBottom: "24px", fontWeight: 300 }}>
              We operate as a boutique practice — which means every client, every file, and every transaction receives proper attention. We are not a high-volume processing operation. We are a structured, experienced team that takes settlement seriously.
            </p>
            <p style={{ fontSize: "16px", color: "#6b7a84", lineHeight: 1.8, fontWeight: 300 }}>
              Property settlement is one of the most significant transactions most people ever undertake. Our role is to make that process smooth, compliant, and clearly communicated — so our clients can focus on what matters, knowing the settlement is in capable hands.
            </p>
          </div>
          <div>
            <div style={{ background: "#f7f9fa", borderRadius: "4px", padding: "48px", borderLeft: `4px solid ${BKS_BLUE}`, position: "relative", overflow: "hidden" }}>
              <SlashPattern opacity={0.06} color={BKS_BLUE} count={6} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: BKS_BLUE, fontWeight: 600, marginBottom: "20px" }}>Our Foundation</p>
                {[
                  "Licensed settlement agency — Western Australia",
                  "Residential, related party, and complex transactions",
                  "PEXA-equipped for electronic conveyancing",
                  "Structured workflows and clear communication",
                  "Modern settlement management systems",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "18px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" style={{ marginTop: 2, flexShrink: 0 }}>
                      <path d="M14 5L5 14" stroke={BKS_BLUE} strokeWidth="2" strokeLinecap="round"/>
                      <path d="M10 5L1 14" stroke={BKS_BLUE} strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
                    </svg>
                    <p style={{ fontSize: "14px", color: BKS_GREY, lineHeight: 1.5, fontWeight: 400 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "80px 40px", background: "#f7f9fa", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.04} color={BKS_GREY} count={10} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <SectionLabel>How We Work</SectionLabel>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: BKS_GREY, letterSpacing: "-0.01em" }}>The BKS approach</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              {
                label: "Structured Process",
                body: "Every settlement file follows a consistent, documented workflow. Checklists, timelines, and internal milestones are built into how we operate — not added as an afterthought."
              },
              {
                label: "Genuine Communication",
                body: "We keep clients informed at every meaningful stage. You'll always know what's happening, what comes next, and who to contact if you have a question."
              },
              {
                label: "Experienced Practitioners",
                body: "Our team brings real depth of experience to property settlements in Western Australia. We've managed straightforward transactions and complex ones — and we approach both with the same level of care."
              },
              {
                label: "Modern Systems",
                body: "We use current settlement management technology, are fully set up for PEXA electronic settlements, and keep our systems updated as the industry evolves."
              },
              {
                label: "Attention to Detail",
                body: "In conveyancing, the details matter enormously. Incorrect amounts, missed searches, or miscalculated adjustments can cause real problems. We take that seriously."
              },
              {
                label: "WA-Specific Knowledge",
                body: "We work only in Western Australia, which means our knowledge of local legislation, Landgate procedures, and the Office of State Revenue requirements is current, specific, and applied."
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: "#fff", padding: "36px 32px",
                borderTop: `2px solid ${i < 3 ? BKS_BLUE : "transparent"}`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)"
              }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: BKS_GREY, marginBottom: "12px" }}>{item.label}</h3>
                <p style={{ fontSize: "13px", color: "#8a9aa4", lineHeight: 1.7, fontWeight: 300 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE STATEMENT */}
      <section style={{ padding: "60px 40px", background: BKS_GREY }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "48px", alignItems: "center" }}>
          <svg width="3" height="80" viewBox="0 0 3 80" style={{ flexShrink: 0 }}>
            <rect width="3" height="80" fill={BKS_BLUE} />
          </svg>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: BKS_BLUE, fontWeight: 600, marginBottom: "12px" }}>Licensing & Compliance</p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, fontWeight: 300, maxWidth: 760 }}>
              BKS Conveyancing WA is a licensed settlement agency in Western Australia. We provide conveyancing and settlement services in accordance with the Settlement Agents Act 1981 (WA). We are not a legal practice and we do not provide legal advice. If your matter requires legal advice, we will let you know and refer you to an appropriate legal practitioner.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", background: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700, color: BKS_GREY, marginBottom: "16px" }}>Ready to talk about your settlement?</h2>
        <p style={{ fontSize: "15px", color: "#8a9aa4", marginBottom: "36px", fontWeight: 300 }}>We're straightforward to deal with. Get in touch or request a quote.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <CTAButton to="/quote">Request a Quote</CTAButton>
          <CTAButton to="/contact" variant="outline">Contact Us</CTAButton>
        </div>
      </section>
    </Layout>
  );
}
