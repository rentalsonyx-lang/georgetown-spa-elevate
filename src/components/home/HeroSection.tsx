import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, MapPin, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import logo from "@/assets/logo.png"; // Make sure logo.png is saved in the src/assets folder

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury spa interior at Downtown Spa Georgetown" 
          className="w-full h-full object-cover" 
          loading="eager" 
        />
        {/* Adjusted the gradient to look better with centered content */}
        <div className="absolute inset-0 bg-gradient-to-t from-spa-charcoal/90 via-spa-charcoal/60 to-spa-charcoal/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center">
          
          {/* Big Centered Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={logo}
            alt="Business Logo"
            className="w-48 sm:w-64 lg:w-80 xl:w-96 h-auto mb-8 drop-shadow-2xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-spa-gold-light mb-4"
          >
            Georgetown's Premier Wellness Destination
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-spa-cream leading-[1.1] mb-6"
          >
            Relax, Restore<br />
            <span className="italic font-light">&</span> Rejuvenate
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-base lg:text-lg text-spa-cream/80 leading-relaxed mb-8 max-w-xl mx-auto"
          >
            Experience advanced aesthetic treatments, clean high-performance products, and integrative therapeutic care — all under one elegant roof in the heart of Georgetown, Halton Hills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center w-full sm:w-auto"
          >
            <a
              href="tel:905-873-4907"
              className="inline-flex items-center justify-center gap-2 bg-spa-gold text-spa-charcoal px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-spa-cream/30 text-spa-cream px-8 py-4 rounded-lg font-body text-sm font-medium tracking-wide hover:bg-spa-cream/10 transition-colors w-full sm:w-auto"
            >
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust Markers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4 lg:gap-6"
          >
            {[
              { icon: Star, text: "4.8 Stars · 161 Reviews" },
              { icon: Award, text: "Women-Owned" },
              { icon: MapPin, text: "Georgetown, Halton Hills" },
              { icon: Clock, text: "By Appointment Only" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-spa-cream/60">
                <item.icon className="w-3.5 h-3.5 text-spa-gold" />
                <span className="font-body text-xs tracking-wide">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
