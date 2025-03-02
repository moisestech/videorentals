"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ComingSoonTvProps {
  onClick?: () => void;
}

export default function ComingSoonTv({ onClick }: ComingSoonTvProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    onClick?.();
  };

  return (
    <>
      <motion.div
        onClick={handleClick}
        className="hologram-container w-full min-w-[300px] min-h-[300px] aspect-square rounded-2xl overflow-hidden cursor-pointer relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <div className="absolute inset-0 hologram-bg" />
        <div className="absolute inset-0 hologram-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white text-center font-[strateen] hologram-text">
            COMING
          </span>
          <span className="text-4xl font-bold text-white text-center font-[strateen] hologram-text">
            SOON
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl z-50"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-3xl font-[strateen] mb-4 text-black">Stay Tuned</h3>
              <p className="text-xl leading-relaxed text-black">
                {`Get ready for our next wave of cutting-edge displays. We're curating an exclusive collection of screens that will push the boundaries of what's possible in digital art and immersive experiences.`}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 