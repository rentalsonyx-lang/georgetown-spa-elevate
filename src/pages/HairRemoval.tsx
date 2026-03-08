import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, AlertCircle } from "lucide-react";
import hairRemovalImg from "@/assets/hairremoval-service.jpg";

const treatments = [
  { name: "Full Leg Wax", duration: "45 min", price: "From $65" },
  { name: "Half Leg Wax", duration: "30 min", price: "From $40" },
  { name: "Full Arm Wax", duration: "30 min", price: "From $40" },
  { name: "Half Arm Wax", duration: "20 min", price: "From $30" },
  { name: "Underarm Wax", duration: "15 min", price: "From $25" },
  { name: "Bikini Wax", duration: "20 min", price: "From $35" },
  { name: "Lip Wax", duration: "10 min", price: "From $15" },
  { name: "Chin Wax", duration: "10 min", price: "From $15" },
  { name: "Lip & Chin Combo", duration: "15 min", price: "From $25" },
  { name: "Full Face Wax", duration: "20 min", price: "From $40" },
  { name: "Back Wax", duration: "30 min", price: "From $55" },
  { name: "Chest Wax", duration: "30 min", price: "From $55" },
];

const prepTips = [
  "Hair should be at least 1/4 inch long for best results.",
  "Avoid sun exposure and tanning 24 hours before your appointment.",
  "Exfoliate the area gently 1–2 days before waxing.",
  "Avoid applying lotions, oils, or deodorant to the treatment area before your appointment.",
  "Avoid caffeine and alcohol before your appointment as they can increase sensitivity.",
];

const aftercareTips = [
  "Avoid sun exposure, hot baths, saunas, and swimming for 24–48 hours.",
  "Do not apply perfumed products to waxed areas for 24 hours.",
  "Wear loose, breathable clothing to avoid irritation.",
  "Gently exfoliate 2–3 days after waxing to prevent ingrown hairs.",
  "Moisturize daily to keep skin smooth and hydrated.",
];

const HairRemoval = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={hairRemovalImg} alt="Professional hair removal treatment" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Smooth & Confident</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Hair Removal</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Professional waxing with expert technique and gentle aftercare for smooth, beautiful results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Treatment List */}
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {treatments.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="flex justify-between items-center bg-spa-cream rounded-xl p-5 shadow-soft">
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">{t.name}</h3>
                  <p className="font-body text-xs text-muted-foreground">{t.duration}</p>
                </div>
                <p className="font-body text-sm font-medium text-foreground">{t.price}</p>
              </motion.div>
            ))}
          </div>

          {/* Tips */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Before Your Wax</h2>
              <div className="bg-spa-sage-light rounded-2xl p-8 space-y-3">
                {prepTips.map((tip, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <AlertCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="font-body text-sm text-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Aftercare Tips</h2>
              <div className="bg-spa-blush/40 rounded-2xl p-8 space-y-3">
                {aftercareTips.map((tip, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <AlertCircle className="w-4 h-4 text-spa-blush-deep mt-0.5 shrink-0" />
                    <p className="font-body text-sm text-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
              <Phone className="w-4 h-4" /> Book Hair Removal
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HairRemoval;
