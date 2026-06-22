const reasons = [
  {
    icon: "✨",
    title: "IA real, no chatbots de juguete",
    desc: "Agentes con lógica real conectados a tus sistemas y canales. No respuestas enlatadas ni menús interminables.",
    delay: "0s",
  },
  {
    icon: "⚡",
    title: "Resultados en días, no meses",
    desc: "Primeras automatizaciones funcionando en menos de una semana. Metodología ágil orientada a entregables concretos.",
    delay: "0.08s",
  },
  {
    icon: "🌍",
    title: "Atendemos en tu idioma",
    desc: "Español, inglés y más. Nos adaptamos a ti y a tus clientes internacionales. Sin barreras horarias ni geográficas.",
    delay: "0.16s",
  },
  {
    icon: "🎯",
    title: "100% a medida para tu negocio",
    desc: "Cada solución se diseña para tu caso exacto. Sin plantillas genéricas, sin pagos por funciones que no usas.",
    delay: "0.24s",
  },
];

export default function WhyAkka() {
  return (
    <section id="por-que" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Por qué AKKA</span>
          <h2>
            No solo código.{" "}
            <span style={{ color: "#1e6fff" }}>Resultados medibles</span> para tu negocio.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
          className="why-grid"
        >
          {reasons.map((r) => (
            <div
              key={r.title}
              data-animate
              style={
                {
                  "--delay": r.delay,
                  padding: "26px 22px",
                  borderRadius: 12,
                  background: "rgba(13, 20, 40, 0.5)",
                  border: "1px solid #1a3a6e",
                  borderLeft: "3px solid #1e6fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  transition: "background 0.2s, border-color 0.2s",
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(13, 20, 40, 0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(13, 20, 40, 0.5)";
              }}
            >
              <span style={{ fontSize: "1.9rem", lineHeight: 1 }} aria-hidden="true">
                {r.icon}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#fff",
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#8ba3be",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
