import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import hairRemovalImg from "@/assets/hairremoval-service.jpg";

const tips = [
  "Exfoliate before waxing and during re-growth period to prevent ingrown hairs.",
  "Wax every 3 to 5 weeks — hair must be 1/4\" long for best results.",
  "Perspiration clogs pores — don't work out immediately after waxing.",
  "Do not use a tanning bed or sun tan after a waxing treatment.",
  "Avoid hot tubs immediately afterwards as bacteria can cause inflammation.",
  "Don't use any perfumed body or bath products after waxing.",
  "Please advise us if you are on ANY medication, especially for acne.",
  "Waxed area will be sensitive afterwards.",
  "Wear loose fitting clothing and underwear to allow skin to breathe and return to its normal PH level.",
];

const HairRemoval = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={hairRemovalImg} alt="Professional hair removal at Downtown Spa Georgetown" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Smooth & Confident</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Hair Removal</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Professional waxing with expert technique and gentle aftercare.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Tips Section */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Tips for Hair Removal</h2>
            <div className="bg-spa-sage-light rounded-2xl p-8 space-y-3">
              {tips.map((tip, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <AlertCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="font-body text-sm text-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-spa-cream rounded-2xl p-8 shadow-soft text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Waxing Services Available</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              We offer a full range of waxing services for all areas. Please call for pricing and to book your appointment.
            </p>
            <p className="font-body text-sm text-muted-foreground">Available for face, arms, legs, underarms, bikini, back, chest, and more.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center text-center">
            <Link to="/facials" className="font-body text-sm text-primary hover:underline">Facials</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/hand-foot-care" className="font-body text-sm text-primary hover:underline">Hand & Foot Care</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/brows-lashes" className="font-body text-sm text-primary hover:underline">Brows & Lashes</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/gentlemens-spa" className="font-body text-sm text-primary hover:underline">Men's Hair Removal</Link>
          </div>

          <div className="mt-8 text-center">
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
