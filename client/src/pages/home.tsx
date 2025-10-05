import { useState, useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Model3D from "@/components/Model3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / windowHeight, 1);
      setScrollProgress(progress);
    };

    setTimeout(() => setTextVisible(true), 800);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Floating Bubble Header - Always Visible */}
      <Header />

      {/* Opening 3D Section - Full Screen */}
      <section className="fixed top-0 left-0 w-full h-screen flex items-end justify-center pb-20 bg-background">
        <div className="absolute inset-0 flex items-center justify-center">
          <Model3D className="w-full h-full" />
        </div>
        
        {/* Text fading in at bottom */}
        <div
          className={`relative z-10 text-center transition-all duration-1000 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          data-testid="opening-text"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground">
            Søke
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Advanced Thermal Vision for Any Drone
          </p>
        </div>
      </section>

      {/* Main Content - Slides in on scroll */}
      <div
        className="relative z-20 min-h-screen bg-gradient-to-b from-background to-muted/30"
        style={{
          transform: `translateY(${100 - scrollProgress * 100}vh)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div className="bg-background rounded-t-[3rem] shadow-2xl">

          <section
            id="hero"
            className="relative min-h-[70vh] flex items-center justify-center px-6"
            data-testid="section-hero"
          >
            <div className="max-w-4xl mx-auto text-center pt-32 pb-20">
              <h2
                className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground"
                data-testid="text-hero-title"
              >
                Søke Thermal Camera
              </h2>
              <p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                data-testid="text-hero-subtitle"
              >
                Professional thermal imaging attachment for your existing drone at a fraction of the cost
              </p>
              <Button
                size="lg"
                className="rounded-full"
                data-testid="button-hero-explore"
              >
                Explore Søke
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          <section
            id="product"
            className="py-20 px-6"
            data-testid="section-product"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-4"
                    data-testid="text-product-title"
                  >
                    Søke Thermal Camera
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Professional 256×192 thermal imaging that attaches to your existing drone. Get thermal vision without buying an expensive thermal drone.
                  </p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">$849.99</div>
                    <p className="text-sm text-muted-foreground">One-time purchase</p>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full"
                    data-testid="button-product-learn"
                  >
                    Learn More
                  </Button>
                </div>
                <div>
                  <Model3D className="w-full h-[400px] rounded-3xl" />
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-20 px-6" data-testid="section-about">
            <div className="max-w-4xl mx-auto text-center">
              <h3
                className="text-3xl md:text-5xl font-bold mb-6"
                data-testid="text-about-title"
              >
                Professional Thermal Imaging
              </h3>
              <p
                className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12"
                data-testid="text-about-description"
              >
                Advanced 256×192 thermal sensor technology in a lightweight, universal attachment
              </p>
              <div className="grid md:grid-cols-3 gap-12 mt-16">
                {[
                  { number: "256×192", label: "Resolution" },
                  { number: "<200g", label: "Weight" },
                  { number: "Universal", label: "Mounting" },
                ].map((stat, i) => (
                  <div key={i} data-testid={`stat-${i}`}>
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-6 bg-muted/20" data-testid="section-comparison">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-5xl font-bold mb-6" data-testid="text-comparison-title">
                  Why Buy a Thermal Drone?
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Add thermal imaging to your existing drone for a fraction of the cost
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-background border-2 border-primary rounded-3xl p-6 md:p-8" data-testid="card-soke">
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-primary mb-2">Your Existing Drone +</div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-2">Søke Attachment</h4>
                    <div className="text-3xl md:text-4xl font-bold mb-1">$849.99</div>
                    <p className="text-sm text-muted-foreground">Camera attachment</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">256×192 thermal sensor</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Use your existing drone</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Professional quality</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Lifetime support</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm font-semibold text-primary">Best Value</div>
                  </div>
                </div>

                <div className="bg-background border border-border rounded-3xl p-6 opacity-90" data-testid="card-dji">
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Thermal Drone</div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2">DJI Mavic 3 Thermal</h4>
                    <div className="text-2xl md:text-3xl font-bold mb-1">$7,309</div>
                    <p className="text-sm text-muted-foreground">Complete drone</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">640×512 thermal</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Must buy new drone</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">45 min flight time</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">RTK positioning</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background border border-border rounded-3xl p-6 opacity-90" data-testid="card-autel">
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Thermal Drone</div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2">Autel EVO II 640T</h4>
                    <div className="text-2xl md:text-3xl font-bold mb-1">$4,799</div>
                    <p className="text-sm text-muted-foreground">Complete drone</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">640×512 thermal</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Must buy new drone</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">38 min flight time</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">15km transmission</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background border border-border rounded-3xl p-6 opacity-90" data-testid="card-parrot">
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Thermal Drone</div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2">Parrot ANAFI USA</h4>
                    <div className="text-2xl md:text-3xl font-bold mb-1">$7,000</div>
                    <p className="text-sm text-muted-foreground">Complete drone</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">320×256 thermal</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Must buy new drone</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">32 min flight time</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Made in USA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-sm text-muted-foreground">
                  * Competitor pricing based on manufacturer MSRPs as of October 2025
                </p>
              </div>
            </div>
          </section>

          <section
            id="purchase"
            className="py-20 px-6"
            data-testid="section-purchase"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3
                className="text-3xl md:text-5xl font-bold mb-6"
                data-testid="text-purchase-title"
              >
                Ready to Experience Søke?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/buy">
                  <Button
                    size="lg"
                    className="rounded-full"
                    data-testid="button-purchase-contact"
                  >
                    Contact Sales
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  data-testid="button-purchase-quote"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </section>

          <footer className="border-t border-border py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <div data-testid="text-footer-copyright">
                © 2025 Søke by THERMA. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-privacy"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-terms"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
