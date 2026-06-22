const steps = [
  {
    num: "01",
    title: "Consulta gratuita",
    desc: "Me cuentas tu negocio y qué quieres lograr. Sin formularios eternos: solo un WhatsApp o una llamada de 20 minutos.",
    delay: "0s",
  },
  {
    num: "02",
    title: "Propuesta clara",
    desc: "Te presento la solución, el plazo y el precio. Sin letra pequeña, sin sorpresas. Tú apruebas antes de que empiece nada.",
    delay: "0.1s",
  },
  {
    num: "03",
    title: "Implementación y entrega",
    desc: "Construyo, pruebo y entrego. Con soporte post-lanzamiento incluido. Fuera de horario, sin problema.",
    delay: "0.2s",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2>
            Tres pasos. Sin tecnicismos.{" "}
            <span style={{ color: "#00c8e0" }}>Con resultados.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
          className="steps-grid"
        >
          {steps.map((s, i) => (
            <div
              key={s.num}
              data-animate
              style={
                {
                  "--delay": s.delay,
                  padding: "36px 28px",
                  background: "rgba(13, 20, 40, 0.7)",
                  border: "1px solid #1a3a6e",
                  borderLeft: i > 0 ? "none" : "1px solid #1a3a6e",
                  borderRadius:
                    i === 0
                      ? "14px 0 0 14px"
                      : i === steps.length - 1
                      ? "0 14px 14px 0"
                      : "0",
                  position: "relative",
                } as React.CSSProperties
              }
            >
              {/* Ghosted step number */}
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 56,
                  color: "#1e6fff",
                  opacity: 0.18,
                  lineHeight: 1,
                  marginBottom: 16,
                  letterSpacing: "-0.03em",
                }}
                aria-hidden="true"
              >
                {s.num}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "#8ba3be",
                  lineHeight: 1.68,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>

              {/* Connector arrow (hidden on last) */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: -14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#1e6fff",
                    fontSize: 22,
                    fontWeight: 700,
                    zIndex: 2,
                    textShadow: "0 0 10px rgba(30,111,255,0.5)",
                  }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .steps-grid > div {
            border-left: 1px solid #1a3a6e !important;
            border-top: none !important;
            border-radius: 0 !important;
          }
          .steps-grid > div:first-child {
            border-radius: 14px 14px 0 0 !important;
            border-top: 1px solid #1a3a6e !important;
          }
          .steps-grid > div:last-child {
            border-radius: 0 0 14px 14px !important;
          }
          .steps-grid > div > span[aria-hidden="true"][style*="position: absolute"] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
