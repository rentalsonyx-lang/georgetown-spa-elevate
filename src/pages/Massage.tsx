import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ExternalLink } from "lucide-react";
import massageImg from "@/assets/massage-service.jpg";

const treatments = [
  {
    name: "Ayurvedic Massage Ritual",
    description: "Restore Harmony and Balance with this relaxing ritual using our exclusive Balancing and Renewal Massage Oil that brings nourishment to the tissues, cells and energy systems. Ritual starts with our Grounding Technique, Chakra Balancing followed by Indian Head Therapy and 60 Minute Full Body Massage to renew and restore. Decreases the effects of ageing, deeply relaxes the muscles and calms the mind.",
    benefits: ["Eliminates body impurities and helps in reducing weight", "Calms nerves and promotes deeper and better sleep", "Softens and smoothens skin, reduces effects of ageing", "Improves blood circulation and stimulates internal organs"],
    duration: "90 min",
    price: "$175.00",
  },
  {
    name: "Hot Stone Massage",
    description: "Our therapeutic healing uses thermotherapy, Ayurvedic and Meridian principals. Hot Stone Massage Therapy is five times more relaxing than ordinary massage. The Ayurveda principles allow a nourishing, warming and stimulating massage while Meridian principles provide toning and sedating of the muscles. Helps increase circulation, strengthens and tones yin organs, reduces excess yang (tension), increases joint mobility, relieves sinus pressure and pain, sedates the central nervous system and restores equilibrium.",
    duration: "60 min / 90 min",
    price: "$120.00 / $165.00",
  },
  {
    name: "Anti-Stress Massage",
    description: "A gentle treatment that reduces muscle tension while relaxing your body. Relieves muscular tension, increases circulation, and promotes relaxation. Improves circulation and blood flow, allowing more oxygen to flow towards your organs and skin, aiding with lymphatic drainage. Aromatherapy oils are used to reduce stress and anxiety, decrease muscle tension, and relieve pain.",
    duration: "30 min / 60 min / 90 min",
    price: "$60 / $90 / $130",
  },
  {
    name: "Hot Stone & Anti-Stress Massage Combination",
    description: "The best of both worlds — combining the deep warmth of heated basalt stones with flowing anti-stress massage techniques.",
    duration: "60 min / 90 min",
    price: "$120.00 / $165.00",
  },
  {
    name: "Indian Head Massage",
    description: "A relaxing holistic treatment that uses acupressure massage on the head, face, neck and shoulders. It aims to rebalance your body's energies, focusing on the three higher 'chakras' — mind, body, soul. May relieve aches, pains and tension in your neck, back and shoulders. Stimulating the hair follicles is said to improve hair texture and encourage growth.",
    duration: "45 min",
    price: "$75.00",
    addon: "Add $10 for 24K Gold Eye Treatment",
  },
];

const Massage = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={massageImg} alt="Massage therapy room at Downtown Spa Georgetown" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Body Therapies</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Massage Therapy</h1>
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
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-spa-cream rounded-2xl p-8 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{t.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                    {t.benefits && (
                      <ul className="mt-3 space-y-1">
                        {t.benefits.map((b) => (
                          <li key={b} className="font-body text-xs text-muted-foreground">• {b}</li>
                        ))}
                      </ul>
                    )}
                    {t.addon && <p className="font-body text-xs text-primary font-medium mt-2">{t.addon}</p>}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-body text-sm font-medium text-foreground">{t.price}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RMT Section */}
          <div className="mt-12 bg-spa-sage-light rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Registered Massage Therapy with Kendelle</h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Your first session includes a comprehensive 15-minute assessment where we'll discuss your health history, any specific areas of concern, and your goals. The remaining 60 minutes focus on personalized massage therapy tailored to your needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-background rounded-xl p-4">
                <p className="font-body text-sm font-medium text-foreground">Initial Appointment</p>
                <p className="font-body text-xs text-muted-foreground">75 min — $125</p>
              </div>
              <div className="bg-background rounded-xl p-4">
                <p className="font-body text-sm font-medium text-foreground">Follow Up</p>
                <p className="font-body text-xs text-muted-foreground">60 min — $115</p>
              </div>
              <div className="bg-background rounded-xl p-4">
                <p className="font-body text-sm font-medium text-foreground">TMJ Massage Therapy</p>
                <p className="font-body text-xs text-muted-foreground">30 min — $75</p>
              </div>
              <div className="bg-background rounded-xl p-4">
                <p className="font-body text-sm font-medium text-foreground">Hot Stone Massage</p>
                <p className="font-body text-xs text-muted-foreground">60 min — $150</p>
              </div>
            </div>
            <p className="font-body text-xs text-muted-foreground mb-3">Coming Soon: Pre/Postnatal Massage</p>
            <p className="font-body text-xs text-muted-foreground mb-3">NOTE: Appointments/Payments are made with Kendelle directly. The massage loyalty program does not apply. We do not offer direct billing.</p>
            <a href="https://kendelle.noterro.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline">
              Book with Kendelle <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Notes */}
          <div className="mt-8 bg-spa-blush/40 rounded-2xl p-6 space-y-3">
            <p className="font-body text-sm text-foreground"><strong>Please Note:</strong></p>
            <p className="font-body text-xs text-muted-foreground">For the best results, arrive makeup-free for massages, facials, lash tinting, lash lifts, and light therapy treatments.</p>
            <p className="font-body text-xs text-muted-foreground">The massages above are performed by our Certified Spa Practitioners — not RMT — and are not reimbursable by insurance companies as part of your benefit plan.</p>
          </div>

          <div className="mt-8 text-center font-body text-base text-muted-foreground italic">
            A Massage Does More Than Evoke A Sense Of Wellbeing. It Helps Your Body Eliminate Toxins Through The Lymphatic System, Gives Your Circulatory System A Boost And Brings About A State Of Peace & Harmony.
          </div>

          <div className="mt-8 text-center">
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
