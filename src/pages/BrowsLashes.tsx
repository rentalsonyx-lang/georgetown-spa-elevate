import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import browsImg from "@/assets/brows-service.jpg";

const aftercare = [
  "Keep Lashes Dry: Avoid water, steam, sweating, and saunas for the first 24 hours.",
  "Gentle Cleansing: After 24 hours, wash your face carefully and avoid oil-based cleansers near your eyes.",
  "No Oils or Waterproof Mascara: Oil-based products and waterproof mascara can weaken the lift and tint.",
  "Hands Off: Don't rub or pull on your lashes.",
  "Brush & Condition: Apply a lash conditioner or serum to keep them healthy.",
  "Protect & Preserve: Wear sunglasses in the sun, avoid excessive heat/steam, and try to sleep on your back to maintain their shape.",
];

const BrowsLashes = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={browsImg} alt="Professional brow and lash services Georgetown" className="w-full h-full object-cover" loading="eager" />
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
              <strong>Please Note:</strong> For the best results and optimal experience, we kindly ask that you arrive makeup-free for massages, facials, lash tinting, lash lifts, and light therapy treatments.
            </p>
          </div>

          <div className="bg-spa-cream rounded-2xl p-8 shadow-soft text-center mb-10">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Brow & Lash Services</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              We offer brow shaping, brow tinting, lash tinting, lash lifts, and combination services. Please call for pricing and availability.
            </p>
          </div>

          {/* Aftercare */}
          <div className="mt-8">
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

          <div className="mt-8 flex flex-wrap gap-3 justify-center text-center">
            <Link to="/facials" className="font-body text-sm text-primary hover:underline">Facials</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/medical-aesthetics" className="font-body text-sm text-primary hover:underline">Medical Aesthetics (Botox)</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/hair-removal" className="font-body text-sm text-primary hover:underline">Hair Removal</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/gentlemens-spa" className="font-body text-sm text-primary hover:underline">Men's Services</Link>
          </div>

          <div className="mt-8 text-center">
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
