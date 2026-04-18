import { Layout, SlashPattern, SectionLabel, SlashDivider, CTAButton, BKS_BLUE, BKS_GREY } from "../components/Layout";

const BUYER_CHECKLIST = [
  "Contract of sale signed by all parties",
  "Finance pre-approval obtained (if applicable)",
  "Finance condition satisfied or waived",
  "Building and pest inspection completed",
  "Settlement agent engaged (BKS Conveyancing WA)",
  "Verification of identity completed",
  "Bank / lender instructed and settlement instructions provided",
  "Settlement statement reviewed and funds prepared",
  "Final property inspection completed",
  "Settlement confirmed — keys received",
  "Landgate registration of Transfer of Land confirmed",
  "Change of address notifications sent (council, water corp, ATO, etc.)",
];

const SELLER_CHECKLIST = [
  "Contract of sale signed and copy forwarded to settlement agent",
  "Settlement agent engaged (BKS Conveyancing WA)",
  "Verification of identity completed",
  "Discharge of mortgage ordered from your bank (if applicable)",
  "Transfer of Land documents signed and returned",
  "Settlement statement reviewed",
  "Settlement confirmed and funds received",
  "Keys and garage remotes handed over to agent",
  "Meter readings taken before vacating",
  "Cancel home and contents insurance post-settlement",
  "Update your address with relevant authorities",
];

export default function Resources() {
  return (
    <Layout>
      {/* PAGE HERO */}
      <section style={{ background: "#f7f9fa", padding: "80px 40px 64px", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.05} color={BKS_BLUE} count={10} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel>Resources</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, color: BKS_GREY, letterSpacing: "-0.02em", maxWidth: 640 }}>
            Helpful information for WA property transactions
          </h1>
          <p style={{ marginTop: "20px", fontSize: "17px", color: "#8a9aa4", fontWeight: 300, maxWidth: 520 }}>
            Clear, practical information to help you understand the settlement process, your costs, and your options.
          </p>
        </div>
      </section>

      {/* CHECKLISTS */}
      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>Checklists</SectionLabel>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: BKS_GREY, marginBottom: "48px", letterSpacing: "-0.01em" }}>Settlement checklists</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {/* Buyer checklist */}
            <div style={{ background: "#f7f9fa", padding: "40px", borderTop: `3px solid ${BKS_BLUE}` }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: BKS_BLUE, fontWeight: 700, marginBottom: "20px" }}>Buyer Checklist</p>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: BKS_GREY, marginBottom: "28px" }}>When you're buying property in WA</h3>
              {BUYER_CHECKLIST.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "14px" }}>
                  <div style={{
                    width: "20px", height: "20px", border: `2px solid ${BKS_BLUE}`,
                    borderRadius: "2px", flexShrink: 0, marginTop: "1px"
                  }} />
                  <span style={{ fontSize: "13px", color: "#6b7a84", lineHeight: 1.5, fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>
            {/* Seller checklist */}
            <div style={{ background: "#f7f9fa", padding: "40px", borderTop: `3px solid ${BKS_GREY}` }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: BKS_GREY, fontWeight: 700, marginBottom: "20px" }}>Vendor Checklist</p>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: BKS_GREY, marginBottom: "28px" }}>When you're selling property in WA</h3>
              {SELLER_CHECKLIST.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "14px" }}>
                  <div style={{
                    width: "20px", height: "20px", border: `2px solid ${BKS_GREY}`,
                    borderRadius: "2px", flexShrink: 0, marginTop: "1px"
                  }} />
                  <span style={{ fontSize: "13px", color: "#6b7a84", lineHeight: 1.5, fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOINT TENANTS VS TENANTS IN COMMON */}
      <section style={{ padding: "80px 40px", background: "#f7f9fa", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.04} color={BKS_GREY} count={10} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel>Ownership Structures</SectionLabel>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: BKS_GREY, marginBottom: "12px", letterSpacing: "-0.01em" }}>Joint tenants vs tenants in common</h2>
          <p style={{ fontSize: "15px", color: "#8a9aa4", maxWidth: 620, marginBottom: "48px", fontWeight: 300, lineHeight: 1.7 }}>
            When two or more people purchase property together in Western Australia, they need to decide how they will hold the title. The two most common forms of co-ownership are joint tenancy and tenants in common.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ background: "#fff", padding: "40px", borderLeft: `4px solid ${BKS_BLUE}` }}>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: BKS_GREY, marginBottom: "16px" }}>Joint Tenants</h3>
              <SlashDivider />
              <p style={{ fontSize: "14px", color: "#6b7a84", lineHeight: 1.8, marginBottom: "16px", fontWeight: 300 }}>
                Joint tenants own the property equally and together. The key feature of joint tenancy is the <strong>right of survivorship</strong> — if one owner dies, their share automatically passes to the surviving owner(s) regardless of what the deceased's will says.
              </p>
              <p style={{ fontSize: "14px", color: "#6b7a84", lineHeight: 1.8, marginBottom: "20px", fontWeight: 300 }}>
                Joint tenancy is commonly used by married couples or de facto partners who intend for the property to pass to the surviving spouse on death.
              </p>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "20px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "10px", letterSpacing: "0.06em" }}>Key features:</p>
                {["Equal ownership shares", "Right of survivorship applies", "Cannot leave your share in a will", "Can be severed and converted to tenants in common"].map((f, i) => (
                  <p key={i} style={{ fontSize: "13px", color: "#8a9aa4", marginBottom: "6px", fontWeight: 300 }}>— {f}</p>
                ))}
              </div>
            </div>
            <div style={{ background: "#fff", padding: "40px", borderLeft: `4px solid ${BKS_GREY}` }}>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: BKS_GREY, marginBottom: "16px" }}>Tenants in Common</h3>
              <SlashDivider color={BKS_GREY} />
              <p style={{ fontSize: "14px", color: "#6b7a84", lineHeight: 1.8, marginBottom: "16px", fontWeight: 300 }}>
                Tenants in common each hold a defined share of the property — which may or may not be equal. There is <strong>no right of survivorship</strong>: each owner's share forms part of their estate on death and passes in accordance with their will or intestacy laws.
              </p>
              <p style={{ fontSize: "14px", color: "#6b7a84", lineHeight: 1.8, marginBottom: "20px", fontWeight: 300 }}>
                Tenants in common is often preferred by investors, business partners, or co-purchasers who want to protect their individual share and reflect unequal financial contributions.
              </p>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "20px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "10px", letterSpacing: "0.06em" }}>Key features:</p>
                {["Defined shares (equal or unequal)", "No right of survivorship", "Can leave your share in a will", "Each owner can deal with their share independently"].map((f, i) => (
                  <p key={i} style={{ fontSize: "13px", color: "#8a9aa4", marginBottom: "6px", fontWeight: 300 }}>— {f}</p>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: "24px", background: `${BKS_BLUE}10`, border: `1px solid ${BKS_BLUE}30`, borderRadius: "3px", padding: "20px 24px" }}>
            <p style={{ fontSize: "13px", color: BKS_GREY, lineHeight: 1.6, fontWeight: 300 }}>
              <strong style={{ fontWeight: 700 }}>Note:</strong> Choosing the right ownership structure is an important decision. BKS can explain the conveyancing implications of each option, but we recommend obtaining financial or legal advice if you are uncertain which structure is right for your circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* COSTS & DUTY */}
      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>Settlement Costs</SectionLabel>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: BKS_GREY, marginBottom: "12px", letterSpacing: "-0.01em" }}>Understanding your costs in WA</h2>
          <p style={{ fontSize: "15px", color: "#8a9aa4", maxWidth: 620, marginBottom: "48px", fontWeight: 300, lineHeight: 1.7 }}>
            Property settlements in WA involve several costs beyond the purchase price. Here's what to expect.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              {
                title: "Transfer Duty",
                tag: "Buyers",
                body: "Transfer duty (formerly stamp duty) is payable by the buyer in WA. The amount is calculated on the purchase price or unencumbered value of the property, whichever is greater. First home buyers may be eligible for a duty concession or exemption under the First Home Owner Grant scheme. The principal place of residence concession may also apply."
              },
              {
                title: "Foreign Buyer Duty",
                tag: "Foreign Purchasers",
                body: "In addition to standard transfer duty, foreign persons acquiring residential property in WA are subject to a Foreign Buyer Duty surcharge. This is calculated as an additional percentage of the dutiable value. Foreign buyer duty applies to acquisitions by foreign individuals, foreign corporations, and in some cases foreign trusts. If this may apply to you, we recommend obtaining advice early in the process."
              },
              {
                title: "Settlement Costs — Buyers",
                tag: "What Buyers Pay",
                body: "Typical buyer settlement costs include: the settlement agent's professional fee and GST, Landgate title search fees, transfer registration fees, PEXA platform fee, bank transaction fees, and enquiry fees. The settlement statement prepared by BKS will show each cost clearly, including your total funds required for settlement.",
              },
              {
                title: "Settlement Costs — Vendors",
                tag: "What Vendors Pay",
                body: "Typical vendor costs include: the settlement agent's professional fee and GST, discharge of mortgage fee (if applicable), bank transaction fees, PEXA fee, and any adjustments for council rates or water rates. Your vendor settlement statement will clearly set out net proceeds from the sale.",
              },
              {
                title: "Rates & Tax Adjustments",
                tag: "Both Parties",
                body: "Settlement includes an adjustment for council rates, water rates, and land tax — calculated on a pro-rata basis between buyer and vendor from the settlement date. The party responsible for the full period's payment is reimbursed by the other party as part of the settlement."
              },
              {
                title: "Landgate Registration Fees",
                tag: "Buyers",
                body: "Landgate charges registration fees for lodging the Transfer of Land and any mortgage. These fees are set by the WA government and are based on the purchase price of the property. They are included in your settlement statement. BKS manages the lodgement of all documents with Landgate."
              }
            ].map((item, i) => (
              <div key={i} style={{ background: "#f7f9fa", padding: "32px", borderTop: `2px solid ${i < 2 ? BKS_BLUE : "rgba(0,0,0,0.1)"}` }}>
                <span style={{ display: "inline-block", padding: "3px 10px", background: `${BKS_BLUE}15`, color: BKS_BLUE, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px", borderRadius: "2px" }}>{item.tag}</span>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: BKS_GREY, marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "#8a9aa4", lineHeight: 1.7, fontWeight: 300 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", background: BKS_GREY, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.08} color={BKS_BLUE} count={12} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>Want to know your specific costs?</h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginBottom: "32px", fontWeight: 300 }}>Use our quote calculator to get an estimate for your settlement.</p>
          <CTAButton to="/quote">Request a Settlement Quote</CTAButton>
        </div>
      </section>
    </Layout>
  );
}
