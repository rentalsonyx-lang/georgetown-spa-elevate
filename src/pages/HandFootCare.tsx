import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import handFootImg from "@/assets/handfoot-service.jpg";

const treatments = [
  {
    name: "The Fabulous Foot Facial",
    description: "Our signature treatment goes far beyond a pedicure. A luxurious foot facial that deeply exfoliates, hydrates, and revitalizes tired feet. Includes dry heel care, a nourishing mask, and a soothing massage that will leave your feet feeling incredibly smooth and pampered.",
    duration: "60 min",
    price: "From $85",
  },
  {
    name: "No Time No Problem",
    description: "A quick, refreshing treatment for busy schedules. Includes nail shaping, cuticle care, a brief massage, and a polish application. Perfect for maintaining beautiful hands or feet between full treatments.",
    duration: "30 min",
    price: "From $45",
  },
  {
    name: "Sensational Signature Manicure",
    description: "An elevated hand care experience with meticulous attention to detail. Includes exfoliation, a hydrating hand mask, cuticle care, shaping, and a relaxing hand and arm massage finished with your choice of polish.",
    duration: "50 min",
    price: "From $70",
  },
  {
    name: "Classic Pedicure",
    description: "A thorough pedicure with nail shaping, cuticle care, callus reduction, moisturizing massage, and a polished finish. Clean, comfortable, and beautifully done.",
    duration: "45 min",
    price: "From $60",
  },
  {
    name: "Luxury Spa Manicure & Pedicure Combo",
    description: "The best of both worlds — a complete hand and foot care experience with exfoliation, masks, detailed nail care, massage, and polish for beautifully pampered extremities.",
    duration: "90 min",
    price: "From $125",
  },
];

const HandFootCare = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={handFootImg} alt="Luxury hand and foot care" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Pampering</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">
              Hand & Foot Care
            </h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Luxurious manicures, pedicures, and signature treatments for beautifully cared-for hands and feet.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
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
              <Phone className="w-4 h-4" /> Book Your Treatment
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HandFootCare;
