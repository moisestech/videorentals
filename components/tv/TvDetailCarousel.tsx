"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';

interface TvDetailCarouselProps {
  images: Array<{ id: number; url: string; alt: string; }>;
}

export default function TvDetailCarousel({ images }: TvDetailCarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel({ 
    skipSnaps: false,
    containScroll: 'keepSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    
    console.log('Selected index:', embla.selectedScrollSnap());
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    console.log('Setting up carousel');
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);

    // Initial state
    onSelect();

    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <div ref={viewportRef} className="overflow-hidden">
          <div className="flex">
            {images.map((image, i) => (
              <div 
                key={`${image.id}-${i}`} 
                className="flex-[0_0_100%] min-w-0 relative"
              >
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-white">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1028px) 100vw, 60vw"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md disabled:opacity-50"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md disabled:opacity-50"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto py-2 px-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={`thumb-${images[index].id}-${index}`}
            onClick={() => scrollTo(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
              selectedIndex === index 
                ? 'ring-2 ring-black ring-offset-2' 
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={images[index].url}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-contain bg-white p-2"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 