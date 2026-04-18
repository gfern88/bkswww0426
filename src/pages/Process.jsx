import { Layout, SlashPattern, SectionLabel, SlashDivider, CTAButton, BKS_BLUE, BKS_GREY } from "../components/Layout";

const BUYER_STEPS = [
  {
    num: "01",
    title: "Contract of Sale Signed",
    body: "Once you and the vendor have signed the contract of sale, your copy is forwarded to BKS. We acknowledge receipt and open your settlement file. If you have a finance clause, we note the expiry date and monitor accordingly."
  },
  {
    num: "02",
    title: "Engagement & Searches",
    body: "We send you our engagement letter and authority to act. We then conduct title searches, check for any encumbrances or caveats on the property, and review the contract conditions."
  },
  {
    num: "03",
    title: "Finance Approval & Coordination",
    body: "We liaise with your bank or mortgage broker to obtain settlement instructions and ensure all lender requirements are met in advance of settlement. We coordinate the PEXA workspace and invite all relevant parties."
  },
  {
    num: "04",
    title: "Pre-Settlement Preparation",
    body: "We prepare the Transfer of Land documents, calculate adjustments for council rates, water rates, and land tax, and provide you with a clear settlement statement showing all funds required."
  },
  {
    num: "05",
    title: "Settlement Day",
    body: "Your settlement takes place electronically via PEXA or in person at an attending settlement. We confirm settlement completion, notify you and your agent immediately, and ensure the keys are released to you."
  },
  {
    num: "06",
    title: "Registration & Completion",
    body: "Following settlement, we manage the registration of the Transfer of Land with Landgate and the registration of your mortgage. We confirm all registrations are complete and send you a final settlement report."
  },
];

const VENDOR_STEPS = [
  {
    num: "01",
    title: "Contract Received",
    body: "Once contracts are exchanged, your copy is sent to BKS. We open your vendor settlement file, acknowledge receipt, and note all key dates — including the settlement date, any conditions, and the finance clause if applicable."
  },
  {
    num: "02",
    title: "Engagement & Verification",
    body: "We issue your engagement letter and verify your identity in accordance with WA verification of identity requirements. We review the contract and check the title for any existing encumbrances."
  },
  {
    num: "03",
    title: "Discharge of Mortgage",
    body: "If there is an existing mortgage on the property, we contact your bank to order a discharge of mortgage. We manage this process and ensure the discharge is ready in time for settlement."
  },
  {
    num: "04",
    title: "Transfer Documents & Adjustments",
    body: "We prepare the Transfer of Land document and co-ordinate execution. We calculate all rate and tax adjustments, and prepare your vendor settlement statement showing net proceeds."
  },
  {
    num: "05",
    title: "Settlement Day",
    body: "Settlement takes place electronically via PEXA or in person. We confirm completion, notify you and your agent, and ensure funds are distributed correctly. Key release is authorised upon settlement."
  },
  {
    num: "06",
    title: "Final Accounting",
    body: "We reconcile all settlement funds and provide your final settlement statement. Any outstanding adjustments for water usage, rent, or other matters are handled and confirmed in writing."
  },
];

const FAQ = [
  {
    q: "How long does settlement take in WA?",
    a: "The settlement period is usually agreed in the contract of sale — typically 30 to 60 days from the contract date for most residential transactions. However, this can vary depending on the type of transaction and the parties involved."
  },
  {
    q: "What is PEXA and do I need it?",
    a: "PEXA is the national electronic conveyancing platform used for most property settlements in Australia. In Western Australia, PEXA is now standard for most transactions. BKS is fully equipped and operational on PEXA. You don't need to do anything — we manage the electronic workspace on your behalf."
  },
  {
    q: "What is transfer duty and who pays it?",
    a: "Transfer duty (formerly stamp duty) is a state government tax payable by the buyer on the purchase of property in Western Australia. The amount depends on the purchase price and your eligibility for any concessions, such as the first home buyer duty concession or the principal place of residence rebate."
  },
  {
    q: "Do I need a lawyer as well as a settlement agent?",
    a: "For most residential property transactions in WA, a licensed settlement agent is all you need. We manage the entire conveyancing and settlement process. If your transaction involves a legal dispute, a complex commercial matter, or requires formal legal advice, we will let you know and refer you accordingly."
  },
  {
    q: "What happens if settlement is delayed?",
    a: "Delays can occur for a range of reasons — finance issues, searches, or unresolved conditions. BKS monitors all settlement files proactively and communicates any issues to you as soon as they arise. We work to resolve delays quickly and keep all parties informed."
  },
  {
    q: "Can I do my own conveyancing in WA?",
    a: "In Western Australia, you are permitted to handle your own conveyancing in limited circumstances — however it is complex, time-consuming, and carries real risk if errors are made. Most buyers and vendors engage a licensed settlement agent to manage the process properly."
  },
];

export default function Process() {
  return (
    <Layout>
      {/* PAGE HERO */}
      <section style={{ background: BKS_GREY, padding: "80px 40px 64px", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.1} color={BKS_BLUE} count={12} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel light>The Settlement Process</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", maxWidth: 680 }}>
            What happens between<br />contract and settlement?
          </h1>
          <p style={{ marginTop: "20px", fontSize: "17px", color: "rgba(255,255,255,0.65)", fontWeight: 300, maxWidth: 520 }}>
            The WA settlement process explained clearly — step by step, for buyers and sellers.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "72px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <SlashDivider color={BKS_BLUE} />
          <p style={{ fontSize: "18px", color: "#6b7a84", lineHeight: 1.8, marginBottom: "16px", fontWeight: 300 }}>
            Property settlement in Western Australia follows a structured process governed by the Settlement Agents Act 1981 and managed through Landgate. It involves multiple parties — buyers, vendors, banks, agents, and government bodies — all coordinated by your settlement agent.
          </p>
          <p style={{ fontSize: "16px", color: "#8a9aa4", lineHeight: 1.8, fontWeight: 300 }}>
            BKS manages every step of this process on your behalf. Here's what you can expect.
          </p>
        </div>
      </section>

      {/* BUYER PROCESS */}
      <section style={{ padding: "72px 40px", background: "#f7f9fa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <SectionLabel>For Buyers</SectionLabel>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: BKS_GREY, letterSpacing: "-0.01em" }}>The buyer settlement process</h2>
          </div>
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "23px", top: "28px", bottom: "28px", width: "1px", background: `${BKS_BLUE}30` }} />
            {BUYER_STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "40px", marginBottom: "48px", position: "relative" }}>
                <div style={{
                  width: "48px", height: "48px", background: i === 0 ? BKS_BLUE : "#fff",
                  border: `2px solid ${BKS_BLUE}`, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, position: "relative", zIndex: 1
                }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: i === 0 ? "#fff" : BKS_BLUE }}>{step.num}</span>
                </div>
                <div style={{ background: "#fff", padding: "28px 32px", flex: 1, borderLeft: `3px solid ${i === 0 ? BKS_BLUE : "transparent"}`, boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: BKS_GREY, marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ fontSize: "14px", color: "#8a9aa4", lineHeight: 1.75, fontWeight: 300 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENDOR PROCESS */}
      <section style={{ padding: "72px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <SectionLabel>For Vendors</SectionLabel>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: BKS_GREY, letterSpacing: "-0.01em" }}>The vendor settlement process</h2>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "23px", top: "28px", bottom: "28px", width: "1px", background: `${BKS_GREY}20` }} />
            {VENDOR_STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "40px", marginBottom: "48px", position: "relative" }}>
                <div style={{
                  width: "48px", height: "48px", background: i === 0 ? BKS_GREY : "#fff",
                  border: `2px solid ${BKS_GREY}`, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, position: "relative", zIndex: 1
                }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: i === 0 ? "#fff" : BKS_GREY }}>{step.num}</span>
                </div>
                <div style={{ background: "#f7f9fa", padding: "28px 32px", flex: 1, borderLeft: `3px solid ${i === 0 ? BKS_GREY : "transparent"}`, boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: BKS_GREY, marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ fontSize: "14px", color: "#8a9aa4", lineHeight: 1.75, fontWeight: 300 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 40px", background: "#f7f9fa", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.04} color={BKS_GREY} count={10} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <SectionLabel>Common Questions</SectionLabel>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: BKS_GREY, letterSpacing: "-0.01em" }}>Settlement FAQ</h2>
          </div>
          {FAQ.map((item, i) => (
            <div key={i} style={{
              background: "#fff", padding: "32px 36px", marginBottom: "12px",
              borderLeft: `3px solid ${BKS_BLUE}`, boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
            }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: BKS_GREY, marginBottom: "10px" }}>{item.q}</h3>
              <p style={{ fontSize: "14px", color: "#8a9aa4", lineHeight: 1.75, fontWeight: 300 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", background: BKS_BLUE, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.1} color="#fff" count={12} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>Ready to get your settlement moving?</h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", marginBottom: "32px", fontWeight: 300 }}>Send us your contract or request a quote to get started.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <CTAButton to="/quote" variant="ghost">Request a Quote</CTAButton>
            <CTAButton to="/contact" variant="ghost">Contact BKS</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
