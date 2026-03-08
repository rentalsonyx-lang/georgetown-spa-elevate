import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Osteopathy = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Wellness Room</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Osteopathy</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Manual osteopathic treatments for pain relief, mobility, and holistic well-being with Sharanpreet Kaur, DOMP.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">About Manual Osteopathy</h2>
              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                <p>Manual osteopathy is a gentle, hands-on approach to healthcare that focuses on the musculoskeletal system. It aims to restore balance, mobility, and overall well-being through skilled manual techniques. Treatments are safe, inclusive, and holistic.</p>
                <p>Osteopathy can help with neck pain, back pain, chronic musculoskeletal conditions, and more — with a focus on restoring balance, mobility, and overall well-being.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Your Practitioner</h2>
              <div className="bg-spa-cream rounded-2xl p-8 shadow-soft">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Sharanpreet Kaur, DOMP</h3>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">Manual Osteopathic Practitioner · Member of Ontario and Quebec Osteopathic Associations · ACMA, CPMDQ</p>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Sharanpreet is a Manual Osteopathic Practitioner with a strong background in physiotherapy, bringing a thoughtful and integrative approach to care.</p>
                  <p>She provides safe, inclusive, holistic treatments for clients experiencing neck pain, back pain, and chronic musculoskeletal conditions, with a focus on restoring balance, mobility, and overall well-being.</p>
                  <p>Sharanpreet is deeply committed to maintaining the highest standards of professional practice and client-centered care.</p>
                </div>
              </div>
            </motion.div>

            <div className="text-center">
              <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
                <Phone className="w-4 h-4" /> Book an Osteopathy Session
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Osteopathy;
