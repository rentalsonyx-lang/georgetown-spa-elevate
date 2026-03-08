import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedServices from "@/components/home/FeaturedServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import AppointmentHours from "@/components/home/AppointmentHours";
import PoliciesPreview from "@/components/home/PoliciesPreview";
import ContactPreview from "@/components/home/ContactPreview";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentHours />
      <PoliciesPreview />
      <ContactPreview />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
