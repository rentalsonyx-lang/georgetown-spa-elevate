import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const hours = [
  { day: "Sunday", time: "Closed" },
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "10:00 AM – After 5:00 by appt" },
  { day: "Thursday", time: "10:00 AM – After 5:00 by appt" },
  { day: "Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Get in Touch</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-foreground mb-4">Contact Us</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to schedule your appointment or ask any questions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-spa-sage-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Downtown Spa & Relaxation Centre<br />
                    185 Mountainview Road North<br />
                    Georgetown, ON L7G 3P9
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-spa-sage-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Call Us</h3>
                  <a href="tel:905-873-4907" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">905-873-4907</a>
                  <p className="font-body text-xs text-muted-foreground mt-1">By appointment only</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-spa-sage-light flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:downtownspa11@gmail.com" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">downtownspa11@gmail.com</a>
                  <p className="font-body text-xs text-muted-foreground mt-1">Reception available in person & virtually. Leaving an email address helps ensure a fast response.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-spa-sage-light flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Hours</h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-8">
                        <span className="font-body text-sm font-medium text-foreground">{h.day}</span>
                        <span className={`font-body text-sm ${h.time === "Closed" ? "text-spa-blush-deep" : "text-muted-foreground"}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Social */}
              <div className="flex gap-4 pt-4">
                <a href="https://www.facebook.com/TheDowntownSpa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-spa-cream flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/downtown_spa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-spa-cream flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.youtube.com/channel/UCjtIfU60-JVYwHFQMbfsTpg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-spa-cream flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-card h-[500px]"
            >
              <iframe
                title="Downtown Spa Georgetown Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.5!2d-79.9177!3d43.6475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1e1f0a0a0a0a%3A0x0!2s185+Mountainview+Rd+N%2C+Georgetown%2C+ON+L7G+3P9!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
