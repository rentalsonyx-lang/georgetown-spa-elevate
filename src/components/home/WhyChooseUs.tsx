import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Sparkles, Shield, Users, Award } from "lucide-react";

const reasons = [
  { icon: Leaf, title: "Holistic Approach", desc: "We treat the whole person — body, mind, and spirit — through integrative therapeutic care." },
  { icon: Heart, title: "Experienced Professionals", desc: "Our skilled therapists bring years of expertise and genuine care to every treatment." },
  { icon: Sparkles, title: "Advanced Treatments", desc: "Sophisticated aesthetic and wellness technologies for transformative results." },
  { icon: Shield, title: "Clean Products", desc: "High-performance, clean skincare and treatment products you can trust." },
  { icon: Users, title: "For Everyone", desc: "A warm, welcoming space for women, men, and families of all ages." },
  { icon: Award, title: "Trusted Locally", desc: "4.8-star rated Georgetown destination with 161+ reviews from satisfied clients." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">The Difference</p>
          <h2 className="font-heading text-3xl lg:text-5xl font-semibold text-foreground">
            Why Choose Downtown Spa
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-spa-cream/50 hover:bg-spa-cream transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-spa-sage-light mb-5">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
