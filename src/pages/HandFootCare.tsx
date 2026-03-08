import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import handFootImg from "@/assets/handfoot-service.jpg";

const treatments = [
  {
    name: "The Fabulous Foot Facial",
    description: "The perfect pedicure that uses state-of-the-art ingredients to remove hard, dead, dry skin, and calluses effortlessly using a facial grade AHA Peel. No foot filing necessary. Perfect for painful, dry cracked heels and safe for diabetic feet. Includes nail and cuticle care, soothing hot stone foot and leg massage, hydrating mask. Please note that we do not address ingrown toenails. We do not apply or remove any shellac or gel products.",
    duration: "75 min",
    price: "$75.00",
  },
  {
    name: "The Ultimate Foot & Scalp Rejuvenation — No Time No Problem",
    description: "Indulge in a luxurious combination of The Fabulous Foot Facial, Pedicure & Indian Head Massage for total relaxation and renewal. Our facial-grade AHA peel removes hard, dry skin and calluses — no foot filing needed. Perfect for cracked heels and diabetic-friendly. Includes nail and cuticle care, hot stone foot and leg massage, hydrating mask. Enhance your experience with a 30-minute Indian Head Massage performed at the same time. The perfect gift of relaxation and self-care!",
    duration: "75 min",
    price: "$135.00",
  },
  {
    name: "Sensational Signature Manicure",
    description: "A luxurious 'facial' for your hands. The royal treatment — relaxing music, tranquil atmosphere. Hydrate and soothe overworked hands with products rich in butters, vitamins and oils. Includes a moisturizing hand mask and Hot Stone Massage over hands and arms.",
    duration: "60 min",
    price: "$60.00",
  },
];

const benefits = [
  "Keeps your nails looking trimmed, calluses controlled and skin moisturized",
  "Can prevent ingrown toenails",
  "Foot massage helps relieve tension and stimulate circulation",
  "Decreases chances of infection",
  "Enhances nail health",
  "Exfoliates feet",
];

const HandFootCare = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={handFootImg} alt="Luxury hand and foot care at Downtown Spa Georgetown" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Pampering</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Hand & Foot Care</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Groomed hands & feet are a reflection of your inner health and beauty.
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

          {/* Benefits */}
          <div className="mt-12 bg-spa-sage-light rounded-2xl p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Benefits of Pedicures</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {benefits.map((b) => (
                <p key={b} className="font-body text-sm text-muted-foreground">• {b}</p>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8 bg-spa-blush/40 rounded-2xl p-6 space-y-2">
            <p className="font-body text-xs text-muted-foreground">Clients using Ro-accutane should not have our Foot Facial.</p>
            <p className="font-body text-xs text-muted-foreground">Contraindications: Bleeding skin, sensitive skin, sunburn, eczema, psoriasis, unexplained swelling, infectious skin conditions, known allergies.</p>
            <p className="font-body text-xs text-muted-foreground">We use disposable files, buffers and orangewood sticks for your safety. Each pedicure/manicure includes a take-home file and buffer.</p>
            <p className="font-body text-xs text-muted-foreground">We do not apply or remove shellac or gel products. We DO NOT address ingrown toenails.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center text-center">
            <Link to="/hair-removal" className="font-body text-sm text-primary hover:underline">Hair Removal</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/massage" className="font-body text-sm text-primary hover:underline">Massage Therapy</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/gentlemens-spa" className="font-body text-sm text-primary hover:underline">Men's Foot Facial & Manicure</Link>
          </div>

          <div className="mt-8 text-center">
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
