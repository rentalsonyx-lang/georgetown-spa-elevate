import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";

const treatments = [
  {
    name: "Initial TCM Treatment",
    description: "Comprehensive session beginning with a holistic initial assessment including diagnostic pulse reading, tongue inspection, detailed inquiry, and channel palpation. A personalized treatment strategy is developed and a full Traditional Chinese Medicine treatment is administered — primarily acupuncture lasting approximately 45 minutes. Additional modalities may include acupressure massage, Gua Sha (scraping), cupping therapy, ear seed application, herbal prescriptions, simple dietary guidance based on TCM principles, and remedial exercises.",
    duration: "90 min",
    price: "$150.00",
  },
  {
    name: "Follow-Up TCM Treatment",
    description: "Includes a full Traditional Chinese Medicine treatment beginning with a brief reassessment and followed by an acupuncture session lasting approximately 45 minutes. Additional modalities may be incorporated to enhance therapeutic outcomes.",
    duration: "60 min",
    price: "$110.00",
  },
  {
    name: "Acupressure Massage",
    description: "A gentle, non-invasive technique involving applying pressure to specific acupoints on the head and body. Especially effective for relieving stress, improving sleep quality, and boosting overall immune function. Often referred to as 'acupuncture without needles,' acupressure delivers many of the same therapeutic benefits through skilled touch alone. Performed fully clothed.",
    duration: "45 min",
    price: "$100.00",
  },
  {
    name: "Cupping Treatment",
    description: "Cupping therapy (air suction) involves placing specially designed cups on the skin — prepared with massage oil — and using a pump to create suction. This gentle vacuum effect enhances blood circulation, alleviates muscle tension, and supports the body's natural healing processes. Cupping achieves its benefits by decompressing the skin and underlying tissues.",
    duration: "30 min",
    price: "$50.00",
    note: "⚠️ Please note: Cupping therapy may leave temporary skin marks that can last up to two weeks.",
  },
  {
    name: "Ear Seeds Application",
    description: "A gentle, non-invasive technique rooted in Traditional Chinese Medicine that involves placing tiny seeds or pellets on specific points of the ear to stimulate acupressure. These points correspond to various organs and systems in the body. Ear seeds can help promote relaxation, reduce stress, alleviate pain, and support overall wellness. Seeds are secured with adhesive tape and can be worn for several days.",
    duration: "15 min",
    price: "$15.00",
  },
  {
    name: "Cosmetic Acupuncture",
    description: "Combines facial acupuncture with systemic acupoints, enhancing beauty from both the outside and inside. This approach not only rejuvenates the skin but also supports internal balance, including endocrine regulation.",
    duration: "60 min",
    price: "$110.00",
  },
];

const TraditionalChineseMedicine = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Wellness Room</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Traditional Chinese Medicine</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Acupuncture, cupping, acupressure, and holistic treatments with Luke Yu, TCMP.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {treatments.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-spa-cream rounded-2xl p-8 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{t.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                    {t.note && (
                      <p className="font-body text-xs text-spa-blush-deep mt-3 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" /> {t.note}
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-body text-sm font-medium text-foreground">{t.price}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-spa-sage-light rounded-2xl p-8">
            <p className="font-body text-sm text-foreground leading-relaxed text-center">
              <strong>Acupuncture for Menopausal Symptoms</strong> is also available — ask about our specialized menopause wellness treatments.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
              <Phone className="w-4 h-4" /> Book Your Treatment
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TraditionalChineseMedicine;
