const WA_LINK =
  "https://wa.me/34614820732?text=Hola%2C%20me%20interesa%20una%20consulta%20con%20AKKA%20Tech%20Solutions";

export default function WaFloat() {
  return (
    <>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 200,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#25d366",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.40)",
          transition: "transform 0.2s, box-shadow 0.2s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1.1)";
          el.style.boxShadow = "0 8px 32px rgba(37, 211, 102, 0.55)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1)";
          el.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.40)";
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.77.463 3.526 1.338 5.063L2 22l5.07-1.323A9.969 9.969 0 0 0 12.004 22C17.531 22 22 17.531 22 12.004 22 6.477 17.531 2 12.004 2zm0 18.18a8.154 8.154 0 0 1-4.163-1.143l-.299-.177-3.012.786.807-2.942-.194-.31A8.179 8.179 0 1 1 12.004 20.18z"/>
        </svg>
      </a>

      {/* Pulse ring */}
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1); opacity: 0.55; }
          70%  { transform: scale(1.65); opacity: 0; }
          100% { transform: scale(1.65); opacity: 0; }
        }
        .wa-float-pulse {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.45);
          animation: wa-pulse 2.2s ease-out infinite;
          pointer-events: none;
          z-index: 199;
        }
      `}</style>
      <div className="wa-float-pulse" aria-hidden="true" />
    </>
  );
}
