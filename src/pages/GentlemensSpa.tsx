import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import gentlemenImg from "@/assets/gentlemen-service.jpg";

const treatments = [
  {
    name: "Gentlemen's Facial Treatment",
    description: "This deep cleansing facial de-congests the skin, helps eliminate blocked pores and rapidly accelerates skin repair. Ingredients reduce sensitivity and provide long lasting defence against daily pollutants leaving skin clean and healthy.",
    duration: "75 min",
    price: "$135.00",
  },
  {
    name: "Gentlemen's Foot Facial",
    description: "Your feet will be bathed in eucalyptus and pine aromatherapy oils. Exfoliation of dead skin & callus removal, nails are trimmed, cuticles cared for. Hot Stone Massage on feet and calves followed with warming mask for a smooth finish.",
    duration: "60 min",
    price: "$75.00",
  },
  {
    name: "Gentlemen's Signature Manicure",
    description: "Hands are exfoliated, nails trimmed, cuticles cared for then a relaxing hand & arm massage using hot stones just prior to a softening mask for a smooth finish.",
    duration: "60 min",
    price: "$60.00",
  },
];

const GentlemensSpa = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={gentlemenImg} alt="Gentleman receiving spa treatment at Downtown Spa Georgetown" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">For Him</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Men's Spa</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Dedicated grooming, massage, and skincare services tailored for the modern gentleman.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Men need TLC too! That's why we offer a wide range of services including Massages, Facial Treatments, Waxing, Gentlemen's Manicures/Pedicures & More. From expert advice on your health and wellness, to a relaxing atmosphere and a break from your everyday routine, there's a lot for men to enjoy at Downtown Spa & Relaxation Centre.
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

          <div className="mt-10 bg-spa-sage-light rounded-2xl p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Men's Hair Removal & Waxing</h3>
            <p className="font-body text-sm text-muted-foreground mb-3">We also offer full body waxing services for men including back, chest, arms, and more. See our <Link to="/hair-removal" className="text-primary hover:underline">Hair Removal</Link> page for details.</p>
            <p className="font-body text-xs text-muted-foreground">Please bring a clean cotton T-shirt to wear after chest or back wax.</p>
          </div>

          <div className="mt-6 bg-spa-blush/40 rounded-2xl p-6">
            <p className="font-body text-sm text-foreground">
              <strong>Please Note:</strong> Arrive clean shaven, and shave no less than 3–4 hours before your facial treatment to ensure your pores are closed and prevent irritation.
            </p>
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

export default GentlemensSpa;
