import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

const MedicalAesthetics = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">With Dr. Norm Goldberg</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Medical Aesthetics</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Botox & Dermal Fillers performed by an experienced medical professional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-spa-gold-light rounded-2xl p-8 text-center">
              <Calendar className="w-8 h-8 text-spa-gold mx-auto mb-3" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Next Available Date</h3>
              <p className="font-body text-lg font-medium text-foreground">Saturday, April 4, 2026 — 9:00 AM to 5:00 PM</p>
              <p className="font-body text-sm text-muted-foreground mt-2">Pricing is available upon complimentary consultation.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">Botox</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Botox is a protein found in nature which has been refined, manufactured and purified in a laboratory. It has a unique effect of relaxing muscles. Over the years, typical facial lines such as frown lines, crow's feet etc. appear and become deeper over time. Relaxing the muscles make the lines disappear. This procedure takes about 15 minutes per area and the effects are visible within 3–4 days with results lasting up to 4 months.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">Dermal Fillers</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Dermal fillers, sometimes called soft tissue fillers, are substances designed to be injected beneath the surface of the skin to add volume and fullness. They can smooth wrinkles, plump thin lips, enhance shallow contours, and improve the appearance of recessed scars.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Your Practitioner</h2>
              <div className="bg-spa-cream rounded-2xl p-8 shadow-soft">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Dr. Norman Goldberg, MD</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Dr. Norman Goldberg is a family physician on staff at the William Osler Health Centre in Brampton. In 2002 he developed a keen interest in medical aesthetics and began extensive training in this diverse field, including Laser Technology, Botox & Fillers. Over the years, his esthetic practice, Goldberg Medical Esthetics has grown significantly, with busy esthetic practices in Brampton, Georgetown, Mississauga and Collingwood.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  He has successfully completed a voluntary audit of his esthetic practice through the College of Physicians and Surgeons of Ontario, achieving a standard of care in this field as recognized by this strict government body.
                </p>
              </div>
            </motion.div>

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

export default MedicalAesthetics;
