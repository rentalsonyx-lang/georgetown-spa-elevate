import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import facialImg from "@/assets/facial-service.jpg";

const treatments = [
  {
    name: "The Cherry Blossom Treatment Facial",
    description: "Cherry Brightening Peel uses fruit acid to effectively exfoliate the skin without irritation. This powerful peel mask produces smooth skin, reducing the appearance of acne lesions, wrinkles and uneven pigmentation. Aromatic peel is high in natural antioxidants and collagen-boosting ingredients which firm and brighten skin.",
    duration: "90 min",
    price: "$155.00",
  },
  {
    name: "The 24K Gold Treatment Facial",
    description: "Helps to lift, firm and brighten your skin. This super hydrating treatment saturates your skin with moisture, leaving you with a nourished, plump and glowing appearance. Helps renew skin, improve blood flow, and is high in antioxidants and minerals. Slows down depletion of collagen. Reduces wrinkles and fine lines, helps reduce redness and calms skin.",
    duration: "90 min",
    price: "$155.00",
  },
  {
    name: "The Vitaboost Treatment Facial",
    description: "Vitamins encourage healthy skin cell production and growth keeping skin firm and younger looking. Treats rosacea, hyperpigmentation, sun-harmed, maturing and dry skin. Contains Vitamins A, B, C, C-O-Q10, D, E and K — promoting healthy collagen production and powerful antioxidants that help destroy free radicals causing premature ageing.",
    duration: "90 min",
    price: "$155.00",
  },
  {
    name: "Mother Of Pearl Treatment Facial",
    description: "This exquisite facial hydrates and moisturizes your skin. The Mother Of Pearl elements infuse the skin with nutrient rich minerals, silk amino acids, collagen and hyaluronic acid. Leaves lasting results with a beautiful 'Pearl Radiance'. Best suited for rough, dehydrated or flaky skin. Not suited for oily or acne skin.",
    duration: "90 min",
    price: "$155.00",
  },
  {
    name: "The Deep Cleansing Personalized Facial",
    description: "Deep pore cleansing, steam, extractions & a mask according to your skin type for the face, neck, décolleté and a relaxing shoulder massage. Add-on masks/peels/medical grade treatments available for all skin types. Perfect for teens or first time facial clients in need of deep cleaning and extractions.",
    duration: "75 min",
    price: "$135.00",
  },
  {
    name: "The Revitalizing Facial",
    description: "Prevent, maintain & reverse the signs of aging. Products with ingredients targeted for all ages needing hydration and nourishment. Great for tweens, late twenties, even early thirties. The number one cause of premature wrinkling is dehydration! This soothing calming facial will leave you radiant. Does not include steam or extractions.",
    duration: "60 min",
    price: "$125.00",
  },
  {
    name: "The Hydro Exfoliation Treatment Facial",
    description: "Includes HydroDerm Pro Microdermabrasion Technology with Medical Grade Peel, Deep Pore Extraction and Ultrasonic Wave Exfoliation. PLUS Lymph Drainage Massage, Mask for Skin Type, Eye Treatment, Hand and Arm Massage, and Revitalizing Serum.",
    duration: "90 min",
    price: "$175.00",
  },
  {
    name: "The Perfect Peel Treatment Facial",
    description: "Designed to deeply cleanse and exfoliate. Helps reduce large pores prone to blockage and breakouts. Brightens, clarifies, hydrates and smooths out skin's texture. Perfect for thicker skin, moderately greasy, clogged pores and hyperpigmentation. Cannot use if severe skin irritations or cystic acne is apparent.",
    duration: "90 min",
    price: "$155.00",
  },
  {
    name: "The Body Facial (Salt Glow)",
    description: "Polish away the skin's dull, dry outer layer by removing dead skin cells head to toe. We use Himalayan Salt Scrub with Aromatherapy Oils for body and Coconut Scrub for face. Encourages skin rejuvenation, unclogs pores, draws out ingrown hairs, promotes circulation. Followed by luxurious body butter for satiny smooth skin.",
    duration: "90 min",
    price: "$165.00",
  },
  {
    name: "The Back Facial",
    description: "Pamper your back and get rid of painful back acne. Follows the same steps as a traditional facial: cleanse, exfoliate, steam, extractions, purifying mask, and soothing massage. Results in smoother, healthier, clearer skin. Great treatment for Men & Women.",
    duration: "60 min",
    price: "$125.00",
  },
  {
    name: "The Fabulous Foot Facial",
    description: "A medical grade pedicure using state-of-the-art ingredients to remove hard, dead, dry skin, and calluses effortlessly. No foot filing necessary. Perfect for painful, dry cracked heels. Uses facial grade AHA Peel for safe and best results.",
    duration: "60 min",
    price: "$75.00",
  },
];

const facialBenefits = [
  "Every 4–6 weeks for most skin types",
  "Every 3–4 weeks for aging or menopausal skin",
  "Every 2–4 weeks for acne or corrective treatments (initially)",
];

const Facials = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={facialImg} alt="Facial treatment at Downtown Spa Georgetown" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-spa-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Skin Care</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-spa-cream mb-4">Holistic Facial Care</h1>
            <p className="font-body text-lg text-spa-cream/80 max-w-2xl mx-auto">
              Clean, high-performance skincare treatments tailored to your unique complexion needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Benefits intro */}
          <div className="bg-spa-sage-light rounded-2xl p-8 mb-10">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Benefits of Professional Facials</h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Professional facials deeply cleanse, exfoliate, and nourish the skin beyond what home care can achieve. They improve circulation, boost hydration, stimulate collagen, and address concerns such as aging, dryness, sensitivity, acne, and hormonal skin changes.
            </p>
            <p className="font-body text-sm text-foreground font-medium mb-2">How Often Should You Get a Facial?</p>
            {facialBenefits.map((b) => (
              <p key={b} className="font-body text-xs text-muted-foreground">✨ {b}</p>
            ))}
          </div>

          {/* Facial loyalty card mention */}
          <div className="bg-spa-gold-light rounded-2xl p-6 mb-10 text-center">
            <p className="font-body text-sm text-foreground font-medium">🎉 Ask about our Facial Loyalty Card — earn 50% off a facial!</p>
          </div>

          {/* Specialty facials links */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <Link to="/hydroderm-pro" className="font-body text-sm text-primary hover:underline px-4 py-2 bg-spa-cream rounded-lg">HydroDerm Pro Facial →</Link>
            <Link to="/marma-energy-facial" className="font-body text-sm text-primary hover:underline px-4 py-2 bg-spa-cream rounded-lg">Marma Energy Facial →</Link>
            <Link to="/micro-needling" className="font-body text-sm text-primary hover:underline px-4 py-2 bg-spa-cream rounded-lg">Micro-Needling →</Link>
          </div>

          <div className="space-y-6">
            {treatments.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="bg-spa-cream rounded-2xl p-8 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{t.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-body text-sm font-medium text-foreground">{t.price}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-spa-blush/40 rounded-2xl p-6 space-y-2">
            <p className="font-body text-sm text-foreground"><strong>Please Note:</strong></p>
            <p className="font-body text-xs text-muted-foreground">Arrive makeup-free for facials, lash tinting, lash lifts, and light therapy treatments.</p>
            <p className="font-body text-xs text-muted-foreground">For facials using medical grade or fruit grade Peels/AHAs, clients using Ro-accutane cannot use these products. Please advise your aesthetician of any contraindications.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center text-center">
            <Link to="/hair-removal" className="font-body text-sm text-primary hover:underline">Hair Removal</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/brows-lashes" className="font-body text-sm text-primary hover:underline">Brows & Lashes</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/medical-aesthetics" className="font-body text-sm text-primary hover:underline">Medical Aesthetics (Botox)</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/gentlemens-spa" className="font-body text-sm text-primary hover:underline">Men's Facials</Link>
          </div>

          <div className="mt-8 text-center">
            <a href="tel:905-873-4907" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body text-sm font-semibold">
              <Phone className="w-4 h-4" /> Book Your Facial
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facials;
