// Contenido del sitio Cuadrilla. Todo el copy vive aquí.

export const NAV = [
  { label: "Trabajo", href: "#trabajo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Demo", href: "#demo" },
  { label: "Precios", href: "#precios" },
];

export const MARQUEE = [
  "Facturación CFDI",
  "Tableros de ventas",
  "Adiós al Excel",
  "Asistentes de WhatsApp",
  "Tiendas en línea",
  "Paneles de administración",
  "Reservas y pedidos",
  "Hecho a tu medida",
];

export const SERVICES = [
  {
    n: "01",
    title: "Facturación CFDI que se hace sola",
    desc: "¿Sigues capturando factura por factura a fin de mes? Conecto tu facturación con el SAT y con tus ventas para que se timbren y se manden solas.",
  },
  {
    n: "02",
    title: "Tu Excel (o tu libreta) hecho un sistema",
    desc: "Ese archivo que solo tú entiendes y que si se borra te mueres: lo paso a un sistema ordenado, con usuarios y sin copias regadas por todos lados.",
  },
  {
    n: "03",
    title: "Un tablero para ver cómo va el negocio",
    desc: "Cuánto vendiste, qué te queda, qué se mueve y qué no. En una sola pantalla y desde el celular, sin esperar al fin de mes.",
  },
  {
    n: "04",
    title: "Que tus programas se hablen entre ellos",
    desc: "Punto de venta, inventario, contabilidad… conecto lo que ya usas para que dejes de pasar datos a mano de un lado a otro.",
  },
  {
    n: "05",
    title: "Página o tienda con su panel",
    desc: "Tu sitio o tu tienda en línea, con un panel donde tú mismo cambias precios, fotos y productos. Sin hablarme para cada cambio.",
  },
  {
    n: "06",
    title: "Un asistente metido en tu WhatsApp",
    desc: "Contesta, cotiza, agenda y toma pedidos aunque estés dormido o el mostrador esté lleno. Lo importante te llega ya filtrado.",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Me cuentas qué te trae vuelto loco",
    desc: "Una llamada. Me lo platicas como se lo dirías a un compa, sin palabras raras. Yo saco qué te está costando tiempo o dinero.",
  },
  {
    n: "02",
    title: "Te digo qué se puede y cuánto",
    desc: "Nada de cotizaciones misteriosas. Te pongo por escrito qué te voy a hacer, para qué te sirve, cuánto tarda y cuánto cuesta. Ahí tú decides.",
  },
  {
    n: "03",
    title: "Lo armo y te lo voy enseñando",
    desc: "No desaparezco tres meses. Te muestro avances de verdad y lo ajustamos sobre la marcha hasta que quede como lo necesitas.",
  },
  {
    n: "04",
    title: "Te lo dejo funcionando",
    desc: "Lo instalo, te enseño a usarlo a ti y a tu gente, y me quedo para cuando se ofrezca. No te entrego un manual y adiós.",
  },
];

export const WORK = [
  {
    span: "big",
    year: "2026",
    type: "App de cuentas · PWA",
    name: "Menudería Cortazar",
    built:
      "App para el restaurante: los meseros toman la cuenta, la cocina la ve al instante y el dueño revisa ventas y cortes desde el celular. Con login por rol.",
    result: "Las comandas y las cuentas dejaron el papel.",
  },
  {
    span: "small",
    year: "2026",
    type: "Sitio + reservas + panel",
    name: "War Games Gotcha",
    built:
      "Sitio del campo de paintball en Celaya, con reservador que arma el pedido y lo manda por WhatsApp, y panel para que ellos editen todo.",
    result: "Reservan sin llamadas y el dueño cambia precios solo.",
  },
  {
    span: "half",
    year: "2026",
    type: "Tienda en línea + panel",
    name: "Muebles Cortazar",
    built:
      "Tienda con catálogo, carrito y pago con tarjeta (Stripe), más un panel donde el dueño edita productos, precios, fotos y hasta los textos del sitio.",
    result: "Su mueblería vende en línea y se administra sola.",
  },
  {
    span: "half",
    year: "2026",
    type: "Sitio + panel · Restaurante",
    name: "El Ranchito de Yulay",
    built:
      "Sitio del restaurante con panel completo: reservaciones, menú, horarios y contenido, todo editable por ellos sin tocar código.",
    result: "El menú y los horarios los cambian en un clic.",
  },
  {
    span: "small",
    year: "2025",
    type: "Sitio de organización",
    name: "Sonríe México",
    built:
      "Sitio de la red de jóvenes por el medio ambiente: campañas, iniciativas y donaciones.",
    result: "En vivo en sonriemexico.org.",
    url: "https://sonriemexico.org",
  },
  {
    span: "big",
    year: "2025",
    type: "Sitio de producto · Movilidad",
    name: "RuedaTec",
    built:
      "Sitio del módulo que vuelve eléctrica una silla de ruedas manual. Proyecto propio, 2º lugar en el Invention Convention Americas.",
    result: "En vivo en ruedatec.com.",
    url: "https://ruedatec.com",
  },
];

export const PLANS = [
  {
    name: "Presencia",
    forWho: "Para el que todavía manda su ubicación de Google porque no tiene página.",
    desc: "Tu sitio profesional con dominio y hosting, hecho a tu negocio. Rápido, bonito y sin complicaciones.",
    price: "Desde $1,500 una sola vez · o $300 al mes",
    feat: false,
  },
  {
    name: "Negocio",
    forWho: "Para el que quiere vender y administrar todo desde su celular.",
    desc: "El más pedido. Sitio + un panel donde tú cambias precios, fotos y textos, más WhatsApp, reservas o pedidos, según lo que necesites.",
    price: "Arranque desde $2,500 + $450/mes · primer mes gratis, sin enganche",
    feat: true,
    tag: "Más pedido",
  },
  {
    name: "A la medida",
    forWho: "Para el que ya trae varios frentes abiertos y quiere ordenarlos.",
    desc: "Tienda con carrito y pagos, o un sistema hecho para cómo trabajas tú. Lo partimos en etapas para que empieces a ver resultados pronto.",
    price: "Cotización a tu medida · se paga en partes",
    feat: false,
  },
];

export const FAQS = [
  {
    q: "No le sé nada a la tecnología. ¿Voy a poder usarlo?",
    a: "Para eso lo hago. Lo armo pensando en gente ocupada, no en ingenieros. Te lo dejo funcionando, te enseño a ti y a tu equipo, y no me voy hasta que te quede clarito. Si no se entiende, no terminamos.",
  },
  {
    q: "¿En cuánto me lo entregas?",
    a: "Depende del tamaño, pero no te tengo esperando meses. Una automatización o un tablero puede estar en unas semanas. Lo grande lo parto en etapas para que veas resultados desde el arranque y no a ciegas.",
  },
  {
    q: "¿Y cuánto me va a costar?",
    a: "Te lo digo por escrito antes de empezar: qué incluye, cuánto tarda y cuánto es. Sin cargos que salen a medio camino. Si el proyecto crece, lo platicamos antes, no después.",
  },
  {
    q: "Ya tengo página o sistema. ¿Empezamos de cero?",
    a: "No necesariamente. Muchas veces conviene aprovechar lo que ya tienes en vez de tirarlo. Reviso tu caso y te digo con honestidad qué sirve, qué se mejora y qué sí hay que cambiar.",
  },
  {
    q: "¿Y si después quiero cambios?",
    a: "Es normal, tu negocio va cambiando. Me pides ajustes cuando los necesites, o te pasas al plan mensual donde ya van incluidos. No te dejo solo con algo que no puedes mover.",
  },
];

// ---- Demo: guion del chat de WhatsApp ----
export type ChatMsg = {
  side: "in" | "out";
  text: string;
  time: string;
  delay: number; // ms antes de mostrar
  typing?: number; // ms de "escribiendo" antes (solo out)
};

export const CHAT: ChatMsg[] = [
  { side: "in", text: "Buenas, ¿me pueden facturar lo de la comida de hoy?", time: "2:34 p.m.", delay: 500 },
  {
    side: "out",
    text: "¡Claro! Con gusto. ¿Me compartes tu RFC, razón social y uso de CFDI?",
    time: "2:34 p.m.",
    delay: 400,
    typing: 1100,
  },
  { side: "in", text: "GAGL850612QX3 — Laura García Gómez — Gastos en general (G03)", time: "2:35 p.m.", delay: 1400 },
  {
    side: "out",
    text: "Perfecto Laura. Ticket A-10427 por $480.00. Genero tu factura y te la timbro ahora mismo…",
    time: "2:35 p.m.",
    delay: 500,
    typing: 1300,
  },
];

// ---- Demo: datos del CFDI 4.0 (EJEMPLO ficticio, no fiscal) ----
export const CFDI = {
  serie: "A",
  folio: "10427",
  fecha: "2026-06-30T14:35:12",
  formaPago: "01 · Efectivo",
  metodoPago: "PUE · Pago en una sola exhibición",
  tipo: "I · Ingreso",
  moneda: "MXN",
  lugarExpedicion: "38300 · Cortázar, Gto.",
  noCertificado: "30001000000500003456",
  emisor: {
    rfc: "MCO230115AB7",
    nombre: "MENUDERÍA CORTAZAR SA DE CV",
    regimen: "601 · General de Ley Personas Morales",
  },
  receptor: {
    rfc: "GAGL850612QX3",
    nombre: "LAURA GARCÍA GÓMEZ",
    cp: "38300",
    regimen: "605 · Sueldos y Salarios",
    uso: "G03 · Gastos en general",
  },
  conceptos: [
    { cant: "2", clave: "90101500", unidad: "Servicio", desc: "Orden de menudo grande", vu: "120.69", imp: "241.38" },
    { cant: "4", clave: "90101500", unidad: "Pieza", desc: "Refresco de lata 355 ml", vu: "25.00", imp: "100.00" },
    { cant: "1", clave: "90101500", unidad: "Servicio", desc: "Orden de tacos dorados (3 pzas)", vu: "72.41", imp: "72.41" },
  ],
  subtotal: "413.79",
  iva: "66.21",
  total: "480.00",
  uuid: "A1B2C3D4-5E6F-4A8B-9C0D-1E2F3A4B5C6D",
  fechaTimbrado: "2026-06-30T14:35:18",
  rfcPac: "SAT970701NN3",
  noCertSat: "30001000000400002495",
  selloCfdi:
    "H8kZ2Qm3nR7pV1sB4dF6gJ9kL0mN2pQ5rT8uW1xZ3aC6eG9iK2mO5qS8uY1bD4fH7jL0nP3rV6xZ9cF2iM5pS8vY1bE4hK7mQ0tW3zA6dG9jN2qU5xB8eH1kO4rV7yC0fJ3mP6sZ9wB2eI5lQ8uX1aD4gK7nR0tW3zC6fJ9mP2sV5yB8eH1kN4qT7wZ0aD3gI6lO9rU2xB5eH8kN1qT4wZ7aD0gJ==",
  cadena:
    "||1.1|A1B2C3D4-5E6F-4A8B-9C0D-1E2F3A4B5C6D|2026-06-30T14:35:18|SAT970701NN3|H8kZ2Qm3nR7pV1sB4dF6gJ9kL0mN2pQ5rT8uW1xZ3aC6eG9iK2mO5qS8uY1bD4fH7jL0nP3rV6xZ9cF2iM5p==|30001000000400002495||",
};

export const STAMP_LOG = [
  "Leyendo pedido A-10427…",
  "Validando RFC del receptor ante el SAT…",
  "Calculando conceptos e IVA (16%)…",
  "Generando cadena original…",
  "Solicitando timbre al PAC…",
  "✓ Timbrado — Folio Fiscal asignado",
];
