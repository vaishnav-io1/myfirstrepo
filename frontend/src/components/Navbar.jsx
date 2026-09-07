import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Insurance", href: "#insurance" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  // { label: "Portfolio", href: "#portfolio" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          data-testid="navbar-logo"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-[#0A192F]" : "text-white"
          }`}
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          V.M. Consultancy
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#0A192F] ${
                scrolled ? "text-[#475569]" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            data-testid="nav-cta-button"
            onClick={() => handleNav("#contact")}
            className={`rounded-none px-6 py-2 text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "bg-[#0A192F] text-white hover:bg-[#0F2646]"
                : "bg-white text-[#0A192F] hover:bg-white/90"
            }`}
          >
            Book a Consultation
          </Button>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                data-testid="mobile-menu-toggle"
                className={scrolled ? "text-[#0A192F]" : "text-white"}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white p-8">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-base font-medium text-[#0F172A] hover:text-[#0A192F] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  data-testid="mobile-cta-button"
                  onClick={() => handleNav("#contact")}
                  className="rounded-none bg-[#0A192F] text-white hover:bg-[#0F2646] mt-4"
                >
                  Book a Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
