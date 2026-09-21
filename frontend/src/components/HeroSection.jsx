import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// const HERO_IMG = "\public\images\PSU.jpg" ;
const HERO_IMG = "/images/PSU.jpg";
export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p
            data-testid="hero-label"
            className="text-xs tracking-[0.2em] uppercase font-semibold text-white/60 mb-6"
          >
            Insurance Advisory &middot; Consulting &middot; IT &middot; Pharma
          </p>
          <h1
            data-testid="hero-tagline"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            21 Years of Perseverance, Trust & Service
          </h1>
          <p
            data-testid="hero-description"
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-lg"
          >
            From Life and Health to Motor, Home, Travel, and Business,VM Consultancy has provided dependable insurance guidance and comprehensive protection solutions for individuals, families, and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              data-testid="hero-cta-button"
              onClick={() => window.open("https://www.licindia.in/insurance-plan/", // URL
                                         "_blank",                   // open in a new tab
                                         "noopener,noreferrer"       // security/privacy options
                                        )
                     }
              className="rounded-none bg-white text-[#0A192F] hover:bg-white/90 px-8 py-6 text-sm font-medium"
            >
              Explore Insurance Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              data-testid="hero-services-button"
              variant="outline"
              onClick={() => scrollTo("#contact")}
              className="rounded-none border-2 border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-sm font-medium bg-transparent"
            >
              Get Free Consultation
            </Button>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10"
        >
          {[
            { num: "21", label: "Years Experience" },
            { num: "1200+", label: "Policies Served" },
            { num: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} data-testid={`hero-stat-${stat.label.replace(/\s+/g, '-').toLowerCase()}`}>
              <p className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {stat.num}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}