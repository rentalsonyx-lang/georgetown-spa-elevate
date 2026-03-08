import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-spa-charcoal relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-spa-sage blur-[200px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-spa-gold mb-4">Your Wellness Awaits</p>
          <h2 className="font-heading text-3xl lg:text-5xl font-light text-spa-cream leading-tight mb-6">
            Give Yourself the Gift<br />of <em className="italic">Restorative Care</em>
          </h2>
          <p className="font-body text-base text-spa-cream/70 leading-relaxed mb-10 max-w-lg mx-auto">
            Step into a space designed for your well-being. Whether you seek deep relaxation, radiant skin, or simply a moment of peace — we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:905-873-4907"
              className="inline-flex items-center justify-center gap-2 bg-spa-gold text-spa-charcoal px-8 py-4 rounded-lg font-body text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" /> Call to Book
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-spa-cream/30 text-spa-cream px-8 py-4 rounded-lg font-body text-sm font-medium tracking-wide hover:bg-spa-cream/10 transition-colors"
            >
              Contact the Spa <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
