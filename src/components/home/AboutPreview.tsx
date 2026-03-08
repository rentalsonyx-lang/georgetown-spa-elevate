import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-spa.jpg";

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Serene spa environment with candles and eucalyptus"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Our Story</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
              More Than a Spa —<br />A Wellness Sanctuary
            </h2>
            <div className="space-y-4 font-body text-sm lg:text-base text-muted-foreground leading-relaxed">
              <p>
                Downtown Spa & Relaxation Centre is Georgetown's trusted destination for holistic wellness and restorative care. 
                Founded with a commitment to excellence, authenticity, and integrity, our spa offers a 
                sanctuary where personalized therapies meet professional expertise.
              </p>
              <p>
                We welcome women, men, and families, providing a warm and inclusive environment where every 
                guest can experience the transformative power of integrative therapeutic care. From advanced 
                aesthetic treatments to time-honoured massage therapies, each service is delivered with the 
                utmost care and attention.
              </p>
              <p>
                Under the guidance of our founder Dorri, our team of experienced professionals is dedicated 
                to helping you achieve balance, beauty, and wellness — naturally and authentically.
              </p>
            </div>
            <a
              href="/about"
              className="inline-flex items-center gap-2 mt-8 font-body text-sm font-medium tracking-wide text-primary hover:opacity-80 transition-opacity"
            >
              Learn More About Us
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
