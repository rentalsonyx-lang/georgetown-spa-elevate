import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";

const benefits = [
  "Deep Cleanse",
  "Skin Resurfacing",
  "Pore Extraction",
  "Stimulate Collagen / Anti-Ageing",
  "Sculpting",
  "Hydrate Product Absorption",
  "Treatments personalized according to your skin type",
];

const products = [
  { name: "AHA Peeling Solution", desc: "Moistens dead skin cells for deep cleansing, exfoliating and brightening. A combination of Glycolic Acid, Kojic Acid, Lactic Acid and Mandelic Acid." },
  { name: "Collagen Cleansing Milk", desc: "Preparatory gentle cleanse to begin the facial." },
  { name: "Soft Collagen Toner", desc: "Hydrating toner that calms and refreshes the skin." },
  { name: "Advanced Bio C Serum", desc: "Brightens the skin, promotes cellular turnover. Decreases inflammation, rosacea, pigmentation and anti-aging. Includes Niacinamide." },
  { name: "Pure Hyaluronic Acid", desc: "Reduces visibility of fine lines while retaining moisture and plumping the skin." },
  { name: "Soft Calming Mask", desc: "Calms the skin and reduces sensitivity and redness after the treatment." },
];

const steps = [
  "Diamond Water Microdermabrasion and Jet Peel",
  "Amazing blackhead/whitehead removal system",
  "Electrolized water and spray infusion system with collagen",
  "Radio Frequency Technology for tightening, toning, and sculpting",
  "Deep penetration of Vitamin C, Hyaluronic Acid using Ultrasonic Technology",
  "Botanical Mask infuses skin with Vitamins and Nutrients",
];

const HydroDermPro = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Advanced Facial Technology</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">HydroDerm Pro Facial</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              State-of-the-art facial technology for deep cleansing, resurfacing, and radiant skin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 bg-spa-cream rounded-xl p-4 shadow-soft">
                    <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="font-body text-sm text-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">The Technology</h2>
              <div className="bg-spa-sage-light rounded-2xl p-8 space-y-3">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-body text-xs font-bold text-primary mt-0.5">{i + 1}.</span>
                    <p className="font-body text-sm text-foreground">{s}</p>
                  </div>
                ))}
                <p className="font-body text-sm text-primary font-medium pt-2">Leaves skin clean, exfoliated, replenished, nourished — bright and radiant.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Products Used</h2>
              <div className="space-y-4">
                {products.map((p) => (
                  <div key={p.name} className="bg-spa-cream rounded-xl p-5 shadow-soft">
                    <h4 className="font-heading text-base font-semibold text-foreground mb-1">{p.name}</h4>
                    <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="bg-spa-cream rounded-2xl p-8 shadow-soft text-center">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">90 Minute Treatment</h3>
                <p className="font-body text-2xl font-bold text-primary">$229.00</p>
              </div>
            </motion.div>

            <div className="bg-spa-blush/40 rounded-2xl p-6 text-center">
              <p className="font-body text-sm text-foreground">
                <strong>Please Note:</strong> Arrive makeup-free for the best results. Clients using Ro-accutane cannot receive this treatment.
              </p>
            </div>

            <div className="text-center">
              <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
                <Phone className="w-4 h-4" /> Book HydroDerm Pro Facial
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HydroDermPro;
