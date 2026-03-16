import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts, getAllSlugs } from "../../data/blogData";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Generate static routes at build time
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

const categoryColors: Record<string, string> = {
  "Criminal Law": "#dc2626",
  "Family Law": "#7c3aed",
  "Property Law": "#059669",
  "Startup & Business Law": "#0369a1",
  "Consumer Law": "#b45309",
  "Constitutional Law": "#1d4ed8",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean);

  const catColor = categoryColors[post.category] ?? "var(--gold)";

  // Article JSON-LD (GEO/AEO)
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalScholarlyArticle",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Advocate",
      worksFor: { "@type": "LegalService", name: "IM & Associates" },
    },
    publisher: {
      "@type": "LegalService",
      name: "IM & Associates",
      url: "https://imassociates.in",
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    about: post.legislation.map((l) => ({ "@type": "Legislation", name: l })),
    keywords: post.tags.join(", "),
    url: `https://imassociates.in/blog/${post.slug}`,
    isPartOf: { "@type": "WebSite", name: "IM & Associates", url: "https://imassociates.in" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Topbar />
      <Navbar />

      <main>
        {/* Article Hero */}
        <section
          style={{
            background: "var(--slate)",
            color: "#fff",
            padding: "0 0 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at 80% 20%, ${catColor}22 0%, transparent 55%)`,
              pointerEvents: "none",
            }}
          />
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", position: "relative" }}>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                padding: "22px 0",
                display: "flex",
                gap: 8,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/" style={{ color: "var(--gold-light)", textDecoration: "none" }}>Home</Link>
              <span>›</span>
              <Link href="/blog" style={{ color: "var(--gold-light)", textDecoration: "none" }}>Legal Insights</Link>
              <span>›</span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>{post.category}</span>
            </nav>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 340px",
                gap: 60,
                paddingBottom: 64,
                paddingTop: 8,
                alignItems: "start",
              }}
              className="article-hero-grid"
            >
              {/* Left */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: catColor,
                    background: `${catColor}22`,
                    padding: "5px 14px",
                    borderRadius: 2,
                    marginBottom: 20,
                    fontWeight: 700,
                  }}
                >
                  {post.category}
                </span>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(26px, 3.5vw, 44px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: "#fff",
                    marginBottom: 20,
                  }}
                >
                  {post.title}
                </h1>

                {/* AEO summary box */}
                <div
                  style={{
                    padding: "18px 22px",
                    background: "rgba(184,150,46,0.1)",
                    borderLeft: "3px solid var(--gold)",
                    marginBottom: 28,
                    borderRadius: "0 2px 2px 0",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 8,
                    }}
                  >
                    Quick Answer
                  </div>
                  <p
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: 16,
                      color: "rgba(255,255,255,0.72)",
                      lineHeight: 1.65,
                    }}
                  >
                    {post.summary}
                  </p>
                </div>

                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    flexWrap: "wrap",
                    alignItems: "center",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "rgba(184,150,46,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "var(--gold-light)",
                      }}
                    >
                      {post.authorInitials}
                    </div>
                    <span>{post.author}, Advocate</span>
                  </div>
                  <span>·</span>
                  <span>{post.readTime} read</span>
                  <span>·</span>
                  <span>
                    Updated:{" "}
                    {new Date(post.updatedDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Right — legislation panel */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(184,150,46,0.2)",
                  padding: "28px 24px",
                  backdropFilter: "blur(8px)",
                }}
                className="legislation-panel"
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 16,
                    borderBottom: "1px solid rgba(184,150,46,0.2)",
                    paddingBottom: 12,
                  }}
                >
                  Applicable Legislation
                </div>
                {post.legislation.map((leg) => (
                  <div
                    key={leg}
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.65)",
                      paddingLeft: 14,
                      borderLeft: "2px solid rgba(184,150,46,0.4)",
                      marginBottom: 12,
                      lineHeight: 1.5,
                    }}
                  >
                    {leg}
                  </div>
                ))}
                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: "1px solid rgba(184,150,46,0.18)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 12,
                  }}
                >
                  Courts
                </div>
                {post.courts.map((c) => (
                  <div
                    key={c}
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: 6,
                    }}
                  >
                    ⚖ {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section style={{ background: "var(--cream)", padding: "72px 0 96px" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 300px",
                gap: 60,
                alignItems: "start",
              }}
              className="article-body-grid"
            >
              {/* Main content */}
              <article>
                {/* Table of contents */}
                <nav
                  aria-label="Table of contents"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    borderLeft: "3px solid var(--gold)",
                    padding: "24px 28px",
                    marginBottom: 48,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 16,
                    }}
                  >
                    Table of Contents
                  </div>
                  <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {post.content.map((s, i) => (
                      <li key={s.heading}>
                        <a
                          href={`#section-${i}`}
                          style={{
                            fontFamily: "'Crimson Pro', serif",
                            fontSize: 15,
                            color: "var(--slate)",
                            textDecoration: "none",
                            lineHeight: 1.4,
                          }}
                        >
                          {s.heading}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#faqs"
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: 15,
                          color: "var(--slate)",
                          textDecoration: "none",
                        }}
                      >
                        Frequently Asked Questions
                      </a>
                    </li>
                  </ol>
                </nav>

                {/* Content sections */}
                {post.content.map((section, i) => (
                  <div key={section.heading} id={`section-${i}`} style={{ marginBottom: 52 }}>
                    <h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(20px,2.5vw,26px)",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: 20,
                        paddingBottom: 14,
                        borderBottom: "1px solid var(--border)",
                        lineHeight: 1.3,
                      }}
                    >
                      {section.heading}
                    </h2>

                    {section.body.split("\n\n").map((para, pi) => (
                      <p
                        key={pi}
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: 17,
                          color: "var(--ink)",
                          lineHeight: 1.8,
                          marginBottom: 16,
                        }}
                      >
                        {para}
                      </p>
                    ))}

                    {/* Table */}
                    {section.table && (
                      <div style={{ overflowX: "auto", marginTop: 24, marginBottom: 24 }}>
                        <table
                          style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            fontFamily: "'Crimson Pro', serif",
                            fontSize: 15,
                          }}
                        >
                          <thead>
                            <tr style={{ background: "var(--slate)" }}>
                              {section.table.headers.map((h) => (
                                <th
                                  key={h}
                                  style={{
                                    padding: "12px 16px",
                                    textAlign: "left",
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: 11,
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "var(--gold-light)",
                                    fontWeight: 600,
                                  }}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, ri) => (
                              <tr
                                key={ri}
                                style={{
                                  background: ri % 2 === 0 ? "var(--white)" : "var(--parchment)",
                                  borderBottom: "1px solid var(--border)",
                                }}
                              >
                                {row.map((cell, ci) => (
                                  <td
                                    key={ci}
                                    style={{
                                      padding: "11px 16px",
                                      color: ci === 0 ? "var(--ink)" : "var(--slate-mid)",
                                      fontWeight: ci === 0 ? 500 : 400,
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Court quote/dictum */}
                    {section.quote && (
                      <blockquote
                        style={{
                          margin: "28px 0",
                          padding: "20px 28px",
                          background: "var(--parchment)",
                          borderLeft: "4px solid var(--gold)",
                          position: "relative",
                        }}
                      >
                        <div
                          aria-hidden
                          style={{
                            position: "absolute",
                            top: 8,
                            left: 16,
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 60,
                            color: "var(--gold-pale)",
                            lineHeight: 1,
                            fontWeight: 700,
                          }}
                        >
                          "
                        </div>
                        <p
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 19,
                            fontStyle: "italic",
                            color: "var(--ink)",
                            lineHeight: 1.65,
                            marginBottom: 12,
                            paddingTop: 16,
                          }}
                        >
                          {section.quote.text}
                        </p>
                        <cite
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 13,
                            letterSpacing: "0.06em",
                            color: "var(--gold)",
                            fontStyle: "normal",
                            fontWeight: 600,
                          }}
                        >
                          — {section.quote.source}
                        </cite>
                      </blockquote>
                    )}

                    {/* Legal note/caution */}
                    {section.note && (
                      <div
                        role="note"
                        style={{
                          margin: "24px 0",
                          padding: "16px 20px",
                          background: "#fef3c7",
                          border: "1px solid #fbbf24",
                          borderLeft: "4px solid #d97706",
                          borderRadius: "0 4px 4px 0",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 10,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "#92400e",
                            marginBottom: 6,
                            fontWeight: 700,
                          }}
                        >
                          ⚠ Important Legal Note
                        </div>
                        <p
                          style={{
                            fontFamily: "'Crimson Pro', serif",
                            fontSize: 15,
                            color: "#78350f",
                            lineHeight: 1.65,
                          }}
                        >
                          {section.note}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* FAQ Section */}
                <div id="faqs" style={{ marginTop: 64 }}>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(22px,2.8vw,30px)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: 32,
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 13,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      FAQ
                    </span>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {post.faqs.map((faq, i) => (
                      <div
                        key={faq.q}
                        style={{
                          borderBottom: "1px solid var(--border)",
                          paddingBottom: i < post.faqs.length - 1 ? 0 : 0,
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 17,
                            fontWeight: 600,
                            color: "var(--ink)",
                            padding: "20px 0 12px",
                            lineHeight: 1.4,
                          }}
                        >
                          {faq.q}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Crimson Pro', serif",
                            fontSize: 16,
                            color: "var(--slate-mid)",
                            lineHeight: 1.75,
                            paddingBottom: 20,
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ marginTop: 52, paddingTop: 28, borderTop: "1px solid var(--border)" }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--slate-light)",
                      marginBottom: 14,
                    }}
                  >
                    Tags
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 12,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--slate-mid)",
                          border: "1px solid var(--border)",
                          padding: "5px 12px",
                          borderRadius: 2,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article disclaimer */}
                <div
                  style={{
                    marginTop: 44,
                    padding: "18px 22px",
                    background: "var(--parchment)",
                    border: "1px solid var(--border)",
                    borderLeft: "3px solid var(--gold)",
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: 14,
                    color: "var(--slate-mid)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  <strong style={{ fontStyle: "normal", color: "var(--ink)" }}>Disclaimer:</strong>{" "}
                  This article is authored for general informational and educational purposes only. It does not constitute legal advice and does not create an advocate-client relationship. Laws referred to in this article are subject to amendment. Readers are advised to consult a qualified advocate for advice specific to their legal matter.
                </div>
              </article>

              {/* Sidebar */}
              <aside style={{ position: "sticky", top: 88 }} className="article-sidebar">
                {/* Author box */}
                <div
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    padding: "28px 24px",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 16,
                    }}
                  >
                    About the Author
                  </div>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "var(--slate)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "2px solid var(--gold-pale)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "var(--gold-light)",
                        }}
                      >
                        {post.authorInitials}
                      </span>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "var(--ink)",
                          marginBottom: 3,
                        }}
                      >
                        {post.author}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 12,
                          color: "var(--gold)",
                          letterSpacing: "0.05em",
                          marginBottom: 8,
                        }}
                      >
                        Advocate · IM &amp; Associates
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 12,
                          color: "var(--slate-light)",
                        }}
                      >
                        Bar Council of Uttar Pradesh
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div
                  style={{
                    background: "var(--slate)",
                    padding: "28px 24px",
                    marginBottom: 20,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      bottom: -30,
                      right: -10,
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 120,
                      color: "rgba(184,150,46,0.06)",
                      lineHeight: 1,
                      fontWeight: 700,
                      pointerEvents: "none",
                    }}
                  >
                    §
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 12,
                    }}
                  >
                    Need Legal Guidance?
                  </div>
                  <p
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: 15,
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: 20,
                      lineHeight: 1.6,
                    }}
                  >
                    Consult an advocate at IM &amp; Associates for advice specific to your matter.
                  </p>
                  <Link
                    href="/#contact"
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      background: "var(--gold)",
                      color: "#fff",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      fontWeight: 600,
                      borderRadius: 2,
                      textAlign: "center",
                    }}
                  >
                    Request Consultation
                  </Link>
                </div>

                {/* Related articles */}
                {relatedPosts.length > 0 && (
                  <div
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      padding: "24px 24px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 10,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: 16,
                        borderBottom: "1px solid var(--border)",
                        paddingBottom: 12,
                      }}
                    >
                      Related Articles
                    </div>
                    {relatedPosts.map((rp) =>
                      rp ? (
                        <Link
                          key={rp.slug}
                          href={`/blog/${rp.slug}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <div
                            style={{
                              padding: "12px 0",
                              borderBottom: "1px solid var(--border)",
                              transition: "opacity 0.2s",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-block",
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: 10,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: categoryColors[rp.category] ?? "var(--gold)",
                                background: `${categoryColors[rp.category] ?? "var(--gold)"}14`,
                                padding: "2px 8px",
                                borderRadius: 2,
                                marginBottom: 6,
                                fontWeight: 600,
                              }}
                            >
                              {rp.category}
                            </span>
                            <div
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 14,
                                fontWeight: 600,
                                color: "var(--ink)",
                                lineHeight: 1.35,
                                marginBottom: 4,
                              }}
                            >
                              {rp.title}
                            </div>
                            <div
                              style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: 12,
                                color: "var(--slate-light)",
                              }}
                            >
                              {rp.readTime}
                            </div>
                          </div>
                        </Link>
                      ) : null
                    )}
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1000px) {
          .article-hero-grid { grid-template-columns: 1fr !important; }
          .legislation-panel { display: none !important; }
          .article-body-grid { grid-template-columns: 1fr !important; }
          .article-sidebar { position: static !important; }
        }
      `}</style>
    </>
  );
}
