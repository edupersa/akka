import Image from "next/image";
import Link from "next/link";

export default function LegalHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid rgba(15, 33, 71, 0.8)",
        backgroundColor: "rgba(8, 13, 26, 0.97)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
          aria-label="AKKA Tech Solutions — inicio"
        >
          <Image
            src="/akka_logo_01.png"
            alt="AKKA Tech Solutions"
            width={120}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        <Link
          href="/"
          className="btn btn-ghost"
          style={{ padding: "9px 18px", fontSize: 14 }}
        >
          ← Volver al inicio
        </Link>
      </div>
    </header>
  );
}
