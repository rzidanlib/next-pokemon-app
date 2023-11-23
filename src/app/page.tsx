import CampaignSection from "@/components/pages/Campaign";
import FeatureSection from "@/components/pages/Feature";
import Footer from "@/components/pages/Footer";
import HeroSection from "@/components/pages/Hero";
import Navbar from "@/components/pages/Navbar";
import NewsletterSection from "@/components/pages/Newsletter";

export default function Home() {
  return (
    <>
      <div className="px-[110px]">
        {/* Navbar Section */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Campaign Section */}
        <CampaignSection />

        {/* Feature Section */}
        <FeatureSection />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
