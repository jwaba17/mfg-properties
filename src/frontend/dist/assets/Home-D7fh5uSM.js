import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, r as reactExports } from "./index-B-ILfGiz.js";
import { P as Primitive, B as Button, C as CircleCheck } from "./index-CaSA0imw.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
function Home() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-background min-h-[88vh] flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 w-full py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-accent font-body font-medium mb-6", children: "UK Property Sourcing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-foreground mb-8", children: [
          "Curating Exceptional",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-normal", children: "Property Portfolios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Across the UK"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-lg leading-relaxed max-w-md mb-10", children: "MFG specialises in strategic real estate deal sourcing, connecting investors, buyers, landlords, and estate agents with high-quality property opportunities. Through strong industry relationships, market insight, and a transparent approach, MFG delivers tailored investment deals while fostering long-term partnerships built on trust, reliability, and mutual success." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "lg",
              type: "button",
              className: "bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wide",
              "data-ocid": "hero.contact_button",
              onClick: () => {
                var _a;
                return (_a = document.getElementById("contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              },
              children: "Get in Touch"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "lg",
              type: "button",
              className: "border-foreground/30 text-foreground hover:bg-muted font-body tracking-wide",
              "data-ocid": "hero.quote_button",
              onClick: () => {
                var _a;
                return (_a = document.getElementById("pricing")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              },
              children: "Get a Quote"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex items-center gap-2 text-muted-foreground/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 16, className: "animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body tracking-widest uppercase", children: "Scroll to explore" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-lg overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
          alt: "Modern UK home exterior",
          className: "w-full h-full object-cover"
        }
      ) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-accent font-body font-medium mb-3", children: "Why Choose MFG" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6", children: [
          "Your Trusted Partner",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-normal", children: "in UK Real Estate" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body leading-relaxed mb-8", children: "With experienced professionals sourcing premium properties across the United Kingdom, Manza Familia Group brings institutional-grade insight to every client engagement — from first-time buyers to seasoned portfolio investors." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
          {
            title: "Off-Market Access",
            desc: "Exclusive access to properties before they reach the open market through our established network."
          },
          {
            title: "Nationwide Coverage",
            desc: "Expert knowledge across London, Manchester, Edinburgh, Bristol, Birmingham and beyond."
          },
          {
            title: "End-to-End Advisory",
            desc: "From property identification to completion, we manage every detail on your behalf."
          }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 rounded-full bg-accent shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-foreground mb-1", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground font-body", children: item.desc })
          ] })
        ] }, item.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
        { label: "Client Satisfaction", value: "98%" },
        { label: "Cities Covered", value: "12" }
      ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-lg p-6 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold text-accent mb-2", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-body text-muted-foreground tracking-wide uppercase", children: stat.label })
          ]
        },
        stat.label
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-semibold text-primary-foreground mb-4", children: "Ready to Find Your Next Property?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/65 font-body mb-8 max-w-lg mx-auto", children: "Speak with one of our sourcers today and discover how MFG can source the perfect property for your needs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "lg",
          type: "button",
          className: "border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-body tracking-wide",
          "data-ocid": "cta.contact_button",
          onClick: () => {
            var _a;
            return (_a = document.getElementById("contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
          },
          children: "Contact Us"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "bg-muted/30 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-accent font-body font-medium mb-3", children: "Tailored to You" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4", children: "Get Your Tailored Quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body leading-relaxed", children: "Fill in your details below and our team will review your requirements and come back to you with a personalised quote." })
      ] }),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-10 text-center",
          "data-ocid": "pricing.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 48, className: "text-accent mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold text-foreground mb-3", children: "Thank you!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body", children: "We’ll be in touch with your tailored quote shortly." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "bg-card border border-border rounded-xl p-8 space-y-6",
          "data-ocid": "pricing.quote_form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "name",
                    className: "font-body text-sm font-medium text-foreground",
                    children: [
                      "Full Name ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "name",
                    name: "name",
                    type: "text",
                    required: true,
                    placeholder: "Jane Smith",
                    value: formData.name,
                    onChange: handleChange,
                    className: "font-body",
                    "data-ocid": "pricing.name_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "email",
                    className: "font-body text-sm font-medium text-foreground",
                    children: [
                      "Email Address ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    name: "email",
                    type: "email",
                    required: true,
                    placeholder: "jane@example.com",
                    value: formData.email,
                    onChange: handleChange,
                    className: "font-body",
                    "data-ocid": "pricing.email_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "phone",
                    className: "font-body text-sm font-medium text-foreground",
                    children: "Phone Number"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    name: "phone",
                    type: "tel",
                    placeholder: "+44 7000 000000",
                    value: formData.phone,
                    onChange: handleChange,
                    className: "font-body",
                    "data-ocid": "pricing.phone_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "role",
                    className: "font-body text-sm font-medium text-foreground",
                    children: [
                      "I am a… ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "role",
                    name: "role",
                    required: true,
                    value: formData.role,
                    onChange: handleChange,
                    className: "w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm font-body text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
                    "data-ocid": "pricing.role_select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select your role…" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "estate-agent", children: "Estate Agent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "investor", children: "Investor" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "message",
                  className: "font-body text-sm font-medium text-foreground",
                  children: [
                    "What are you looking for?",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "message",
                  name: "message",
                  required: true,
                  rows: 4,
                  placeholder: "Tell us about your property requirements, investment goals, or any specific criteria...",
                  value: formData.message,
                  onChange: handleChange,
                  className: "font-body resize-none",
                  "data-ocid": "pricing.message_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                size: "lg",
                className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wide",
                "data-ocid": "pricing.submit_button",
                children: "Request a Quote"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body text-center", children: "We’ll review your details and contact you directly with a personalised quote." })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  Home
};
