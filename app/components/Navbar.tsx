"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Legal Blog", href: "/blog" },
  { label: "Case Law", href: "#case-law" },
  { label: "Glossary", href: "#glossary" },
  { label: "Advocates", href: "#advocates" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((n) => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHash("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleMobileClick = () => setMobileOpen(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(250,248,243,0.98)"
            : "rgba(250,248,243,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          transition: "box-shadow 0.3s",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", lineHeight: 1 }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 21,
                fontWeight: 700,
                color: "var(--ink)",
                letterSpacing: "0.02em",
              }}
            >
              IM &amp; Associates
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginTop: 3,
              }}
            >
              Advocates &amp; Legal Consultants
            </div>
          </Link>

          {/* Desktop Links */}
          <ul
            style={{
              display: "flex",
              gap: 0,
              listStyle: "none",
              alignItems: "center",
            }}
            className="hidden-mobile"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "8px 13px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color:
                      activeHash === item.href
                        ? "var(--gold)"
                        : "var(--slate-mid)",
                    textDecoration: "none",
                    fontWeight: activeHash === item.href ? 600 : 500,
                    position: "relative",
                    transition: "color 0.2s",
                  }}
                  className="nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li style={{ marginLeft: 8 }}>
              <a
                href="#contact"
                style={{
                  display: "block",
                  padding: "9px 22px",
                  background: "var(--gold)",
                  color: "#fff",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontWeight: 600,
                  borderRadius: 2,
                  transition: "background 0.2s",
                }}
              >
                Consultation
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink)",
              padding: 4,
            }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            background: "var(--slate)",
            display: "flex",
            flexDirection: "column",
            padding: "88px 32px 48px",
            gap: 0,
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <X size={26} />
          </button>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: 32,
              borderBottom: "1px solid rgba(184,150,46,0.2)",
              paddingBottom: 20,
            }}
          >
            IM &amp; Associates
          </div>
          {[...navItems, { label: "Contact", href: "#contact" }].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleMobileClick}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                transition: "color 0.2s",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleMobileClick}
            style={{
              marginTop: 32,
              padding: "14px 28px",
              background: "var(--gold)",
              color: "#fff",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: 2,
            }}
          >
            Request Consultation
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
        .nav-link:hover { color: var(--ink) !important; }
      `}</style>
    </>
  );
}
