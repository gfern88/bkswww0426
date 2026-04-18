import { useState } from "react";
import { Layout, SlashPattern, SectionLabel, SlashDivider, CTAButton, BKS_BLUE, BKS_GREY } from "../components/Layout";

const InputField = ({ label, value, onChange, type = "text", placeholder, required }) => (
  <div style={{ marginBottom: "20px" }}>
    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
      {label}{required && <span style={{ color: BKS_BLUE, marginLeft: "4px" }}>*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      style={{
        width: "100%", padding: "12px 16px", border: "1px solid rgba(69,85,96,0.2)",
        borderRadius: "3px", fontSize: "14px", color: BKS_GREY, outline: "none",
        fontFamily: "Seravek, sans-serif", background: "#fff",
      }}
      onFocus={e => e.target.style.borderColor = BKS_BLUE}
      onBlur={e => e.target.style.borderColor = "rgba(69,85,96,0.2)"}
    />
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", enquiryType: "", property: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = field => value => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* PAGE HERO */}
      <section style={{ background: BKS_GREY, padding: "80px 40px 64px", position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.1} color={BKS_BLUE} count={12} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionLabel light>Get in Touch</SectionLabel>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", maxWidth: 560 }}>
            Let's talk about your settlement.
          </h1>
          <p style={{ marginTop: "20px", fontSize: "17px", color: "rgba(255,255,255,0.65)", fontWeight: 300, maxWidth: 480 }}>
            Send us your contract, request a quote, or simply get in touch. We respond to all enquiries within one business day.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "80px", alignItems: "start" }}>

          {/* FORM */}
          <div>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "80px 40px", background: "#f7f9fa", borderLeft: `4px solid ${BKS_BLUE}` }}>
                <svg width="56" height="56" viewBox="0 0 56 56" style={{ margin: "0 auto 20px" }}>
                  <circle cx="28" cy="28" r="27" stroke={BKS_BLUE} strokeWidth="2" fill="none"/>
                  <path d="M18 28l7 7 13-14" stroke={BKS_BLUE} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 style={{ fontSize: "24px", fontWeight: 700, color: BKS_GREY, marginBottom: "12px" }}>Enquiry received</h2>
                <p style={{ fontSize: "15px", color: "#8a9aa4", fontWeight: 300, lineHeight: 1.7 }}>
                  Thank you for reaching out to BKS Conveyancing WA.<br />
                  We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p style={{ fontSize: "14px", color: "#8a9aa4", marginBottom: "28px", fontWeight: 300, lineHeight: 1.6 }}>
                  Complete the form below and a member of our team will be in touch promptly. If you have a signed contract, you're welcome to attach it by email to{" "}
                  <a href="mailto:info@bksconveyancing.com.au" style={{ color: BKS_BLUE }}>info@bksconveyancing.com.au</a>.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
                  <InputField label="Full Name" value={form.name} onChange={handleChange("name")} placeholder="Your name" required />
                  <InputField label="Phone Number" value={form.phone} onChange={handleChange("phone")} type="tel" placeholder="(08) 0000 0000" />
                </div>
                <InputField label="Email Address" value={form.email} onChange={handleChange("email")} type="email" placeholder="your@email.com" required />

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Enquiry Type
                  </label>
                  <select
                    value={form.enquiryType}
                    onChange={e => handleChange("enquiryType")(e.target.value)}
                    style={{
                      width: "100%", padding: "12px 16px", border: "1px solid rgba(69,85,96,0.2)",
                      borderRadius: "3px", fontSize: "14px", color: BKS_GREY, outline: "none",
                      fontFamily: "Seravek, sans-serif", background: "#fff", appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23455560' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center"
                    }}
                  >
                    <option value="">Select enquiry type...</option>
                    <option value="quote">Request a quote / settlement estimate</option>
                    <option value="contract">Send in a signed contract</option>
                    <option value="buying">Buying property — general enquiry</option>
                    <option value="selling">Selling property — general enquiry</option>
                    <option value="related">Related party transfer</option>
                    <option value="estate">Deceased estate transfer</option>
                    <option value="subdivision">Subdivision</option>
                    <option value="other">Other enquiry</option>
                  </select>
                </div>

                <InputField label="Property Address (if known)" value={form.property} onChange={handleChange("property")} placeholder="Street, suburb, WA" />

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => handleChange("message")(e.target.value)}
                    placeholder="Tell us about your transaction — settlement date, contract details, or anything else that would help us understand your requirements."
                    rows={5}
                    style={{
                      width: "100%", padding: "12px 16px", border: "1px solid rgba(69,85,96,0.2)",
                      borderRadius: "3px", fontSize: "14px", color: BKS_GREY, outline: "none",
                      fontFamily: "Seravek, sans-serif", background: "#fff", resize: "vertical"
                    }}
                    onFocus={e => e.target.style.borderColor = BKS_BLUE}
                    onBlur={e => e.target.style.borderColor = "rgba(69,85,96,0.2)"}
                  />
                </div>

                <button type="submit" style={{
                  width: "100%", padding: "16px", background: BKS_BLUE, color: "#fff",
                  border: "none", borderRadius: "3px", fontSize: "14px", fontWeight: 700,
                  letterSpacing: "0.08em", cursor: "pointer", fontFamily: "Seravek, sans-serif"
                }}>
                  Send Enquiry to BKS
                </button>

                <p style={{ fontSize: "11px", color: "#a0abb4", marginTop: "12px", textAlign: "center", fontWeight: 300 }}>
                  We respond to all enquiries within one business day. Perth, Western Australia.
                </p>
              </form>
            )}
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: BKS_BLUE, fontWeight: 700, marginBottom: "20px" }}>Contact Details</p>

              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "4px", letterSpacing: "0.06em" }}>LOCATION</p>
                <p style={{ fontSize: "14px", color: "#8a9aa4", fontWeight: 300 }}>Perth, Western Australia</p>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "4px", letterSpacing: "0.06em" }}>PHONE</p>
                <a href="tel:+61800000000" style={{ fontSize: "14px", color: BKS_BLUE, textDecoration: "none", fontWeight: 400 }}>(08) 0000 0000</a>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "4px", letterSpacing: "0.06em" }}>EMAIL</p>
                <a href="mailto:info@bksconveyancing.com.au" style={{ fontSize: "14px", color: BKS_BLUE, textDecoration: "none", fontWeight: 400 }}>info@bksconveyancing.com.au</a>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: BKS_GREY, marginBottom: "4px", letterSpacing: "0.06em" }}>HOURS</p>
                <p style={{ fontSize: "14px", color: "#8a9aa4", fontWeight: 300 }}>Monday – Friday<br />8:30am – 5:00pm AWST</p>
              </div>
            </div>

            <div style={{ background: "#f7f9fa", padding: "28px", borderLeft: `3px solid ${BKS_BLUE}`, marginBottom: "24px" }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: BKS_GREY, marginBottom: "8px" }}>Send us your contract</p>
              <p style={{ fontSize: "13px", color: "#8a9aa4", lineHeight: 1.6, marginBottom: "16px", fontWeight: 300 }}>
                If you've signed a contract, email it directly to us at the address below and we'll open your file and be in touch promptly.
              </p>
              <a href="mailto:info@bksconveyancing.com.au" style={{ fontSize: "13px", color: BKS_BLUE, fontWeight: 600, textDecoration: "none" }}>info@bksconveyancing.com.au →</a>
            </div>

            <div style={{ background: "#f7f9fa", padding: "28px", borderLeft: `3px solid ${BKS_GREY}` }}>
              <p style={{ fontSize: "11px", fontWeight: 600, color: "#a0abb4", lineHeight: 1.6, letterSpacing: "0.04em" }}>
                BKS Conveyancing WA is a licensed settlement agency in Western Australia. We provide conveyancing and settlement services. We are not a legal practice and do not provide legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: "64px 40px", background: BKS_BLUE, position: "relative", overflow: "hidden" }}>
        <SlashPattern opacity={0.1} color="#fff" count={12} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", position: "relative", zIndex: 1 }}>
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Have a signed contract ready to go?</h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", fontWeight: 300 }}>Email it through and we'll get your settlement file open today.</p>
          </div>
          <a href="mailto:info@bksconveyancing.com.au" style={{
            display: "inline-block", padding: "14px 28px", background: "#fff", color: BKS_BLUE,
            borderRadius: "3px", textDecoration: "none", fontSize: "13px", fontWeight: 700,
            letterSpacing: "0.06em", whiteSpace: "nowrap"
          }}>
            Email Your Contract →
          </a>
        </div>
      </section>
    </Layout>
  );
}
