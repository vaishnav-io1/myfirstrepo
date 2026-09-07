// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const testimonials = [
//   {
//     quote: "VM Consultancy transformed our business strategy. Their insights were invaluable in helping us achieve 200% growth in just 18 months.",
//     name: "Rajesh Kumar",
//     role: "CEO, TechVista Solutions",
//   },
//   {
//     quote: "The financial advisory team provided crystal-clear guidance during our restructuring. Professional, thorough, and results-driven.",
//     name: "Anita Sharma",
//     role: "CFO, GreenLeaf Industries",
//   },
//   {
//     quote: "From market research to go-to-market strategy, VM Consultancy was our trusted partner throughout our expansion into new markets.",
//     name: "Vikram Patel",
//     role: "Director, NovaTrade Exports",
//   },
//   {
//     quote: "Their operational strategy consulting helped us reduce costs by 35% while improving service quality. Highly recommended.",
//     name: "Priya Mehta",
//     role: "COO, SwiftLogistics",
//   },
// ];

// export default function TestimonialsSection() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });
//   const [current, setCurrent] = useState(0);

//   const next = () => setCurrent((c) => (c + 1) % testimonials.length);
//   const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
//   const t = testimonials[current];

//   return (
//     <section id="testimonials" data-testid="testimonials-section" className="py-24 md:py-32 bg-[#F8F9FA]">
//       <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.5 }}
//           className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B] mb-4"
//         >
//           Testimonials
//         </motion.p>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0F172A] mb-16"
//           style={{ fontFamily: "'Satoshi', sans-serif" }}
//         >
//           What Our Clients Say
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="relative max-w-3xl"
//         >
//           {/* Large quotation mark bg */}
//           <span className="quote-bg select-none" aria-hidden="true">"</span>

//           <div className="relative z-10">
//             <motion.blockquote
//               key={current}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4 }}
//               data-testid="testimonial-quote"
//               className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0F172A] leading-snug tracking-tight mb-10"
//               style={{ fontFamily: "'Satoshi', sans-serif" }}
//             >
//               "{t.quote}"
//             </motion.blockquote>

//             <div className="flex items-center justify-between">
//               <div>
//                 <p data-testid="testimonial-author" className="text-base font-medium text-[#0F172A]">{t.name}</p>
//                 <p className="text-sm text-[#64748B]">{t.role}</p>
//               </div>
//               <div className="flex gap-2">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   data-testid="testimonial-prev"
//                   onClick={prev}
//                   aria-label="Previous testimonial"
//                   className="rounded-none border-[#E2E8F0] hover:bg-[#0A192F] hover:text-white hover:border-[#0A192F] transition-all duration-300"
//                 >
//                   <ChevronLeft className="h-4 w-4" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   data-testid="testimonial-next"
//                   onClick={next}
//                   aria-label="Next testimonial"
//                   className="rounded-none border-[#E2E8F0] hover:bg-[#0A192F] hover:text-white hover:border-[#0A192F] transition-all duration-300"
//                 >
//                   <ChevronRight className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>

//             {/* Dots */}
//             <div className="flex gap-2 mt-8">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   data-testid={`testimonial-dot-${i}`}
//                   onClick={() => setCurrent(i)}
//                   className={`h-1.5 transition-all duration-300 ${
//                     i === current ? "w-8 bg-[#0A192F]" : "w-4 bg-[#E2E8F0]"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
