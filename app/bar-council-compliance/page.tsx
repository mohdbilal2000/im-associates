import type { Metadata } from "next";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Bar Council Compliance — IM & Associates",
  description: "Bar Council of India compliance statement for IM & Associates. Advocates Act 1961, BCI Professional Conduct Rules, and prohibition on advertising and solicitation.",
  alternates: { canonical: "/bar-council-compliance" },
};

export default function BciCompliancePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <PageHeader
          overline="Regulatory Compliance"
          title="Bar Council of India"
          titleEm="Compliance Statement"
          subtitle="IM & Associates operates in full compliance with the Advocates Act 1961 and Bar Council of India Rules on Professional Conduct and Etiquette."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Bar Council Compliance" }]}
        />

        <section style={{ background: "var(--cream)", padding: "72px 0 96px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
            {/* Key compliance notice */}
            <div style={{ background: "var(--slate)", color: "#fff", padding: "32px 36px", marginBottom: 44, position: "relative", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", right: -10, bottom: -20, fontFamily: "'Playfair Display',serif", fontSize: 140, color: "rgba(184,150,46,0.06)", fontWeight: 700, lineHeight: 1, pointerEvents: "none" }}>§</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Mandatory Notice — Bar Council of India</div>
              <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}>
                As per Bar Council of India Rules, advocates in India are not permitted to advertise or solicit work, either directly or indirectly. By visiting this website, you acknowledge that you are seeking information about IM &amp; Associates on your own initiative, and that any information provided herein is intended for informational purposes only and does not constitute advertising or solicitation.
              </p>
            </div>

            {[
              {
                heading: "The Advocates Act 1961",
                body: "IM & Associates is a law firm whose advocates are enrolled under the Advocates Act 1961. This Act is the primary legislation governing the legal profession in India. It establishes the Bar Council of India (BCI) as the regulatory body for the legal profession and vests in the BCI the authority to make rules for the professional conduct and etiquette of advocates.\n\nAll advocates at IM & Associates are enrolled with the State Bar Council (Bar Council of Uttar Pradesh) and are bound by the provisions of the Advocates Act 1961 and the BCI Rules.",
              },
              {
                heading: "Bar Council of India Rules — Professional Conduct",
                body: "The Bar Council of India Rules on Professional Standards and Conduct, made under Section 49(1)(c) of the Advocates Act, lay down the professional obligations of advocates. These include:\n\n• Rule 36: An advocate shall not solicit work or advertise, either directly or indirectly, whether by circulars, advertisements, touts, personal communications, interviews not warranted by personal relations, furnishing or inspiring newspaper comments, or producing his photographs to be published in connection with cases in which he has been engaged or concerned.\n\n• Rule 22: An advocate shall not do anything whereby he abuses or takes advantage of the confidence reposed in him by his client.\n\nIM & Associates strictly adheres to these obligations.",
              },
              {
                heading: "Nature of This Website",
                body: "This website is a legal knowledge and educational resource. It is operated by IM & Associates for the purpose of providing general legal education to the public — publishing articles on Indian law, case law analysis, procedural guides, and legal glossary entries.\n\nThis website does not constitute advertising within the meaning of Rule 36 of the BCI Rules. Content on this website:\n\n• Does not claim that any advocate at the firm is the 'best' or superior to other advocates\n• Does not guarantee outcomes of legal matters\n• Does not promise results\n• Does not make misleading comparative claims\n• Does not solicit legal work\n\nThe consultation request form on this website is provided as a public convenience and not as a tool for solicitation.",
              },
              {
                heading: "Enrolment Details",
                body: "All advocates practicing under the name IM & Associates are enrolled with the Bar Council of Uttar Pradesh in accordance with Section 22 of the Advocates Act 1961. Enrolment details including enrolment numbers are available for verification with the Bar Council of Uttar Pradesh, Allahabad.",
              },
              {
                heading: "Grievance Redressal",
                body: "If any person has a grievance about the professional conduct of any advocate at IM & Associates, such a grievance may be filed before the Disciplinary Committee of the Bar Council of Uttar Pradesh or the Bar Council of India in accordance with Section 35 of the Advocates Act 1961.\n\nContact us directly at contact@imassociates.in for any concerns about content on this website.",
              },
            ].map((s) => (
              <div key={s.heading} style={{ marginBottom: 40 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "var(--ink)", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>{s.heading}</h2>
                {s.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, color: "var(--ink)", lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
