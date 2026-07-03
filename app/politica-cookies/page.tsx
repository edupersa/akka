import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import CookiePreferencesButton from "@/components/legal/CookiePreferencesButton";

export const metadata: Metadata = {
  title: "Política de Cookies | AKKA Tech Solutions",
  description:
    "Qué cookies utiliza el sitio web de AKKA Tech Solutions, con qué finalidad y cómo puedes gestionarlas o retirar tu consentimiento.",
  robots: { index: true, follow: true },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout>
      <h1>Política de Cookies</h1>
      <p className="legal-updated">Última actualización: 4 de julio de 2026</p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web instala
        en tu dispositivo (ordenador, tablet o móvil) cuando lo visitas.
        Sirven para almacenar y recuperar información sobre tu navegación,
        como tus preferencias o, en el caso de cookies de terceros, para
        medir el uso de la web o mostrar publicidad personalizada.
      </p>

      <h2>2. ¿Qué cookies utiliza este sitio web?</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Finalidad</th>
              <th>Proveedor</th>
              <th>¿Requiere consentimiento?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Necesarias</td>
              <td>Recordar tu elección sobre cookies (localStorage)</td>
              <td>AKKA Tech Solutions (propia)</td>
              <td>No, son imprescindibles</td>
            </tr>
            <tr>
              <td>Funcionales (terceros)</td>
              <td>Mostrar el widget de reserva de llamadas</td>
              <td>Calendly LLC</td>
              <td>Sí</td>
            </tr>
            <tr>
              <td>Analíticas</td>
              <td>
                Medir visitas y uso del sitio (pendiente de activar; no se
                carga ningún script hasta que se configure)
              </td>
              <td>Google Analytics (Google Ireland Ltd.)</td>
              <td>Sí</td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>
                Medición y personalización de anuncios (pendiente de activar;
                no se carga ningún script hasta que se configure)
              </td>
              <td>Meta Pixel/Ads (Meta Platforms Ireland Ltd.)</td>
              <td>Sí</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Las cookies de Calendly, Google Analytics y Meta Pixel solo se
        instalan si aceptas expresamente la categoría correspondiente. Puedes
        consultar las políticas de privacidad de estos proveedores en{" "}
        <a
          href="https://calendly.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          calendly.com/privacy
        </a>
        ,{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          policies.google.com/privacy
        </a>{" "}
        y{" "}
        <a
          href="https://www.facebook.com/privacy/policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook.com/privacy/policy
        </a>
        .
      </p>

      <h2>3. Gestión de tus preferencias</h2>
      <p>
        La primera vez que visitas el sitio te mostramos un aviso donde
        puedes aceptar todas las cookies, rechazar las no esenciales o
        configurarlas de forma individual. Puedes cambiar tu decisión en
        cualquier momento desde este botón:
      </p>
      <CookiePreferencesButton />

      <h2 style={{ marginTop: 32 }}>4. Cómo deshabilitar cookies desde el navegador</h2>
      <p>
        Además de las opciones anteriores, puedes bloquear o eliminar las
        cookies desde la configuración de tu navegador. Ten en cuenta que
        deshabilitar cookies puede afectar al funcionamiento de algunas
        partes del sitio, como el widget de reserva:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/proteccion-mejorada-contra-el-rastreo-firefox-escritorio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>5. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta Política de Cookies cuando incorporemos
        nuevas herramientas (por ejemplo, al activar Google Analytics o Meta
        Pixel) o por cambios normativos. La fecha de la última actualización
        figura al inicio de este documento.
      </p>
    </LegalLayout>
  );
}
