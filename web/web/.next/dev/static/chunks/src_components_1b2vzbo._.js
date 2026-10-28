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
;
var _s = __turbopack_context__.k.signature();
"use client";
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
            "aria-label": "Jes y Juan, volver al inicio",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "header-logo",
                src: "/images/logoBodaNegro.png",
                alt: "Jes y Juan",
                width: 153,
                height: 102,
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/site-header.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site-header.tsx",
        lineNumber: 21,
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
]);

//# sourceMappingURL=src_components_1b2vzbo._.js.map