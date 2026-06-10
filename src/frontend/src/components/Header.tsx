import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#why-choose-mfg" },
  { label: "Contact", to: "/#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScrollLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setMobileOpen(false);
  };

  const isActive = (path: string) => window.location.pathname === path;

  return (
    <header className="bg-primary text-primary-foreground border-b border-primary/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-ocid="nav.logo_link"
          >
            <div className="w-10 h-10 rounded border-2 border-accent flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-accent text-sm tracking-wider">
                M
              </span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold text-sm tracking-widest text-accent uppercase">
                MFG
              </div>
              <div className="text-xs text-primary-foreground/70 tracking-wide">
                Manza Familia Group
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) =>
              link.to.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={(e) => handleScrollLink(e, link.to.slice(2))}
                  className="text-sm font-body tracking-wide text-primary-foreground/75 hover:text-accent transition-colors duration-200 cursor-pointer"
                  data-ocid={`nav.${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-body tracking-wide transition-colors duration-200 ${
                    isActive(link.to)
                      ? "text-accent font-medium"
                      : "text-primary-foreground/75 hover:text-accent"
                  }`}
                  data-ocid={`nav.${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded text-primary-foreground/70 hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            data-ocid="nav.mobile_menu_toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-primary/20 bg-primary/95 backdrop-blur-sm"
          data-ocid="nav.mobile_menu"
        >
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.to.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={(e) => handleScrollLink(e, link.to.slice(2))}
                  className="text-sm font-body tracking-wide text-primary-foreground/75 hover:text-accent transition-colors duration-200 py-1"
                  data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-body tracking-wide transition-colors duration-200 py-1 ${
                    isActive(link.to)
                      ? "text-accent font-medium"
                      : "text-primary-foreground/75 hover:text-accent"
                  }`}
                  data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
