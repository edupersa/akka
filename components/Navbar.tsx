"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(15, 33, 71, 0.8)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        backgroundColor: scrolled
          ? "rgba(8, 13, 26, 0.97)"
          : "rgba(8, 13, 26, 0.78)",
        transition: "background-color 0.3s",
      }}
    >
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Brand */}
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          aria-label="AKKA Tech Solutions — inicio"
        >
          <span
            style={{
              background: "#1e6fff",
              color: "#fff",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 15,
              padding: "4px 9px",
              borderRadius: 7,
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            AK
          </span>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 18,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            AKKA{" "}
            <span style={{ color: "#00c8e0" }}>Tech</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="desktop-nav"
          aria-label="Navegación principal"
        >
          {["#servicios", "#por-que", "#proceso", "#reservas"].map(
            (href, i) => {
              const labels = ["Servicios", "Por qué AKKA", "Proceso", "Reservas"];
              return (
                <a
                  key={href}
                  href={href}
                  style={{
                    color: "#8ba3be",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#8ba3be")
                  }
                >
                  {labels[i]}
                </a>
              );
            }
          )}
          <a href="#contacto" className="btn btn-ghost" style={{ padding: "9px 20px", fontSize: 14 }}>
            Contactar
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "#c8d8ee",
            display: "none",
          }}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: "#0d1428",
            borderTop: "1px solid #0f2147",
            padding: "12px 0 20px",
          }}
        >
          {[
            ["#servicios", "Servicios"],
            ["#por-que", "Por qué AKKA"],
            ["#proceso", "Proceso"],
            ["#reservas", "Reservas"],
            ["#contacto", "Contactar"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              style={{
                display: "block",
                padding: "13px 24px",
                color: "#c8d8ee",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid rgba(15, 33, 71, 0.5)",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
