import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  TrendingUp,
  Rocket,
  Search,
  Settings,
  Monitor,
  GraduationCap,
  Code,
  Database,
  Shield,
  FlaskConical,
  Stethoscope,
  FileCheck,
  Pill,
  HeartPulse,
  Heart,
  Car,
  Home,
  Plane,
  Building2,
} from "lucide-react";

/* ──────────────────────────────────────────────────
   Service data organised by domain.
   Each category can be extended independently.
   ────────────────────────────────────────────────── */
const categories = [
  {
    id: "insurance",
    label: "Insurance",
    services: [
      { icon: Heart, title: "Life Insurance", desc: "Comprehensive life insurance plans — term, endowment, whole life, and ULIPs for every life stage." },
      { icon: HeartPulse, title: "Health Insurance", desc: "Individual, family floater, and critical illness health coverage to protect against medical expenses." },
      { icon: Car, title: "Vehicle Insurance", desc: "Comprehensive and third-party cover for cars, two-wheelers, and commercial vehicles." },
      { icon: Home, title: "Home Loan", desc: "Property protection against natural disasters, fire, theft, and structural damage." },
      { icon: Plane, title: "Mutual Fund, SIP", desc: "Coverage for trip cancellations, medical emergencies, baggage loss, and flight delays." },
    ],
  },
  {
    id: "consulting",
    label: "Consulting",
    services: [
      { icon: Briefcase, title: "Business Consulting", desc: "Strategic planning, organizational development, and performance optimization tailored to your industry." },
      { icon: TrendingUp, title: "Financial Advisory", desc: "Expert financial guidance including budgeting, forecasting, investment analysis, and risk management." },
      { icon: Rocket, title: "Startup Consulting", desc: "End-to-end support for startups — ideation, funding, market entry, and scaling strategies." },
      { icon: Search, title: "Market Research", desc: "In-depth market analysis, competitor benchmarking, and consumer insights to inform strategic decisions." },
      { icon: Settings, title: "Operational Strategy", desc: "Process improvement, supply chain optimization, and operational efficiency frameworks." },
    ],
  },
  {
    id: "it-education",
    label: "IT / Computer Institute",
    services: [
      { icon: GraduationCap, title: "IT Courses", desc: "Industry-aligned courses in Accounting and Data Operation" },
      { icon: Code, title: "Software Development Training", desc: "Hands-on training in modern programming languages and frameworks." },
      { icon: Monitor, title: "Digital Literacy Workshops", desc: "Foundational computer skills and digital literacy for students and working professionals." },
      { icon: Shield, title: "Placement & Career Support", desc: "Resume building, mock interviews, and industry placement assistance for program graduates." },
    ],
  },
  {
    id: "pharma",
    label: "Pharmaceutical",
    services: [
      { icon: FlaskConical, title: "Pharma Consulting", desc: "Strategic consulting for pharmaceutical companies on market access, pricing, and product launch." },
      // { icon: Stethoscope, title: "Healthcare Advisory", desc: "Advisory services for healthcare providers on operational efficiency and patient care improvement." },
      // { icon: FileCheck, title: "Regulatory Compliance", desc: "Guidance on drug regulatory affairs, clinical trial compliance, and quality assurance standards." },
      { icon: Pill, title: "Product & Distribution Support", desc: "Support in pharmaceutical supply chain, distribution strategy, and inventory management." },
      // { icon: HeartPulse, title: "Public Health Projects", desc: "Consulting for government and NGO-backed public health initiatives and awareness campaigns." },
    ],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" data-testid="services-section" className="py-24 md:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B] mb-4"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0F172A] mb-16"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Our Services
        </motion.h2>

        <Tabs defaultValue="insurance" className="w-full">
          <TabsList
            className="w-full flex bg-white border border-[#E2E8F0] rounded-none h-auto p-0 mb-8"
            data-testid="services-tabs"
          >
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                data-testid={`services-tab-${cat.id}`}
                className="flex-1 rounded-none py-4 text-sm font-medium data-[state=active]:bg-[#0A192F] data-[state=active]:text-white data-[state=active]:shadow-none transition-all duration-300"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E2E8F0]">
                {cat.services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.08 * i }}
                      className="service-card bg-white p-8 md:p-10 group cursor-pointer"
                      data-testid={`service-card-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      <div className="w-12 h-12 bg-[#F1F5F9] flex items-center justify-center mb-6 group-hover:bg-[#0A192F] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#0A192F] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3
                        className="text-lg font-medium text-[#0F172A] mb-3"
                        style={{ fontFamily: "'Satoshi', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#475569]">
                        {service.desc}
                      </p>
                    </motion.div>
                  );
                })}
                {/* CTA cell
                <div className="bg-[#0A192F] p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-2xl font-bold text-white tracking-tight mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    Need a custom solution?
                  </p>
                  <p className="text-sm text-white/60">
                    We tailor our approach to your unique business needs across all domains.
                  </p>
                </div> */}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}