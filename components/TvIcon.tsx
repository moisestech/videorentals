"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TvIconProps {
  image: string;
  name: string;
  price: string;
  onClick?: () => void;
}

export default function TvIcon({ image, name, price, onClick }: TvIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative aspect-square rounded-[35px] overflow-hidden bg-gray-200 cursor-pointer"
      onClick={onClick}
      style={{
        boxShadow: `
          inset 0 7em 10em -5em rgba(255,255,255,0.6),
          0 0.3em 0.5em -0.2em rgba(100,100,100,1),
          0 1em 2em -0.75em rgba(100,100,100,0.75),
          0 1em 3em -0.5em rgba(100,100,100,0.5),
          0 3em 3em -0.25em rgba(100,100,100,0.2)
        `
      }}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-bold">{name}</p>
        <p className="text-white/80 text-xs">{price}</p>
      </div>
    </motion.div>
  );
} 