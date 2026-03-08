import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import aboutImage from "@/assets/about-spa.jpg";
import { Heart, Award, Shield, Leaf, Users, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Excellence", desc: "We hold ourselves to the highest standards in every treatment and interaction." },
  { icon: Shield, title: "Authenticity", desc: "Genuine care, honest recommendations, and transparent practices." },
  { icon: Award, title: "Integrity", desc: "Trusted by our Georgetown community for ethical, professional service." },
  { icon: Leaf, title: "Holistic Wellness", desc: "Treating the whole person — body, mind, and spirit." },
  { icon: Users, title: "Inclusivity", desc: "A welcoming space for women, men, and families of all backgrounds." },
  { icon: Sparkles, title: "Commitment", desc: "Dedicated to your well-being and long-term wellness journey." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-spa-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Our Story</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-foreground mb-4">
              About Downtown Spa
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A wellness sanctuary rooted in holistic care, personalized attention, and a deep commitment to your well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={aboutImage} alt="Downtown Spa serene wellness environment" className="rounded-2xl shadow-card w-full h-[450px] object-cover" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                More Than a Spa — Your Personal Wellness Sanctuary
              </h2>
              <div className="space-y-4 font-body text-sm lg:text-base text-muted-foreground leading-relaxed">
                <p>
                  Downtown Spa & Relaxation Centre was born from a vision to create a truly restorative space in the heart of Georgetown. 
                  We believe that self-care is not a luxury — it's a necessity. Our mission is to offer holistic, personalized therapies 
                  that address your unique needs and help you achieve lasting wellness.
                </p>
                <p>
                  From the moment you step through our doors, you'll feel the difference. Our calm, professional ambiance is designed 
                  to quiet the mind and soothe the senses. Every detail — from the products we choose to the techniques we employ — 
                  reflects our commitment to clean, high-performance care.
                </p>
                <p>
                  We proudly serve women, men, and families across Georgetown, Halton Hills, and surrounding communities. Whether 
                  you're seeking relief from tension, a radiant facial glow, or simply an hour of peace, our experienced team is 
                  here to guide your journey back to balance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 lg:py-28 bg-spa-cream">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Our Founder</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Meet Dorri
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              With a passion for holistic wellness and a deep understanding of restorative care, Dorri founded 
              Downtown Spa & Relaxation Centre to bring Georgetown a truly elevated spa experience. Her vision 
              combines advanced aesthetic knowledge with a warm, personal touch — ensuring every guest feels 
              valued, cared for, and beautifully restored. As a women-owned business, the spa reflects Dorri's 
              values of empowerment, authenticity, and community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">What Guides Us</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-spa-cream/50"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-spa-sage-light mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
