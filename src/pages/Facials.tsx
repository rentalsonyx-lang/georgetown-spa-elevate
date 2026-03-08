import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import facialImg from "@/assets/facial-service.jpg";

const treatments = [
  {
    name: "Signature Holistic Facial",
    description: "A customized facial experience using clean, high-performance products. Includes deep cleansing, exfoliation, extractions, targeted serum application, and a relaxing facial massage for radiant, healthy skin.",
    duration: "75 min",
    price: "From $120",
  },
  {
    name: "Express Glow Facial",
    description: "A concentrated treatment perfect for maintaining beautiful skin between full facials. Deep cleanse, gentle exfoliation, and hydrating mask leave skin refreshed and luminous.",
    duration: "45 min",
    price: "From $85",
  },
  {
    name: "Anti-Aging Rejuvenation Facial",
    description: "Advanced treatment targeting fine lines, loss of firmness, and uneven texture. Utilizes professional-grade serums and techniques to promote collagen production and a youthful glow.",
    duration: "90 min",
    price: "From $145",
  },
  {
    name: "Hydrating & Calming Facial",
    description: "Ideal for sensitive or dehydrated skin. Soothing botanical ingredients restore moisture balance while reducing redness and irritation for a calm, supple complexion.",
    duration: "60 min",
    price: "From $105",
  },
  {
    name: "Acne Clarifying Facial",
    description: "A targeted treatment for congested and breakout-prone skin. Includes thorough extraction, antibacterial care, and balancing products to clear and prevent future blemishes.",
    duration: "60 min",
    price: "From $105",
  },
];

const Facials = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={facialImg} alt="Facial skincare products" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Skin Care</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">
              Holistic Facial Care
            </h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Clean, high-performance skincare treatments tailored to your unique complexion needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-spa-sage-light rounded-2xl p-6 mb-10 text-center">
            <p className="font-body text-sm text-foreground">
              <strong>Please Note:</strong> For all facial treatments, lash tint, or lash lift services, please arrive makeup-free to ensure the best results.
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

          <div className="mt-12 text-center">
            <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
              <Phone className="w-4 h-4" /> Book Your Facial
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facials;
