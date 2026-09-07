import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast, Toaster } from "sonner";
import {
  Briefcase,
  MapPin,
  Clock,
  Upload,
  Send,
  Monitor,
  FlaskConical,
  ChevronRight,
} from "lucide-react";

/* ────────────────────────────────────────────
   Sample job listings — replace with real data
   or fetch from a backend API in the future.
   ──────────────────────────────────────────── */
const jobs = [
  {
    title: "LIC Agent",
    domain: "Insurance",
    icon: Briefcase,
    location: "Varanasi, India",
    type: "Part-time",
    desc: "Identify prospective clients, understand their financial protection needs, and recommend suitable LIC insurance policies while providing end-to-end sales and service support.",
  },
  {
    title: "Mahila Career Agent (MCA)",
    domain: "Insurance",
    icon:Briefcase,
    location: "Varanasi, India",
    type: "Part-time",
    desc: "Identify prospective clients, understand their financial protection needs, and recommend suitable LIC insurance policies while providing end-to-end sales and service support.",
  },
  // {
  //   title: "IT Trainer",
  //   domain: "IT Education",
  //   icon: Monitor,
  //   location: "Varanasi",
  //   type: "Full-time",
  //   desc: "Deliver hands-on training in modern technologies to students enrolled in our partner computer institute.",
  // },
  // {
  //   title: "Pharma Consultant",
  //   domain: "Pharmaceutical",
  //   icon: FlaskConical,
  //   location: "Varanasi, India",
  //   type: "Full-time",
  //   desc: "Provide regulatory and market-access consulting for pharmaceutical clients, ensuring compliance and growth.",
  // },
  // {
  //   title: "Digital Marketing Executive",
  //   domain: "Consulting",
  //   icon: Briefcase,
  //   location: "Remote",
  //   type: "Contract",
  //   desc: "Plan and execute digital marketing campaigns for VM Consultancy and its partner organizations.",
  // },
];

export default function CareersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", resume: null, cover: "" });

  /* ───────────────────────────────────────────────────────────────
     Frontend-only handler — logs form data to console.
     TODO: Replace console.log with a POST to /api/careers/apply
     when the backend is ready.
     ─────────────────────────────────────────────────────────────── */
  const handleApply = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    console.log("[CareersSection] Application submitted (frontend-only):", {
      job: selected?.title,
      ...form,
      resume: form.resume ? form.resume.name : null,
    });
    toast.success("Application submitted! We'll be in touch soon.");
    setForm({ name: "", email: "", resume: null, cover: "" });
    setSelected(null);
  };

  return (
    <section id="careers" data-testid="careers-section" className="py-24 md:py-32 bg-white">
      <Toaster position="top-right" richColors />
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B] mb-4"
        >
          Join Our Team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0F172A] mb-4"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Careers at VM Consultancy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base leading-relaxed text-[#475569] mb-16 max-w-2xl"
        >
          We are always looking for talented professionals. Explore open roles across consulting, IT education, and pharmaceutical services.
        </motion.p>

        {/* ─── Job Listings ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {jobs.map((job, i) => {
            const Icon = job.icon;
            const isActive = selected?.title === job.title;
            return (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className={`border p-6 md:p-8 service-card cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "border-[#0A192F] bg-[#F8F9FA]"
                    : "border-[#E2E8F0] bg-white hover:border-[#0A192F]/30"
                }`}
                onClick={() => setSelected(job)}
                data-testid={`job-card-${i}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F1F5F9] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#0A192F]" />
                    </div>
                    <span className="text-xs tracking-[0.15em] uppercase font-semibold text-[#64748B]">
                      {job.domain}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? "rotate-90 text-[#0A192F]" : "text-[#E2E8F0]"
                    }`}
                  />
                </div>
                <h3
                  className="text-lg font-medium text-[#0F172A] mb-2"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {job.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>
                {/* <Button
                  data-testid={`apply-now-btn-${i}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(job);
                    document.querySelector("#apply-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-5 rounded-none bg-[#0A192F] text-white hover:bg-[#0F2646] px-6 py-2 text-xs font-medium"
                >
                  Apply Now
                </Button> */}
              </motion.div>
            );
          })}
        </div>

       
       
      </div>
    </section>
  );
}
//  {/* ─── Application Form (frontend-only) ─── */}
//  <motion.div
//           id="apply-form"
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="border border-[#E2E8F0] bg-[#F8F9FA] p-8 md:p-12"
//           data-testid="careers-apply-form-wrapper"
//         >
//           <h3
//             className="text-xl font-semibold text-[#0F172A] mb-2"
//             style={{ fontFamily: "'Satoshi', sans-serif" }}
//           >
//             {selected ? `Apply for: ${selected.title}` : "Apply to VM Consultancy"}
//           </h3>
//           <p className="text-sm text-[#475569] mb-8">
//             {selected
//               ? "Fill in your details below and we'll get back to you."
//               : "Select a role above, or send us a general application."}
//           </p>

//           <form onSubmit={handleApply} className="space-y-6 max-w-xl" data-testid="careers-apply-form">
//             <div>
//               <label className="text-xs uppercase tracking-[0.15em] font-semibold text-[#64748B] mb-2 block">
//                 Full Name
//               </label>
//               <Input
//                 data-testid="career-name-input"
//                 placeholder="Your full name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="rounded-none border-[#E2E8F0] focus-visible:ring-2 focus-visible:ring-[#0A192F] h-12 bg-white"
//               />
//             </div>
//             <div>
//               <label className="text-xs uppercase tracking-[0.15em] font-semibold text-[#64748B] mb-2 block">
//                 Email Address
//               </label>
//               <Input
//                 data-testid="career-email-input"
//                 type="email"
//                 placeholder="you@example.com"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="rounded-none border-[#E2E8F0] focus-visible:ring-2 focus-visible:ring-[#0A192F] h-12 bg-white"
//               />
//             </div>
//             {/* Resume upload — UI only */}
//             <div>
//               <label className="text-xs uppercase tracking-[0.15em] font-semibold text-[#64748B] mb-2 block">
//                 Resume / CV
//               </label>
//               <label
//                 data-testid="career-resume-upload"
//                 className="flex items-center justify-center gap-2 w-full h-12 border border-dashed border-[#E2E8F0] bg-white cursor-pointer hover:border-[#0A192F]/40 transition-colors text-sm text-[#475569]"
//               >
//                 <Upload className="w-4 h-4" />
//                 {form.resume ? form.resume.name : "Upload your resume (PDF, DOC)"}
//                 <input
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   className="hidden"
//                   onChange={(e) => setForm({ ...form, resume: e.target.files?.[0] || null })}
//                 />
//               </label>
//             </div>
//             <div>
//               <label className="text-xs uppercase tracking-[0.15em] font-semibold text-[#64748B] mb-2 block">
//                 Cover Note (Optional)
//               </label>
//               <Textarea
//                 data-testid="career-cover-input"
//                 placeholder="Tell us why you'd be a great fit..."
//                 value={form.cover}
//                 onChange={(e) => setForm({ ...form, cover: e.target.value })}
//                 className="rounded-none border-[#E2E8F0] focus-visible:ring-2 focus-visible:ring-[#0A192F] min-h-[100px] bg-white"
//               />
//             </div>
//             <Button
//               type="submit"
//               data-testid="career-submit-button"
//               className="rounded-none bg-[#0A192F] text-white hover:bg-[#0F2646] px-8 py-5 text-sm font-medium"
//             >
//               Submit Application
//               <Send className="ml-2 h-4 w-4" />
//             </Button>
//           </form>
//         </motion.div>