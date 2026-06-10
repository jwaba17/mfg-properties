import { X as createLucideIcon, L as reactExports, Y as jsxRuntimeExports, _ as cn, a7 as useParams, a6 as Link, a5 as MapPin, a8 as Phone, a9 as Mail } from "./index-OwkT4rFD.js";
import { P as Primitive, B as Button, C as CircleCheck } from "./index-iuJW_zDO.js";
import { p as properties, f as formatPrice, B as BedDouble, a as Bath, M as Maximize2 } from "./properties-BonhiW4q.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function PropertyDetail() {
  const { id } = useParams({ from: "/properties/$id" });
  const property = properties.find((p) => p.id === id);
  if (!property) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-7xl mx-auto px-6 py-24 text-center",
        "data-ocid": "property_detail.not_found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold text-foreground mb-4", children: "Property Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mb-8", children: "The property you're looking for doesn't exist or has been removed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "font-body",
              "data-ocid": "property_detail.back_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/properties", children: "Back to Properties" })
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/properties",
        className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-body",
        "data-ocid": "property_detail.back_link",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
          " Back to Properties"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-[50vh] overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: property.imageUrl,
          alt: property.title,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-6 left-6 text-[10px] font-body font-semibold tracking-widest uppercase px-3 py-1.5 rounded bg-accent text-accent-foreground", children: property.type })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-semibold text-foreground mb-2", children: property.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground font-body mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-accent/70" }),
          property.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold text-foreground mb-8", children: formatPrice(property.price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { size: 20, className: "text-accent mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold text-foreground", children: property.bedrooms }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-body text-muted-foreground", children: "Bedrooms" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { size: 20, className: "text-accent mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold text-foreground", children: property.bathrooms }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-body text-muted-foreground", children: "Bathrooms" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { size: 20, className: "text-accent mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold text-foreground", children: property.area.toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-body text-muted-foreground", children: "Sq Ft" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground mb-4", children: "About This Property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed mb-8", children: property.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground mb-4", children: "Key Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: property.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-start gap-3 text-sm font-body text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircleCheck,
                {
                  size: 16,
                  className: "text-accent shrink-0 mt-0.5"
                }
              ),
              feature
            ]
          },
          feature
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-lg p-6 sticky top-28",
          "data-ocid": "property_detail.enquiry_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground mb-2", children: "Enquire About This Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body text-muted-foreground mb-6", children: "Speak with a dedicated MFG consultant who can provide full details and arrange viewings." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "tel:+441235522000",
                  className: "w-full",
                  "data-ocid": "property_detail.call_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15 }),
                    " Call Us Now"
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `mailto:info@manzafamilia.com?subject=Enquiry: ${property.title}`,
                  className: "w-full",
                  "data-ocid": "property_detail.email_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      className: "w-full gap-2 border-border font-body",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 15 }),
                        " Send Enquiry"
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-body text-muted-foreground space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "Manza Familia Group" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "+44 (0)1235 522 000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "info@manzafamilia.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "14 Old Street, London, EC1V 9BD" })
            ] })
          ]
        }
      ) })
    ] }) })
  ] });
}
export {
  PropertyDetail
};
