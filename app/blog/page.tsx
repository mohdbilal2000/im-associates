import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, categories } from "../data/blogData";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DisclaimerBanner from "../components/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Legal Insights & Articles",
  description:
    "In-depth legal articles, procedural guides, and legislative analysis on Indian law — Criminal, Family, Property, Corporate, Consumer law and more. Published by advocates at IM & Associates.",
};

const categoryColors: Record<string, string> = {
  "Criminal Law": "#dc2626",
  "Family Law": "#7c3aed",
  "Property Law": "#059669",
  "Startup & Business Law": "#0369a1",
  "Consumer Law": "#b45309",
  "Constitutional Law": "#1d4ed8",
};

export default function BlogPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <DisclaimerBanner />

        {/* Hero */}
        <section
          style={{
            background: "var(--slate)",
            color: "#fff",
            padding: "72px 0 56px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(184,150,46,0.1) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", position: "relative" }}
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                marginBottom: 28,
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Link href="/" style={{ color: "var(--gold-light)", textDecoration: "none" }}>
                Home
              </Link>
              <span>›</span>
              <span>Legal Insights</span>
            </nav>

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
              <span
                style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }}
              />
              Legal Knowledge Hub
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Legal Insights &amp;
              <br />
              <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>
                Analysis
              </em>
            </h1>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 19,
                color: "rgba(255,255,255,0.6)",
                maxWidth: 560,
                fontWeight: 300,
                lineHeight: 1.65,
              }}
            >
              In-depth educational articles on Indian law — authored by enrolled advocates,
              grounded in current statutes and Supreme Court jurisprudence.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: 36,
                marginTop: 44,
                paddingTop: 36,
                borderTop: "1px solid rgba(184,150,46,0.2)",
                flexWrap: "wrap",
              }}
            >
              {[
                { n: blogPosts.length, label: "Articles Published" },
                { n: categories.length, label: "Practice Areas" },
                { n: 7, label: "Advocate Authors" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 32,
                      fontWeight: 700,
                      color: "var(--gold-light)",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.n}+
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section style={{ background: "var(--cream)", padding: "72px 0 96px" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>

            {/* Category filter chips */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 52,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--slate-light)",
                  marginRight: 4,
                }}
              >
                Filter:
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: "var(--slate)",
                  padding: "6px 16px",
                  borderRadius: 2,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                All
              </span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: categoryColors[cat] ?? "var(--gold)",
                    background: `${categoryColors[cat] ?? "var(--gold)"}18`,
                    border: `1px solid ${categoryColors[cat] ?? "var(--gold)"}30`,
                    padding: "6px 16px",
                    borderRadius: 2,
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Featured post — first item, full width */}
            {blogPosts[0] && (
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: 28 }}
              >
                <article
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    overflow: "hidden",
                    transition: "box-shadow 0.25s",
                  }}
                  className="featured-post-card"
                >
                  {/* Left — text */}
                  <div style={{ padding: "52px 48px", position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 3,
                        height: "100%",
                        background: "linear-gradient(180deg,var(--gold) 0%,transparent 100%)",
                      }}
                    />
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 18, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 11,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: categoryColors[blogPosts[0].category] ?? "var(--gold)",
                          background: `${categoryColors[blogPosts[0].category] ?? "var(--gold)"}15`,
                          padding: "4px 12px",
                          borderRadius: 2,
                          fontWeight: 700,
                        }}
                      >
                        Featured · {blogPosts[0].category}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(20px,2.4vw,28px)",
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: "var(--ink)",
                        marginBottom: 16,
                      }}
                    >
                      {blogPosts[0].title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: 16,
                        color: "var(--slate-mid)",
                        lineHeight: 1.7,
                        marginBottom: 28,
                      }}
                    >
                      {blogPosts[0].summary}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: 20,
                        alignItems: "center",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 13,
                        color: "var(--slate-light)",
                        marginBottom: 28,
                        flexWrap: "wrap",
                      }}
                    >
                      <span>By {blogPosts[0].author}</span>
                      <span>·</span>
                      <span>{blogPosts[0].readTime} read</span>
                      <span>·</span>
                      <span>{new Date(blogPosts[0].updatedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 13,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        fontWeight: 700,
                      }}
                    >
                      Read Full Article →
                    </span>
                  </div>

                  {/* Right — visual */}
                  <div
                    style={{
                      background: "var(--slate)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "48px 44px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        bottom: -40,
                        right: -20,
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 240,
                        fontWeight: 700,
                        color: "rgba(184,150,46,0.06)",
                        lineHeight: 1,
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      §
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: 20,
                      }}
                    >
                      Applicable Legislation
                    </div>
                    {blogPosts[0].legislation.slice(0, 3).map((leg) => (
                      <div
                        key={leg}
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 15,
                          color: "rgba(255,255,255,0.75)",
                          marginBottom: 14,
                          paddingLeft: 16,
                          borderLeft: "2px solid var(--gold)",
                          lineHeight: 1.4,
                        }}
                      >
                        {leg}
                      </div>
                    ))}
                    <div
                      style={{
                        marginTop: 28,
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      {blogPosts[0].tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.4)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            padding: "3px 10px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* Grid of remaining posts */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 22,
              }}
              className="blog-grid"
            >
              {blogPosts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <article
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      padding: "32px 28px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    className="blog-card"
                  >
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: categoryColors[post.category] ?? "var(--gold)",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.3s",
                      }}
                      className="blog-card-bar"
                    />
                    {/* Category + read time */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, gap: 8 }}>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 10,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: categoryColors[post.category] ?? "var(--gold)",
                          background: `${categoryColors[post.category] ?? "var(--gold)"}14`,
                          padding: "3px 10px",
                          borderRadius: 2,
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {post.category}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 11,
                          color: "var(--slate-light)",
                          letterSpacing: "0.06em",
                          flexShrink: 0,
                        }}
                      >
                        {post.readTime}
                      </span>
                    </div>

                    {/* Law badge */}
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        color: "var(--gold)",
                        marginBottom: 12,
                      }}
                    >
                      {post.heroLaw}
                    </div>

                    <h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 17,
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "var(--ink)",
                        marginBottom: 12,
                        flex: "0 0 auto",
                      }}
                    >
                      {post.title}
                    </h2>

                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: 15,
                        color: "var(--slate-mid)",
                        lineHeight: 1.65,
                        marginBottom: 20,
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      } as React.CSSProperties}
                    >
                      {post.summary}
                    </p>

                    {/* Author + date */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 16,
                        borderTop: "1px solid var(--border)",
                        marginTop: "auto",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            background: "var(--slate)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: 10,
                              fontWeight: 700,
                              color: "var(--gold-light)",
                            }}
                          >
                            {post.authorInitials}
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 12,
                            color: "var(--slate-mid)",
                          }}
                        >
                          {post.author}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 11,
                          color: "var(--slate-light)",
                        }}
                      >
                        {new Date(post.updatedDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Educational disclaimer */}
            <div
              style={{
                marginTop: 60,
                background: "var(--parchment)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--gold)",
                padding: "22px 28px",
                fontFamily: "'Crimson Pro', serif",
                fontSize: 14,
                color: "var(--slate-mid)",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              <strong style={{ fontStyle: "normal", color: "var(--ink)" }}>Editorial Note:</strong> All articles on this platform are authored by enrolled advocates for general educational and informational purposes only. They do not constitute legal advice, and reading them does not create an advocate-client relationship. Indian law changes frequently — readers are advised to verify current provisions and consult an advocate for specific legal matters. The BNS, BNSS, and BSA 2023 came into force on 1 July 2024; articles refer to the current applicable law unless stated otherwise.
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .featured-post-card:hover { box-shadow: 0 8px 40px rgba(14,14,14,0.1) !important; }
        .blog-card:hover { border-color: var(--gold) !important; transform: translateY(-3px); box-shadow: 0 8px 32px rgba(14,14,14,0.08); }
        .blog-card:hover .blog-card-bar { transform: scaleX(1) !important; }
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
          .featured-post-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
