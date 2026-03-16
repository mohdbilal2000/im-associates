import Reveal from "./Reveal";
import { advocates } from "../data/advocatesData";

export default function Advocates() {
  return (
    <section id="advocates" style={{ background: "var(--white)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
          <div className="section-label">Our Advocates</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,3.8vw,44px)", fontWeight: 600, lineHeight: 1.2, color: "var(--ink)", marginBottom: 14 }}>
            The Legal Team
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, color: "var(--slate-mid)", maxWidth: 600, fontWeight: 300, lineHeight: 1.65, marginBottom: 8 }}>
            Advocates enrolled with the Bar Council of Uttar Pradesh, practising across Agra, Delhi, and Lucknow courts.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: "var(--slate-light)", fontStyle: "italic", marginBottom: 52 }}>
            Enrolment numbers are verifiable with the Bar Council of Uttar Pradesh. Profiles are presented for informational purposes only — not as solicitation of work.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="advocates-grid">
          {advocates.map((adv, i) => (
            <Reveal key={adv.id} delay={i * 60}>
              <div style={{ border: "1px solid var(--border)", background: "var(--cream)", padding: "28px 24px", transition: "border-color 0.25s, box-shadow 0.25s", height: "100%" }} className="advocate-card">
                {/* Avatar */}
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg,var(--slate) 0%,#0c1824 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, border: "2px solid var(--gold-pale)" }}>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: "var(--gold-light)" }}>{adv.initials}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, marginBottom: 3, color: "var(--ink)", lineHeight: 1.3 }}>{adv.name}</h3>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "var(--gold)", letterSpacing: "0.05em", marginBottom: 12, fontWeight: 600 }}>{adv.designation}</div>
                <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, color: "var(--slate-mid)", marginBottom: 16, lineHeight: 1.65 }}>{adv.bio}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                  {[
                    { icon: "🏛️", text: adv.barCouncil },
                    { icon: "⚖️", text: adv.courts.slice(0,2).join(" · ") },
                    { icon: "🌐", text: adv.languages.join(", ") },
                  ].map((d) => (
                    <div key={d.text} style={{ display: "flex", gap: 7, alignItems: "flex-start", fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "var(--slate-light)" }}>
                      <span style={{ flexShrink: 0 }}>{d.icon}</span>
                      <span>{d.text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {adv.areas.slice(0, 2).map((area) => (
                    <span key={area} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--gold)", background: "var(--gold-pale)", padding: "3px 9px", borderRadius: 2 }}>{area}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div style={{ marginTop: 44, background: "var(--parchment)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", padding: "18px 24px", fontFamily: "'Crimson Pro',serif", fontSize: 14, color: "var(--slate-mid)", lineHeight: 1.7, fontStyle: "italic", borderRadius: "0 2px 2px 0" }}>
            <strong style={{ fontStyle: "normal", color: "var(--ink)" }}>Bar Council Compliance:</strong> All advocates listed are enrolled with the Bar Council of Uttar Pradesh under the Advocates Act 1961. This firm does not make comparative claims about its advocates. Enrolment details are available for verification. This page does not constitute solicitation of work or advertising in violation of BCI Professional Conduct Rules.
          </div>
        </Reveal>
      </div>
      <style>{`
        .advocate-card:hover { border-color: var(--gold) !important; box-shadow: 0 4px 20px rgba(184,150,46,0.1); }
        @media (max-width: 1100px) { .advocates-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 760px)  { .advocates-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { .advocates-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
