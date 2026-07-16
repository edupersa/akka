import type { Metadata } from "next";
import AgenteVozEmpresasPage from "@/components/landing/AgenteVozEmpresasPage";

export const metadata: Metadata = {
  title: "Agente de IA que Atiende tus Llamadas | AKKA Tech Solutions",
  description:
    "Cuando no contestas, tu agente de IA responde, cualifica al cliente y agenda la cita por ti. Pruébalo ahora mismo llamando.",
  openGraph: {
    title: "Agente de IA que Atiende tus Llamadas | AKKA Tech Solutions",
    description:
      "No pierdas ni un cliente por no contestar el teléfono. Desviamos tu número actual a un agente de IA disponible 24/7.",
    type: "website",
    locale: "es_ES",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AgenteVozEmpresasPage />;
}
