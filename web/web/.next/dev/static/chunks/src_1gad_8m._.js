(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/copy-account-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CopyAccountButton",
    ()=>CopyAccountButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CopyAccountButton({ value }) {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    async function copyAccount() {
        try {
            await navigator.clipboard.writeText(value);
            setStatus("copied");
        } catch  {
            setStatus("error");
        }
    }
    const label = status === "copied" ? "Cuenta copiada" : status === "error" ? "No se pudo copiar" : "Copiar cuenta";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "gift__copy-button",
        type: "button",
        onClick: copyAccount,
        children: [
            status === "copied" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/copy-account-button.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/copy-account-button.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-live": "polite",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/copy-account-button.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/copy-account-button.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(CopyAccountButton, "PrSSnJYnmPMLjC7rLJ6w5budhnU=");
_c = CopyAccountButton;
var _c;
__turbopack_context__.k.register(_c, "CopyAccountButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/countdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Countdown",
    ()=>Countdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const countdownUnits = [
    {
        key: "days",
        label: "Días"
    },
    {
        key: "hours",
        label: "Horas"
    },
    {
        key: "minutes",
        label: "Minutos"
    },
    {
        key: "seconds",
        label: "Segundos"
    }
];
function getCountdownValues(targetDateTime) {
    const remainingSeconds = Math.max(0, Math.floor((new Date(targetDateTime).getTime() - Date.now()) / 1000));
    return {
        days: Math.floor(remainingSeconds / 86400),
        hours: Math.floor(remainingSeconds % 86400 / 3600),
        minutes: Math.floor(remainingSeconds % 3600 / 60),
        seconds: remainingSeconds % 60
    };
}
function Countdown({ targetDateTime }) {
    _s();
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Countdown.useEffect": ()=>{
            const updateCountdown = {
                "Countdown.useEffect.updateCountdown": ()=>{
                    setValues(getCountdownValues(targetDateTime));
                }
            }["Countdown.useEffect.updateCountdown"];
            updateCountdown();
            const intervalId = window.setInterval(updateCountdown, 1000);
            return ({
                "Countdown.useEffect": ()=>window.clearInterval(intervalId)
            })["Countdown.useEffect"];
        }
    }["Countdown.useEffect"], [
        targetDateTime
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "countdown",
        role: "timer",
        "aria-label": "Cuenta atrás hasta la ceremonia",
        children: countdownUnits.map((unit)=>{
            const value = values?.[unit.key];
            const formattedValue = value === undefined ? "--" : unit.key === "days" ? String(value) : String(value).padStart(2, "0");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "countdown__unit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "countdown__value",
                        children: formattedValue
                    }, void 0, false, {
                        fileName: "[project]/src/components/countdown.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "countdown__label",
                        children: unit.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/countdown.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this)
                ]
            }, unit.key, true, {
                fileName: "[project]/src/components/countdown.tsx",
                lineNumber: 58,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/countdown.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Countdown, "P0ko2g7np4/shihRpE9crNzY3I8=");
_c = Countdown;
var _c;
__turbopack_context__.k.register(_c, "Countdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
        countdownTarget: "2027-04-17T12:00:00+02:00",
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
        url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_RSVP_URL ?? "https://docs.google.com/forms/d/e/1FAIpQLSdKm1Dltw008V3YrkLin-RW6aIRD9W0iYQaweKHZMhwr1Mquw/viewform?usp=header"
    },
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
        imageAlt: "Jesica y Juan abrazados en una fotografía en blanco y negro",
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
        firstImageAlt: "Jesica y Juan corriendo juntos junto a la Ciudad de las Artes y las Ciencias",
        firstCaption: "Valencia · Donde todo comenzó",
        secondImageAlt: "Jesica y Juan abrazados y sonrientes en primer plano",
        secondCaption: "Y todo lo que nos queda por vivir.",
        noteFirstLine: "Dos caminos.",
        noteSecondLine: "Una misma dirección."
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
                detail: "Valencia 11:00 · Vila-real 10:30 · Regreso 00:00",
                note: "Más información de las ubicaciones exactas próximamente"
            },
            {
                title: "Alojamiento"
            },
            {
                title: "Vestimenta",
                body: "Formal · Boda de día",
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
        imageAlt: "Jesica y Juan abrazados al atardecer en el campo",
        quoteFirstLine: "Las mejores cosas de la vida",
        quoteSecondLine: "son más bonitas cuando se comparten."
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
    gift: {
        title: "Regalo",
        description: [
            "El mejor regalo es poder compartir este día tan especial con vosotros.",
            "Si, además, queréis tener un detalle con nosotros, podéis ayudarnos a hacer realidad todos esos sueños que todavía nos quedan por cumplir juntos."
        ],
        signoff: "Con todo nuestro cariño,",
        signature: "Jesica & Juan",
        heart: "🤍",
        accountLabel: "Número de cuenta",
        iban: "ES14 0182 5319 7000 0218 610"
    },
    closing: {
        ariaLabel: "Cierre",
        imageAlt: "Jesica y Juan montando juntos en bicicleta por el campo",
        message: "¡Nos vemos en la meta!"
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

//# sourceMappingURL=src_1gad_8m._.js.map