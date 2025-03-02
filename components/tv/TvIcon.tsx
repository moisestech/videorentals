"use client";

import { useState } from "react";
import Image from "next/image";

// THIRD PARTY
import { motion, AnimatePresence } from "framer-motion";

// UTILS
import { isValidImageData } from "@/utils/validation";

interface TvIconProps {
  heroImage?: string;
  subHeroImage?: string;
  name: string;
  price: string;
  onClick?: () => void;
}

export default function TvIcon({ heroImage, subHeroImage, name, price, onClick }: TvIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <motion.div
        onClick={onClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full min-w-[300px] min-h-[300px] aspect-square rounded-2xl overflow-hidden cursor-pointer relative bg-white"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <AnimatePresence mode="wait">
          {isHovered && subHeroImage ? (
            <motion.div
              key="subhero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={subHeroImage}
                alt={`${name} alternate view`}
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ) : (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt={name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <span className="text-gray-500">No image</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <div className="p-4 rounded-xl">
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-white/80">{price}</p>
      </div>
    </div>
  );
} 