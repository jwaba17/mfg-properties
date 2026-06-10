import { X as createLucideIcon, Y as jsxRuntimeExports, _ as cn, L as reactExports, a5 as MapPin, a6 as Link } from "./index-OwkT4rFD.js";
import { p as properties, f as formatPrice, B as BedDouble, a as Bath, M as Maximize2 } from "./properties-BonhiW4q.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
const ALL_TYPES = Array.from(new Set(properties.map((p) => p.type)));
function PropertyCard({
  property,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: "group overflow-hidden border-border hover:shadow-xl transition-shadow duration-300 bg-card",
      "data-ocid": `properties.property_card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: property.imageUrl,
              alt: property.title,
              className: "w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-[10px] font-body font-semibold tracking-widest uppercase px-2.5 py-1 rounded bg-accent text-accent-foreground", children: property.type })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground mb-1 leading-snug", children: property.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground font-body mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12, className: "text-accent/70" }),
            property.location
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold text-foreground mb-4", children: formatPrice(property.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground font-body mb-4 border-t border-border pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { size: 13, className: "text-accent/70" }),
              " ",
              property.bedrooms,
              " beds"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { size: 13, className: "text-accent/70" }),
              " ",
              property.bathrooms,
              " ",
              "baths"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { size: 13, className: "text-accent/70" }),
              " ",
              property.area.toLocaleString(),
              " sq ft"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/properties/$id",
              params: { id: property.id },
              className: "text-xs font-body font-semibold tracking-wide text-accent hover:text-accent/80 transition-colors duration-200 uppercase flex items-center gap-1.5",
              "data-ocid": `properties.detail_link.${index + 1}`,
              children: [
                "View Full Details ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Properties() {
  const [activeType, setActiveType] = reactExports.useState("All");
  const filtered = activeType === "All" ? properties : properties.filter((p) => p.type === activeType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-accent font-body font-medium mb-3", children: "Our Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4", children: "Available Properties" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body max-w-xl", children: "Browse our curated selection of residential and commercial properties across the United Kingdom, sourced exclusively for our clients." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background border-b border-border sticky top-20 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 overflow-x-auto scrollbar-hide", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SlidersHorizontal,
        {
          size: 14,
          className: "text-muted-foreground shrink-0"
        }
      ),
      ["All", ...ALL_TYPES].map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveType(type),
          className: `shrink-0 text-xs font-body font-medium tracking-wide px-4 py-2 rounded-full border transition-colors duration-200 ${activeType === type ? "bg-primary text-primary-foreground border-primary" : "bg-transparent border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`,
          "data-ocid": `properties.filter_tab.${type.toLowerCase().replace(/\s+/g, "_")}`,
          children: type
        },
        type
      ))
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24", "data-ocid": "properties.empty_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-foreground mb-2", children: "No properties found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body", children: "Try adjusting your filter selection." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((property, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { property, index: i }, property.id)) }) })
  ] });
}
export {
  Properties
};
