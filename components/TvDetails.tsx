import { motion } from "framer-motion";
import Image from "next/image";
import type { TV } from "@/types";

interface TvDetailsProps {
  tv: TV | null;
  onClose: () => void;
}

export default function TvDetails({ tv, onClose }: TvDetailsProps) {
  if (!tv) return null;

  return (
    <motion.div
      key="tv-details"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="fixed inset-0 bg-white text-black overflow-hidden z-50"
    >
      <div className="relative h-full">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
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

        <div className="p-6 border-b border-gray-200">
          <h2 className="text-4xl font-[strateen]">{tv.name}</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 p-6 overflow-y-auto h-[calc(100vh-88px)]">
          {Array(6).fill(tv).map((tv, i) => (
            <div key={i} className="aspect-video relative rounded-2xl overflow-hidden">
              <Image
                src={tv.image}
                alt={tv.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 