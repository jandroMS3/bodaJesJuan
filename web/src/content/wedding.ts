export const wedding = {
  couple: "Juan & Jes",
  monogram: "J & J",
  date: {
    iso: "2027-04-17",
    short: "17 · 04 · 27",
    long: "17 de abril de 2027",
    weekday: "Sábado",
  },
  venue: {
    name: "Masía del Olivar",
    city: "Bétera · Valencia",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mas%C3%ADa+del+Olivar+B%C3%A9tera+Valencia",
  },
  rsvp: {
    deadline: "28 de febrero de 2027",
    url:
      process.env.NEXT_PUBLIC_RSVP_URL ??
      "https://docs.google.com/forms/",
  },
  schedule: [
    { time: "11:30–11:45", label: "Llegada" },
    { time: "12:00", label: "Ceremonia" },
    { time: "13:00", label: "Cóctel", approximate: true },
    { time: "15:00", label: "Comida", approximate: true },
    { time: "17:30", label: "Fiesta", approximate: true },
  ],
  transport: [
    { origin: "Valencia", departure: "11:00", returnTime: "00:00" },
    { origin: "Vila-real", departure: "10:30", returnTime: "00:00" },
  ],
  hotel: {
    name: "Ad Hoc Parque Hotel",
    address: "Carrer Botxí, 6-8 · Torre en Conill · Bétera",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ad+Hoc+Parque+Hotel+B%C3%A9tera",
    note: "Al reservar por teléfono, indicad que venís de parte de los novios para acceder al descuento.",
  },
  faq: [
    {
      question: "¿A qué hora debemos llegar?",
      answer:
        "Os recomendamos llegar entre las 11:30 y las 11:45. La ceremonia comenzará a las 12:00.",
    },
    {
      question: "¿Hay aparcamiento?",
      answer:
        "Sí. La Masía del Olivar dispone de aparcamiento gratuito para los invitados.",
    },
    {
      question: "¿Habrá autobús?",
      answer:
        "Sí, habrá servicio de ida y vuelta desde Valencia y Vila-real. Podréis indicar qué trayectos necesitáis al confirmar la asistencia.",
    },
    {
      question: "¿Puedo ir acompañado o acompañada?",
      answer:
        "Sí. Recordad que cada persona debe completar su propia confirmación. Un familiar también puede enviar varias respuestas si alguien necesita ayuda.",
    },
    {
      question: "¿Cómo comunico una alergia?",
      answer:
        "Podéis indicarla en el formulario de confirmación. Para necesidades alimentarias complejas, poneos también en contacto directamente con nosotros.",
    },
    {
      question: "¿Hasta cuándo puedo confirmar?",
      answer: "Necesitamos vuestra respuesta antes del 28 de febrero de 2027.",
    },
    {
      question: "¿Dónde puedo alojarme?",
      answer:
        "Recomendamos el Ad Hoc Parque Hotel, en Torre en Conill. Al llamar, indicad que asistís a nuestra boda para consultar el descuento disponible.",
    },
  ],
} as const;

export type Wedding = typeof wedding;