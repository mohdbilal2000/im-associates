import Link from "next/link";

interface Crumb { label: string; href?: string }

interface Props {
  overline: string;
  title: string;
  titleEm?: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  dark?: boolean;
}

export default function PageHeader({ overline, title, titleEm, subtitle, breadcrumbs, dark = true }: Props) {
  return (
    <section
      style={{
        background: dark ? "var(--slate)" : "var(--parchment)",
        color: dark ? "#fff" : "var(--ink)",
        padding: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {dark && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 75% 20%, rgba(184,150,46,0.12) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
      )}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 13,
            color: dark ? "rgba(255,255,255,0.4)" : "var(--slate-light)",
            padding: "20px 0",
            display: "flex",
            gap: 8,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {i > 0 && <span style={{ opacity: 0.4 }}>›</span>}
              {crumb.href ? (
                <Link href={crumb.href} style={{ color: "var(--gold-light)", textDecoration: "none" }}>
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div style={{ paddingBottom: 60, paddingTop: 8 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            {overline}
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 4.5vw, 54px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: dark ? "#fff" : "var(--ink)",
              marginBottom: 16,
            }}
          >
            {title}
            {titleEm && (
              <>
                <br />
                <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>{titleEm}</em>
              </>
            )}
          </h1>
          {subtitle && (
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 19,
                color: dark ? "rgba(255,255,255,0.6)" : "var(--slate-mid)",
                maxWidth: 600,
                fontWeight: 300,
                lineHeight: 1.65,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
