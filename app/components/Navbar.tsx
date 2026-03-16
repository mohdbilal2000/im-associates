"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/about", isHash: false },
  { label: "Practice Areas", href: "/practice-areas", isHash: false },
  { label: "Legal Blog", href: "/blog", isHash: false },
  { label: "Glossary", href: "/glossary", isHash: false },
  { label: "Advocates", href: "/#advocates", isHash: true },
  { label: "FAQs", href: "/#faqs", isHash: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Handle hash navigation from any page — navigate to / first then scroll
  const handleHashNav = useCallback((e: React.MouseEvent, href: string) => {
    const hash = href.replace("/", ""); // e.g. "#advocates"
    if (pathname === "/") {
      // Already on homepage — just scroll
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // On another page — navigate to homepage, then scroll after load
      e.preventDefault();
      sessionStorage.setItem("scrollTo", hash);
      router.push("/");
    }
    setMobileOpen(false);
  }, [pathname, router]);

  // On homepage load, check if we need to scroll to a section
  useEffect(() => {
    if (pathname === "/") {
      const hash = sessionStorage.getItem("scrollTo");
      if (hash) {
        sessionStorage.removeItem("scrollTo");
        // Wait for page to render fully
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 400);
      }
    }
  }, [pathname]);

  const isActive = (href: string, isHash: boolean) => {
    if (isHash) return pathname === "/";
    if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    if (href === "/practice-areas") return pathname === "/practice-areas" || pathname.startsWith("/practice-areas/");
    return pathname === href;
  };

  const linkStyle = (href: string, isHash: boolean): React.CSSProperties => ({
    display: "block",
    padding: "8px 13px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 12,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: isActive(href, isHash) ? "var(--gold)" : "var(--slate-mid)",
    textDecoration: "none",
    fontWeight: isActive(href, isHash) ? 700 : 500,
    borderBottom: isActive(href, isHash) ? "1px solid var(--gold)" : "1px solid transparent",
    transition: "color 0.2s, border-color 0.2s",
    cursor: "pointer",
  });

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 1000,
        background: scrolled ? "rgba(250,248,243,0.98)" : "rgba(250,248,243,0.95)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", lineHeight: 1 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 21, fontWeight: 700, color: "var(--ink)", letterSpacing: "0.02em" }}>
              IM &amp; Associates
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 10, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", marginTop: 3 }}>
              Advocates &amp; Legal Consultants
            </div>
          </Link>

          {/* Desktop links */}
          <ul style={{ display: "flex", gap: 0, listStyle: "none", alignItems: "center" }} className="nav-desktop">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.isHash ? (
                  // Hash links — handle cross-page scroll navigation
                  <a
                    href={item.href}
                    onClick={(e) => handleHashNav(e, item.href)}
                    style={linkStyle(item.href, item.isHash)}
                    className="nav-link"
                  >
                    {item.label}
                  </a>
                ) : (
                  // Regular page links
                  <Link
                    href={item.href}
                    style={linkStyle(item.href, item.isHash)}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li style={{ marginLeft: 10 }}>
              <a
                href="/#contact"
                onClick={(e) => handleHashNav(e, "/#contact")}
                style={{
                  display: "block", padding: "9px 22px",
                  background: "var(--gold)", color: "#fff",
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 12,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  textDecoration: "none", fontWeight: 600, borderRadius: 2,
                  transition: "background 0.2s", cursor: "pointer",
                }}
                className="nav-cta"
              >
                Consultation
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--ink)", padding: 4 }}
            className="nav-mobile-btn"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999,
          background: "var(--slate)", display: "flex", flexDirection: "column",
          padding: "80px 32px 48px", overflowY: "auto",
        }}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.7)" }}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none", marginBottom: 32, borderBottom: "1px solid rgba(184,150,46,0.2)", paddingBottom: 20 }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: "#fff" }}>IM &amp; Associates</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginTop: 4 }}>Advocates &amp; Legal Consultants</div>
          </Link>

          {navItems.map((item) => (
            item.isHash ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleHashNav(e, item.href)}
                style={{
                  fontFamily: "'Cormorant Garamond',serif", fontSize: 22, letterSpacing: "0.06em",
                  color: "rgba(255,255,255,0.75)", textDecoration: "none",
                  padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Cormorant Garamond',serif", fontSize: 22, letterSpacing: "0.06em",
                  color: isActive(item.href, item.isHash) ? "var(--gold-light)" : "rgba(255,255,255,0.75)",
                  textDecoration: "none", padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  fontWeight: isActive(item.href, item.isHash) ? 600 : 400,
                }}
              >
                {item.label}
              </Link>
            )
          ))}

          <a
            href="/#contact"
            onClick={(e) => handleHashNav(e, "/#contact")}
            style={{
              marginTop: 32, padding: "14px 28px", background: "var(--gold)", color: "#fff",
              fontFamily: "'Cormorant Garamond',serif", fontSize: 16, letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none", textAlign: "center",
              borderRadius: 2, fontWeight: 600, cursor: "pointer",
            }}
          >
            Request Consultation
          </a>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: var(--ink) !important; border-bottom-color: var(--gold) !important; }
        .nav-cta:hover { background: var(--ink) !important; }
        @media (max-width: 960px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: flex !important; } }
      `}</style>
    </>
  );
}
