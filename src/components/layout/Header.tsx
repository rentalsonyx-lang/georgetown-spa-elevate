import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, CalendarHeart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png"; // Make sure to import the logo

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
  { label: "Services", path: "/facials", children: serviceLinks }, 
  { label: "About Us", path: "/about", children: aboutLinks },
  { label: "Gift Certificates", path: "/gift-certificates" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position to trigger the logo animation
  useEffect(() => {
    const handleScroll = () => {
      // 250px is roughly when the big hero logo starts to leave the screen
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isChildActive = (children: { path: string }[]) =>
    children.some((c) => location.pathname === c.path);

  // We want to show the header logo IF we've scrolled down, 
  // OR if we are on any page other than the Home page (where the big logo isn't present).
  const showHeaderLogo = location.pathname !== "/" || isScrolled;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Tiny integrated top bar */}
      <div className="hidden sm:flex bg-muted/30 border-b border-border py-1.5 px-4 lg:px-8 justify-between items-center text-[11px] font-body text-muted-foreground tracking-wide">
        <span className="flex items-center gap-1.5"><CalendarHeart className="w-3 h-3"/> By appointment only • Women-Owned</span>
        <a href="tel:905-873-4907" className="hover:text-foreground transition-colors">Call us
