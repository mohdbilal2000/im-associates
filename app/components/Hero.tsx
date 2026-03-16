"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { value: 12, suffix: "+", label: "Practice Areas" },
  { value: 3, suffix: "", label: "City Offices" },
  { value: 500, suffix: "+", label: "Legal Articles" },
  { value: 20, suffix: "+", label: "Years Combined Experience" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const counts = [
    useCountUp(stats[0].value, 1400, visible),
    useCountUp(stats[1].value, 900, visible),
    useCountUp(stats[2].value, 2000, visible),
    useCountUp(stats[3].value, 1600, visible),
  ];

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "94vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--slate)",
        color: "#fff",
      }}
    >
      {/* Background layers */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 75% 15%, rgba(184,150,46,0.14) 0%, transparent 55%), radial-gradient(ellipse at 8% 85%, rgba(184,150,46,0.09) 0%, transparent 45%), linear-gradient(140deg, #1a2c3d 0%, #0c1824 100%)",
        }}
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(184,150,46,0.03) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(184,150,46,0.03) 80px)",
          pointerEvents: "none",
        }}
      />
      {/* Large decorative § */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(280px, 35vw, 520px)",
          color: "rgba(184,150,46,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          fontWeight: 700,
        }}
      >
        §
      </div>

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          width: "100%",
          paddingTop: "clamp(60px, 10vh, 120px)",
          paddingBottom: "clamp(60px, 10vh, 120px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left content */}
          <div>
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 12,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "var(--gold-light)",
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: 36,
                    height: 1,
                    background: "var(--gold)",
                  }}
                />
                Legal Knowledge & Advisory Platform
              </div>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: 22,
                  color: "#fff",
                }}
              >
                Understanding
                <br />
                Indian Law,
                <br />
                <em
                  style={{
                    color: "var(--gold-light)",
                    fontStyle: "italic",
                  }}
                >
                  Clearly.
                </em>
              </h1>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20,
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: 480,
                  marginBottom: 40,
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                IM &amp; Associates is a legal knowledge platform and advocacy
                firm providing educational resources, case law analysis, and
                legal guidance across multiple practice areas under Indian law.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 30px",
                    background: "var(--gold)",
                    color: "#fff",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 14,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderRadius: 2,
                    fontWeight: 600,
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "#9a7e26";
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "var(--gold)";
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  Request Consultation
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#practice-areas"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 30px",
                    border: "1px solid rgba(255,255,255,0.28)",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 14,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderRadius: 2,
                    fontWeight: 500,
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--gold)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--gold-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.28)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.8)";
                  }}
                >
                  Explore Practice Areas
                </a>
              </div>
              {/* Legal disclaimer */}
              <div
                style={{
                  marginTop: 44,
                  padding: "13px 18px",
                  borderLeft: "2px solid var(--gold)",
                  background: "rgba(184,150,46,0.07)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "'Crimson Pro', serif",
                  maxWidth: 460,
                  lineHeight: 1.6,
                  borderRadius: "0 2px 2px 0",
                }}
              >
                <strong
                  style={{ color: "rgba(255,255,255,0.65)", fontWeight: 500 }}
                >
                  Disclaimer:
                </strong>{" "}
                This website is for informational purposes only and does not
                constitute legal advice. Viewing this site does not create an
                advocate-client relationship.
              </div>
            </div>
          </div>

          {/* Right: Stats panel */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
            className="hero-stats-panel"
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(184,150,46,0.18)",
                backdropFilter: "blur(12px)",
                padding: "44px 40px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 32,
                  borderBottom: "1px solid rgba(184,150,46,0.18)",
                  paddingBottom: 18,
                }}
              >
                Firm at a Glance
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1px",
                  background: "rgba(184,150,46,0.1)",
                }}
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    style={{
                      background: "rgba(14,20,28,0.6)",
                      padding: "28px 24px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 40,
                        fontWeight: 700,
                        color: "var(--gold-light)",
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {counts[i]}
                      {s.suffix}
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
              <div
                style={{
                  marginTop: 28,
                  padding: "18px 20px",
                  background: "rgba(184,150,46,0.06)",
                  border: "1px solid rgba(184,150,46,0.15)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "'Cormorant Garamond', serif",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                Enrolled with the Bar Council of Uttar Pradesh. Practicing
                in Agra, Delhi, and Lucknow courts.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#practice-areas"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "rgba(255,255,255,0.3)",
          textDecoration: "none",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s 1s",
          animation: "bounce 2.4s ease-in-out infinite",
        }}
        aria-label="Scroll down"
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={16} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-stats-panel { display: none !important; }
        }
      `}</style>
    </section>
  );
}
