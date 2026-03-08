import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, Heart } from "lucide-react";

const Reiki = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Wellness Room</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Reiki Healing</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Gentle energy healing for deep relaxation, emotional balance, and restored well-being with Sandra Catalano.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">What is Reiki?</h2>
              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                <p>Reiki is a gentle, non-invasive energy healing practice that supports the body's natural ability to restore balance and well-being. It offers deep relaxation, emotional balance, and clarity during seasons of stress and overwhelm.</p>
                <p>What makes Reiki unique is that it never forces healing — it gently supports the body's natural ability to restore balance and wellbeing. Sessions create a safe space to slow down, soften, and simply be.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                <Heart className="w-5 h-5 inline mr-2 text-primary" />
                Reiki for Menopause
              </h2>
              <div className="bg-spa-blush/40 rounded-2xl p-8">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Menopause can bring physical, emotional, and nervous system changes that feel unfamiliar or isolating. Reiki can be especially supportive by calming an overstimulated nervous system, promoting rest and regulation, and offering grounding emotional support. Sessions create a gentle space to reconnect with your body without pressure or judgment.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Your Practitioner</h2>
              <div className="bg-spa-cream rounded-2xl p-8 shadow-soft">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Sandra Catalano</h3>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">Certified Reiki Practitioner · Usui Reiki Method</p>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Sandra's Reiki journey is deeply personal. She is a fully certified Reiki Practitioner trained in the Usui Reiki Method, having completed all three levels of certification through Heartlight–Living.</p>
                  <p>Reiki became a space where her body and nervous system could finally exhale and heal. She has intentionally built her offerings in a way that feels aligned, grounded, and heart-led — through meaningful collaborations, Reiki workshops, and thoughtfully expanding services designed to meet clients where they are on their wellness journey.</p>
                  <p className="italic">"My intention is always to offer Reiki in a way that feels safe, nurturing, and supportive — allowing you to slow down, soften, and simply be." — Sandra 💜</p>
                </div>
              </div>
            </motion.div>

            <div className="text-center">
              <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
                <Phone className="w-4 h-4" /> Book a Reiki Session
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reiki;
