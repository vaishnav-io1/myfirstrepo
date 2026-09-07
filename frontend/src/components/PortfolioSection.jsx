// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { ArrowUpRight } from "lucide-react";

// const projects = [
//   {
//     title: "Tech Startup Scale-Up",
//     category: "Startup Consulting",
//     metric: "300% Revenue Growth",
//     desc: "Guided a SaaS startup from seed stage to Series A, structuring operations and go-to-market strategy.",
//     img: "https://images.unsplash.com/photo-1758691737158-18ffa31c0a46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkaXZlcnNlJTIwdGVhbXxlbnwwfHx8fDE3NzYxNDQwNTF8MA&ixlib=rb-4.1.0&q=85",
//   },
//   {
//     title: "Financial Restructuring",
//     category: "Financial Advisory",
//     metric: "40% Cost Reduction",
//     desc: "Restructured financial operations for a mid-size manufacturing company, improving margins significantly.",
//     img: "https://images.unsplash.com/photo-1748439435495-722cc1728b7e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydCUyMGRlc2t8ZW58MHx8fHwxNzc2MTQ0MDUxfDA&ixlib=rb-4.1.0&q=85",
//   },
//   {
//     title: "Market Entry Strategy",
//     category: "Market Research",
//     metric: "3 New Markets",
//     desc: "Conducted comprehensive research enabling a retail brand to expand into three new geographic markets.",
//     img: "https://images.unsplash.com/photo-1714601344981-75e003bc5d18?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzfGVufDB8fHx8MTc3NjE0NDA1MXww&ixlib=rb-4.1.0&q=85",
//   },
//   {
//     title: "Operational Excellence",
//     category: "Operational Strategy",
//     metric: "60% Efficiency Gain",
//     desc: "Redesigned supply chain and internal processes for a logistics firm, drastically improving throughput.",
//     img: "https://images.unsplash.com/photo-1694702702714-a48c5fabdaf3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzfGVufDB8fHx8MTc3NjE0NDA1MXww&ixlib=rb-4.1.0&q=85",
//   },
// ];

// export default function PortfolioSection() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="portfolio" data-testid="portfolio-section" className="py-24 md:py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.5 }}
//           className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B] mb-4"
//         >
//           Our Work
//         </motion.p>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0F172A] mb-16"
//           style={{ fontFamily: "'Satoshi', sans-serif" }}
//         >
//           Selected Projects
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.15 * i }}
//               className="group border border-[#E2E8F0] overflow-hidden service-card"
//               data-testid={`portfolio-card-${i}`}
//             >
//               <div className="relative h-[220px] overflow-hidden">
//                 <img
//                   src={project.img}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="text-xs tracking-[0.15em] uppercase font-semibold text-white bg-[#0A192F]/80 px-3 py-1">
//                     {project.category}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-6 md:p-8">
//                 <div className="flex items-start justify-between mb-3">
//                   <h3
//                     className="text-lg font-medium text-[#0F172A]"
//                     style={{ fontFamily: "'Satoshi', sans-serif" }}
//                   >
//                     {project.title}
//                   </h3>
//                   <ArrowUpRight className="w-5 h-5 text-[#64748B] group-hover:text-[#0A192F] transition-colors flex-shrink-0" />
//                 </div>
//                 <p className="text-2xl font-bold text-[#0A192F] tracking-tight mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>
//                   {project.metric}
//                 </p>
//                 <p className="text-sm leading-relaxed text-[#475569]">
//                   {project.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
