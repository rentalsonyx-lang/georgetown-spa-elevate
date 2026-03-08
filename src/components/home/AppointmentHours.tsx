import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Phone, ArrowRight } from "lucide-react";

const hours = [
  { day: "Sunday", time: "Closed" },
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "10:00 AM – After 5:00 by appt" },
  { day: "Thursday", time: "10:00 AM – After 5:00 by appt" },
  { day: "Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
];

const AppointmentHours = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-spa-gold" />
              <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold">Hours & Appointments</p>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              By Appointment Only
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              We operate by appointment to ensure every guest receives our full attention and an unhurried, personalized experience. Please call to schedule your visit.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:905-873-4907" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body text-sm font-medium">
                <Phone className="w-4 h-4" /> Call to Book
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-body text-sm font-medium hover:bg-muted transition-colors">
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-spa-cream rounded-2xl p-8 shadow-soft"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Spa Hours</h3>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="font-body text-sm font-medium text-foreground">{h.day}</span>
                  <span className={`font-body text-sm ${h.time === "Closed" ? "text-spa-blush-deep" : "text-muted-foreground"}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentHours;
