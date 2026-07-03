# Control del proyecto — Web AKKA Tech Solutions

Documento vivo de seguimiento general del proyecto: decisiones aprobadas,
estado actual y pendientes de negocio/producto. No sustituye a la
documentación técnica (eso vive en el código y en [AGENTS.md](AGENTS.md));
este documento es para control de alto nivel.

**Cómo usarlo:**
- Cada entrada indica el **origen** (qué trabajo la generó) y la **fecha**.
- Los pendientes se marcan con `[x]` a medida que se completan.
- Al iniciar un cambio importante nuevo, añade su entrada en "Decisiones
  tomadas" y, si genera tareas fuera del código, en "Pendientes" con su
  propio origen identificado.

---

## 1. Resumen del proyecto

Landing page de AKKA Tech Solutions (automatización con IA, desarrollo de
software y presencia digital para pymes/autónomos en España). Next.js 16 +
Tailwind v4. Sin backend propio: captación de contacto vía WhatsApp, email y
reserva de llamada por Calendly.

- **Titular:** Luis Eduardo Peraza Salazar — NIE 60579850N
- **Domicilio:** Calle Cardenal Enrique Tarancón 23, Burjassot (Valencia)
- **Contacto:** info@akka.es · +34 614 82 07 32

## 2. Decisiones tomadas

| Fecha | Área | Decisión | Origen |
|---|---|---|---|
| 2026-06-22 | Producto | Construcción de la landing page inicial (Hero, Servicios, Por qué AKKA, Proceso, Reservas, Contacto, Footer, botón flotante de WhatsApp). | Build inicial |
| 2026-06-27 | Reservas | Sistema de reservas basado en widget embebido de Calendly (`calendly.com/info-akkaes/main-calendar`) en vez de formulario propio. | Commit "Cambiando a calendly" |
| 2026-06-27 | Marca | Logo AKKA como favicon y en el Navbar, sustituyendo el favicon por defecto de Next.js. | Commits de logo/favicon |
| 2026-07-04 | Legal | Se añaden Aviso Legal, Política de Privacidad y Política de Cookies conformes a LSSI-CE/RGPD-LOPDGDD, identificando al titular como persona física (NIE) en proceso de alta como autónomo. | Cambio legal — páginas legales y cookies |
| 2026-07-04 | Cookies/Consentimiento | Se implementa banner de consentimiento funcional (aceptar todo / rechazar no esenciales / configurar por categoría). El widget de Calendly deja de cargarse automáticamente y ahora requiere aceptar la categoría "funcionales". | Cambio legal — páginas legales y cookies |
| 2026-07-04 | Analítica/Marketing | Se decide **no activar todavía** Google Analytics ni Meta Pixel (no hay IDs de seguimiento). Se deja la infraestructura de consentimiento y carga de scripts lista en [components/Analytics.tsx](components/Analytics.tsx), inactiva hasta configurar `.env.local`. | Cambio legal — páginas legales y cookies |

## 3. Estado actual (aprobado)

- **Landing page:** completa y desplegable — Hero, Servicios, Por qué AKKA,
  Proceso, Reservas (Calendly), Contacto, Footer, WhatsApp flotante.
- **Identidad legal del sitio:** operado como persona física (NIE
  60579850N), **aún no dado de alta como autónomo** ante Hacienda/Seguridad
  Social. Legal para publicar como web informativa; no para facturar.
- **Cumplimiento cookies/RGPD:** Aviso Legal, Política de Privacidad y
  Política de Cookies publicadas en `/aviso-legal`, `/politica-privacidad`,
  `/politica-cookies`. Banner de consentimiento activo. Ningún script de
  terceros no esencial se carga sin consentimiento.
- **Rama de trabajo:** `legal-pages-cookies-consent` (pendiente de commit y
  merge a `main`).

## 4. Pendientes

### Legal y alta de actividad
*(origen: cambio legal — páginas legales y cookies, 2026-07-04)*

- [ ] Completar el alta como autónomo/a: censo de empresarios en Hacienda
      (modelo 036/037) y alta en RETA. **Obligatorio antes de facturar o
      cobrar por servicios.**
- [ ] Actualizar el Aviso Legal ([app/aviso-legal/page.tsx](app/aviso-legal/page.tsx))
      con el número de alta / epígrafe IAE una vez completado el trámite, y
      quitar la nota de "en trámite".
- [ ] Confirmar con un gestor/asesor fiscal el epígrafe IAE correcto.
- [ ] Revisión de los textos legales (Aviso Legal, Privacidad, Cookies) por
      un abogado o gestor antes de considerar la web 100% conforme —
      redactados a partir de plantillas estándar, no son asesoría legal
      formal.

### Analítica y marketing (no bloqueante)
*(origen: cambio legal — páginas legales y cookies, 2026-07-04)*

- [ ] Si se activa Google Analytics: crear propiedad GA4, obtener
      Measurement ID (`G-XXXXXXX`) y añadirlo como `NEXT_PUBLIC_GA_ID` en
      `.env.local` (ver [.env.example](.env.example)). No requiere tocar
      código.
- [ ] Si se activa Meta Pixel/Ads: obtener el Pixel ID y añadirlo como
      `NEXT_PUBLIC_META_PIXEL_ID` en `.env.local`.
- [ ] Al activar cualquiera de los dos, actualizar la tabla de la
      [Política de Cookies](app/politica-cookies/page.tsx) (hoy indica
      "pendiente de activar").

### Terceros integrados — verificar acuerdos
*(origen: cambio legal — páginas legales y cookies, 2026-07-04)*

- [ ] Calendly: confirmar que la cuenta acepta su DPA (Data Processing
      Agreement), desde la configuración de la cuenta.
- [ ] WhatsApp: confirmar que el número +34614820732 está dado de alta como
      WhatsApp Business (no personal) para uso comercial.

### Git
*(origen: cambio legal — páginas legales y cookies, 2026-07-04)*

- [x] Commit y merge de la rama `legal-pages-cookies-consent` a `main`
      (2026-07-04).
