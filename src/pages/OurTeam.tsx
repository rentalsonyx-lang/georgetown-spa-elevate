import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ExternalLink, Phone } from "lucide-react";

// Image Imports
import savannaImg from "@/assets/Savanna.png";
import sandraImg from "@/assets/Sandra.png";
import sharanpreetImg from "@/assets/Sharanpreet.png";
import normImg from "@/assets/Norm.png";
import lukeImg from "@/assets/Luke.png";
import kendelleImg from "@/assets/Kendelle.png";

const practitioners = [
  {
    name: "Savanna Gauthier",
    title: "Registered Practical Nurse (RPN)",
    specialty: "Plexr Plus Treatments",
    bio: "Savanna is a dedicated Registered Practical Nurse since 2021 with a strong passion for both healthcare and medical aesthetics. Throughout her career, she has gained experience working in a variety of healthcare settings, allowing her to develop a well-rounded and compassionate approach to patient care. Her enthusiasm for aesthetic medicine has led her to specialize in advanced treatments, including performing Plexr procedures at Downtown Spa and Relaxation Centre in Georgetown. She is committed to helping clients feel confident in their skin.",
    image: savannaImg,
    bookingUrl: "https://www.luxerejuvenationlounge.com/",
    bookingLabel: "Book with Savanna",
  },
  {
    name: "Sandra Catalano",
    title: "Certified Reiki Practitioner · Usui Reiki Method",
    specialty: "Reiki Healing & Reiki for Menopause",
    bio: "Sandra's Reiki journey is deeply personal. She is a fully certified Reiki Practitioner trained in the Usui Reiki Method, having completed all three levels of certification through Heartlight–Living. Reiki became a space where her body and nervous system could finally exhale and heal. She has intentionally built her offerings in a way that feels aligned, grounded, and heart-led. One of her specialty offerings is Reiki for Menopause — supporting clients through physical, emotional, and nervous system changes with grounding care.",
    image: sandraImg,
  },
  {
    name: "Sharanpreet Kaur",
    title: "DOMP Manual Osteopathic Practitioner",
    specialty: "Osteopathy",
    bio: "Sharanpreet is a Manual Osteopathic Practitioner and member of Ontario and Quebec Osteopathic Associations (ACMA, CPMDQ), with a strong background in physiotherapy. She provides safe, inclusive, holistic treatments for clients experiencing neck pain, back pain, and chronic musculoskeletal conditions, with a focus on restoring balance, mobility, and overall well-being. She is deeply committed to maintaining the highest standards of professional practice and client-centered care.",
    image: sharanpreetImg,
  },
  {
    name: "Dr. Norman Goldberg, MD",
    title: "Medical Aesthetics",
    specialty: "Botox & Fillers",
    bio: "Dr. Norman Goldberg is a family physician on staff at the William Osler Health Centre in Brampton. In 2002 he developed a keen interest in medical aesthetics and began extensive training including Laser Technology, Botox & Fillers. Over the years, his esthetic practice, Goldberg Medical Esthetics, has grown significantly with busy practices in Brampton, Georgetown, Mississauga and Collingwood. He has successfully completed a voluntary audit through the College of Physicians and Surgeons of Ontario.",
    image: normImg,
  },
  {
    name: "Yonghao Yu (Luke)",
    title: "Traditional Chinese Medicine Practitioner (TCMP)",
    specialty: "Acupuncture, Cupping, Cosmetic Acupuncture",
    bio: "Luke's journey into Traditional Chinese Medicine began in 2016 at the Ontario College of Traditional Chinese Medicine. He earned his acupuncture license in 2020 and his TCMP licensure in 2022. In 2025, Luke embraced a second calling as an instructor at the Canadian College of Traditional Chinese Medicine. Guided by lifelong curiosity and a profound appreciation for Taoist philosophy, Luke's technique is often described as gentle yet highly effective.",
    image: lukeImg,
  },
  {
    name: "Kendelle MacLeod",
    title: "Registered Massage Therapist (RMT)",
    specialty: "Massage Therapy, Deep Tissue, Sports Injuries",
    bio: "Kendelle is a skilled and compassionate registered massage therapist in good standing with the CMTO who graduated with honours from Trios College with an Advanced Diploma in Massage Therapy. She has successfully supported clients with stress and anxiety-related conditions, sports injuries, and both acute and chronic pain. Her therapeutic approach blends gentle relaxation techniques with targeted deep tissue therapies to meet each individual's unique needs.",
    image: kendelleImg,
    bookingUrl: "https://kendelle.noterro.com/",
    bookingLabel: "Book with Kendelle",
  },
];

const OurTeam = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-cream text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">The People Behind Your Care</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-foreground mb-4">Meet Our Practitioners</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of experienced professionals committed to your wellness journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="space-y-8">
            {practitioners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-spa-cream rounded-2xl p-6 md:p-8 shadow-soft flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center"
              >
                {/* Image Section */}
                <div className="shrink-0">
                  <img
                    src={p.image}
                    alt={`${p.name} - ${p.title}`}
                    className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow-sm border border-border/50"
                    loading="lazy"
                  />
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground">{p.name}</h3>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">{p.title}</p>
                    <p className="font-body text-sm text-primary font-medium mt-1">{p.specialty}</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                  {p.bookingUrl && (
                    <a href={p.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline w-fit mt-2">
                      {p.bookingLabel} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-body text-sm text-muted-foreground mb-4">Want to learn more or book with one of our practitioners?</p>
            <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4" /> Call to Book
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurTeam;
