const services = [
  {
    icon: "💬",
    title: "Automatiza tus respuestas",
    sub: "Cada mensaje sin responder es un cliente perdido",
    desc: "Nuestros agentes IA atienden en segundos en WhatsApp, Gmail, Instagram y más. Tu negocio no duerme, tus clientes tampoco esperan.",
    tag: "IA · Automatización",
    delay: "0s",
  },
  {
    icon: "🌐",
    title: "Presencia Digital",
    sub: "Si no apareces online, no existes",
    desc: "Web profesional, estrategia de contenidos y marketing digital orientado a resultados. Visibilidad real para que tus clientes te encuentren.",
    tag: "Web · SEO · Marketing",
    delay: "0.08s",
  },
  {
    icon: "📅",
    title: "Gestión de Reservas",
    sub: "Deja de gestionar citas por teléfono y WhatsApp",
    desc: "Sistema automático con confirmaciones, recordatorios y cancelaciones. Tus clientes reservan solos, tú te centras en atenderlos.",
    tag: "Reservas · Automatización",
    delay: "0.16s",
  },
  {
    icon: "💼",
    title: "Desarrollo de Software",
    sub: "Tus clientes merecen más que una hoja de Excel",
    desc: "CRM y plataformas a medida para centralizar tus datos, automatizar el seguimiento y convertir más clientes sin más esfuerzo.",
    tag: "CRM · Software",
    delay: "0.24s",
  },
  {
    icon: "📞",
    title: "Agente de Llamadas de Voz",
    sub: "No pierdas ninguna llamada, nunca más",
    desc: "Un agente de voz IA atiende, filtra y agenda llamadas por ti. Disponible 24/7, en español, inglés y más idiomas. Sin esperas, sin coste de recepcionista.",
    tag: "IA · Voz · 24/7",
    delay: "0.12s",
    featured: true,
    href: "/agente-de-voz",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Qué hacemos</span>
          <h2>
            Servicios diseñados para{" "}
            <span style={{ color: "#00c8e0" }}>automatizar</span> y escalar
          </h2>
          <p className="sub">
            Cada servicio es una solución concreta a un problema real de tu negocio.
          </p>
        </div>

        {/* First 4 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 20,
          }}
          className="services-grid-top"
        >
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        {/* 5th card centered */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: 420, width: "100%" }}>
            <ServiceCard service={services[4]} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid-top { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <article
      data-animate
      style={
        {
          "--delay": service.delay,
          border: "1px solid #1a3a6e",
          borderRadius: 14,
          padding: "28px 24px",
          background: "rgba(13, 20, 40, 0.7)",
          transition:
            "border-color 0.25s, transform 0.25s, box-shadow 0.25s, background 0.25s",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          cursor: "default",
          height: "100%",
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#1e6fff";
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = "0 12px 40px -8px rgba(30, 111, 255, 0.28)";
        el.style.background = "rgba(13, 20, 40, 0.95)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#1a3a6e";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.background = "rgba(13, 20, 40, 0.7)";
      }}
    >
      <span
        style={{ fontSize: "2.2rem", lineHeight: 1, filter: "drop-shadow(0 0 6px rgba(0,200,224,0.3))" }}
        aria-hidden="true"
      >
        {service.icon}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: 18,
          fontWeight: 600,
          color: "#fff",
          margin: 0,
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#1e6fff",
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {service.sub}
      </p>
      <p
        style={{
          fontSize: 14.5,
          color: "#8ba3be",
          margin: 0,
          lineHeight: 1.68,
          flex: 1,
        }}
      >
        {service.desc}
      </p>
      <span className="pill" style={{ alignSelf: "flex-start", marginTop: 4 }}>
        {service.tag}
      </span>
      {service.href && (
        <a
          href={service.href}
          className="btn btn-primary"
          style={{ padding: "8px 16px", fontSize: 13, marginTop: 4, alignSelf: "flex-start" }}
        >
          Saber más
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      )}
    </article>
  );
}
