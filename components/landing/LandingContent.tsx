"use client";

import type { TV } from "@/types";

// REACT
import { useState } from "react";

// THIRD PARTY
import { motion, AnimatePresence } from "framer-motion";


// CONSTANTS
import { MANIFESTO } from "@/constants/manifesto";

// HOOKS
import { useScrollPosition } from "@/hooks/useScrollPosition";

// COMPONENTS
import CustomCursor from "@/components/layout/CustomCursor";
import GradientBackground from "@/components/layout/GradientBackground";
import ContactPanel from "@/components/panels/ContactPanel";
import RentPanel from "@/components/panels/RentPanel";
import TvDetails from "@/components/panels/TvDetails";
import AnimatedTitle from "@/components/layout/AnimatedTitle";

// ICONS
import { Tv } from "lucide-react";

export default function LandingContent() {
  const [rentOpen, setRentOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedTv, setSelectedTv] = useState<TV | null>(null);
  const scrollY = useScrollPosition();

  // Determine if we should show white background
  const showWhiteBackground = rentOpen || scrollY > 100; // Adjust 100 to your preferred scroll threshold

  const handleRentNow = () => {
    setContactOpen(true);
    // Optionally, you might want to close the TV details panel
    // setSelectedTv(null);
  };

  return (
    <div className="relative min-h-screen text-white">
      <CustomCursor />

      {/* Site Icon */}
      <motion.div 
        className="fixed top-6 left-6 z-50"
        animate={{ 
          backgroundColor: showWhiteBackground ? 'white' : 'transparent',
          padding: showWhiteBackground ? '0.5rem 1rem' : '0',
          borderRadius: showWhiteBackground ? '0.5rem' : '0'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Desktop Text */}
        <a 
          href="https://tv305.miami" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`hidden sm:block text-2xl font-[strateen] hover:opacity-80 transition-opacity ${
            showWhiteBackground ? 'text-black' : 'text-white'
          }`}
        >
          TV305
        </a>
        {/* Mobile Icon */}
        <div className="block sm:hidden">
          <Tv 
            size={24} 
            className={showWhiteBackground ? 'text-black' : 'text-white'} 
          />
        </div>
      </motion.div>

      {/* Full Height Banner */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <GradientBackground />
        <div className="matrix-rain" />
        
        <AnimatedTitle className="mb-12 relative z-2" />

        {/* Animated Manifesto with responsive fonts */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
            delay: 0.8
          }}
          className="max-w-6xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-relaxed text-center text-white/90 whitespace-pre-line relative z-2 font-[Inter] sm:font-[strateen] font-light tracking-wide mb-[200px] px-4"
        >
          {MANIFESTO}
        </motion.p>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 flex flex-col items-center z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <AnimatePresence mode="wait">
            {rentOpen && (
              <RentPanel 
                key="rent-panel"
                isOpen={rentOpen}
                onClose={() => setRentOpen(false)}
                onSelectTv={setSelectedTv}
              />
            )}
            {selectedTv && (
              <TvDetails 
                key="tv-details"
                tv={selectedTv}
                onClose={() => setSelectedTv(null)}
                onRentNow={handleRentNow}
              />
            )}
            {contactOpen && (
              <ContactPanel 
                key="contact-panel"
                isOpen={contactOpen}
                onClose={() => setContactOpen(false)}
              />
            )}
          </AnimatePresence>

          {/* Animated Buttons */}
          <motion.button 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              duration: 0.5,
              delay: 1.2,
              bounce: 0.3
            }}
            onClick={() => setRentOpen(!rentOpen)}
            className="w-full max-w-7xl mx-auto py-4 sm:py-6 text-2xl sm:text-3xl md:text-4xl font-bold bg-white text-black hover:bg-gray-100 transition-colors font-[strateen]"
          >
            RENT
          </motion.button>
          
          <motion.button 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              duration: 0.5,
              delay: 1.4,
              bounce: 0.3
            }}
            className="w-full max-w-7xl mx-auto py-4 sm:py-6 text-2xl sm:text-3xl md:text-4xl font-bold bg-black text-white border-t border-white hover:bg-gray-900 transition-colors font-[strateen]"
            onClick={() => setContactOpen(true)}
          >
            CONTACT
          </motion.button>
        </div>
      </div>
    </div>
  );
} 