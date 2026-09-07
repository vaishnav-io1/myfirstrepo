import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Briefcase, Monitor, FlaskConical } from "lucide-react";

const domains = [
  {
    icon: Shield,
    title: "Insurance Advisory",
    desc: "Our core expertise — providing trusted guidance across Life, Health, Motor, Home, Travel, and Business insurance.",
    highlights: ["All Insurance Types", "Expert Advisory", "Claims Support"],
    primary: true,
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    desc: "Strategic advisory, financial planning, and operational excellence for businesses of all sizes.",
    highlights: ["Strategy & Planning", "Financial Advisory", "Market Research"],
    primary: false,
  },
  {
    icon: Monitor,
    title: "IT & Computer Education",
    desc: "Partnered with a leading computer institute to deliver industry-ready training and IT education programs.",
    highlights: ["Professional Courses", "Skill Development", "Placement Support"],
    primary: false,
  },
  {
    icon: FlaskConical,
    title: "Pharmaceutical Services",
    desc: "Consulting and support services in association with a pharmaceutical company for healthcare sector growth.",
    highlights: ["Pharma Consulting", "Regulatory Support", "Market Access"],
    primary: false,
  },
];

export default function ExpertiseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" data-testid="expertise-section" className="py-24 md:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B] mb-4"
        >
          What Sets Us Apart
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0F172A] mb-6"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Our Diverse Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base leading-relaxed text-[#475569] mb-16 max-w-2xl"
        >
          Led by insurance advisory as our core strength, VM Consultancy also extends its expertise into business consulting, IT education, and pharmaceutical services.
        </motion.p>

        {/* Primary: Insurance card - full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0A192F] p-8 md:p-12 mb-6 flex flex-col md:flex-row items-start md:items-center gap-8"
          data-testid="expertise-card-primary"
        >
          <div className="w-16 h-16 bg-white/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-white/40 mb-2 block">Primary Domain</span>
            <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Insurance Advisory
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Our core expertise — providing trusted guidance across Life, Health, Motor, Home, Travel, and Business insurance.
            </p>
            <div className="flex flex-wrap gap-3">
              {["All Insurance Types", "Expert Advisory", "Claims Support"].map((h) => (
                <span key={h} className="text-xs bg-white/10 text-white/80 px-3 py-1.5 font-medium">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secondary: 3 domain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.filter(d => !d.primary).map((domain, i) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="bg-white border border-[#E2E8F0] p-8 md:p-10 group service-card"
                data-testid={`expertise-card-${i}`}
              >
                <div className="w-14 h-14 bg-[#F1F5F9] flex items-center justify-center mb-6 group-hover:bg-[#0A192F] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#0A192F] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className="text-xl font-semibold text-[#0F172A] mb-3"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {domain.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569] mb-6">
                  {domain.desc}
                </p>
                <ul className="space-y-2">
                  {domain.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[#0F172A]">
                      <span className="w-1.5 h-1.5 bg-[#0A192F] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
