import "@/App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InsuranceSection from "@/components/InsuranceSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesSection from "@/components/ServicesSection";
// import PortfolioSection from "@/components/PortfolioSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <InsuranceSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      {/* <TestimonialsSection /> */}
      <GallerySection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
