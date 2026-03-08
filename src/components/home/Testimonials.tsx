import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", text: "Absolutely the best spa experience in Georgetown. The massage was incredibly relaxing and the atmosphere is so calming. I leave feeling completely restored every time.", rating: 5 },
  { name: "Jennifer L.", text: "The facials here are exceptional. My skin has never looked better. The products they use are clean and effective, and the estheticians really know what they're doing.", rating: 5 },
  { name: "David K.", text: "As a guy, I wasn't sure what to expect, but the gentlemen's spa services are top-notch. Professional, comfortable, and genuinely relaxing. Highly recommend.", rating: 5 },
  { name: "Michelle T.", text: "I've been coming to Downtown Spa for years. The attention to detail, cleanliness, and professionalism are unmatched. Dorri and her team are wonderful.", rating: 5 },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-spa-sage-light" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Client Love</p>
          <h2 className="font-heading text-3xl lg:text-5xl font-semibold text-foreground mb-3">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-spa-gold text-spa-gold" />
            ))}
          </div>
          <p className="font-body text-sm text-muted-foreground">4.8-star average from 161 reviews</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-soft"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-spa-gold text-spa-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <p className="font-body text-xs font-medium tracking-wide text-muted-foreground uppercase">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
