import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";

const RaindropTherapy = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Wellness Room</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Raindrop Therapy</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              A remarkable full body massage combining energy medicine and natural medicine modalities with Saravjit Kaur.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">About Raindrop Therapy</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Raindrop Therapy is a remarkable full body massage that combines energy medicine and natural medicine modalities. It includes essential oils with specific massage techniques for spinal muscles, feet, and head. It rejuvenates the body and mind, promoting a balance-harmony connection. Raindrop Therapy also helps to heal mental and emotional functions of the brain. It restores well-being and healing processes that last.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Reduce pain and inflammation",
                  "Improve circulation and immune function",
                  "Increase feelings of strength, courage and self-esteem",
                  "Relieve stress, anxiety, depression and negative emotions",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 bg-spa-cream rounded-xl p-5 shadow-soft">
                    <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="font-body text-sm text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="bg-spa-cream rounded-2xl p-8 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Raindrop Therapy Session</h3>
                    <p className="font-body text-sm text-muted-foreground">Includes Indian Head Massage</p>
                    <p className="font-body text-sm text-primary font-medium mt-1">PLUS Complimentary Seqex Energy Therapy</p>
                    <p className="font-body text-xs text-muted-foreground mt-2">With professionally trained Saravjit Kaur — Raindrop Therapist</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-body text-lg font-semibold text-foreground">$175.00</p>
                    <p className="font-body text-xs text-muted-foreground">90 Minutes</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="text-center">
              <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
                <Phone className="w-4 h-4" /> Book Raindrop Therapy
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RaindropTherapy;
