"use client";

import { useEffect } from "react";

// Replace this URL with your actual Calendly scheduling link once you set up your account at calendly.com
const CALENDLY_URL = "https://calendly.com/info-akka/consulta-gratis";

export default function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="reservas" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Agenda una llamada</span>
          <h2>
            <span style={{ color: "#1e6fff" }}>20 minutos</span> bastan para
            saber si podemos ayudarte.
          </h2>
          <p className="sub">
            Elige el hueco que mejor te venga. Sin formularios, sin esperas.
            Esta es exactamente la misma tecnología que instalamos en tu
            negocio.
          </p>
        </div>

        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget"
          data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=080d1a&text_color=c8d8ee&primary_color=1e6fff`}
          style={{ minWidth: 320, height: 700 }}
        />
      </div>
    </section>
  );
}
