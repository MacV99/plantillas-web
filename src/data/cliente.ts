// Datos del cliente — al clonar la plantilla, cambiar SOLO este archivo (+ el bloque MARCA de project.css).
// Para APAGAR una sección: dejar su lista vacía ([]) o su texto vacío (""). La sección desaparece sola.

const whatsapp = "570000000000"; // número con indicativo, sin "+" ni espacios
const mensajeWhatsapp = "Hola, quiero más información."; // mensaje que ya sale escrito al abrir WhatsApp

type Encabezado = { etiqueta?: string; titulo: string; texto?: string };

export const cliente = {
  // ───────── Lo básico ─────────
  nombre: "Tu Empresa",
  // Portada: etiqueta pequeña, frase grande y texto de apoyo
  etiqueta: "Tu Ciudad · Desde 2015",
  titular: "La frase que dice qué haces y para quién.",
  descripcion: "Breve descripción del negocio o propuesta de valor. Una o dos líneas que expliquen por qué elegirte.",
  url: "https://tuempresa.com", // dominio final, sin "/" al final
  imagenCompartir: "/img/og.jpg", // 1200×630, se ve al compartir el enlace

  // ───────── Contacto ─────────
  telefono: "+57 000 000 0000",
  whatsapp: `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}`,
  correo: "correo@tuempresa.com",
  direccion: "Calle 0 # 00 – 00",
  ciudad: "Tu Ciudad",
  region: "Tu Departamento",
  pais: "CO", // dos letras
  // Enlace «Insertar un mapa» de Google Maps (solo la dirección que va en src="…"). Vacío = sin mapa.
  mapa: "",
  horario: [
    { dia: "Lunes a viernes", horas: "8:00 am – 6:00 pm" },
    { dia: "Sábados", horas: "8:00 am – 1:00 pm" },
    { dia: "Domingos y festivos", horas: "Cerrado" },
  ],

  // ───────── Menú ─────────
  // `icono` solo se usa si el menú del celular va en barra abajo.
  menu: [
    { texto: "Inicio", url: "/", icono: "bi-house" },
    { texto: "Servicios", url: "/#servicios", icono: "bi-grid" },
    { texto: "Nosotros", url: "/#nosotros", icono: "bi-people" },
    { texto: "Contacto", url: "/#contacto", icono: "bi-chat-dots" },
  ],
  // Celular: true = menú en una barra abajo (como una app) · false = botón que abre el menú a pantalla completa
  menuEnBarra: false,
  // Botón flotante de WhatsApp en todas las páginas
  whatsappFlotante: true,

  redes: [
    { nombre: "WhatsApp", icono: "bi-whatsapp", url: `https://wa.me/${whatsapp}` },
    { nombre: "Instagram", icono: "bi-instagram", url: "https://instagram.com/" },
    { nombre: "TikTok", icono: "bi-tiktok", url: "https://tiktok.com/" },
  ],

  // ───────── Secciones del inicio ─────────
  caracteristicas: ["Característica 1", "Característica 2", "Característica 3", "Característica 4"],

  cifras: [
    { numero: "10+", texto: "Años de experiencia" },
    { numero: "500+", texto: "Clientes atendidos" },
    { numero: "100%", texto: "Trabajos garantizados" },
    { numero: "24 h", texto: "Tiempo de respuesta" },
  ],

  servicios: {
    encabezado: { etiqueta: "Lo que hacemos", titulo: "Servicios", texto: "Lo que hacemos por ti." } as Encabezado,
    // `imagen` es opcional: si se pone (ruta en /public), reemplaza al ícono.
    lista: [
      { icono: "bi-briefcase-fill", titulo: "Servicio 1", texto: "Descripción corta del servicio y del beneficio para el cliente." },
      { icono: "bi-gear-fill", titulo: "Servicio 2", texto: "Descripción corta del servicio y del beneficio para el cliente." },
      { icono: "bi-people-fill", titulo: "Servicio 3", texto: "Descripción corta del servicio y del beneficio para el cliente." },
    ] as { icono: string; titulo: string; texto: string; imagen?: string }[],
  },

  nosotros: {
    encabezado: { etiqueta: "Quiénes somos", titulo: "Nosotros" } as Encabezado,
    texto: "Cuenta aquí la historia del negocio: cuándo empezó, a quién atiende y qué lo hace distinto. Dos o tres renglones bastan.",
    imagen: "/img/foto.svg",
    puntos: ["Atención directa, sin intermediarios", "Precios claros desde el principio", "Garantía por escrito"],
  },

  ventajas: [
    { icono: "bi-truck", titulo: "Entrega rápida", texto: "En toda la ciudad" },
    { icono: "bi-shield-check", titulo: "Garantía", texto: "En todos los trabajos" },
    { icono: "bi-clock-history", titulo: "Respuesta ágil", texto: "El mismo día" },
  ],

  mision: "Texto de la misión del negocio: qué hace, para quién y cómo lo hace diferente.",
  vision: "Texto de la visión del negocio: hacia dónde quiere llegar en los próximos años.",

  galeria: {
    encabezado: { etiqueta: "Nuestro trabajo", titulo: "Galería", texto: "Toca una foto para verla en grande." } as Encabezado,
    fotos: [
      { imagen: "/img/foto.svg", texto: "Descripción de la foto 1" },
      { imagen: "/img/foto.svg", texto: "Descripción de la foto 2" },
      { imagen: "/img/foto.svg", texto: "Descripción de la foto 3" },
      { imagen: "/img/foto.svg", texto: "Descripción de la foto 4" },
      { imagen: "/img/foto.svg", texto: "Descripción de la foto 5" },
      { imagen: "/img/foto.svg", texto: "Descripción de la foto 6" },
    ],
  },

  precios: {
    encabezado: { etiqueta: "Tarifas", titulo: "Planes", texto: "Elige el que se ajuste a lo que necesitas." } as Encabezado,
    // `precio` vacío = «Consultar». `destacado` resalta un plan.
    planes: [
      { nombre: "Básico", precio: "$ 00.000", detalle: "por mes", incluye: ["Beneficio 1", "Beneficio 2"], destacado: false },
      { nombre: "Completo", precio: "$ 00.000", detalle: "por mes", incluye: ["Beneficio 1", "Beneficio 2", "Beneficio 3"], destacado: true },
      { nombre: "A la medida", precio: "", detalle: "", incluye: ["Todo lo anterior", "Atención personalizada"], destacado: false },
    ],
  },

  testimonios: {
    encabezado: { etiqueta: "Opiniones", titulo: "Lo que dicen de nosotros" } as Encabezado,
    lista: [
      { nombre: "Nombre Apellido", cargo: "Cliente", texto: "Aquí va la opinión real de un cliente, en sus propias palabras." },
      { nombre: "Nombre Apellido", cargo: "Cliente", texto: "Aquí va la opinión real de un cliente, en sus propias palabras." },
      { nombre: "Nombre Apellido", cargo: "Cliente", texto: "Aquí va la opinión real de un cliente, en sus propias palabras." },
    ],
  },

  marcas: {
    encabezado: { etiqueta: "Confían en nosotros", titulo: "Marcas y aliados" } as Encabezado,
    // `logo` es opcional (ruta en /public). Sin logo se muestra el nombre.
    lista: [{ nombre: "Marca 1" }, { nombre: "Marca 2" }, { nombre: "Marca 3" }, { nombre: "Marca 4" }] as { nombre: string; logo?: string }[],
  },

  preguntas: {
    encabezado: { etiqueta: "Dudas", titulo: "Preguntas frecuentes" } as Encabezado,
    lista: [
      { pregunta: "¿Primera pregunta que siempre hacen los clientes?", respuesta: "Respuesta corta y clara." },
      { pregunta: "¿Segunda pregunta frecuente?", respuesta: "Respuesta corta y clara." },
      { pregunta: "¿Tercera pregunta frecuente?", respuesta: "Respuesta corta y clara." },
    ],
  },

  llamada: {
    titulo: "¿Hablamos?",
    texto: "Cuéntanos qué necesitas y te respondemos hoy mismo.",
    boton: "Escríbenos por WhatsApp",
  },

  contacto: {
    encabezado: { etiqueta: "Estamos para servirte", titulo: "Contacto", texto: "Visítanos, escríbenos o llámanos." } as Encabezado,
  },

  articulos: {
    encabezado: { etiqueta: "Para leer", titulo: "Artículos" } as Encabezado,
  },

  // ───────── Para Google ─────────
  // Tipo de negocio según schema.org: "LocalBusiness" sirve para casi todo.
  // Otros: "Restaurant", "Store", "HealthClub", "Attorney", "Dentist", "HVACBusiness", "BeautySalon"…
  tipoNegocio: "LocalBusiness",
  // Contador de visitas (sin cookies): null = apagado · "vercel" · { goatcounter: "micodigo" }
  analitica: null as null | "vercel" | { goatcounter: string },

  // ───────── Legal (página «Tratamiento de datos») ─────────
  legal: {
    razonSocial: "Tu Empresa S.A.S.",
    nit: "000.000.000-0",
    vigencia: "1 de enero de 2026",
  },
};
