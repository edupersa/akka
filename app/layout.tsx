import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CookieConsentProvider } from "@/lib/cookie-consent";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AKKA Tech Solutions | Automatización con IA para negocios",
  description:
    "Agentes IA para WhatsApp, Gmail e Instagram. Gestión automática de reservas, CRM personalizado y atención de voz 24/7. Más clientes, menos trabajo manual.",
  keywords: [
    "automatización IA negocios",
    "agente IA WhatsApp",
    "chatbot WhatsApp empresa",
    "gestión reservas automática",
    "agente voz IA",
    "CRM a medida España",
    "automatización pymes",
    "presencia digital",
    "desarrollo software pymes",
  ],
  openGraph: {
    title: "AKKA Tech Solutions — Tu negocio atiende solo, 24/7",
    description:
      "Agentes IA, reservas automáticas y desarrollo de software para negocios que quieren crecer sin contratar más personal.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AKKA Tech Solutions",
  description:
    "Automatización con IA, desarrollo de software y presencia digital para negocios y PYMES.",
  email: "info@akka.es",
  telephone: "+34614820732",
  areaServed: "ES",
  availableLanguage: ["es", "en"],
  priceRange: "€€",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de automatización IA",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatización de respuestas con IA",
          description:
            "Agentes IA para WhatsApp, Gmail, Instagram y más canales.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Presencia Digital",
          description:
            "Web profesional, SEO y estrategia de marketing digital.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gestión de Reservas",
          description:
            "Calendarios, recordatorios y confirmaciones automáticas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo de Software",
          description: "CRM y plataformas a medida para PYMES.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agente de Llamadas de Voz",
          description: "Atención telefónica inteligente disponible 24/7.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <CookieConsentProvider>
          {children}
          <CookieBanner />
          <Analytics />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
