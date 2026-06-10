import { Mail, MapPin, Phone } from "lucide-react";

const year = new Date().getFullYear();
const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "mfg")}`;

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded border-2 border-accent flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-accent text-sm tracking-wider">
                  M
                </span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-semibold text-sm tracking-widest text-accent uppercase">
                  MFG
                </div>
                <div className="text-xs text-primary-foreground/60 tracking-wide">
                  Manza Familia Group
                </div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/65 leading-relaxed max-w-sm mb-8">
              A leading UK property consultancy dedicated to sourcing
              exceptional residential and commercial properties for discerning
              clients. Trusted expertise, curated results.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display text-xs tracking-widest uppercase text-accent mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+447309048018"
                  className="flex items-start gap-3 text-sm text-primary-foreground/65 hover:text-accent transition-colors duration-200 group"
                  data-ocid="footer.phone_link"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-accent/70" />
                  <span>+44 (0) 7309 048 018</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:wabasolelejonathan@gmail.com"
                  className="flex items-start gap-3 text-sm text-primary-foreground/65 hover:text-accent transition-colors duration-200"
                  data-ocid="footer.email_link"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-accent/70" />
                  <span>wabasolelejonathan@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/65">
                <MapPin size={14} className="mt-0.5 shrink-0 text-accent/70" />
                <address className="not-italic">
                  242 Boundary Road
                  <br />
                  E17 8ND
                  <br />
                  London, UK
                </address>
              </li>
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display text-xs tracking-widest uppercase text-accent mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Residential Acquisitions",
                "Commercial Investment",
                "Portfolio Advisory",
                "Market Appraisals",
                "Property Sourcing",
              ].map((service) => (
                <li
                  key={service}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors duration-200 cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {year} Manza Familia Group. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary-foreground/50 transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
