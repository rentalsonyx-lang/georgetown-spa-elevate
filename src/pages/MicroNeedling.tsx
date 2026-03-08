import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const MicroNeedling = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Advanced Skin Treatment</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Micro-Needling</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Stimulate collagen production and rejuvenate your skin with this advanced treatment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">About Micro-Needling</h2>
              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                <p>Micro-needling is a minimally invasive procedure that uses fine needles to create tiny punctures in the top layer of the skin. This controlled skin injury triggers the body's natural wound healing processes, stimulating collagen and elastin production.</p>
                <p>The result is smoother, firmer, more toned skin with improved texture and reduced appearance of scars, pore size, and stretch marks.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Stimulates collagen and elastin production",
                  "Reduces fine lines and wrinkles",
                  "Improves skin texture and tone",
                  "Minimizes pore size",
                  "Reduces appearance of scars",
                  "Enhances product absorption",
                ].map((b) => (
                  <div key={b} className="bg-spa-cream rounded-xl p-4 shadow-soft">
                    <p className="font-body text-sm text-foreground">✨ {b}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="bg-spa-blush/40 rounded-2xl p-6 text-center">
              <p className="font-body text-sm text-foreground">
                <strong>Please Note:</strong> A consultation is required before your first micro-needling treatment. Please call to learn more about pricing and scheduling.
              </p>
            </div>

            <div className="text-center">
              <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
                <Phone className="w-4 h-4" /> Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicroNeedling;
