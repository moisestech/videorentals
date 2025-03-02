"use client";

// REACT
import { useState } from "react";

// THIRD PARTY
import { motion, AnimatePresence } from "framer-motion";

// TYPES
import type { TV } from "@/types";

// CONSTANTS
import { MANIFESTO } from "@/constants/manifesto";

// COMPONENTS
import CustomCursor from "@/components/layout/CustomCursor";
import GradientBackground from "@/components/layout/GradientBackground";
import ContactPanel from "@/components/panels/ContactPanel";
import RentPanel from "@/components/panels/RentPanel";
import TvDetails from "@/components/panels/TvDetails";

export default function LandingContent() {
  const [rentOpen, setRentOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedTv, setSelectedTv] = useState<TV | null>(null);

  const handleRentNow = () => {
    setContactOpen(true);
    // Optionally, you might want to close the TV details panel
    // setSelectedTv(null);
  };

  return (
    <div className="relative min-h-screen text-white">
      <CustomCursor />

      {/* Site Icon */}
      <div className="fixed top-6 left-6 z-50">
        <a 
          href="https://videolab.watch" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl font-[strateen] hover:opacity-80 transition-opacity"
        >
          VL
        </a>
      </div>

      {/* Full Height Banner */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <GradientBackground />
        <div className="matrix-rain" />
        
        {/* Animated Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9],
            delay: 0.2
          }}
          className="text-[4rem] sm:text-[3rem] md:text-[8rem] lg:text-[10rem] leading-none font-bold font-[strateen] mb-12 relative z-2"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.03 } }
            }}
            className="matrix-text"
          >
            <motion.div className="flex matrix-line" data-text="VIDEO">
              {"TV305".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 200
                      }
                    }
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div className="flex matrix-line" data-text="RENTALS">
              {"RENTALS".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 200
                      }
                    }
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.h1>

        {/* Animated Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
            delay: 0.8
          }}
          className="max-w-6xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight text-center text-white/80 whitespace-pre-line relative z-2 font-[strateen] mb-[200px] px-4"
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