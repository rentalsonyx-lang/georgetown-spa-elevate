import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import massageImg from "@/assets/massage-service.jpg";

const treatments = [
  {
    name: "Anti-Stress Massage",
    description: "A deeply relaxing full-body massage designed to melt away tension, calm the nervous system, and restore a sense of inner peace. Custom pressure tailored to your comfort.",
    duration: "60 min / 90 min",
    price: "From $95",
  },
  {
    name: "Hot Stone & Anti-Stress Massage Combination",
    description: "The warmth of heated basalt stones combined with flowing massage techniques to ease deep muscle tension, improve circulation, and promote profound relaxation.",
    duration: "75 min / 90 min",
    price: "From $115",
  },
  {
    name: "Indian Head Massage",
    description: "An ancient Ayurvedic technique focusing on the head, neck, and shoulders. Relieves tension headaches, promotes mental clarity, and deeply soothes the scalp and upper body.",
    duration: "45 min",
    price: "From $75",
  },
  {
    name: "Therapeutic Deep Tissue Massage",
    description: "Targeted deep pressure work to address chronic tension, muscle knots, and areas of discomfort. Ideal for those who prefer firm, focused bodywork.",
    duration: "60 min / 90 min",
    price: "From $105",
  },
  {
    name: "Relaxation Back Massage",
    description: "A focused treatment for the back, neck, and shoulders — perfect for those short on time but in need of targeted stress relief and muscle relaxation.",
    duration: "30 min",
    price: "From $60",
  },
];

const Massage = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={massageImg} alt="Massage therapy room" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Body Therapies</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">
              Massage Therapy
            </h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Restorative bodywork designed to release tension, restore balance, and promote deep relaxation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {treatments.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-spa-cream rounded-2xl p-8 shadow-soft"
              >
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

          <div className="mt-12 text-center">
            <p className="font-body text-sm text-muted-foreground mb-4">Ready to experience deep relaxation?</p>
            <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
              <Phone className="w-4 h-4" /> Call to Book
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Massage;
