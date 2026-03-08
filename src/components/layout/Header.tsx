import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { label: "Massage Therapy", path: "/massage" },
  { label: "Holistic Facials", path: "/facials" },
  { label: "Hand & Foot Care", path: "/hand-foot-care" },
  { label: "Brows & Lashes", path: "/brows-lashes" },
  { label: "Hair Removal", path: "/hair-removal" },
  { label: "Gentlemen's Spa", path: "/gentlemens-spa" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services", children: serviceLinks },
  { label: "Policies", path: "/policies" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-heading text-xl lg:text-2xl font-semibold text-foreground leading-tight">
              Downtown Spa
            </span>
            <span className="font-body text-[10px] lg:text-xs tracking-[0.2em] uppercase text-muted-foreground">
              & Relaxation Centre
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.children ? (
                  <button
                    className={`px-4 py-2 font-body text-sm tracking-wide transition-colors flex items-center gap-1 rounded-md
                      ${location.pathname.startsWith("/services") || serviceLinks.some(s => location.pathname === s.path)
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 font-body text-sm tracking-wide transition-colors rounded-md
                      ${location.pathname === link.path
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background rounded-lg shadow-elevated border border-border py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-5 py-2.5 font-body text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="tel:905-873-4907"
            className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Book Now
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-3 py-3 font-body text-sm text-foreground"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() => setMobileOpen(false)}
                                className="block pl-8 pr-3 py-2.5 font-body text-sm text-muted-foreground"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 font-body text-sm text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="tel:905-873-4907"
                className="flex items-center justify-center gap-2 mt-4 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-body text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Call to Book
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
