import "@/App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InsuranceSection from "@/components/InsuranceSection";
import AboutSection from "@/components/AboutSection";
// import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesSection from "@/components/ServicesSection";
// import PortfolioSection from "@/components/PortfolioSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HiringAlert from "@/components/HiringAlert";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HiringAlert />
      <InsuranceSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;