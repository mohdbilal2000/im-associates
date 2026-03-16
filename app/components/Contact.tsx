"use client";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

const practiceOptions = [
  "Criminal Law",
  "Civil Litigation",
  "Property Law",
  "Family Law / Divorce",
  "Corporate Law",
  "Constitutional Law",
  "Startup / Business Law",
  "Intellectual Property",
  "Consumer Protection",
  "Taxation Law",
  "Contract Law",
  "Other",
];

const locations = [
  {
    icon: "🏙️",
    city: "Agra",
    address: "[Street Address], Agra, UP",
    courts: "Agra District Court · Family Court · Consumer Forum",
    pin: "282001",
  },
  {
    icon: "🏛️",
    city: "Delhi",
    address: "[Street Address], New Delhi",
    courts: "Delhi High Court · NCLT · Consumer Commission",
    pin: "110001",
  },
  {
    icon: "⚖️",
    city: "Lucknow",
    address: "[Street Address], Lucknow, UP",
    courts: "Allahabad HC (LB) · District Courts",
    pin: "226001",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.trim() || !form.email.includes("@"))
      e.email = "Valid email required";
    if (!form.area) e.area = "Please select a practice area";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  const inputStyle = (hasError?: string): React.CSSProperties => ({
    width: "100%",
    border: `1px solid ${hasError ? "#dc2626" : "var(--border)"}`,
    padding: "11px 14px",
    fontFamily: "'Crimson Pro', serif",
    fontSize: 16,
    color: "var(--ink)",
    background: "var(--cream)",
    outline: "none",
    borderRadius: 2,
    transition: "border-color 0.2s, background 0.2s",
    WebkitAppearance: "none",
  });

  return (
    <section
      id="contact"
      style={{ background: "var(--cream)", padding: "96px 0" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
          <div className="section-label">Get in Touch</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.8vw, 44px)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "var(--ink)",
              marginBottom: 52,
            }}
          >
            Request a Legal Consultation
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 52,
            alignItems: "start",
          }}
          className="contact-layout"
        >
          {/* Form */}
          <Reveal>
            <div
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                padding: "44px 40px",
              }}
            >
              {status === "success" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "40px 20px",
                    gap: 16,
                  }}
                >
                  <CheckCircle size={52} color="var(--gold)" strokeWidth={1.5} />
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      color: "var(--ink)",
                    }}
                  >
                    Request Received
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 17,
                      color: "var(--slate-mid)",
                      fontWeight: 300,
                      maxWidth: 340,
                    }}
                  >
                    Thank you. An advocate from IM &amp; Associates will be in
                    touch within 1–2 working days.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", email: "", area: "", message: "" }); }}
                    style={{
                      marginTop: 8,
                      padding: "10px 24px",
                      background: "var(--gold)",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 13,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      borderRadius: 2,
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      marginBottom: 6,
                      color: "var(--ink)",
                    }}
                  >
                    Consultation Request
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 16,
                      color: "var(--slate-mid)",
                      marginBottom: 28,
                      fontWeight: 300,
                    }}
                  >
                    Complete the form to schedule a consultation with an
                    advocate.
                  </p>

                  {/* Name */}
                  <div style={{ marginBottom: 18 }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--slate-mid)",
                        marginBottom: 7,
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      style={inputStyle(errors.name)}
                    />
                    {errors.name && (
                      <p style={{ color: "#dc2626", fontSize: 13, marginTop: 4, fontFamily: "'Crimson Pro', serif" }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone + Email */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                      marginBottom: 18,
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 12,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--slate-mid)",
                          marginBottom: 7,
                        }}
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        style={inputStyle(errors.phone)}
                      />
                      {errors.phone && (
                        <p style={{ color: "#dc2626", fontSize: 13, marginTop: 4, fontFamily: "'Crimson Pro', serif" }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 12,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--slate-mid)",
                          marginBottom: 7,
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        style={inputStyle(errors.email)}
                      />
                      {errors.email && (
                        <p style={{ color: "#dc2626", fontSize: 13, marginTop: 4, fontFamily: "'Crimson Pro', serif" }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Practice Area */}
                  <div style={{ marginBottom: 18 }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--slate-mid)",
                        marginBottom: 7,
                      }}
                    >
                      Practice Area *
                    </label>
                    <select
                      value={form.area}
                      onChange={(e) => setForm({ ...form, area: e.target.value })}
                      style={inputStyle(errors.area)}
                    >
                      <option value="">Select area of concern</option>
                      {practiceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    {errors.area && (
                      <p style={{ color: "#dc2626", fontSize: 13, marginTop: 4, fontFamily: "'Crimson Pro', serif" }}>
                        {errors.area}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 24 }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--slate-mid)",
                        marginBottom: 7,
                      }}
                    >
                      Brief Description
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Briefly describe your legal matter (this does not constitute legal advice)"
                      rows={4}
                      style={{ ...inputStyle(), resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      width: "100%",
                      padding: "15px 28px",
                      background: status === "loading" ? "var(--slate-mid)" : "var(--gold)",
                      color: "#fff",
                      border: "none",
                      cursor: status === "loading" ? "wait" : "pointer",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 14,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      transition: "background 0.2s",
                    }}
                  >
                    {status === "loading" && (
                      <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                    )}
                    {status === "loading" ? "Submitting..." : "Submit Consultation Request"}
                  </button>

                  <p
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      color: "var(--slate-light)",
                      fontFamily: "'Crimson Pro', serif",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                    }}
                  >
                    Submitting this form does not create an advocate-client
                    relationship. Information shared is kept confidential. The
                    Bar Council of India prohibits advertising or solicitation by
                    advocates.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info */}
          <div>
            <Reveal>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28,
                  marginBottom: 14,
                  color: "var(--ink)",
                }}
              >
                IM &amp; Associates
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  color: "var(--slate-mid)",
                  fontWeight: 300,
                  marginBottom: 36,
                  lineHeight: 1.7,
                }}
              >
                Legal services provided across Agra, Delhi, and Lucknow. For
                immediate queries, contact the firm directly.
              </p>

              {/* Contact details */}
              <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 40 }}>
                {[
                  { icon: "📞", label: "Telephone", value: "+91 XXXXX XXXXX" },
                  { icon: "✉️", label: "Email", value: "contact@imassociates.in" },
                  { icon: "🕐", label: "Office Hours", value: "Monday–Saturday: 10:00 AM – 6:00 PM IST" },
                ].map((d) => (
                  <div key={d.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: "var(--parchment)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 17,
                        flexShrink: 0,
                      }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          display: "block",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 11,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: 3,
                        }}
                      >
                        {d.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: 16,
                          color: "var(--ink)",
                        }}
                      >
                        {d.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Location cards */}
            <Reveal delay={80}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {locations.map((loc) => (
                  <div
                    key={loc.city}
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      padding: "18px 20px",
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{loc.icon}</span>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 17,
                          fontWeight: 600,
                          marginBottom: 3,
                          color: "var(--ink)",
                        }}
                      >
                        {loc.city}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: 14,
                          color: "var(--slate-mid)",
                          marginBottom: 4,
                        }}
                      >
                        {loc.address}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 12,
                          letterSpacing: "0.06em",
                          color: "var(--slate-light)",
                        }}
                      >
                        {loc.courts}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                style={{
                  marginTop: 24,
                  background: "var(--parchment)",
                  border: "1px solid var(--border)",
                  padding: "18px 20px",
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: 13,
                  color: "var(--slate-mid)",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                IM &amp; Associates is regulated by the Bar Council of India
                under the Advocates Act 1961. This firm does not advertise or
                solicit work in contravention of BCI rules.
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 860px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
