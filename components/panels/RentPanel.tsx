"use client";

import type { TV } from "@/types";

// THIRD PARTY
import { motion } from "framer-motion";

// CONSTANTS
import { TVS } from "@/constants/tvs";

// COMPONENTS
import TvIcon from "../tv/TvIcon";
import ComingSoonTv from "../tv/ComingSoonTv";

interface RentPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTv: (tv: TV) => void;
}

export default function RentPanel({ isOpen, onClose, onSelectTv }: RentPanelProps) {
  if (!isOpen) return null;

  return (
    <motion.div 
      key="rent-panel"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "100vh", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="fixed inset-0 bg-[var(--color-bg1)] text-white overflow-hidden z-50"
    >
      <div className="relative h-full">
        <div className="gradient-bg absolute inset-0" />
        <div className="matrix-rain" />

        {/* Logo */}
        <div className="absolute top-6 left-6 z-20">
          <a 
            href="https://videolab.watch" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl font-[strateen] hover:opacity-80 transition-opacity"
          >
            TV305
          </a>
        </div>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-20"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        <div className="p-6 border-b border-white/10 relative z-10 text-center">
          <h2 className="text-4xl font-[strateen] text-white">Available TVs</h2>
        </div>

        <div className="p-6 overflow-y-auto h-[calc(100vh-88px)] relative z-10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TVS.slice(0, -1).map((tv) => (
              <div key={tv.id} className="w-full">
                <TvIcon 
                  heroImage={tv.images[0]?.url}
                  subHeroImage={tv.images[1]?.url}
                  name={tv.name}
                  price={tv.price}
                  onClick={() => onSelectTv(tv)} 
                />
              </div>
            ))}
            <div className="w-full">
              <ComingSoonTv />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 