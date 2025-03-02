"use client";

import type { TV } from "@/types";

// REACT & NEXT
import { useState } from "react";
import Image from "next/image";

// THIRD PARTY
import { motion } from "framer-motion";

// UTILS
import { getValidImages } from "@/utils/validation";

// COMPONENTS
import TvDetailCarousel from "@/components/tv/TvDetailCarousel";

// STYLE COMPONENTS
import { Button } from "@/components/ui/button";

// ICONS
import { Share2 } from "lucide-react";


interface TvDetailsProps {
  tv: TV | null;
  onClose?: () => void;
  onRentNow?: () => void;
  isPage?: boolean;
}

export default function TvDetails({ 
  tv, 
  onClose = () => {}, 
  onRentNow = () => {}, 
  isPage = false 
}: TvDetailsProps) {
  if (!tv) return null;

  const validImages = getValidImages(tv.images);
  const validAccessoryImages = tv.accessories
    .flatMap(acc => getValidImages(acc.images))
    .filter(Boolean);

  const allValidImages = [...validImages, ...validAccessoryImages];

  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/tv/${tv.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: tv.name,
          text: tv.technicalName,
          url: url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      key="tv-details"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className={`${isPage ? '' : 'fixed'} inset-0 bg-white text-black overflow-hidden z-50`}
    >
      <div className="relative h-full">
        {!isPage && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}

        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-[strateen]">{tv.name}</h2>
            <p className="text-xl text-gray-600 mt-2">{tv.technicalName}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            className="relative"
          >
            <Share2 className="h-5 w-5" />
            {copied && (
              <span className="absolute -bottom-8 whitespace-nowrap text-sm">
                URL Copied!
              </span>
            )}
          </Button>
        </div>

        <div className="p-6 pb-32 h-[calc(100vh-88px)] overflow-y-auto">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Carousel Section */}
            <div className="w-full lg:col-span-3">
              <TvDetailCarousel images={allValidImages} />
            </div>

            {/* TV Details Section - Full width on mobile, 2/5 on desktop */}
            <div className="w-full lg:col-span-2 space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Specifications</h3>
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="font-medium text-gray-500">Screen Size</dt>
                    <dd className="text-gray-900">{tv.specs.screenSize}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Resolution</dt>
                    <dd className="text-gray-900">{tv.specs.resolution}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Display</dt>
                    <dd className="text-gray-900">{tv.specs.displayTechnology}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Refresh Rate</dt>
                    <dd className="text-gray-900">{tv.specs.refreshRate}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="font-medium text-gray-500">Dimensions</dt>
                    <dd className="text-gray-900">
                      {tv.specs.dimensions.width} × {tv.specs.dimensions.height} × {tv.specs.dimensions.depth}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Features</h3>
                <ul className="grid grid-cols-1 gap-2 text-gray-900">
                  {tv.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200 z-20">
          <div className="max-w-[1400px] mx-auto">
            <Button 
              onClick={onRentNow}
              className="w-full py-8 text-2xl font-[strateen] bg-black hover:bg-gray-900"
              size="lg"
            >
              RENT NOW - {tv.price}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 