import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AlertCircle, Phone, Clock, FileText, Ban, DollarSign, PhoneOff, Mail } from "lucide-react";

const policies = [
  {
    icon: Clock,
    title: "Arrival Time",
    description: "Please arrive 15 minutes prior to your scheduled appointment. This allows time to settle in, complete any required forms, and begin your treatment on time. Late arrivals may result in a shortened treatment.",
  },
  {
    icon: FileText,
    title: "New Client Intake Form",
    description: "All new clients must complete an intake form prior to their first appointment. You will receive this form via your confirmation email. Please fill it out and bring it with you or submit it electronically before your visit.",
  },
  {
    icon: AlertCircle,
    title: "Makeup-Free Policy",
    description: "For facials, lash tinting, lash lifts, and light therapy treatments, please arrive completely makeup-free. This ensures the best treatment results and allows our products to work effectively from the start.",
  },
  {
    icon: Clock,
    title: "Late Arrivals",
    description: "We understand that delays happen. However, arriving late may mean a shortened treatment to respect the schedules of other clients. The full treatment price will still apply. We recommend building in extra travel time to ensure you arrive relaxed and on time.",
  },
  {
    icon: DollarSign,
    title: "Cancellation Policy",
    description: "We require a minimum of 24 hours' notice for all cancellations. This allows us to offer your time slot to another guest. Cancellations made with less than 24 hours' notice will be subject to a cancellation fee of 50% of the scheduled service cost.",
  },
  {
    icon: Ban,
    title: "No-Show Policy",
    description: "Guests who do not show up for their scheduled appointment without prior notice will be charged the full cost of the scheduled service. We value your time and ask that you respect ours as well.",
  },
  {
    icon: PhoneOff,
    title: "How to Cancel",
    description: "To cancel or reschedule an appointment, please call us directly at 905-873-4907. Do not email cancellations — phone calls ensure your cancellation is processed immediately and your time slot can be offered to another guest.",
  },
  {
    icon: Mail,
    title: "Communication",
    description: "Our reception is available both in person and virtually. When reaching out by email, please include your full name and preferred callback time. Leaving your email address helps ensure a prompt and detailed response.",
  },
];

const Policies = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Please Read</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-foreground mb-4">Spa Policies</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We want every visit to be seamless and enjoyable. Please review our policies before your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="space-y-8">
            {policies.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-spa-sage-light flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center bg-spa-cream rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Questions About Our Policies?</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">We're happy to clarify any policy details before your visit.</p>
            <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
