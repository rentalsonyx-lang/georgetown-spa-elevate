import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faceLinks = [
  { label: "All Facials", path: "/facials" },
  { label: "HydroDerm Pro Facial", path: "/hydroderm-pro" },
  { label: "Marma Energy Facial", path: "/marma-energy-facial" },
  { label: "Micro-Needling", path: "/micro-needling" },
];

const bodyLinks = [
  { label: "Massage Therapy", path: "/massage" },
  { label: "Hand & Foot Care", path: "/hand-foot-care" },
  { label: "Hair Removal", path: "/hair-removal" },
  { label: "Brows & Lashes", path: "/brows-lashes" },
];

const wellnessLinks = [
  { label: "Traditional Chinese Medicine", path: "/traditional-chinese-medicine" },
  { label: "Reiki", path: "/reiki" },
  { label: "Osteopathy", path: "/osteopathy" },
  { label: "Raindrop Therapy", path: "/raindrop-therapy" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Face", path: "/facials", children: faceLinks },
  { label: "Body", path: "/massage", children: bodyLinks },
  { label: "Wellness Room", path: "/wellness-room", children: wellnessLinks },
  { label: "Plexr Plus", path: "/plexr-plus" },
  { label: "Medical Aesthetics", path: "/medical-aesthetics" },
  { label: "Men's Spa", path: "/gentlemens-spa" },
  { label: "Gift Certificates", path: "/gift-certificates" },
  { label: "Our Team", path: "/our-team" },
  { label: "Policies", path: "/policies" },
  { label: "Contact", path: "/contact" },
];

const allChildPaths = [...faceLinks, ...bodyLinks, ...wellnessLinks].map(l => l.path);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isChildActive = (children: { path: string }[]) =>
    children.some(c => location.pathname === c.path);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
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

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div key={link.path + link.label} className="relative group">
                {link.children ? (
                  <button
                    className={`px-3 py-2 font-body text-xs tracking-wide transition-colors flex items-center gap-1 rounded-md
                      ${isChildActive(link.children) || location.pathname === link.path
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
                    className={`px-3 py-2 font-body text-xs tracking-wide transition-colors rounded-md
                      ${location.pathname === link.path
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                )}

                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background rounded-lg shadow-elevated border border-border py-2 min-w-[240px]">
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
            className="hidden xl:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-body text-xs font-medium tracking-wide hover:opacity-90 transition-opacity shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            Book Now
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-foreground"
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
            className="xl:hidden bg-background border-t border-border overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path + link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-3 py-3 font-body text-sm text-foreground"
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
