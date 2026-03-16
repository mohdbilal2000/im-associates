import Link from "next/link";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <section style={{ background: "var(--slate)", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 32px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(184,150,46,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Playfair Display',serif", fontSize: "clamp(180px,30vw,360px)", fontWeight: 700, color: "rgba(184,150,46,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>404</div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
              Page Not Found
              <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
              This Page Does Not Exist
            </h1>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto 40px", fontWeight: 300, lineHeight: 1.65 }}>
              The page you are looking for may have been moved, deleted, or never existed. Please use the navigation to find what you need.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/" style={{ display: "inline-block", padding: "13px 30px", background: "var(--gold)", color: "#fff", fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", fontWeight: 600, borderRadius: 2 }}>
                Go to Home
              </Link>
              <Link href="/blog" style={{ display: "inline-block", padding: "13px 30px", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, borderRadius: 2 }}>
                Legal Articles
              </Link>
              <Link href="/practice-areas" style={{ display: "inline-block", padding: "13px 30px", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, borderRadius: 2 }}>
                Practice Areas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
