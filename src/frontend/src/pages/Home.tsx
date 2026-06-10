import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitQuote } from "@/hooks/useQueries";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

type QuoteFormData = {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
};

export function Home() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [smsOptIn, setSmsOptIn] = useState(false);
  const submitQuote = useSubmitQuote();

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    if (!agreedToPrivacy) {
      setSubmitError("Please accept the Privacy Policy to continue.");
      return;
    }
    try {
      const result = await submitQuote.mutateAsync(formData);
      if (result.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(
          result.error ?? "Something went wrong. Please try again.",
        );
      }
    } catch {
      setSubmitError("Failed to submit your quote. Please try again.");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-background min-h-[88vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-accent font-body font-medium mb-6">
                UK Property Sourcing
              </p>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-foreground mb-8">
                Curating Exceptional
                <br />
                <span className="italic font-normal">Property Portfolios</span>
                <br />
                Across the UK
              </h1>
              <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-md mb-10">
                MFG specialises in strategic real estate deal sourcing,
                connecting investors, buyers, landlords, and estate agents with
                high-quality property opportunities. Through strong industry
                relationships, market insight, and a transparent approach, MFG
                delivers tailored investment deals while fostering long-term
                partnerships built on trust, reliability, and mutual success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  type="button"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wide"
                  data-ocid="hero.contact_button"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  type="button"
                  className="border-foreground/30 text-foreground hover:bg-muted font-body tracking-wide"
                  data-ocid="hero.quote_button"
                  onClick={() =>
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get a Quote
                </Button>
              </div>

              {/* Scroll cue */}
              <div className="mt-16 flex items-center gap-2 text-muted-foreground/60">
                <ArrowDown size={16} className="animate-bounce" />
                <span className="text-xs font-body tracking-widest uppercase">
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80"
                  alt="Modern UK home exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property image accent — between Hero and Why MFG */}
      <div
        className="relative w-full h-64 sm:h-80 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85"
          alt="Elegant modern UK property exterior"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      {/* Why MFG */}
      <section id="why-choose-mfg" className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-accent font-body font-medium mb-3">
                Why Choose MFG
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                Your Trusted Partner
                <br />
                <span className="italic font-normal">in UK Real Estate</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                With experienced professionals sourcing premium properties
                across the United Kingdom, Manza Familia Group brings
                institutional-grade insight to every client engagement — from
                first-time buyers to seasoned portfolio investors.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Off-Market Access",
                    desc: "Exclusive access to properties before they reach the open market through our established network.",
                  },
                  {
                    title: "Nationwide Coverage",
                    desc: "Expert knowledge across London, Manchester, Edinburgh, Bristol, Birmingham and beyond.",
                  },
                  {
                    title: "End-to-End Advisory",
                    desc: "From property identification to completion, we manage every detail on your behalf.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1 rounded-full bg-accent shrink-0 mt-1" />
                    <div>
                      <div className="font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </div>
                      <div className="text-sm text-muted-foreground font-body">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Client Satisfaction", value: "98%" },
                { label: "Cities Covered", value: "12" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <div className="font-display text-3xl font-semibold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-body text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property image accent — between Why MFG and CTA */}
      <div
        className="relative w-full h-56 sm:h-72 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1800&q=85"
          alt="Bright contemporary property interior living room"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-primary/50" />
      </div>

      {/* CTA strip */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-foreground mb-4">
            Ready to Find Your Next Property?
          </h2>
          <p className="text-primary-foreground/65 font-body mb-8 max-w-lg mx-auto">
            Speak with one of our sourcers today and discover how MFG can source
            the perfect property for your needs.
          </p>
          <Button
            variant="outline"
            size="lg"
            type="button"
            className="border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-body tracking-wide"
            data-ocid="cta.contact_button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Property image accent — between CTA and Pricing */}
      <div
        className="relative w-full h-56 sm:h-72 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1800&q=85"
          alt="Luxury UK residential street at dusk"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Pricing / Get a Quote */}
      <section id="pricing" className="bg-muted/30 py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-body font-medium mb-3">
              Tailored to You
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Get Your Tailored Quote
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Fill in your details below and our team will review your
              requirements and come back to you with a personalised quote.
            </p>
          </div>

          {submitted ? (
            <div
              className="bg-card border border-border rounded-xl p-10 text-center"
              data-ocid="pricing.success_state"
            >
              <CheckCircle2 size={48} className="text-accent mx-auto mb-4" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                Thank you!
              </h3>
              <p className="text-muted-foreground font-body">
                We'll be in touch with your tailored quote shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-8 space-y-6"
              data-ocid="pricing.quote_form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className="font-body"
                    data-ocid="pricing.name_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="font-body"
                    data-ocid="pricing.email_input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 7000 000000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="font-body"
                    data-ocid="pricing.phone_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="role"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    I am a… <span className="text-destructive">*</span>
                  </Label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm font-body text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    data-ocid="pricing.role_select"
                  >
                    <option value="" disabled>
                      Select your role…
                    </option>
                    <option value="estate-agent">Estate Agent</option>
                    <option value="investor">Investor</option>
                    <option value="developer">Developer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="font-body text-sm font-medium text-foreground"
                >
                  What are you looking for?{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your property requirements, investment goals, or any specific criteria..."
                  value={formData.message}
                  onChange={handleChange}
                  className="font-body resize-none"
                  data-ocid="pricing.message_textarea"
                />
              </div>

              {/* Consent & Preferences */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground font-body">
                    Consent &amp; Preferences
                  </p>
                </div>

                {[
                  {
                    id: "privacy",
                    label: (
                      <>
                        I acknowledge and agree to the{" "}
                        <a
                          href="/privacy"
                          className="underline underline-offset-2 text-accent hover:text-accent/80 transition-colors duration-150"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>
                        .
                      </>
                    ),
                    helper:
                      "Explains how your data is collected, stored, and used.",
                    badge: "Required",
                    badgeVariant: "required" as const,
                    checked: agreedToPrivacy,
                    onChange: (v: boolean) => setAgreedToPrivacy(v),
                    ocid: "pricing.privacy_checkbox",
                  },
                  {
                    id: "marketing",
                    label:
                      "I would like to receive updates, promotions, and community news via email.",
                    helper: "You can unsubscribe at any time in Settings.",
                    badge: "Optional",
                    badgeVariant: "optional" as const,
                    checked: marketingOptIn,
                    onChange: (v: boolean) => setMarketingOptIn(v),
                    ocid: "pricing.marketing_checkbox",
                  },
                  {
                    id: "sms",
                    label:
                      "I agree to receive important updates and notifications via SMS.",
                    helper:
                      "Message frequency may vary. Standard rates may apply.",
                    badge: "Optional",
                    badgeVariant: "optional" as const,
                    checked: smsOptIn,
                    onChange: (v: boolean) => setSmsOptIn(v),
                    ocid: "pricing.sms_checkbox",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="group flex gap-3 items-start rounded-lg border border-border bg-background p-3.5 hover:bg-muted/40 transition-colors duration-150 cursor-pointer"
                    onClick={() => item.onChange(!item.checked)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        item.onChange(!item.checked);
                      }
                    }}
                  >
                    <Checkbox
                      id={`consent-${item.id}`}
                      checked={item.checked}
                      onCheckedChange={(v) => item.onChange(v === true)}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-0.5 shrink-0 transition-all duration-150"
                      data-ocid={item.ocid}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <label
                          htmlFor={`consent-${item.id}`}
                          className="text-sm font-body text-foreground leading-snug cursor-pointer select-none"
                        >
                          {item.label}
                        </label>
                        <span
                          className={`shrink-0 text-[10px] font-medium font-body px-1.5 py-0.5 rounded-full ${
                            item.badgeVariant === "required"
                              ? "bg-destructive/10 text-destructive"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-body mt-1 leading-relaxed">
                        {item.helper}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {submitError && (
                <p
                  className="text-sm text-destructive font-body text-center"
                  data-ocid="pricing.error_state"
                >
                  {submitError}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={submitQuote.isPending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wide disabled:opacity-60"
                data-ocid="pricing.submit_button"
              >
                {submitQuote.isPending ? "Sending…" : "Request a Quote"}
              </Button>

              <p className="text-xs text-muted-foreground font-body text-center">
                We'll review your details and contact you directly with a
                personalised quote.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
