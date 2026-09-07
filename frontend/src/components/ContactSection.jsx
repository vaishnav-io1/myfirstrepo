import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, Toaster } from "sonner";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const WHATSAPP_NUMBER = "9005637618";

/* ──────────────────────────────────────────────────────────
   Contact form is frontend-only (no backend dependency).
   TODO: Replace console.log with a POST to /api/contact
   when the backend is integrated.
   ────────────────────────────────────────────────────────── */

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
     setLoading(true);
     try{
       await axios.post(`${BACKEND_URL}/api/contact`,form);
       toast.success("Message sent successfully! We'll get back to you soon.");
       setForm({name:"",phone:"",message:""});
     }catch(err){
      console.error("Contact submit failed:",err);
      toast.error("Something went wrong.Please try again.");
     }finally{
      setLoading(false);
     }
    };
  //    const message = `Hello VM Consultancy,%0A
  //       Name: ${form.name}%0A
  //       Phone: ${form.phone}%0A
  //       Message: ${form.message}`;

  //    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  //    window.open(url, "_blank");

  //   // setLoading(true);
  //   // // Frontend-only: log to console. Replace with API call when backend is ready.
  //   // console.log("[ContactSection] Form submitted (frontend-only):", form);
  //   // // TODO: await axios.post(`${BACKEND_URL}/api/contact`, form);
  //   // setTimeout(() => {
  //   //   toast.success("Message sent successfully! We'll get back to you soon.");
  //   //   setForm({ name: "", email: "", message: "" });
  //   //   setLoading(false);
  //   // }, 800);
  // };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const message = `Hello VM Consultancy,%0A
// Name: ${name}%0A
// Phone: ${phone}%0A
// Message: ${userMessage}`;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank"); // opens WhatsApp in a new tab / the app
//   };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-[#F8F9FA]"
    >
      <Toaster position="top-right" richColors />
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase font-semibold text-[#64748B] mb-4"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0F172A] mb-16"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0A192F] p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <h3
                className="text-2xl font-semibold text-white mb-6"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                Let's discuss your project
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-10">
                Ready to take your business to the next level? Reach out and let
                us craft a strategy tailored to your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div
                className="flex items-start gap-4"
                data-testid="contact-address"
              >
                <MapPin className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40 mb-1">
                    Office
                  </p>
                  <p className="text-sm text-white/80">
                    D- 64/95 A, Chandrika Apartment, Sigra (Near Rudraksh
                    Convention Center), Varanasi, UP 221002, India
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-4"
                data-testid="contact-phone"
              >
                <Phone className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40 mb-1">
                    Phone
                  </p>
                  <p className="text-sm text-white/80">+91 9450581966</p>
                </div>
              </div>
              <div
                className="flex items-start gap-4"
                data-testid="contact-email"
              >
                <Phone className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40 mb-1">
                    Email Address
                  </p>
                  <p className="text-sm text-white/80">
                    vmconsultancysigravns@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white border border-[#E2E8F0] p-8 md:p-12"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-testid="contact-form"
            >
              <div>
                <label className="text-xs uppercase tracking-[0.15em] font-semibold text-[#64748B] mb-2 block">
                  Your Name
                </label>
                <Input
                  data-testid="contact-name-input"
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-none border-[#E2E8F0] focus-visible:ring-2 focus-visible:ring-[#0A192F] h-12"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] font-semibold text-[#64748B] mb-2 block">
                  Mobile number
                </label>
                <Input
                  data-testid="contact-phone-input"
                  type="tel"
                  placeholder="91XXX XXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-none border-[#E2E8F0] focus-visible:ring-2 focus-visible:ring-[#0A192F] h-12"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] font-semibold text-[#64748B] mb-2 block">
                  Message
                </label>
                <Textarea
                  data-testid="contact-message-input"
                  placeholder="Tell us about your project or inquiry..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="rounded-none border-[#E2E8F0] focus-visible:ring-2 focus-visible:ring-[#0A192F] min-h-[140px]"
                />
              </div>
              {/* <Button
                type="submit"
                data-testid="whatsapp-send-button"
                // disabled={loading}
                className="w-full rounded-none bg-[#0A192F] text-white hover:bg-[#0F2646] px-8 py-6 text-sm font-medium"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button> */}

              <Button type="submit" data-testid="whatsapp-send-btn">
  Send Message
</Button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 border border-[#E2E8F0] overflow-hidden"
          data-testid="contact-map"
        >
          <iframe
            title="VM Consultancy Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.775717089388!2d82.98332507484112!3d25.311738427052855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dfda5a6f119%3A0x1fe4474f9a91050b!2sChandrika%20Apartment%2C%20D%2064%2F95%20A%2C%20near%20Casamila%20Restaurant%2C%20Sigra%2C%20Varanasi%2C%20Uttar%20Pradesh%20221002!5e0!3m2!1sen!2sin!4v1776489717728!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.775717089388!2d82.98332507484112!3d25.311738427052855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dfda5a6f119%3A0x1fe4474f9a91050b!2sChandrika%20Apartment%2C%20D%2064%2F95%20A%2C%20near%20Casamila%20Restaurant%2C%20Sigra%2C%20Varanasi%2C%20Uttar%20Pradesh%20221002!5e0!3m2!1sen!2sin!4v1776489717728!5m2!1sen!2sin" 
width="600" 
height="450" 
style="border:0;" 
allowfullscreen="" 
loading="lazy" 
referrerpolicy="no-referrer-when-downgrade">
</iframe> */
}
