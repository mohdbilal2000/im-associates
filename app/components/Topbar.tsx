"use client";
import Link from "next/link";
import { Phone, Scale } from "lucide-react";

export default function Topbar() {
  return (
    <div
      style={{
        background: "var(--slate)",
        borderBottom: "1px solid rgba(184,150,46,0.28)",
        padding: "7px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 12,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.55)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Scale size={13} color="var(--gold-light)" />
          Legal Knowledge Platform — For Informational Purposes Only
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a
            href="tel:+91XXXXXXXXXX"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "var(--gold-light)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
          >
            <Phone size={12} />
            Contact the Firm
          </a>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>|</span>
          <Link
            href="#contact"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
