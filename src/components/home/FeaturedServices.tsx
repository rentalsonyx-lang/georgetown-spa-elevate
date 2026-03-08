import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import massageImg from "@/assets/massage-service.jpg";
import facialImg from "@/assets/facial-service.jpg";
import handFootImg from "@/assets/handfoot-service.jpg";
import browsImg from "@/assets/brows-service.jpg";
import hairRemovalImg from "@/assets/hairremoval-service.jpg";
import gentlemenImg from "@/assets/gentlemen-service.jpg";

const services = [
  {
    title: "Massage Therapy",
    description: "Anti-stress massage, hot stone therapy, Indian head massage, and more for deep relaxation and muscle relief.",
    image: massageImg,
    path: "/massage",
    alt: "Massage therapy room with hot stones and candles",
  },
  {
    title: "Holistic Facial Care",
    description: "Advanced facials using clean, high-performance products for radiant, rejuvenated skin.",
    image: facialImg,
    path: "/facials",
    alt: "Premium skincare products for facial treatments",
  },
  {
    title: "Hand & Foot Care",
    description: "Luxurious manicures, pedicures, and signature treatments for beautifully cared-for hands and feet.",
    image: handFootImg,
    path: "/hand-foot-care",
    alt: "Hand and foot care spa treatment",
  },
  {
    title: "Brows & Lashes",
    description: "Expert brow shaping, lash lifts, tinting, and enhancement services for effortless beauty.",
    image: browsImg,
    path: "/brows-lashes",
    alt: "Professional brow and lash beauty tools",
  },
  {
    title: "Hair Removal",
    description: "Professional waxing and hair removal with expert technique and gentle aftercare guidance.",
    image: hairRemovalImg,
    path: "/hair-removal",
    alt: "Professional hair removal treatment",
  },
  {
    title: "Gentlemen's Spa",
    description: "Dedicated grooming, massage, and skincare services tailored for the modern gentleman.",
    image: gentlemenImg,
    path: "/gentlemens-spa",
    alt: "Gentleman receiving professional spa treatment",
  },
];

const FeaturedServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 lg:py-28 bg-spa-cream" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl lg:text-5xl font-semibold text-foreground mb-4">
            Our Signature Services
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
            From restorative massage to advanced aesthetic treatments, discover personalized care designed to nurture your body, mind, and spirit.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={service.path}
                className="group block bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
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
  );
};

export default FeaturedServices;
