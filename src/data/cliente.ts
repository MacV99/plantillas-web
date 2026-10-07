// Datos del cliente — al clonar la plantilla, cambiar SOLO este archivo (+ colores en project.css).

const whatsapp = "570000000000"; // número con indicativo, sin "+" ni espacios

export const cliente = {
  nombre: "Tu Empresa",
  descripcion: "Breve descripción del negocio o propuesta de valor.",
  url: "https://tuempresa.com", // dominio final, sin "/" al final
  imagenCompartir: "/img/og.jpg", // 1200×630, se ve al compartir el enlace

  telefono: "+57 000 000 0000",
  whatsapp: `https://wa.me/${whatsapp}`,
  correo: "correo@tuempresa.com",
  ciudad: "Tu Ciudad, País",

  menu: [
    { texto: "Inicio", url: "/" },
    { texto: "Servicios", url: "/#servicios" },
    { texto: "Contacto", url: "/#contacto" },
  ],

  redes: [
    { nombre: "WhatsApp", icono: "bi-whatsapp", url: `https://wa.me/${whatsapp}` },
    { nombre: "Instagram", icono: "bi-instagram", url: "https://instagram.com/" },
    { nombre: "TikTok", icono: "bi-tiktok", url: "https://tiktok.com/" },
  ],

  caracteristicas: [
    "Característica 1",
    "Característica 2",
    "Característica 3",
    "Característica 4",
  ],

  // `imagen` es opcional: si se pone (ruta en /public), reemplaza al ícono.
  servicios: [
    {
      icono: "bi-briefcase-fill",
      titulo: "Servicio 1",
      texto: "Descripción corta del servicio y del beneficio para el cliente.",
    },
    {
      icono: "bi-gear-fill",
      titulo: "Servicio 2",
      texto: "Descripción corta del servicio y del beneficio para el cliente.",
    },
    {
      icono: "bi-people-fill",
      titulo: "Servicio 3",
      texto: "Descripción corta del servicio y del beneficio para el cliente.",
    },
  ] as { icono: string; titulo: string; texto: string; imagen?: string }[],

  mision:
    "Texto de la misión del negocio: qué hace, para quién y cómo lo hace diferente.",
  vision:
    "Texto de la visión del negocio: hacia dónde quiere llegar en los próximos años.",
};
