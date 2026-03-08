import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AlertCircle, Phone, Clock, FileText, Ban, DollarSign, PhoneOff, Mail, Camera, Smartphone, Footprints, Users, CreditCard, Tag, RotateCcw, Gift, Stethoscope } from "lucide-react";

const policies = [
  {
    icon: Camera,
    title: "Video Surveillance",
    description: "For the safety and security of our premises, clients and staff, Downtown Spa and Relaxation Centre uses video surveillance in common areas such as reception and hallways. Surveillance is never used in treatment rooms or washrooms. If you have any questions, feel free to contact us.",
  },
  {
    icon: AlertCircle,
    title: "Upon Arrival",
    description: "We ask that if you have ANY cold or flu symptoms to please reschedule your appointment with us. If you have even slight sniffles or cough, you will be asked to wear a mask. Please use the hand sanitizer at the front door and wash hands in our washroom immediately upon entry.",
  },
  {
    icon: Clock,
    title: "Arrival Time",
    description: "Please arrive 15 minutes prior to your scheduled appointment. This allows time to settle in, complete any required forms, and begin your treatment on time.",
  },
  {
    icon: FileText,
    title: "New Client Intake Form",
    description: "All new clients will be required to complete a client intake form which is necessary for your spa treatments. The form for NEW CLIENT is on your confirmation email.",
  },
  {
    icon: AlertCircle,
    title: "Makeup-Free Policy",
    description: "For facials, lash tint, or lash lift, please remove all makeup before arriving for your appointment. This ensures the best treatment results.",
  },
  {
    icon: Clock,
    title: "Late Arrivals",
    description: "We pride ourselves on providing each client with the time they deserve. We start and end on time in consideration of the next client. If you are late, we may have to shorten your treatment time. Full service price will apply.",
  },
  {
    icon: DollarSign,
    title: "Cancellation Policy",
    description: "To avoid cancellation fees please call us 24 hours prior to your scheduled appointment. Please do not email to cancel an appointment. The cancellation fee is 50% of your scheduled service.",
  },
  {
    icon: Ban,
    title: "No-Show Policy",
    description: "If you do not show up to your appointment without providing any notice, you will be charged the full amount of the scheduled service.",
  },
  {
    icon: PhoneOff,
    title: "How to Cancel",
    description: "To cancel or reschedule, please call us directly at 905-873-4907. Do not email cancellations — phone calls ensure your cancellation is processed immediately.",
  },
  {
    icon: Gift,
    title: "Spa Rituals / Multiple Guests",
    description: "A Gift Certificate number or a valid credit card number is required at the time of booking to secure your appointment.",
  },
  {
    icon: Smartphone,
    title: "Cell Phones",
    description: "We strive to offer our clients the best in pampering and relaxation time. To maintain the serenity of the spa, we please ask that you turn off your mobile phone and electronic devices upon arrival in reception.",
  },
  {
    icon: Footprints,
    title: "Outdoor Footwear",
    description: "Please be advised that outdoor footwear is not permitted inside the spa. We will provide slippers or feel free to bring your own.",
  },
  {
    icon: Users,
    title: "Adult Environment",
    description: "Please keep in mind that our clients have come for private relaxation & 'Get Away Time'. Please respect our 'Adult Environment'.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Prices do not include applicable taxes or gratuities. We prefer Debit or Cash payments. Please note that gratuities for your service provider are cash only.",
  },
  {
    icon: Tag,
    title: "Seniors Appreciation Day",
    description: "Seniors Appreciation Day on Tuesdays! Ages 60+ receive 10% off regular aesthetic treatments.",
  },
  {
    icon: RotateCcw,
    title: "Refunds",
    description: "We strive to make sure you are 100% satisfied with your experience. However, absolutely no refunds will be issued for spa services or gift card purchases under any circumstances.",
  },
  {
    icon: Stethoscope,
    title: "Massage Treatments",
    description: "We offer several different types of holistic massage techniques. We DO offer Registered Massage Therapy — book directly with Kendelle at kendelle.noterro.com. Non-RMT massages are performed by Certified Spa Practitioners and are not reimbursable by insurance.",
  },
  {
    icon: Gift,
    title: "Gift Certificates",
    description: "Gift Certificates are available for all services, spa rituals, or a dollar value — online or in spa. It is up to you to keep the gift card. We are not responsible for lost or stolen certificates. Gift Certificates must be present at time of appointment. Valid for aesthetic spa treatments only. CANNOT be used towards Contract Practitioners (Dr. N. Goldberg, Saravjit Kaur, Kendelle MacLeod, Luke Yu, or any contract provider).",
  },
  {
    icon: Mail,
    title: "Communication",
    description: "Reception is currently available both in person and virtually to assist you. For the fastest response, please contact us via email — we will get back to you ASAP.",
  },
];

const Policies = () => {
  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-spa-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-spa-gold mb-3">Please Read</p>
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-foreground mb-4">Policies & Procedures</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We want every visit to be seamless and enjoyable. Please review our policies before your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="bg-spa-blush/40 rounded-2xl p-6 mb-10 text-center">
            <p className="font-body text-sm text-foreground">Our apologies, we will not be offering beverages or lunches. Please refrain from bringing food or drinks into the spa at this time.</p>
          </div>

          <div className="space-y-8">
            {policies.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
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

          <div className="mt-12 text-center bg-spa-cream rounded-2xl p-6">
            <p className="font-body text-sm text-foreground font-medium">Prices Are Subject To Change Without Notice.</p>
          </div>

          <div className="mt-8 text-center">
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
