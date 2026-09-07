import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    url: "/images/off1.jpeg",
    alt: "Modern glass office building",
    height: "h-[300px]",
  },
  {
    url: "/images/off2.jpeg",
    alt: "Corporate office interior",
    height: "h-[400px]",
  },
  {
    url: "/images/off3.jpeg",
    alt: "Business team meeting",
    height: "h-[350px]",
  },
  {
    url: "/images/off4.jpeg",
    alt: "Abstract geometric building",
    height: "h-[280px]",
  },
  {
    url: "/images/off5.jpeg",
    alt: "Financial data analysis",
    height: "h-[360px]",
  },
  {
    url: "/images/off6.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off7.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off8.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off9.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off10.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off11.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off12.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off13.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off14.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off15.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off16.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  {
    url: "/images/off17.jpeg",
    alt: "Collaborative workspace",
    height: "h-[320px]",
  },
  
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B] mb-4"
        >
          Gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0F172A] mb-16"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Inside VM Consultancy
        </motion.h2>

        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="masonry-grid-item overflow-hidden border border-[#E2E8F0]"
              data-testid={`gallery-image-${i}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className={`gallery-img w-full ${img.height} object-cover`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
