import { useState } from "react";
import Header from "@/components/Header";
import Model3D from "@/components/Model3D";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Buy() {
  const [selectedColor, setSelectedColor] = useState("black");

  const colors = [
    { name: "Black", value: "black", class: "bg-black" },
    { name: "Silver", value: "silver", class: "bg-gray-400" },
    { name: "White", value: "white", class: "bg-white border border-border" },
  ];

  const price = "$849.99";

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Product Display */}
          <div className="order-2 md:order-1">
            <div className="sticky top-32">
              <Model3D className="w-full h-[500px] rounded-3xl" />
            </div>
          </div>

          {/* Product Information */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                data-testid="text-buy-title"
              >
                Søke Thermal Camera
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional thermal imaging attachment for your existing drone
              </p>
            </div>

            {/* Price */}
            <div className="bg-card border border-border rounded-3xl p-6">
              <p className="text-sm text-muted-foreground mb-2">One-time purchase</p>
              <p
                className="text-4xl font-bold"
                data-testid="text-price"
              >
                {price}
              </p>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Choose Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl border-2 transition-all hover-elevate ${
                      selectedColor === color.value
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card"
                    }`}
                    data-testid={`button-color-${color.value}`}
                  >
                    <div className={`w-8 h-8 rounded-full ${color.class}`} />
                    <span className="text-sm font-medium">{color.name}</span>
                    {selectedColor === color.value && (
                      <Check className="h-4 w-4 text-primary ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-muted/30 rounded-3xl p-6 space-y-3">
              <h3 className="font-semibold mb-3">What's Included</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>256×192 thermal imaging sensor</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>Universal drone mounting system</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>Real-time thermal data streaming</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>Lifetime warranty & support</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full rounded-full text-lg h-14"
              data-testid="button-purchase"
            >
              Purchase Now
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
