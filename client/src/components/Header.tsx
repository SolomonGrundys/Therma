import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/Th (1)_1759603549521.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    window.location.href = href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "/#product" },
    { label: "About", href: "/#about" },
    { label: "Purchase", href: "/#purchase" },
  ];

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-xl border border-border rounded-full px-6 py-3 shadow-lg transition-all duration-500 ${
        isScrolled ? "top-4 shadow-xl" : ""
      }`}
      data-testid="header-main"
    >
      <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center" data-testid="link-home">
            <img
              src={logoUrl}
              alt="THERMA"
              className="h-7 w-auto"
              data-testid="img-logo"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Link href="/contact">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full"
                data-testid="button-contact"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/buy">
              <Button
                variant="default"
                size="sm"
                className="rounded-full"
                data-testid="button-buy-now"
              >
                Buy Now
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden ml-auto p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden mt-3 bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-6 shadow-xl"
          data-testid="mobile-menu"
        >
          <div className="space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <Link href="/contact" className="block">
                <Button
                  variant="ghost"
                  className="w-full rounded-full"
                  data-testid="button-mobile-contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/buy" className="block">
                <Button
                  variant="default"
                  className="w-full rounded-full"
                  data-testid="button-mobile-buy-now"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
