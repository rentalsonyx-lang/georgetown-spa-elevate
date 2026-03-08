import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, AlertCircle } from "lucide-react";
import browsImg from "@/assets/brows-service.jpg";

const treatments = [
  { name: "Brow Shape & Tidy", description: "Expert shaping to define and enhance your natural brow arch using precise waxing and tweezing techniques.", duration: "20 min", price: "From $25" },
  { name: "Brow Tint", description: "Semi-permanent colour application to deepen brow definition and fill in sparse areas for fuller-looking brows.", duration: "15 min", price: "From $22" },
  { name: "Brow Shape & Tint Combo", description: "The perfect pairing — clean shaping with colour enhancement for beautifully defined brows.", duration: "30 min", price: "From $42" },
  { name: "Lash Tint", description: "A gentle semi-permanent dye that darkens and defines your natural lashes, eliminating the need for mascara.", duration: "20 min", price: "From $30" },
  { name: "Lash Lift", description: "A semi-permanent treatment that curls and lifts your natural lashes from root to tip for an open, wide-eyed look that lasts 6-8 weeks.", duration: "45 min", price: "From $75" },
  { name: "Lash Lift & Tint Combo", description: "The ultimate lash enhancement — lift, curl, and colour in one appointment for dramatic, mascara-free beauty.", duration: "60 min", price: "From $95" },
];

const aftercare = [
  "Do not wet lashes for the first 24 hours after a lash lift.",
  "Avoid rubbing or touching your eyes.",
  "Do not use waterproof mascara for 48 hours.",
  "Avoid steam rooms, saunas, and swimming pools for 24–48 hours.",
  "Use a clean spoolie brush to gently groom lashes each morning.",
  "Avoid oil-based products around the eye area.",
  "Results typically last 6–8 weeks.",
];

const BrowsLashes = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={browsImg} alt="Professional brow and lash tools" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Beauty Enhancement</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Brows & Lashes</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Expert shaping, tinting, lifts, and enhancement for effortlessly beautiful brows and lashes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-spa-blush/50 rounded-2xl p-6 mb-10 text-center">
            <p className="font-body text-sm text-foreground">
              <strong>Please Note:</strong> Arrive makeup-free for all lash tinting, lash lift, and facial treatments for the best results.
            </p>
          </div>

          <div className="space-y-6">
            {treatments.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-spa-cream rounded-2xl p-8 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{t.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-body text-sm font-medium text-foreground">{t.price}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aftercare */}
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">Lash Lift & Tint Aftercare</h2>
            <div className="bg-spa-sage-light rounded-2xl p-8">
              <div className="space-y-3">
                {aftercare.map((tip, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <AlertCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="font-body text-sm text-foreground leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
              <Phone className="w-4 h-4" /> Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrowsLashes;
