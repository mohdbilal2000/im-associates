export default function DisclaimerBanner() {
  return (
    <div
      role="note"
      aria-label="Legal disclaimer"
      style={{
        background: "var(--gold-pale)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "14px 0",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 14,
        color: "var(--slate)",
        textAlign: "center",
        letterSpacing: "0.02em",
        lineHeight: 1.5,
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
          Legal Disclaimer:
        </strong>{" "}
        This website is intended solely for general informational purposes.
        Nothing on this site constitutes legal advice or creates an
        advocate-client relationship. The Bar Council of India does not permit
        solicitation of work by advocates in contravention of the Advocates Act
        1961.
      </div>
    </div>
  );
}
