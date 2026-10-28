export const texts = {
  metadata: {
    title: "Juan & Jes · 17 de abril de 2027",
    description:
      "Nos casamos. Toda la información para celebrar con nosotros en Masía del Olivar, Bétera.",
    openGraphTitle: "Juan & Jes · Nos casamos",
    openGraphDescription: "17 de abril de 2027 · Masía del Olivar · Bétera",
  },
  couple: "Jesica & Juan",
  monogram: "J & J",
  date: {
    iso: "2027-04-17",
    day: "17",
    short: "17 · 04 · 27",
    long: "17 de abril de 2027",
    weekday: "Sábado",
    month: "Abril",
    year: "2027",
  },
  venue: {
    name: "Masía del Olivar",
    city: "Bétera · Valencia",
    location: "Bétera",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mas%C3%ADa+del+Olivar+B%C3%A9tera+Valencia",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d-0.4689735!3d39.5998077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605cc0d66b462d%3A0x3dfdbccb3e140292!2sMas%C3%ADa%20del%20Olivar%20%7C%20Bodas%2C%20Eventos%20en%20Valencia!5e0!3m2!1sen!2ses!4v1793224539485!5m2!1sen!2ses",
    mapTitle: "Mapa de Masía del Olivar",
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
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Ad+Hoc+Parque+Hotel+B%C3%A9tera&output=embed",
    mapTitle: "Mapa de Ad Hoc Parque Hotel",
    note: "Al reservar por teléfono, indicad que venís de parte de los novios para acceder al descuento.",
  },
  navigation: {
    skipToContent: "Saltar al contenido",
    homeAriaLabel: "Jesica y Juan, volver al inicio",
    logoAlt: "Jesica y Juan",
  },
  hero: {
    imageAlt: "Jesica y Juan en bicicleta al atardecer",
    eyebrow: "¡Reserva la fecha!",
    scrollLink: "Descubre nuestro gran día",
  },
  announcement: {
    title: "¡Nos casamos!",
  },
  story: {
    imageAlt: "Una pareja se abraza durante su sesión de preboda",
    imageIndex: "01 / 05",
    eyebrow: "Jesica & Juan",
    titleFirstLine: "Elegirnos.",
    titleSecondLine: "Una y otra vez.",
    paragraph:
      "Entre aventuras, planes improvisados y tantos momentos compartidos, hemos ido construyendo nuestra historia. Y ahora llega uno de esos días que queremos recordar siempre.",
    closing: "Y no imaginamos una forma más bonita de celebrarlo que rodeados de las personas que forman parte de nuestra vida.",
  },
  editorial: {
    ariaLabel: "Recuerdos juntos",
    eyebrow: "Nuestra historia",
    titleFirstLine: "Juntos",
    titleSecondLine: "siempre mejor.",
    firstImageAlt: "Pareja celebrando junta al aire libre",
    firstCaption: "Valencia · Donde todo comenzó",
    secondImageAlt: "Un instante espontáneo de una celebración",
    secondCaption: "Y todo lo que nos queda por vivir.",
    noteFirstLine: "Dos caminos.",
    noteSecondLine: "Una misma dirección.",
  },
  day: {
    heading: "Nuestro gran día",
    scheduleAriaLabel: "Horarios de la celebración",
    approximate: "aprox.",
  },
  information: {
    eyebrow: "Nosotros ponemos la ilusión, vosotros las ganas de disfrutar.",
    title: "Todo lo que necesitas saber",
    items: [
      {
        title: "Cómo llegar",
        body: "Os esperamos en Masía del Olivar, en Bétera, donde celebraremos tanto la ceremonia como la fiesta.",
        detail: "Aparcamiento gratuito en el recinto.",
      },
      {
        title: "Autobuses",
        body: "Habrá servicio de ida y vuelta desde Valencia y Vila-real.",
        detail: "Valencia 11:00 · Vila-real 10:30 · Regreso 00:00",
      },
      {
        title: "Alojamiento",
      },
      {
        title: "Vestimenta",
        body: "Formal · boda de día",
        detail: "Elegante, natural y preparada para disfrutar hasta el final.",
      },
    ],
  },
  transportLabels: {
    departure: "Salida",
    return: "Regreso",
  },
  transition: {
    ariaLabel: "Nuestro recorrido",
    imageAlt: "Carretera abierta entre campos al atardecer",
    quoteFirstLine: "Las mejores cosas de la vida",
    quoteSecondLine: "Son más bonitas cuando se comparten.",
  },
  rsvpSection: {
    eyebrow: "Confirmación",
    title: "¿Nos acompañas?",
    invitation: "Nos hará muchísima ilusión celebrarlo contigo. Confirma antes del",
    facts: [
      "Una respuesta por invitado",
      "Contadnos si necesitáis autobús",
      "¡Solo te llevará un par de minutos!",
    ],
    button: "Confirmar asistencia",
    help: "Puedes enviar otra respuesta si estás ayudando a un familiar.",
  },
  faq: {
    eyebrow: "Para que no os falte ningún detalle",
    title: "Antes del gran día",
    items: [
      {
        question: "¿A qué hora debemos llegar?",
        answer:
          "¡Os esperamos entre las 11:30 y las 11:45! La ceremonia comenzará a las 12:00.",
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
  },
  closing: {
    ariaLabel: "Cierre",
    imageAlt: "Pareja alejándose junta por el campo",
    message: "Nos vemos el 17.",
  },
  footer: {
    location: "Bétera",
    privacyTitle: "Privacidad",
    privacy:
      "Los datos del formulario se utilizarán únicamente para organizar la boda y serán accesibles solo por la pareja y las personas autorizadas.",
  },
  externalLinkNote: " (se abre en una pestaña nueva)",
} as const;