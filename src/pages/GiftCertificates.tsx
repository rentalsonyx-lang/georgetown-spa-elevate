import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, Gift } from "lucide-react";

const amounts = ["$50", "$100", "$150", "$200", "$250", "$300", "$350", "$400", "$500"];

const GiftCertificates = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-cream text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Gift className="w-10 h-10 text-spa-gold mx-auto mb-4" />
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">The Perfect Gift</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-foreground mb-4">Gift Certificates</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The perfect way to celebrate all life's special occasions.<br />
              <em className="italic">Relax the Mind. Renew the Body. Revive the Soul.</em>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">Available Amounts</h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {amounts.map((a) => (
                  <div key={a} className="bg-spa-cream rounded-xl p-5 shadow-soft text-center">
                    <p className="font-heading text-xl font-semibold text-foreground">{a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="bg-spa-sage-light rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">How It Works</h3>
                <ul className="space-y-3 font-body text-sm text-muted-foreground">
                  <li>• Gift Certificates are available for all services, spa rituals, or a dollar value</li>
                  <li>• Available online or in spa — packaged ready for presentation</li>
                  <li>• Gift Certificates never expire</li>
                  <li>• Gift Certificate must be present at time of appointment</li>
                  <li>• Valid for aesthetic spa treatments only</li>
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="bg-spa-blush/40 rounded-2xl p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Important Notes</h3>
                <ul className="space-y-3 font-body text-sm text-muted-foreground">
                  <li>• It is up to you to keep the gift card for use. We are not responsible for lost or stolen gift certificates.</li>
                  <li>• Gift Certificates purchased prior to April 1, 2022 will be valued at the original purchase price. You are welcome to use it for any aesthetic treatment of same value or less, or add to it.</li>
                  <li>• Gift Certificates <strong>CANNOT</strong> be used towards our Contract Practitioners — Dr. N. Goldberg, Saravjit Kaur, Kendelle MacLeod, Luke Yu, or any contract provider.</li>
                </ul>
              </div>
            </motion.div>

            <div className="text-center">
              <p className="font-body text-sm text-muted-foreground mb-4">Please review our spa policies/procedures on our website.</p>
              <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
                <Phone className="w-4 h-4" /> Call to Purchase
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GiftCertificates;
