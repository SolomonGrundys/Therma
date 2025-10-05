import { Box } from "lucide-react";

interface Model3DProps {
  className?: string;
}

export default function Model3D({ className = "" }: Model3DProps) {
  return (
    <div
      className={`relative ${className} flex items-center justify-center overflow-hidden`}
      data-testid="canvas-3d-model"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      {/* 3D Model placeholder with glow effect */}
      <div className="relative text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 mb-6 animate-pulse">
          <Box className="h-16 w-16 md:h-20 md:w-20 text-primary/30" />
        </div>
        <div className="text-muted-foreground text-sm font-medium tracking-wide">
          3D Model Ready
        </div>
      </div>
    </div>
  );
}
