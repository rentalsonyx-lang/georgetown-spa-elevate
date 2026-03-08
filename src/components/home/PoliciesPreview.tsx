import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const policies = [
  "Please arrive 15 minutes prior to your appointment.",
  "For facials, lash tint, or lash lift — please remove all makeup before arriving.",
  "New clients must complete an intake form from the confirmation email.",
  "24-hour notice required for all cancellations.",
  "Cancellation fee is 50% of the scheduled service.",
  "No-shows are charged the full service amount.",
  "To cancel, please call — do not email cancellations.",
];

const PoliciesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-spa-cream" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Before Your Visit</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">
            Important Spa Policies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-background rounded-2xl p-8 shadow-soft"
        >
          <div className="space-y-4">
            {policies.map((p, i) => (
              <div key={i} className="flex gap-3 items-start">
                <AlertCircle className="w-4 h-4 text-spa-gold mt-0.5 shrink-0" />
                <p className="font-body text-sm text-foreground leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/policies"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:opacity-80 transition-opacity"
            >
              View Full Policies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoliciesPreview;
