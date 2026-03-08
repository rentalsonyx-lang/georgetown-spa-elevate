import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, CalendarHeart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Grouped Service Links
const serviceLinks = [
  { label: "Facials & Skincare", path: "/facials" },
  { label: "Massage & Body", path: "/massage" },
  { label: "Wellness Treatments", path: "/wellness-room" },
  { label: "Medical Aesthetics", path: "/medical-aesthetics" },
  { label: "Plexr Plus", path: "/plexr-plus" },
  { label: "Men's Spa", path: "/gentlemens-spa" },
];

// Grouped About Links
const aboutLinks = [
  { label: "Our Story", path: "/about" },
  { label: "Our Team", path: "/our-team" },
  { label: "Policies", path: "/policies" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/facials", children: serviceLinks }, // Adjust path to your main services hub
  { label: "About Us", path: "/about", children: aboutLinks },
  { label: "Gift Certificates", path: "/gift-certificates" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isChildActive = (children: { path: string }[]) =>
    children.some((c) => location.pathname === c.path);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Optional: Tiny integrated top bar instead of a separate component */}
      <div className="hidden sm:flex bg-muted/30 border-b border-border py-1.5 px-4 lg:px-8 justify-between items-center text-[11px] font-body text-muted-foreground tracking-wide">
        <span className="flex items-center gap-1.5"><CalendarHeart className="w-3 h-3"/> By appointment only • Women-Owned</span>
        <a href="tel:905-873-4907" className="hover:text-foreground transition-colors">Call us: 905-873-4907</a>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col shrink-0">
            <span className="font-heading text-xl lg:text-2xl font-semibold text-foreground leading-tight">
              Downtown Spa
            </span>
            <span className="font-body text-[10px] lg:text-xs tracking-[0.2em] uppercase text-muted-foreground">
              & Relaxation Centre
            </span>
          </Link>

          {/* Desktop Nav - Now visible on smaller desktop screens (lg instead of xl) because it's less cluttered */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div key={link.path + link.label} className="relative group">
                {link.children ? (
                  <button
                    className={`px-3 py-2 font-body text-sm tracking-wide transition-colors flex items-center gap-1 rounded-md
                      ${isChildActive(link.children)
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-3 py-2 font-body text-sm tracking-wide transition-colors rounded-md
                      ${location.pathname === link.path
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-background rounded-lg shadow-lg border border-border py-2 min-w-[220px]">
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
            className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-body text-xs font-medium tracking-wide hover:shadow-md transition-all shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
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
            className="lg:hidden bg-background border-t border-border overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path + link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-3 py-3 font-body text-sm text-foreground font-medium"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden bg-muted/30 rounded-lg mx-2 mb-2"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() => setMobileOpen(false)}
                                className="block pl-6 pr-3 py-3 font-body text-sm text-muted-foreground hover:text-foreground"
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
                      className="block px-3 py-3 font-body text-sm text-foreground font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="tel:905-873-4907"
                className="flex items-center justify-center gap-2 mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-full font-body text-sm font-medium"
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
