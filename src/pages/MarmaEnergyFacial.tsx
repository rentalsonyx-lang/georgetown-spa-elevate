import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const MarmaEnergyFacial = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Ayurvedic Tradition</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Marma Energy Treatment Facial</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Where ancient Ayurvedic wisdom meets cutting-edge Ion Cyclotron Resonance therapy for cellular-level rejuvenation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">The Science of Cellular Health</h2>
              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                <p>We are living in a unique age where beauty and health are connecting in a meaningful way. Superficial or "only skin deep" treatments are now being replaced with the understanding that the term "healthy state" means physically, mentally, emotionally and spiritually connected for a truly holistic approach.</p>
                <p>"Cellular Health" is becoming one of the most powerful tools when trying to achieve combined beauty and wellness. The aging process is actually happening at a cellular level due to negative stimuli or alterations to our "optimal cellular state." When our cellular health is compromised, this is the TRUE source of aging skin.</p>
                <p>By improving Cellular Health we make the RIGHT kind of changes so that the skin looks and acts younger from the inside out.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Ion Cyclotron Resonance Therapy</h2>
              <div className="bg-spa-sage-light rounded-2xl p-8">
                <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Our Marma Energy Treatment Facial can balance organ and cell frequencies to overcome destructive effects of the environment, especially "electro-smog." Subtle energies have a profound beneficial effect on human physiology.</p>
                  <p>Ion Cyclotron Resonance therapy is the act of re-infusing the body with life energy through a device capable of mimicking naturally occurring electromagnetic pulsations — the same as the earth's electromagnetic frequencies. These frequencies balance the body's entire system of cellular communication, make the cells work in harmony and produce a healing response in the tissues.</p>
                  <p className="text-foreground font-medium">The technology of Ion Cyclotron Resonance has the capacity to heal wounds at an increased and elevated rate, minimizing healing time of any invasive cosmetic procedures.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">The Ayurvedic Marma Points</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                The Marma points are an important part of the ancient Indian system of medicine known as Ayurveda. The treatment helps tone the muscles, reduces stress, eliminates waste by improving lymphatic drainage from tissues, and improves energy levels. Ayurvedic Massage focuses on 'Marma Points' — the body's vital energy points located over lymph nodes, joints and the 7 chakras associated with the major endocrine glands. Pain-free and relaxing, this treatment will leave you looking fresh and feeling fabulous.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="bg-spa-cream rounded-2xl p-8 shadow-soft text-center">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">2 Hour Treatment</h3>
                <p className="font-body text-xs text-muted-foreground mb-3">Includes Infrared Phototherapy Session</p>
                <p className="font-body text-2xl font-bold text-primary">$229.00</p>
              </div>
            </motion.div>

            <div className="bg-spa-blush/40 rounded-2xl p-6 text-center">
              <p className="font-body text-sm text-foreground">
                <strong>Please Note:</strong> Arrive makeup-free for the best results and optimal experience.
              </p>
            </div>

            <div className="text-center">
              <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
                <Phone className="w-4 h-4" /> Book Marma Energy Facial
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarmaEnergyFacial;
