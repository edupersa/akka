import type { Metadata } from "next";
import ClinicaEsteticaPage from "@/components/landing/ClinicaEsteticaPage";

export const metadata: Metadata = {
  title: "Agente IA para Clínicas Estéticas | AKKA Tech Solutions",
  description:
    "Automatiza WhatsApp, llamadas y reservas de tu clínica estética con un agente IA 24/7. Menos no-shows, más pacientes agendadas.",
  openGraph: {
    title: "Agente IA para Clínicas Estéticas | AKKA Tech Solutions",
    description:
      "Que ninguna paciente se vaya a la competencia por no contestar a tiempo. Agente IA 24/7 para WhatsApp, llamadas y reservas.",
    type: "website",
    locale: "es_ES",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ClinicaEsteticaPage />;
}
