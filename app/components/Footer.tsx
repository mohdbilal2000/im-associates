import Link from "next/link";

const footerLinks = {
  "Practice Areas": [
    { label: "Criminal Law", href: "/practice-areas/criminal-law" },
    { label: "Civil Litigation", href: "/practice-areas/civil-litigation" },
    { label: "Property Law", href: "/practice-areas/property-law" },
    { label: "Family Law", href: "/practice-areas/family-law" },
    { label: "Corporate Law", href: "/practice-areas/corporate-law" },
    { label: "Constitutional Law", href: "/practice-areas/constitutional-law" },
    { label: "View All Areas →", href: "/practice-areas" },
  ],
  "Legal Resources": [
    { label: "Legal Insights Blog", href: "/blog" },
    { label: "Legal Glossary A–Z", href: "/glossary" },
    { label: "About the Firm", href: "/about" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Bar Council Compliance", href: "/bar-council-compliance" },
  ],
  "The Firm": [
    { label: "About IM & Associates", href: "/about" },
    { label: "Our Advocates", href: "/about#advocates" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Legal Blog", href: "/blog" },
    { label: "Legal Glossary", href: "/glossary" },
    { label: "Contact / Consultation", href: "/#contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,0.55)", padding: "72px 0 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.07)" }} className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", lineHeight: 1, display: "inline-block" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 23, fontWeight: 700, color: "#fff", letterSpacing: "0.02em" }}>
                IM &amp; Associates
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 10, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", marginTop: 3 }}>
                Advocates &amp; Legal Consultants
              </div>
            </Link>
            <p style={{ marginTop: 20, fontFamily: "'Crimson Pro', serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", maxWidth: 300 }}>
              A legal knowledge platform and advocacy firm providing educational resources and legal services across India. Enrolled with the Bar Council of Uttar Pradesh.
            </p>
            {/* Contact details */}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { icon: "📍", text: "Agra, Uttar Pradesh — 282001" },
                { icon: "📞", text: "+91 XXXXX XXXXX" },
                { icon: "✉️", text: "contact@imassociates.in" },
                { icon: "🕐", text: "Mon–Sat: 10AM – 6PM IST" },
              ].map((d) => (
                <div key={d.text} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontFamily: "'Crimson Pro',serif", fontSize: 13, color: "rgba(255,255,255,0.38)" }}>
                  <span style={{ flexShrink: 0 }}>{d.icon}</span>
                  <span>{d.text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22, background: "rgba(184,150,46,0.07)", border: "1px solid rgba(184,150,46,0.18)", padding: "14px 16px", fontFamily: "'Crimson Pro', serif", fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.65 }}>
              Regulated under the Advocates Act, 1961. Compliant with Bar Council of India Rules. This website does not constitute legal advice.
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: 20 }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ fontFamily: "'Crimson Pro', serif", fontSize: 15, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s", display: "block" }} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "rgba(255,255,255,0.28)" }}>
          <span>© {new Date().getFullYear()} IM &amp; Associates. All rights reserved.</span>
          <span style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Disclaimer", href: "/disclaimer" },
              { label: "Bar Council Compliance", href: "/bar-council-compliance" },
            ].map((l) => (
              <Link key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.32)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link">
                {l.label}
              </Link>
            ))}
          </span>
          <span>Legal services in Agra · Delhi · Lucknow</span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--gold-light) !important; }
        @media (max-width: 860px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
