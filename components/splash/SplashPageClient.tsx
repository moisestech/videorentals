"use client";

import AnimatedTitle from "@/components/layout/AnimatedTitle";
import CustomCursor from "@/components/layout/CustomCursor";
import GradientBackground from "@/components/layout/GradientBackground";

export default function SplashPageClient() {
  return (
    <div className="relative min-h-screen text-white">
      <CustomCursor />

      {/* Full Height Container */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <GradientBackground />
        <div className="matrix-rain" />
        
        {/* Title with z-index to appear above effects */}
        <div className="relative z-10">
          <AnimatedTitle />
        </div>
      </div>
    </div>
  );
} 