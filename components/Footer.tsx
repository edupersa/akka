"use client";

import { useCookieConsent } from "@/lib/cookie-consent";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por qué AKKA" },
  { href: "#proceso", label: "Proceso" },
  { href: "#reservas", label: "Reservas" },
  { href: "#contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-privacidad", label: "Privacidad" },
  { href: "/politica-cookies", label: "Cookies" },
];

export default function Footer() {
  const { openPreferences } = useCookieConsent();

  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#050810",
        borderTop: "1px solid #0f2147",
        padding: "44px 0 52px",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 32,
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#top"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: 10,
              }}
              aria-label="AKKA Tech Solutions — inicio"
            >
              <span
                style={{
                  background: "#1e6fff",
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "3px 8px",
                  borderRadius: 6,
                }}
              >
                AK
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                AKKA <span style={{ color: "#00c8e0" }}>Tech</span>
              </span>
            </a>
            <p style={{ fontSize: 13, color: "#4a6080", margin: 0, maxWidth: 240, lineHeight: 1.6 }}>
              Automatización e IA para negocios que quieren crecer sin contratar más personal.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul
              style={{
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      color: "#4a6080",
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#c8d8ee")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#4a6080")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          style={{
            borderTop: "1px solid #0f2147",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "#4a6080", margin: 0 }}>
            © {year} AKKA Tech Solutions · info@akka.es
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            {legalLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ fontSize: 12, color: "#4a6080", textDecoration: "none" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#c8d8ee")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#4a6080")
                }
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={openPreferences}
              style={{
                fontSize: 12,
                color: "#4a6080",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textDecoration: "underline",
              }}
            >
              Configurar cookies
            </button>
          </div>

          <p style={{ fontSize: 12, color: "#4a6080", margin: 0 }}>
            Hecho con IA · Desarrollado con ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
