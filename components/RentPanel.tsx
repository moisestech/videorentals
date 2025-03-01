import { motion } from "framer-motion";
import { TVS } from "@/constants/content";
import TvIcon from "./TvIcon";
import type { TV } from "@/types";

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
          <h2 className="text-4xl font-[strateen]">Available TVs</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 overflow-y-auto h-[calc(100vh-88px)]">
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TVS.map((tv) => (
              <div key={tv.id} className="w-full max-w-[320px] mx-auto">
                <TvIcon {...tv} onClick={() => onSelectTv(tv)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 