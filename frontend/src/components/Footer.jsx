import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
const socialLinks = {
  LinkedIn: process.env.REACT_APP_LINKEDIN_URL,
  Twitter: process.env.REACT_APP_TWITTER_URL,
  Facebook: process.env.REACT_APP_FACEBOOK_URL,
  Instagram: process.env.REACT_APP_INSTAGRAM_URL,
};

const footerLinks = {
  Insurance: [
    "Life Insurance",
    "Health Insurance",
    "Motor Insurance",
    "General Insurance",
    "Home Loan",
    "Mutual Fund (SIP)",
  ],
  Company: ["Insurance", "About Us", "Careers", "Contact"],
  Connect: ["LinkedIn", "Twitter", "Facebook", "Instagram"],
};

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const sectionMap = {
    "Insurance": "#insurance",
    "About Us": "#about",
    "Careers": "#careers",
    "Contact": "#contact",
  };

  return (
    <footer data-testid="footer" className="bg-[#0A192F] text-white">
      {/* CTA Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-white/40 mb-4">
              Ready to grow?
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Do Your Duty. Let Excellence Follow.
            </h2>
          </div>
          <a
            href="#contact"
            data-testid="footer-cta"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm font-medium">Start a conversation</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <Separator className="bg-white/10 mb-16" />

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <a
              href="#home"
              data-testid="footer-logo"
              onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
              className="text-xl font-bold tracking-tight text-white block mb-4"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              VM Consultancy
            </a>
            <p className="text-sm text-white/40 leading-relaxed">
              MSME Registered Enterprise | Government of India <br/><br/>
              D 64/95 A Chandrika Apartment, Sigra,Varanasi
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs tracking-[0.2em] uppercase font-semibold text-white/40 mb-4">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    {sectionMap[link] ? (
                      <a
                        href={sectionMap[link]}
                        data-testid={`footer-link-${link.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={(e) => { e.preventDefault(); scrollTo(sectionMap[link]); }}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    ) : (
                      <a
                        href={socialLinks[link] || "#"}
                        target={socialLinks[link] ? "_blank" : undefined}
                        rel={socialLinks[link] ? "noopener noreferrer" : undefined}
                        data-testid={`footer-link-${link.replace(/\s+/g, '-').toLowerCase()}`}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} VM Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}