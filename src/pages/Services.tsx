import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import massageImg from "@/assets/massage-service.jpg";
import facialImg from "@/assets/facial-service.jpg";
import handFootImg from "@/assets/handfoot-service.jpg";
import browsImg from "@/assets/brows-service.jpg";
import hairRemovalImg from "@/assets/hairremoval-service.jpg";
import gentlemenImg from "@/assets/gentlemen-service.jpg";

const services = [
  { title: "Massage Therapy", desc: "Anti-stress massage, hot stone therapy, deep tissue, Indian head massage, and more.", image: massageImg, path: "/massage" },
  { title: "Holistic Facial Care", desc: "Advanced facials using clean, high-performance products for radiant skin.", image: facialImg, path: "/facials" },
  { title: "Hand & Foot Care", desc: "Luxurious manicures, pedicures, and signature treatments.", image: handFootImg, path: "/hand-foot-care" },
  { title: "Brows & Lashes", desc: "Expert shaping, tinting, lifts, and enhancement services.", image: browsImg, path: "/brows-lashes" },
  { title: "Hair Removal", desc: "Professional waxing with expert technique and gentle care.", image: hairRemovalImg, path: "/hair-removal" },
  { title: "Gentlemen's Spa", desc: "Dedicated grooming, massage, and skincare for men.", image: gentlemenImg, path: "/gentlemens-spa" },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">What We Offer</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-foreground mb-4">Our Services</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From restorative massage to advanced skincare, explore our full range of holistic wellness treatments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={s.path} className="group block bg-spa-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <div className="overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h2>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <span className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      View Treatments <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
