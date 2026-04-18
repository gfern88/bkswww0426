import { useState } from "react";
import { Layout, SlashPattern, SectionLabel, SlashDivider, CTAButton, BKS_BLUE, BKS_GREY } from "../components/Layout";

// WA Transfer Duty calculation (approximate, as at 2024)
function calcTransferDuty(price, isFirstHome = false, isPPR = false) {
  let duty = 0;
  if (price <= 80000) duty = price * 0.015;
  else if (price <= 100000) duty = 1200 + (price - 80000) * 0.019;
  else if (price <= 250000) duty = 1580 + (price - 100000) * 0.025;
  else if (price <= 500000) duty = 5330 + (price - 250000) * 0.040;
  else if (price <= 1000000) duty = 15330 + (price - 500000) * 0.045;
  else duty = 37830 + (price - 1000000) * 0.055;

  // First home buyer concession (simplified — $600K threshold)
  if (isFirstHome && price <= 430000) duty = 0;
  else if (isFirstHome && price <= 530000) duty = duty * ((price - 430000) / 100000);

  // PPR concession (simplified)
  if (isPPR && !isFirstHome && price <= 200000) duty = duty * 0.5;

  return Math.round(duty);
}

function fmtCurrency(n) {
  return n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });
}

const InputField = ({ label, value, onChange, type = "text", placeholder, note }) => (
  <div style={{ marginBottom: "20px" }}>
    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</label>
    {note && <p style={{ fontSize: "11px", color: "#a0abb4", marginBottom: "6px" }}>{note}</p>}
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: "100%", padding: "12px 16px", border: "1px solid rgba(69,85,96,0.2)",
        borderRadius: "3px", fontSize: "14px", color: BKS_GREY, outline: "none",
        fontFamily: "Seravek, sans-serif", background: "#fff", transition: "border-color 0.2s",
      }}
      onFocus={e => e.target.style.borderColor = BKS_BLUE}
      onBlur={e => e.target.style.borderColor = "rgba(69,85,96,0.2)"}
    />
  </div>
);

const SelectField = ({ label, value, onChange, options }) => (
  <div style={{ marginBottom: "20px" }}>
    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</label>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        width: "100%", padding: "12px 16px", border: "1px solid rgba(69,85,96,0.2)",
        borderRadius: "3px", fontSize: "14px", color: BKS_GREY, outline: "none",
        fontFamily: "Seravek, sans-serif", background: "#fff", appearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23455560' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center"
      }}
    >
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  </div>
);

const Checkbox = ({ label, checked, onChange }) => (
  <label style={{ display: "flex", gap: "10px", alignItems: "center", cursor: "pointer", marginBottom: "12px" }}>
    <div
      onClick={() => onChange(!checked)}
      style={{
        width: "20px", height: "20px", border: `2px solid ${checked ? BKS_BLUE : "rgba(69,85,96,0.3)"}`,
        borderRadius: "2px", background: checked ? BKS_BLUE : "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: "pointer",
        transition: "all 0.15s"
      }}
    >
      {checked && <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>}
    </div>
    <span style={{ fontSize: "13px", color: BKS_GREY, fontWeight: 300 }}>{label}</span>
  </label>
);

function EstimateRow({ label, amount, highlight = false, sub = false, total = false }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: total ? "16px 20px" : sub ? "8px 20px" : "12px 20px",
      background: total ? BKS_GREY : highlight ? `${BKS_BLUE}08` : "transparent",
      borderTop: total ? "none" : "1px solid rgba(0,0,0,0.06)",
    }}>
      <span style={{
        fontSize: total ? "14px" : sub ? "12px" : "13px",
        color: total ? "#fff" : sub ? "#a0abb4" : BKS_GREY,
        fontWeight: total ? 700 : sub ? 300 : 400,
        paddingLeft: sub ? "12px" : 0,
        fontStyle: sub ? "italic" : "normal"
      }}>{label}</span>
      <span style={{
        fontSize: total ? "16px" : "13px",
        fontWeight: total ? 700 : 600,
        color: total ? "#fff" : amount === null ? "#c0ccd4" : BKS_GREY
      }}>
        {amount === null ? "—" : amount === 0 ? "$0" : fmtCurrency(amount)}
      </span>
    </div>
  );
}

export default function Quote() {
  const [party, setParty] = useState("buyer");
  const [price, setPrice] = useState("");
  const [isFirstHome, setIsFirstHome] = useState(false);
  const [isPPR, setIsPPR] = useState(false);
  const [hasMortgage, setHasMortgage] = useState(true);
  const [transactionType, setTransactionType] = useState("residential");
  const [generated, setGenerated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const purchasePrice = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;

  // Fee estimates
  const professionalFee = transactionType === "commercial" ? 1500
    : transactionType === "residential" ? (purchasePrice >= 1000000 ? 1600 : purchasePrice >= 500000 ? 1350 : 1100)
    : 1200;
  const gst = professionalFee * 0.1;
  const disbursements = 180;
  const titleSearchFees = 80;
  const bankTransactionFees = 35;
  const pexaFee = 120;
  const regFees = party === "buyer" ? Math.round(purchasePrice * 0.00168 + 167) : 0;
  const transferDuty = party === "buyer" ? calcTransferDuty(purchasePrice, isFirstHome, isPPR) : 0;
  const enquiryFees = 95;
  const rateAdjustment = party === "buyer" ? 1200 : 400;
  const dischargeFee = party === "vendor" && hasMortgage ? 275 : 0;

  const total = professionalFee + gst + disbursements + titleSearchFees + bankTransactionFees + pexaFee + regFees + transferDuty + enquiryFees + rateAdjustment + dischargeFee;

  const handleGenerate = () => {
    if (purchasePrice > 0) setGenerated(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* PAGE HERO */}
      <section style={{ background: BKS_GREY, padding: "72px 40px 56px", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.1} color={BKS_BLUE} count={10} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel light>Settlement Estimate</SectionLabel>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", maxWidth: 560 }}>
            Settlement cost estimate for WA property transactions
          </h1>
          <p style={{ marginTop: "16px", fontSize: "16px", color: "rgba(255,255,255,0.65)", fontWeight: 300, maxWidth: 480 }}>
            Get an indicative estimate of your settlement costs. For an accurate quote, send us your contract or enquiry.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div style={{ background: `${BKS_BLUE}10`, borderBottom: `1px solid ${BKS_BLUE}20`, padding: "12px 40px" }}>
        <p style={{ maxWidth: 1100, margin: "0 auto", fontSize: "12px", color: "#6b7a84", fontWeight: 300 }}>
          <strong style={{ fontWeight: 700, color: BKS_GREY }}>Estimate only.</strong> Figures shown are indicative and not a formal quote. Transfer duty calculations are approximate. Final costs depend on your specific transaction. Contact BKS for a formal settlement estimate.
        </p>
      </div>

      <section style={{ padding: "64px 40px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>

          {/* LEFT — FORM */}
          <div>
            <div style={{ marginBottom: "32px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: BKS_GREY, marginBottom: "12px" }}>I am a...</p>
              <div style={{ display: "flex", gap: "0" }}>
                {["buyer", "vendor"].map(p => (
                  <button key={p} onClick={() => { setParty(p); setGenerated(false); }} style={{
                    flex: 1, padding: "13px", border: `2px solid ${party === p ? BKS_BLUE : "rgba(69,85,96,0.2)"}`,
                    background: party === p ? BKS_BLUE : "#fff",
                    color: party === p ? "#fff" : BKS_GREY,
                    fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em",
                    cursor: "pointer", textTransform: "capitalize",
                    fontFamily: "Seravek, sans-serif", transition: "all 0.15s",
                    borderRadius: p === "buyer" ? "3px 0 0 3px" : "0 3px 3px 0"
                  }}>{p === "buyer" ? "Buyer" : "Vendor / Seller"}</button>
                ))}
              </div>
            </div>

            <SelectField
              label="Transaction Type"
              value={transactionType}
              onChange={v => { setTransactionType(v); setGenerated(false); }}
              options={[
                { value: "residential", label: "Residential — House / Unit" },
                { value: "land", label: "Residential — Vacant Land" },
                { value: "commercial", label: "Commercial" },
                { value: "related", label: "Related Party Transfer" },
                { value: "estate", label: "Deceased Estate" },
              ]}
            />

            <InputField
              label="Purchase / Sale Price"
              value={price}
              onChange={v => { setPrice(v); setGenerated(false); }}
              type="text"
              placeholder="e.g. 650000"
              note="Enter the contract price in whole dollars"
            />

            {party === "buyer" && (
              <div style={{ background: "#f7f9fa", padding: "20px", borderRadius: "3px", marginBottom: "20px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "12px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Buyer Options</p>
                <Checkbox label="First home buyer (duty concession may apply)" checked={isFirstHome} onChange={v => { setIsFirstHome(v); setGenerated(false); }} />
                <Checkbox label="Purchasing as principal place of residence" checked={isPPR} onChange={v => { setIsPPR(v); setGenerated(false); }} />
                <Checkbox label="Purchasing with mortgage / home loan" checked={hasMortgage} onChange={v => { setHasMortgage(v); setGenerated(false); }} />
              </div>
            )}

            {party === "vendor" && (
              <div style={{ background: "#f7f9fa", padding: "20px", borderRadius: "3px", marginBottom: "20px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "12px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Vendor Options</p>
                <Checkbox label="Property has an existing mortgage to discharge" checked={hasMortgage} onChange={v => { setHasMortgage(v); setGenerated(false); }} />
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={!purchasePrice}
              style={{
                width: "100%", padding: "16px", background: purchasePrice ? BKS_BLUE : "#c0ccd4",
                color: "#fff", border: "none", borderRadius: "3px", fontSize: "14px",
                fontWeight: 700, letterSpacing: "0.08em", cursor: purchasePrice ? "pointer" : "not-allowed",
                fontFamily: "Seravek, sans-serif", transition: "all 0.2s"
              }}
            >
              Generate Estimate
            </button>

            {/* Enquiry form */}
            <div style={{ marginTop: "40px", borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "32px" }}>
              <p style={{ fontSize: "14px", fontWeight: 700, color: BKS_GREY, marginBottom: "4px" }}>Request a formal quote from BKS</p>
              <p style={{ fontSize: "13px", color: "#8a9aa4", marginBottom: "20px", fontWeight: 300 }}>Send us your contract or details and we'll provide a formal estimate within one business day.</p>
              {submitted ? (
                <div style={{ background: `${BKS_BLUE}10`, border: `1px solid ${BKS_BLUE}30`, borderRadius: "3px", padding: "20px", textAlign: "center" }}>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: BKS_GREY, marginBottom: "6px" }}>Enquiry received</p>
                  <p style={{ fontSize: "13px", color: "#8a9aa4", fontWeight: 300 }}>We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <InputField label="Your Name" value={name} onChange={setName} placeholder="Full name" />
                  <InputField label="Email Address" value={email} onChange={setEmail} type="email" placeholder="your@email.com" />
                  <InputField label="Phone" value={phone} onChange={setPhone} placeholder="(08) 0000 0000" />
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Additional Notes</label>
                    <textarea
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="Property address, settlement date, special conditions..."
                      rows={4}
                      style={{
                        width: "100%", padding: "12px 16px", border: "1px solid rgba(69,85,96,0.2)",
                        borderRadius: "3px", fontSize: "14px", color: BKS_GREY, outline: "none",
                        fontFamily: "Seravek, sans-serif", background: "#fff", resize: "vertical"
                      }}
                    />
                  </div>
                  <button type="submit" style={{
                    width: "100%", padding: "13px", background: BKS_GREY, color: "#fff",
                    border: "none", borderRadius: "3px", fontSize: "13px", fontWeight: 700,
                    letterSpacing: "0.08em", cursor: "pointer", fontFamily: "Seravek, sans-serif"
                  }}>
                    Send Enquiry to BKS
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT — ESTIMATE OUTPUT */}
          <div style={{ position: "sticky", top: "88px" }}>
            <div style={{ border: "1px solid rgba(69,85,96,0.15)", borderRadius: "4px", overflow: "hidden" }}>
              {/* Header */}
              <div style={{ background: BKS_BLUE, padding: "24px 20px" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "4px", fontWeight: 600 }}>
                  {party === "buyer" ? "Buyer" : "Vendor"} Settlement Estimate
                </p>
                <p style={{ fontSize: "22px", fontWeight: 700, color: "#fff" }}>
                  {purchasePrice > 0 ? fmtCurrency(purchasePrice) : "Enter a price to generate"}
                </p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "4px", fontWeight: 300 }}>
                  {transactionType === "residential" ? "Residential" : transactionType === "commercial" ? "Commercial" : transactionType === "related" ? "Related Party" : transactionType === "estate" ? "Deceased Estate" : "Vacant Land"} · Western Australia
                </p>
              </div>

              {generated ? (
                <>
                  <div style={{ background: "#fff" }}>
                    <div style={{ padding: "12px 20px", background: "#f7f9fa", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                      <p style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#a0abb4", fontWeight: 700 }}>Professional Costs</p>
                    </div>
                    <EstimateRow label="Professional service fee" amount={professionalFee} />
                    <EstimateRow label="GST (10%)" amount={gst} sub />
                    <EstimateRow label="Office disbursements" amount={disbursements} />

                    <div style={{ padding: "12px 20px", background: "#f7f9fa", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                      <p style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#a0abb4", fontWeight: 700 }}>Third Party Fees</p>
                    </div>
                    <EstimateRow label="Landgate title search fees" amount={titleSearchFees} />
                    <EstimateRow label="Enquiry fees" amount={enquiryFees} />
                    <EstimateRow label="Bank / lender transaction fees" amount={bankTransactionFees} />
                    <EstimateRow label="PEXA electronic settlement fee" amount={pexaFee} />
                    {party === "vendor" && hasMortgage && <EstimateRow label="Discharge of mortgage" amount={dischargeFee} />}

                    {party === "buyer" && (
                      <>
                        <div style={{ padding: "12px 20px", background: "#f7f9fa", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                          <p style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#a0abb4", fontWeight: 700 }}>Government Costs</p>
                        </div>
                        <EstimateRow label="Transfer registration fees (Landgate)" amount={regFees} />
                        <EstimateRow
                          label={isFirstHome && transferDuty === 0 ? "Transfer duty (concession applies — nil)" : "Transfer duty"}
                          amount={transferDuty}
                          highlight={transferDuty > 0}
                        />
                        {isFirstHome && transferDuty === 0 && <EstimateRow label="First home buyer concession applied" amount={0} sub />}
                      </>
                    )}

                    <div style={{ padding: "12px 20px", background: "#f7f9fa", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                      <p style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#a0abb4", fontWeight: 700 }}>Adjustments</p>
                    </div>
                    <EstimateRow label="Funds held for rate & tax adjustment" amount={rateAdjustment} />

                    <EstimateRow label="ESTIMATED TOTAL" amount={total} total />
                  </div>

                  <div style={{ padding: "16px 20px", background: "#f7f9fa", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                    <p style={{ fontSize: "11px", color: "#a0abb4", lineHeight: 1.6, fontWeight: 300 }}>
                      This estimate is indicative only. Transfer duty calculations are approximate and based on general rates. Actual costs may vary. Contact BKS for a formal settlement quote.
                    </p>
                  </div>
                </>
              ) : (
                <div style={{ padding: "60px 40px", textAlign: "center" }}>
                  <svg width="48" height="48" viewBox="0 0 48 48" style={{ margin: "0 auto 16px" }}>
                    <path d="M40 14L14 40" stroke={BKS_BLUE} strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
                    <path d="M30 14L4 40" stroke={BKS_BLUE} strokeWidth="2" strokeLinecap="round" opacity="0.2"/>
                  </svg>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: BKS_GREY, marginBottom: "8px" }}>Your estimate will appear here</p>
                  <p style={{ fontSize: "13px", color: "#a0abb4", fontWeight: 300 }}>Enter your details and click "Generate Estimate"</p>
                </div>
              )}
            </div>

            {generated && (
              <div style={{ marginTop: "16px", background: `${BKS_BLUE}10`, border: `1px solid ${BKS_BLUE}25`, borderRadius: "3px", padding: "16px 20px" }}>
                <p style={{ fontSize: "13px", color: BKS_GREY, lineHeight: 1.6, fontWeight: 300 }}>
                  <strong style={{ fontWeight: 700 }}>Want a formal quote?</strong> Fill in the form on the left and we'll send you a detailed settlement estimate within one business day.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
