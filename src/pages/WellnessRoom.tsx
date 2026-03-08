import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Traditional Chinese Medicine", desc: "Acupuncture, cupping, acupressure, ear seeds, cosmetic acupuncture, and herbal medicine with Luke Yu, TCMP.", path: "/traditional-chinese-medicine" },
  { title: "Reiki Healing", desc: "Gentle energy healing for deep relaxation, emotional balance, and restored well-being. Includes specialized Reiki for Menopause with Sandra Catalano.", path: "/reiki" },
  { title: "Osteopathy", desc: "Manual osteopathic treatments for pain relief, mobility, and holistic well-being with Sharanpreet Kaur, DOMP.", path: "/osteopathy" },
  { title: "Raindrop Therapy", desc: "A remarkable full body massage combining essential oils and energy medicine for deep healing with Saravjit Kaur.", path: "/raindrop-therapy" },
];

const WellnessRoom = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-cream text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Holistic Healing</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-foreground mb-4">The Wellness Room</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrative therapeutic care from skilled practitioners — acupuncture, Reiki, osteopathy, and more.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={s.path} className="group block bg-spa-cream rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow h-full">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WellnessRoom;
