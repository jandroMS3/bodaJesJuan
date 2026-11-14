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
    countdownTarget: "2027-04-17T12:00:00+02:00",
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
      "https://docs.google.com/forms/d/e/1FAIpQLSdKm1Dltw008V3YrkLin-RW6aIRD9W0iYQaweKHZMhwr1Mquw/viewform?usp=header",
  },
  transport: [
    { origin: "Valencia", departure: "11:15", returnTime: "00:00" },
    { origin: "Vila-real", departure: "10:45", returnTime: "00:00" },
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
    imageAlt: "Jesica y Juan abrazados en una fotografía en blanco y negro",
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
    firstImageAlt: "Jesica y Juan corriendo juntos junto a la Ciudad de las Artes y las Ciencias",
    firstCaption: "Valencia · Donde todo comenzó",
    secondImageAlt: "Jesica y Juan abrazados y sonrientes en primer plano",
    secondCaption: "Y todo lo que nos queda por vivir.",
    noteFirstLine: "Dos caminos.",
    noteSecondLine: "Una misma dirección.",
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
        detail: "Valencia 11:00 · Vila-real 10:45 · Regreso 00:00",
        note: "Más información de las ubicaciones exactas próximamente",
      },
      {
        title: "Alojamiento",
      },
      {
        title: "Vestimenta",
        body: "Formal · Boda de día",
        detail: "Elegante, natural y preparados para disfrutar hasta el final.",
      },
    ],
  },
  transportLabels: {
    departure: "Salida",
    return: "Regreso",
  },
  transition: {
    ariaLabel: "Nuestro recorrido",
    imageAlt: "Jesica y Juan abrazados al atardecer en el campo",
    quoteFirstLine: "Las mejores cosas de la vida",
    quoteSecondLine: "son más bonitas cuando se comparten.",
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
  gift: {
    title: "Regalo",
    description: [
      "El mejor regalo es poder compartir este día tan especial con vosotros.",
      "Si, además, queréis tener un detalle con nosotros, podéis ayudarnos a hacer realidad todos esos sueños que todavía nos quedan por cumplir juntos.",
    ],
    signoff: "Con todo nuestro cariño,",
    signature: "Jesica & Juan",
    heart: "🤍",
    accountLabel: "Número de cuenta",
    iban: "ES14 0182 5319 7000 0218 6106",
  },
  closing: {
    ariaLabel: "Cierre",
    imageAlt: "Jesica y Juan montando juntos en bicicleta por el campo",
    message: "¡Nos vemos en la meta!",
  },
  footer: {
    location: "Bétera",
    privacyTitle: "Privacidad",
    privacy:
      "Los datos del formulario se utilizarán únicamente para organizar la boda y serán accesibles solo por la pareja y las personas autorizadas.",
  },
  externalLinkNote: " (se abre en una pestaña nueva)",
} as const;