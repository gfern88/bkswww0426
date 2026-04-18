import { Layout, SlashPattern, SectionLabel, SlashDivider, CTAButton, BKS_BLUE, BKS_GREY } from "../components/Layout";

const SERVICES = [
  {
    id: "buying",
    title: "Buying Property in WA",
    tag: "Buyer",
    body: `Purchasing property in Western Australia involves a clear legal process — and getting it right from the moment you sign a contract is essential.

BKS manages your purchase settlement from contract receipt through to key handover. We conduct title searches, prepare transfer documents, liaise with your bank and the vendor's settlement agent, and ensure all adjustments for rates and taxes are calculated accurately.

We keep you informed throughout, and we complete your settlement on time.`,
    points: [
      "Title and encumbrance searches",
      "Transfer of Land document preparation",
      "Bank and lender coordination",
      "Rates and taxes adjustment",
      "PEXA electronic settlement",
      "Landgate registration",
    ]
  },
  {
    id: "selling",
    title: "Selling Property in WA",
    tag: "Vendor",
    body: `Selling your property involves more than just accepting an offer. Your settlement agent coordinates the discharge of any existing mortgage, prepares the transfer documents, and ensures all settlement conditions are met before funds are released.

BKS manages your vendor settlement with precision — from contract receipt to final accounting and key release, keeping you clearly informed at every milestone.`,
    points: [
      "Discharge of mortgage coordination",
      "Transfer of Land preparation",
      "Settlement statement preparation",
      "Final accounting and adjustment",
      "PEXA electronic settlement",
      "Agent and buyer coordination",
    ]
  },
  {
    id: "residential",
    title: "Residential Conveyancing",
    tag: "Residential",
    body: `Residential conveyancing is the core of what we do. Whether you are buying your first home, upgrading, downsizing, or investing — BKS provides structured, reliable settlement management across all residential property transactions in Western Australia.

We manage houses, units, apartments, vacant land, and strata titles. Every file is handled with the same level of care.`,
    points: [
      "Houses and apartments",
      "Strata and survey-strata titles",
      "Vacant land purchases",
      "Investment property settlements",
      "First home buyer settlements",
    ]
  },
  {
    id: "related-party",
    title: "Related Party Transfers",
    tag: "Transfer",
    body: `Related party transfers involve the movement of property between family members, spouses, business partners, companies, or other related entities. These transactions are often more nuanced than standard purchases or sales, and they require careful attention to the specific requirements of the Office of State Revenue.

BKS has experience managing these transfers correctly — including the correct assessment of transfer duty liability and any applicable exemptions.`,
    points: [
      "Family transfers",
      "Spouse and de facto transfers",
      "Company and trust transfers",
      "Transfer duty assessment support",
      "Exemption and concession guidance",
    ]
  },
  {
    id: "deceased-estates",
    title: "Deceased Estate Transfers",
    tag: "Estate",
    body: `The transfer of property arising from a deceased estate is a sensitive process that requires careful handling of both the documentation and the people involved.

BKS manages the conveyancing component of deceased estate transfers with care, structure, and clear communication — working with executors, administrators, and their legal representatives to complete the transfer accurately and in a timely manner.`,
    points: [
      "Transfer to beneficiaries",
      "Transmission applications",
      "Coordination with estate lawyers",
      "Landgate lodgement",
      "Sensitive and structured handling",
    ]
  },
  {
    id: "off-the-plan",
    title: "Off-the-Plan Purchases",
    tag: "Off-the-Plan",
    body: `Off-the-plan settlements differ from standard resale transactions — there are additional considerations around construction completion, strata plan registration, sunset clauses, and the timing of settlement.

BKS monitors your off-the-plan file from pre-settlement through to registration, ensuring all conditions are tracked and your settlement completes correctly when the property is ready.`,
    points: [
      "New development settlements",
      "Strata plan registration monitoring",
      "Sunset clause tracking",
      "Builder and developer liaison",
      "Staged release management",
    ]
  },
  {
    id: "title-transfers",
    title: "Title Transfers",
    tag: "Title",
    body: `Title transfer matters arise in a range of situations — changing the names on a title, adding or removing a party, severing joint tenancy, or transferring a title for no consideration.

BKS manages all forms of title transfer in Western Australia, ensuring the correct documentation is prepared and registered with Landgate.`,
    points: [
      "Adding or removing a name",
      "Severing joint tenancy",
      "Transfer for natural love and affection",
      "Gifted property transfers",
      "Correct Landgate registration",
    ]
  },
  {
    id: "subdivisions",
    title: "Subdivisions",
    tag: "Subdivision",
    body: `Subdivision settlements require coordination across multiple lots, registration of new survey-strata plans, and management of any encumbrances or caveats affecting the individual titles.

BKS manages residential and small-scale subdivision settlements, working alongside surveyors, developers, councils, and Landgate to complete the process correctly.`,
    points: [
      "Survey-strata and green title subdivisions",
      "Multi-lot settlement management",
      "New title registration",
      "Landgate coordination",
      "Developer and surveyor liaison",
    ]
  },
  {
    id: "commercial",
    title: "Commercial Settlements",
    tag: "Commercial",
    body: `BKS manages selected commercial property settlements — including the transfer of commercial freehold titles, commercial strata lots, and small-scale commercial transactions where a licensed settlement agent is appropriate.

If your commercial matter requires a legal practitioner, we will tell you clearly and assist with the referral.`,
    points: [
      "Commercial freehold transfers",
      "Commercial strata settlements",
      "Retail and small commercial lots",
      "Landgate registration",
      "GST and duty assessment support",
    ]
  },
  {
    id: "pexa",
    title: "Electronic Settlement via PEXA",
    tag: "PEXA",
    body: `PEXA (Property Exchange Australia) is the national electronic conveyancing platform, now standard for most property settlements in Western Australia.

BKS is fully equipped and operational on PEXA for all eligible transactions. Electronic settlement streamlines the process, reduces the risk of delays, and provides real-time confirmation of completion for all parties.`,
    points: [
      "Fully PEXA-registered and operational",
      "Buyer and vendor electronic settlements",
      "Real-time settlement confirmation",
      "Bank and lender digital coordination",
      "Available for all eligible WA transactions",
    ]
  },
];

export default function Services() {
  return (
    <Layout>
      {/* PAGE HERO */}
      <section style={{ background: BKS_GREY, padding: "80px 40px 64px", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.1} color={BKS_BLUE} count={12} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel light>Settlement Services</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", maxWidth: 640 }}>
            Conveyancing services across Western Australia
          </h1>
          <p style={{ marginTop: "20px", fontSize: "17px", color: "rgba(255,255,255,0.65)", fontWeight: 300, maxWidth: 520 }}>
            From standard residential settlements to complex transactions — BKS manages the full range of conveyancing and settlement services in WA.
          </p>
        </div>
      </section>

      {/* SERVICE INDEX */}
      <section style={{ padding: "40px 40px 0", background: "#f7f9fa", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", paddingBottom: "16px" }}>
            {SERVICES.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{
                padding: "6px 14px", background: "#fff", border: "1px solid rgba(69,85,96,0.15)",
                borderRadius: "2px", fontSize: "12px", color: BKS_GREY, textDecoration: "none",
                letterSpacing: "0.04em", fontWeight: 500, transition: "all 0.2s",
                fontFamily: "Seravek, sans-serif"
              }}>{s.tag}</a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section style={{ padding: "0 40px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {SERVICES.map((service, i) => (
            <div key={service.id} id={service.id} style={{
              padding: "64px 0",
              borderBottom: "1px solid rgba(69,85,96,0.1)",
              display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px",
              alignItems: "start"
            }}>
              {/* Label column */}
              <div style={{ paddingTop: "8px", position: "sticky", top: "88px" }}>
                <span style={{
                  display: "inline-block",
                  padding: "4px 12px", background: `${BKS_BLUE}15`,
                  color: BKS_BLUE, fontSize: "11px", letterSpacing: "0.16em",
                  textTransform: "uppercase", fontWeight: 700, marginBottom: "16px", borderRadius: "2px"
                }}>{service.tag}</span>
                <h2 style={{ fontSize: "24px", fontWeight: 700, color: BKS_GREY, lineHeight: 1.2 }}>{service.title}</h2>
                <SlashDivider />
                <CTAButton to="/quote" variant="outline" style={{ fontSize: "12px", padding: "9px 20px", marginTop: "8px" }}>Get a Quote</CTAButton>
              </div>

              {/* Content column */}
              <div>
                {service.body.split('\n\n').map((para, j) => (
                  <p key={j} style={{ fontSize: "15px", color: "#6b7a84", lineHeight: 1.8, marginBottom: "16px", fontWeight: 300 }}>{para}</p>
                ))}
                <div style={{ marginTop: "28px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: BKS_BLUE, fontWeight: 700, marginBottom: "16px" }}>What we manage</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    {service.points.map((point, k) => (
                      <div key={k} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" style={{ marginTop: 3, flexShrink: 0 }}>
                          <path d="M12 4L4 12" stroke={BKS_BLUE} strokeWidth="2" strokeLinecap="round"/>
                          <path d="M8 4L0 12" stroke={BKS_BLUE} strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
                        </svg>
                        <span style={{ fontSize: "13px", color: BKS_GREY, fontWeight: 400 }}>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", background: BKS_BLUE, position: "relative", overflow: "hidden", textAlign: "center" }}>
        <SlashPattern opacity={0.1} color="#fff" count={12} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>Not sure which service you need?</h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", marginBottom: "32px", fontWeight: 300 }}>We'll work it out together. Get in touch and tell us about your transaction.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <CTAButton to="/contact" variant="ghost">Contact Us</CTAButton>
            <CTAButton to="/quote" variant="ghost">Request a Quote</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
