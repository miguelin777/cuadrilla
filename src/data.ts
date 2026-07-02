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
  "Dashboards",
  "Migración de Excel",
  "Agentes de WhatsApp",
  "Integraciones",
  "Portales con panel",
  "Automatización",
  "Sistemas a la medida",
];

export const SERVICES = [
  {
    n: "01",
    title: "Facturación CFDI automática",
    desc: "Genera, timbra y envía tus facturas sin capturar dato por dato. Conectamos tu facturación con el SAT y con tus ventas para que dejes de perder horas cada fin de mes.",
  },
  {
    n: "02",
    title: "De Excel (o papel) a un sistema de verdad",
    desc: "Pasamos tus hojas de cálculo, libretas y formatos sueltos a un sistema centralizado, con acceso por usuario y sin archivos duplicados que nadie sabe cuál es el bueno.",
  },
  {
    n: "03",
    title: "Dashboards de ventas e inventario",
    desc: "Ve cómo va tu negocio en una sola pantalla: qué se vende, qué te queda, qué te está costando. Datos claros para decidir hoy, no a fin de mes.",
  },
  {
    n: "04",
    title: "Integraciones entre tus sistemas",
    desc: "Hacemos que tu punto de venta, tu inventario, tu contabilidad y tus herramientas hablen entre sí. Se acabó el copiar y pegar de un lado a otro.",
  },
  {
    n: "05",
    title: "Sitios y portales con panel de control",
    desc: "Tu página, tu tienda o tu portal de clientes, con un panel donde tú mismo actualizas precios, productos y contenido. Sin depender de nadie para cada cambio.",
  },
  {
    n: "06",
    title: "Agentes de WhatsApp",
    desc: "Un asistente que contesta, agenda, cotiza o toma pedidos por WhatsApp las 24 horas. Atiende a tus clientes cuando tú no puedes y te pasa lo importante ya filtrado.",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Nos cuentas el problema",
    desc: "Una llamada o una junta. Tú hablas en tu idioma —el de tu negocio— y nosotros entendemos qué te está costando tiempo o dinero. Sin tecnicismos.",
  },
  {
    n: "02",
    title: "Te proponemos y cotizamos",
    desc: "Te decimos con claridad qué vamos a construir, qué vas a poder hacer con ello, cuánto tarda y cuánto cuesta. Todo por escrito, antes de empezar.",
  },
  {
    n: "03",
    title: "Construimos y te mostramos",
    desc: "Nos ponemos a trabajar y te enseñamos avances reales, no reportes. Ajustamos sobre la marcha para que recibas exactamente lo que tu negocio necesita.",
  },
  {
    n: "04",
    title: "Entregamos funcionando",
    desc: "Instalamos, dejamos todo operando y te capacitamos a ti y a tu equipo. No te entregamos un manual y adiós: seguimos ahí por si algo se ofrece.",
  },
];

export const WORK = [
  {
    span: "big",
    year: "2026",
    type: "Migración + Sistema",
    name: "Distribuidora La Surtidora",
    built:
      "Migramos su control de inventario y pedidos de tres archivos de Excel a un sistema central con acceso para vendedores y almacén.",
    result: "Cero pedidos con errores de captura; inventario en tiempo real.",
  },
  {
    span: "small",
    year: "2026",
    type: "Facturación CFDI",
    name: "Despacho Vega & Asociados",
    built: "Automatización de facturación CFDI en lote conectada a su sistema de clientes.",
    result: "De una tarde entera a minutos en cierre de mes.",
  },
  {
    span: "half",
    year: "2025",
    type: "Catálogo + WhatsApp",
    name: "Refaccionaria El Pistón",
    built: "Catálogo digital con buscador por marca/modelo y agente de WhatsApp que cotiza al momento.",
    result: "Dejaron de perder ventas por no contestar a tiempo.",
  },
  {
    span: "half",
    year: "2025",
    type: "Portal + Recordatorios",
    name: "Clínica Dental Sonríe Más",
    built:
      "Portal de citas con recordatorios automáticos por WhatsApp y expediente digital de cada paciente.",
    result: "Menos citas perdidas por olvido; adiós a la agenda en papel.",
  },
  {
    span: "small",
    year: "2025",
    type: "Punto de venta + Dashboard",
    name: "Restaurante Doña Chelo",
    built:
      "Sistema de pedidos y control de mesas con dashboard de ventas del día y platillos más vendidos.",
    result: "La dueña ve el día desde el celular, sin estar en el local.",
  },
  {
    span: "big",
    year: "2024",
    type: "Portal administrativo",
    name: "Colegio Herrera",
    built:
      "Portal para papás con estados de cuenta, avisos y pagos en línea, conectado con su control administrativo.",
    result: "Menos filas en caja y una cobranza más ordenada mes con mes.",
  },
];

export const PLANS = [
  {
    name: "Arranque",
    forWho: "Para el negocio que tiene un problema puntual y lo quiere resuelto ya.",
    desc: "Una automatización o herramienta concreta: la facturación, el paso de tu Excel a un sistema, un dashboard. Alcance claro, entrega rápida y directo al grano.",
    price: "Proyecto único · alcance cerrado",
    feat: false,
  },
  {
    name: "A la Medida",
    forWho: "Para el negocio que ya trae varios frentes abiertos y quiere ordenarlos.",
    desc: "El paquete más pedido. Un sistema completo pensado para tu operación: módulos conectados, panel de control, usuarios con permisos y las integraciones que necesites. Lo construimos alrededor de cómo trabajas tú.",
    price: "Por etapas · empiezas a ver resultados desde el inicio",
    feat: true,
    tag: "Más pedido",
  },
  {
    name: "Cuadrilla Continua",
    forWho: "Para el negocio que quiere un equipo de software sin tener que contratarlo.",
    desc: "Nos volvemos tu área de tecnología por una cuota mensual. Mejoras constantes, mantenimiento, soporte y nuevos desarrollos conforme creces. Tú pides, nosotros construimos, mes con mes.",
    price: "Mensualidad · sin amarres eternos",
    feat: false,
  },
];

export const FAQS = [
  {
    q: "No soy de tecnología. ¿Voy a poder usar lo que me entreguen?",
    a: "Esa es justo la idea. Construimos pensando en que lo use gente ocupada, no ingenieros. Te lo dejamos funcionando, te capacitamos a ti y a tu equipo, y nos aseguramos de que quede claro antes de irnos. Si algo no se entiende, no terminamos.",
  },
  {
    q: "¿Cuánto tardan en entregar?",
    a: "Depende del tamaño, pero trabajamos por entregas rápidas y concretas. Una automatización o un dashboard puede estar en pocas semanas. Los proyectos más grandes los partimos en etapas, para que empieces a ver resultados desde el principio y no esperes meses a ciegas.",
  },
  {
    q: "¿Cómo sé cuánto me va a costar antes de comprometerme?",
    a: "Antes de escribir una sola línea de código te entregamos una propuesta con alcance, tiempos y precio por escrito. No hay sorpresas ni cargos que aparecen a medio camino. Si el proyecto crece, lo platicamos antes, no después.",
  },
  {
    q: "Ya tengo sistemas y programas. ¿Empiezan de cero?",
    a: "No necesariamente. En muchos casos conviene conectar y aprovechar lo que ya tienes en lugar de tirarlo. Revisamos tu operación y te decimos honestamente qué vale la pena conservar, qué mejorar y qué sí conviene reemplazar.",
  },
  {
    q: "¿Y si necesito cambios después de la entrega?",
    a: "El software vivo cambia con tu negocio, y eso es normal. Puedes contratar ajustes cuando los necesites o pasarte al plan Cuadrilla Continua, donde el mantenimiento y las mejoras ya vienen incluidos. No te dejamos solo con algo que no puedes mover.",
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
