import type { Metadata } from "next";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy — IM & Associates",
  description: "Privacy Policy of IM & Associates. How we collect, use, and protect personal information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "1. About This Policy",
    body: "This Privacy Policy explains how IM & Associates ('we', 'our', 'the Firm') collects, uses, stores, and protects personal information submitted through this website (imassociates.in). This policy is in accordance with the Information Technology Act 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011, and the Digital Personal Data Protection Act 2023 (DPDPA) to the extent applicable.\n\nBy using this website or submitting a consultation request, you acknowledge that you have read and understood this Privacy Policy.",
  },
  {
    heading: "2. Information We Collect",
    body: "We collect information only when you voluntarily submit it through the consultation request form on this website. The information collected may include:\n\n• Name\n• Phone number\n• Email address\n• The practice area or legal matter described by you\n\nWe do not collect sensitive personal data or information (SPDI) as defined under Rule 3 of the IT Rules 2011 — such as passwords, financial information, health data, or biometric data — through this website.\n\nWe also collect standard website analytics data (pages visited, time spent, browser type, IP address) through analytics tools. This data is aggregated and anonymous and is not linked to your personal identity.",
  },
  {
    heading: "3. How We Use Your Information",
    body: "Personal information submitted through the consultation request form is used solely for:\n\n• Contacting you to schedule or facilitate a legal consultation\n• Internal records of enquiries received\n\nWe do not:\n• Sell, rent, or trade your personal information to third parties\n• Use your information for marketing purposes beyond responding to your specific enquiry\n• Share your information with any person outside the Firm without your consent, except as required by law",
  },
  {
    heading: "4. Confidentiality & Advocate-Client Privilege",
    body: "Please note that submitting a consultation request through this website does not create an advocate-client relationship. An advocate-client relationship is created only when the Firm explicitly agrees to represent you and a formal engagement letter or agreement is executed.\n\nHowever, information shared with us in the course of a consultation enquiry will be treated with professional confidentiality. Advocates are bound by the confidentiality obligations under the Advocates Act 1961 and Bar Council of India Rules on Professional Standards once an engagement is established.",
  },
  {
    heading: "5. Data Security",
    body: "We implement reasonable security practices as required under Rule 8 of the IT Rules 2011 to protect personal information from unauthorised access, disclosure, alteration, or destruction.\n\nHowever, no internet transmission is completely secure. We cannot guarantee absolute security of information transmitted to us through this website. You submit information at your own risk.",
  },
  {
    heading: "6. Cookies",
    body: "This website uses cookies for basic functionality and analytics. Cookies are small text files stored on your device. You can disable cookies through your browser settings. Disabling cookies may affect some website functionality.\n\nWe use Google Analytics or similar services for anonymised website traffic analysis. These services may set their own cookies in accordance with their respective privacy policies.",
  },
  {
    heading: "7. Links to Third-Party Websites",
    body: "This website may contain links to external websites including government portals, court websites, and legal databases. We are not responsible for the privacy practices or content of those external websites. We encourage users to review the privacy policies of any external site they visit.",
  },
  {
    heading: "8. Your Rights Under DPDPA 2023",
    body: "Under the Digital Personal Data Protection Act 2023 (to the extent currently in force and applicable), you have the right to:\n\n• Access information about what personal data we hold about you\n• Correct inaccurate personal data\n• Request erasure of your personal data (subject to legal obligations)\n• Nominate another person to exercise rights on your behalf\n\nTo exercise these rights, contact us at: contact@imassociates.in",
  },
  {
    heading: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in law or our practices. The updated version will be posted on this page with the date of revision. We encourage periodic review of this page.",
  },
  {
    heading: "10. Contact",
    body: "For any queries regarding this Privacy Policy or how your personal information is handled, contact us at:\n\nIM & Associates\nEmail: contact@imassociates.in\nAddress: Agra, Uttar Pradesh, India",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <PageHeader
          overline="Legal & Compliance"
          title="Privacy Policy"
          subtitle="How IM & Associates collects, uses, and protects personal information submitted through this website."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />
        <section style={{ background: "var(--cream)", padding: "72px 0 96px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ background: "var(--parchment)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", padding: "16px 22px", marginBottom: 44, fontFamily: "'Crimson Pro',serif", fontSize: 14, color: "var(--slate-mid)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--ink)" }}>Last Updated:</strong> January 2025 &nbsp;|&nbsp; <strong style={{ color: "var(--ink)" }}>Applicable Law:</strong> IT Act 2000, IT Rules 2011, DPDPA 2023
            </div>
            {sections.map((s) => (
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
