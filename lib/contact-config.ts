// Configuración central de números de contacto del sitio.
// Cambia los valores aquí y se actualizan en todos los componentes que los usan
// (botón flotante, sección de contacto, hero, etc).

// Número de WhatsApp, formato internacional SIN "+" (lo exige wa.me).
export const WHATSAPP_NUMBER = "34614820732";

// Número para llamadas (botón flotante "Llamar a IA" y sección de contacto),
// formato internacional E.164 CON "+".
// TODO: sustituir por el número real de llamadas.
export const CALL_NUMBER = "+34614820732";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildCallLink(number: string = CALL_NUMBER) {
  return `tel:${number.replace(/\s+/g, "")}`;
}
