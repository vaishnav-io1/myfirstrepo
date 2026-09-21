import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Heart,
  HeartPulse,
  Car,
  Home,
  TrendingUp,
  Building2,
  ArrowRight,
  ExternalLink,
  Shield,
} from "lucide-react";

const insuranceTypes = [
  {
    icon: Heart,
    title: "Life Insurance",
    desc: "Secure your family's future with comprehensive life insurance plans. Term life, endowment, whole life, and ULIP options available.",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    companies: [
      {
        id: "lic",
        name: "LIC",
        url: process.env.REACT_APP_LIC_URL,
      },
      {
        id: "hdfc-life",
        name: "HDFC Life",
        url: process.env.REACT_APP_HDFC_LIFE_URL,
      },
    ],
  },
  {
    icon: HeartPulse,
    title: "Health Insurance",
    desc: "Protect yourself against medical expenses with individual, family floater, and critical illness health insurance coverage.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    companies: [
      {
        id: "star-health",
        name: "Star Health Insurance",
        url: process.env.REACT_APP_STAR_HEALTH_URL,
      },
      {
        id: "care-health",
        name: "Care Health Insurance",
        url: process.env.REACT_APP_CARE_HEALTH_URL,
      },
      {
        id: "niva-bupa",
        name: "Niva Bupa",
        url: process.env.REACT_APP_NIVA_BUPA_URL,
      },
    ],
  },

  {
    icon: Home,
    title: "Home Loan",
    desc: "Explore home financing options and get guidance on eligibility, documentation, and repayment terms.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    companies: [
      {
        id: "muthoot",
        name: "Muthoot Finance",
        url: process.env.REACT_APP_MUTHOOT_URL,
      },
      {
        id: "piramal",
        name: "Piramal",
        url: process.env.REACT_APP_PIRAMAL_URL,
      },
      {
        id: "lic-housing",
        name: "LIC Housing Finance",
        url: process.env.REACT_APP_LIC_HOUSING_URL,
      },
    ],
  },
  {
    icon: TrendingUp,
    title: "Mutual Funds (SIP)",
    desc: "Explore mutual fund options and systematic investment plans suited to your financial goals and risk tolerance. Investments are subject to market risks.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
    companies: [
      {
        id: "sbi-mf",
        name: "SBI",
        url: process.env.REACT_APP_SBI_MF_URL,
      },
      {
        id: "canara-mf",
        name: "Canara Robeco",
        url: process.env.REACT_APP_CANARA_MF_URL,
      },
      {
        id: "uti-mf",
        name: "UTI",
        url: process.env.REACT_APP_UTI_MF_URL,
      },
      {
        id: "franklin-mf",
        name: "Franklin Templeton",
        url: process.env.REACT_APP_FRANKLIN_MF_URL,
      },
      {
        id: "mirae-mf",
        name: "Mirae Asset",
        url: process.env.REACT_APP_MIRAE_MF_URL,
      },
      {
        id: "axis-mf",
        name: "Axis",
        url: process.env.REACT_APP_AXIS_MF_URL,
      },
      {
        id: "kotak-mf",
        name: "Kotak",
        url: process.env.REACT_APP_KOTAK_MF_URL,
      },
      {
        id: "icici-mf",
        name: "ICICI Prudential",
        url: process.env.REACT_APP_ICICI_MF_URL,
      },
    ],
  },
  {
    icon: Building2,
    title: "General Insurance",
    desc: "Explore non-life insurance options to protect your assets and business against covered risks.",
    color: "bg-sky-50",
    iconColor: "text-sky-600",
    companies: [
      {
        id: "new-india",
        name: "New India Assurance",
        url: process.env.REACT_APP_NEW_INDIA_URL,
      },
      {
        id: "hdfc-ergo",
        name: "HDFC ERGO",
        url: process.env.REACT_APP_HDFC_ERGO_URL,
      },
    ],
  },
  
  // Existing Motor Insurance card remains unchanged.
  {
    icon: Car,
    title: "Motor Insurance",
    desc: "Comprehensive and third-party motor insurance for cars, two-wheelers, and commercial vehicles with hassle-free claims.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },

];

export default function InsuranceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="insurance" data-testid="insurance-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <Shield className="w-4 h-4 text-[#0A192F]" />
              <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B]">
                Our Core Expertise
              </p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0F172A] mb-3"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Insurance & Financial Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base leading-relaxed text-[#475569] max-w-xl"
            >
              Explore insurance, home loan, and mutual fund options with guidance tailored to your needs.
            </motion.p>
          </div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              data-testid="insurance-cta"
              onClick={() => scrollTo("#contact")}
              className="rounded-none bg-[#0A192F] text-white hover:bg-[#0F2646] px-8 py-5 text-sm font-medium"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div> */}
        </div>

        {/* Insurance cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceTypes.map((ins, i) => {
            const Icon = ins.icon;
            return (
              <motion.div
                key={ins.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="border border-[#E2E8F0] p-8 group service-card bg-white"
                data-testid={`insurance-card-${ins.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div className={`w-14 h-14 ${ins.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${ins.iconColor}`} />
                </div>
                <h3
                  className="text-lg font-semibold text-[#0F172A] mb-3"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {ins.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569] mb-5">
                  {ins.desc}
                </p>
                


{ins.companies?.length > 0 && (
  <div
    className="mb-6 border-t border-[#E2E8F0] pt-4"
    data-testid={`insurance-companies-${i}`}
  >
    {/* <p className="mb-3 text-xs font-medium text-[#64748B]">
      Explore company websites
    </p> */}

    <ul className="flex flex-wrap gap-2">
      {ins.companies.map((company) => (
        <li key={company.id} className="min-w-0 max-w-full">
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${company.name} website (opens in a new tab)`}
            title={`${company.name} — opens in a new tab`}
            data-testid={`company-link-${company.id}`}
            className="
              inline-flex min-h-11 max-w-full items-center gap-2
              rounded-sm border border-[#E2E8F0]
              bg-[#F8FAFC] px-3 py-2
              text-xs font-medium text-[#0A192F]
              transition-colors
              hover:border-[#94A3B8] hover:bg-[#F1F5F9]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#0A192F] focus-visible:ring-offset-2
            "
          >
            <img
              src={`${process.env.PUBLIC_URL}/logos/${company.id}.png`}
              alt=""
              width={32}
              height={24}
              loading="lazy"
              data-testid={`company-logo-${company.id}`}
              className="h-6 w-8 shrink-0 object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <span className="min-w-0 break-words">
              {company.name}
            </span>

            <ExternalLink
              className="h-3.5 w-3.5 shrink-0 text-[#64748B]"
              aria-hidden="true"
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
)}





                <button
                  onClick={() => scrollTo("#contact")}
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0A192F] hover:text-[#0F2646] transition-colors flex items-center gap-1 group/link"
                  data-testid={`insurance-enquire-${ins.title.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  Enquire Now
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Trust banner
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-[#0A192F] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          data-testid="insurance-trust-banner"
        >
          <div>
            <h3
              className="text-xl md:text-2xl font-semibold text-white mb-2"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Not sure which insurance is right for you?
            </h3>
            <p className="text-sm text-white/60">
              We will analyze your needs and recommend the best plan — absolutely free.
            </p>
          </div>
          <Button
            data-testid="insurance-consult-btn"
            onClick={() => scrollTo("#contact")}
            className="rounded-none bg-white text-[#0A192F] hover:bg-white/90 px-8 py-5 text-sm font-medium flex-shrink-0"
          >
            Free Consultation
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}