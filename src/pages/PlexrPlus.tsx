import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, ExternalLink } from "lucide-react";

const PlexrPlus = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Advanced Aesthetics</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Plexr Plus</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Non-surgical skin tightening, eyelid lifts, and wrinkle reduction powered by plasma technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">What is Plexr Plus?</h2>
              <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                <p>Plexr Plus is a revolutionary non-surgical treatment that uses plasma energy to tighten and rejuvenate the skin. It offers remarkable results without the need for invasive surgery, making it an ideal choice for those seeking a more youthful appearance with minimal downtime.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Treatment Areas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Non-Surgical Eyelid Lift", desc: "Improve drooping upper eyelids or under-eye bags without surgery." },
                  { title: "Wrinkle Reduction", desc: "Smooth fine lines around the eyes, mouth, and forehead." },
                  { title: "Skin Tightening", desc: "Firm loose skin on the face, neck, or other areas of concern." },
                  { title: "Scar Treatment", desc: "Reduce the appearance of acne scars and other skin imperfections." },
                ].map((item) => (
                  <div key={item.title} className="bg-spa-cream rounded-2xl p-6 shadow-soft">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Your Practitioner</h2>
              <div className="bg-spa-cream rounded-2xl p-8 shadow-soft">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Savanna Gauthier, RPN</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Savanna is a dedicated Registered Practical Nurse (RPN) since 2021 with a strong passion for both healthcare and medical aesthetics. Throughout her career, she has gained experience working in a variety of healthcare settings, allowing her to develop a well-rounded and compassionate approach to patient care. Her enthusiasm for aesthetic medicine has led her to specialize in advanced treatments, including performing Plexr procedures at Downtown Spa and Relaxation Centre in Georgetown.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  She is committed to helping clients feel confident in their skin while continuing to grow professionally in both the clinical and aesthetic fields.
                </p>
                <p className="font-body text-sm text-foreground font-medium mb-2">A qualified provider will assess your skin and create a personalized plan tailored to your needs.</p>
                <a href="https://www.luxerejuvenationlounge.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline">
                  Book directly with Savanna <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-spa-sage-light rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Beautifi Financing Available</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                We understand that investing in your appearance is important. Beautifi financing options are available to help make Plexr treatments accessible. Ask about financing during your complimentary consultation.
              </p>
            </motion.div>

            <div className="text-center">
              <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
                <Phone className="w-4 h-4" /> Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlexrPlus;
