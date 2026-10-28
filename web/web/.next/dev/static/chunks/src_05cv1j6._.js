(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/scroll-reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollReveal() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const elements = document.querySelectorAll("[data-reveal]");
            const observer = new IntersectionObserver({
                "ScrollReveal.useEffect": (entries)=>{
                    entries.forEach({
                        "ScrollReveal.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add("is-visible");
                                observer.unobserve(entry.target);
                            }
                        }
                    }["ScrollReveal.useEffect"]);
                }
            }["ScrollReveal.useEffect"], {
                threshold: 0.14
            });
            elements.forEach({
                "ScrollReveal.useEffect": (element)=>observer.observe(element)
            }["ScrollReveal.useEffect"]);
            return ({
                "ScrollReveal.useEffect": ()=>observer.disconnect()
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], []);
    return null;
}
_s(ScrollReveal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/texts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SiteHeader() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const updateHeader = {
                "SiteHeader.useEffect.updateHeader": ()=>{
                    const hasScrolled = window.scrollY > 40;
                    document.body.classList.toggle("has-scrolled", hasScrolled);
                }
            }["SiteHeader.useEffect.updateHeader"];
            updateHeader();
            window.addEventListener("scroll", updateHeader, {
                passive: true
            });
            return ({
                "SiteHeader.useEffect": ()=>{
                    window.removeEventListener("scroll", updateHeader);
                    document.body.classList.remove("has-scrolled");
                }
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "site-header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: "logo-link",
            href: "#inicio",
            "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"].navigation.homeAriaLabel,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "header-logo",
                src: "/images/logoBodaNegro.png",
                alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"].navigation.logoAlt,
                width: 153,
                height: 102,
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/site-header.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site-header.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/texts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "texts",
    ()=>texts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const texts = {
    metadata: {
        title: "Juan & Jes · 17 de abril de 2027",
        description: "Nos casamos. Toda la información para celebrar con nosotros en Masía del Olivar, Bétera.",
        openGraphTitle: "Juan & Jes · Nos casamos",
        openGraphDescription: "17 de abril de 2027 · Masía del Olivar · Bétera"
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
        year: "2027"
    },
    venue: {
        name: "Masía del Olivar",
        city: "Bétera · Valencia",
        location: "Bétera",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mas%C3%ADa+del+Olivar+B%C3%A9tera+Valencia",
        mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d-0.4689735!3d39.5998077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605cc0d66b462d%3A0x3dfdbccb3e140292!2sMas%C3%ADa%20del%20Olivar%20%7C%20Bodas%2C%20Eventos%20en%20Valencia!5e0!3m2!1sen!2ses!4v1793224539485!5m2!1sen!2ses",
        mapTitle: "Mapa de Masía del Olivar"
    },
    rsvp: {
        deadline: "28 de febrero de 2027",
        url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_RSVP_URL ?? "https://docs.google.com/forms/"
    },
    schedule: [
        {
            time: "11:30–11:45",
            label: "Llegada"
        },
        {
            time: "12:00",
            label: "Ceremonia"
        },
        {
            time: "13:00",
            label: "Cóctel",
            approximate: true
        },
        {
            time: "15:00",
            label: "Comida",
            approximate: true
        },
        {
            time: "17:30",
            label: "Fiesta",
            approximate: true
        }
    ],
    transport: [
        {
            origin: "Valencia",
            departure: "11:00",
            returnTime: "00:00"
        },
        {
            origin: "Vila-real",
            departure: "10:30",
            returnTime: "00:00"
        }
    ],
    hotel: {
        name: "Ad Hoc Parque Hotel",
        address: "Carrer Botxí, 6-8 · Torre en Conill · Bétera",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ad+Hoc+Parque+Hotel+B%C3%A9tera",
        mapsEmbedUrl: "https://www.google.com/maps?q=Ad+Hoc+Parque+Hotel+B%C3%A9tera&output=embed",
        mapTitle: "Mapa de Ad Hoc Parque Hotel",
        note: "Al reservar por teléfono, indicad que venís de parte de los novios para acceder al descuento."
    },
    navigation: {
        skipToContent: "Saltar al contenido",
        homeAriaLabel: "Jesica y Juan, volver al inicio",
        logoAlt: "Jesica y Juan"
    },
    hero: {
        imageAlt: "Jesica y Juan en bicicleta al atardecer",
        eyebrow: "¡Reserva la fecha!",
        scrollLink: "Descubre nuestro gran día"
    },
    announcement: {
        title: "¡Nos casamos!"
    },
    story: {
        imageAlt: "Una pareja se abraza durante su sesión de preboda",
        imageIndex: "01 / 05",
        eyebrow: "Jesica & Juan",
        titleFirstLine: "Elegirnos.",
        titleSecondLine: "Una y otra vez.",
        paragraph: "Entre aventuras, planes improvisados y tantos momentos compartidos, hemos ido construyendo nuestra historia. Y ahora llega uno de esos días que queremos recordar siempre.",
        closing: "Y no imaginamos una forma más bonita de celebrarlo que rodeados de las personas que forman parte de nuestra vida."
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
        noteSecondLine: "Una misma dirección."
    },
    day: {
        heading: "Nuestro gran día",
        scheduleAriaLabel: "Horarios de la celebración",
        approximate: "aprox."
    },
    information: {
        eyebrow: "Nosotros ponemos la ilusión, vosotros las ganas de disfrutar.",
        title: "Todo lo que necesitas saber",
        items: [
            {
                title: "Cómo llegar",
                body: "Os esperamos en Masía del Olivar, en Bétera, donde celebraremos tanto la ceremonia como la fiesta.",
                detail: "Aparcamiento gratuito en el recinto."
            },
            {
                title: "Autobuses",
                body: "Habrá servicio de ida y vuelta desde Valencia y Vila-real.",
                detail: "Valencia 11:00 · Vila-real 10:30 · Regreso 00:00"
            },
            {
                title: "Alojamiento"
            },
            {
                title: "Vestimenta",
                body: "Formal · boda de día",
                detail: "Elegante, natural y preparada para disfrutar hasta el final."
            }
        ]
    },
    transportLabels: {
        departure: "Salida",
        return: "Regreso"
    },
    transition: {
        ariaLabel: "Nuestro recorrido",
        imageAlt: "Carretera abierta entre campos al atardecer",
        quoteFirstLine: "Las mejores cosas de la vida",
        quoteSecondLine: "Son más bonitas cuando se comparten."
    },
    rsvpSection: {
        eyebrow: "Confirmación",
        title: "¿Nos acompañas?",
        invitation: "Nos hará muchísima ilusión celebrarlo contigo. Confirma antes del",
        facts: [
            "Una respuesta por invitado",
            "Contadnos si necesitáis autobús",
            "¡Solo te llevará un par de minutos!"
        ],
        button: "Confirmar asistencia",
        help: "Puedes enviar otra respuesta si estás ayudando a un familiar."
    },
    faq: {
        eyebrow: "Para que no os falte ningún detalle",
        title: "Antes del gran día",
        items: [
            {
                question: "¿A qué hora debemos llegar?",
                answer: "¡Os esperamos entre las 11:30 y las 11:45! La ceremonia comenzará a las 12:00."
            },
            {
                question: "¿Hay aparcamiento?",
                answer: "Sí. La Masía del Olivar dispone de aparcamiento gratuito para los invitados."
            },
            {
                question: "¿Habrá autobús?",
                answer: "Sí, habrá servicio de ida y vuelta desde Valencia y Vila-real. Podréis indicar qué trayectos necesitáis al confirmar la asistencia."
            },
            {
                question: "¿Puedo ir acompañado o acompañada?",
                answer: "Sí. Recordad que cada persona debe completar su propia confirmación. Un familiar también puede enviar varias respuestas si alguien necesita ayuda."
            },
            {
                question: "¿Cómo comunico una alergia?",
                answer: "Podéis indicarla en el formulario de confirmación. Para necesidades alimentarias complejas, poneos también en contacto directamente con nosotros."
            },
            {
                question: "¿Hasta cuándo puedo confirmar?",
                answer: "Necesitamos vuestra respuesta antes del 28 de febrero de 2027."
            },
            {
                question: "¿Dónde puedo alojarme?",
                answer: "Recomendamos el Ad Hoc Parque Hotel, en Torre en Conill. Al llamar, indicad que asistís a nuestra boda para consultar el descuento disponible."
            }
        ]
    },
    closing: {
        ariaLabel: "Cierre",
        imageAlt: "Pareja alejándose junta por el campo",
        message: "Nos vemos el 17."
    },
    footer: {
        location: "Bétera",
        privacyTitle: "Privacidad",
        privacy: "Los datos del formulario se utilizarán únicamente para organizar la boda y serán accesibles solo por la pareja y las personas autorizadas."
    },
    externalLinkNote: " (se abre en una pestaña nueva)"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_05cv1j6._.js.map