import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Target, Eye, Shield, Briefcase, Monitor, FlaskConical } from "lucide-react";

const FOUNDER_IMG = "/images/PSU.jpg";
const TEAM_IMG = "/images/off4.jpeg";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" data-testid="about-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B] mb-4"
        >
          About Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0F172A] mb-16"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Building Success Across Industries
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Founder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mb-8">
              <div className="border border-[#E2E8F0] overflow-hidden">
                <img
                  src={FOUNDER_IMG}
                  alt="Purnendu Shankar Upadhyay - Founder"
                  data-testid="founder-image"
                  className="w-full h-[400px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#0A192F]" />
            </div>
            <h3
              data-testid="founder-name"
              className="text-xl sm:text-2xl font-medium text-[#0F172A] mb-2"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Purnendu Shankar Upadhyay
            </h3>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B] mb-4">
              Founder & Chief Insurance Advisor
            </p>
            <p className="text-base leading-relaxed text-[#475569]">
              With over 15 years of experience in insurance advisory and cross-industry consulting, Purnendu has built VM Consultancy into a trusted name — specializing in insurance guidance while also bridging business strategy, technology education, and pharmaceutical services.
            </p>
          </motion.div>

          {/* Right - Company info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-10"
          >
            <div>
              <p className="text-base leading-relaxed text-[#475569]" data-testid="about-description">
                VM Consultancy is a diversified firm with <strong className="text-[#0F172A]">insurance advisory</strong> at its core. We guide individuals and businesses through all types of insurance — Life, Health, Motor, Home, Travel & Business. Additionally, we operate across <strong className="text-[#0F172A]">business consulting</strong>, <strong className="text-[#0F172A]">IT & computer education</strong>, and <strong className="text-[#0F172A]">pharmaceutical services</strong>.
              </p>
            </div>

            {/* Four domains mini-cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Shield, label: "Insurance" },
                { icon: Briefcase, label: "Consulting" },
                { icon: Monitor, label: "IT Education" },
                { icon: FlaskConical, label: "Pharma" },
              ].map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.label} className="bg-[#F1F5F9] p-4 flex flex-col items-center text-center gap-2">
                    <Icon className="w-5 h-5 text-[#0A192F]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0A192F]">{d.label}</span>
                  </div>
                );
              })}
            </div>

            <Separator className="bg-[#E2E8F0]" />

            {/* Mission */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#F1F5F9] flex items-center justify-center">
                <Target className="w-5 h-5 text-[#0A192F]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#0F172A] mb-2" data-testid="mission-title" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed text-[#475569]">
                  To provide expert insurance advisory and innovative multi-domain consulting that protects families, empowers businesses, educates professionals, and supports healthcare growth.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#F1F5F9] flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#0A192F]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#0F172A] mb-2" data-testid="vision-title" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  Our Vision
                </h3>
                <p className="text-base leading-relaxed text-[#475569]">
                  To be India's most trusted multi-domain consultancy — a one-stop partner for strategy, technology, and healthcare excellence.
                </p>
              </div>
            </div>

            <Separator className="bg-[#E2E8F0]" />

            <div className="border border-[#E2E8F0] overflow-hidden">
              <img
                src={TEAM_IMG}
                alt="VM Consultancy Team"
                data-testid="team-image"
                className="w-full h-[250px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}