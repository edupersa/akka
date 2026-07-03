import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Aviso Legal | AKKA Tech Solutions",
  description:
    "Información legal sobre el titular, condiciones de uso y propiedad intelectual del sitio web de AKKA Tech Solutions.",
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout>
      <h1>Aviso Legal</h1>
      <p className="legal-updated">Última actualización: 4 de julio de 2026</p>

      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), se informa de los siguientes datos: el presente sitio web
        (en adelante, el &quot;Sitio Web&quot;), accesible bajo el nombre
        comercial <strong>AKKA Tech Solutions</strong>, es titularidad de:
      </p>
      <ul>
        <li>
          <strong>Titular:</strong> Luis Eduardo Peraza Salazar
        </li>
        <li>
          <strong>NIE:</strong> 60579850N
        </li>
        <li>
          <strong>Domicilio:</strong> Calle Cardenal Enrique Tarancón, 23,
          Burjassot, Valencia, España
        </li>
        <li>
          <strong>Correo electrónico de contacto:</strong>{" "}
          <a href="mailto:info@akka.es">info@akka.es</a>
        </li>
        <li>
          <strong>Teléfono:</strong> +34 614 82 07 32
        </li>
      </ul>
      <p>
        <em>
          Nota: la actividad se presta a título de persona física, en proceso
          de alta como empresario/a individual (autónomo/a) ante la Agencia
          Tributaria y la Seguridad Social. Este apartado se actualizará con
          el número de alta correspondiente en cuanto se complete el trámite.
        </em>
      </p>

      <h2>2. Objeto</h2>
      <p>
        El Sitio Web tiene como finalidad informar sobre los servicios de
        automatización con inteligencia artificial, desarrollo de software y
        presencia digital ofrecidos por AKKA Tech Solutions, así como
        facilitar el contacto y la reserva de una consulta con potenciales
        clientes. El acceso al Sitio Web es gratuito y no requiere registro
        previo, salvo para los formularios de contacto o reserva.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso del Sitio Web atribuye la condición de usuario e
        implica la aceptación plena de las condiciones incluidas en este
        Aviso Legal. El usuario se compromete a hacer un uso adecuado y
        lícito del Sitio Web, de conformidad con la legislación vigente, la
        buena fe, el orden público y el presente Aviso Legal. Queda prohibido
        el uso del Sitio Web con fines ilícitos, lesivos de los derechos e
        intereses de terceros, o que de cualquier forma puedan dañar,
        inutilizar, sobrecargar o deteriorar el Sitio Web o impedir su normal
        funcionamiento.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del Sitio Web (textos, imágenes, marcas,
        logotipos, diseño, código fuente y demás elementos) son propiedad de
        AKKA Tech Solutions o de terceros que han autorizado su uso, y están
        protegidos por la normativa de propiedad intelectual e industrial.
        Queda prohibida su reproducción, distribución, comunicación pública o
        transformación total o parcial sin autorización expresa del titular,
        salvo en los casos permitidos por la ley.
      </p>

      <h2>5. Enlaces y contenidos de terceros</h2>
      <p>
        El Sitio Web puede incluir enlaces o widgets a servicios de terceros
        (como WhatsApp, correo electrónico o Calendly) para facilitar el
        contacto y la reserva de citas. AKKA Tech Solutions no se hace
        responsable de los contenidos, políticas o prácticas de dichos
        terceros, que se rigen por sus propias condiciones y políticas de
        privacidad.
      </p>

      <h2>6. Exclusión de responsabilidad</h2>
      <p>
        AKKA Tech Solutions no garantiza la disponibilidad, continuidad ni
        infalibilidad del funcionamiento del Sitio Web, y no se hace
        responsable de los daños que puedan derivarse de la falta de
        disponibilidad o de errores de acceso, sin perjuicio de que se
        adoptarán las medidas razonables para evitar este tipo de incidentes.
      </p>

      <h2>7. Legislación aplicable y jurisdicción</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española.
        Para la resolución de cualquier controversia relacionada con el
        Sitio Web, las partes se someterán a los juzgados y tribunales que
        correspondan conforme a la normativa aplicable en materia de
        consumidores y usuarios.
      </p>
    </LegalLayout>
  );
}
