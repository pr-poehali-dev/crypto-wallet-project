import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CryptoAssetsSection from "@/components/home/CryptoAssetsSection";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CryptoAssetsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
