"use client";

import { motion } from "framer-motion";

interface AnimatedTitleProps {
  className?: string;
}

export default function AnimatedTitle({ className = "" }: AnimatedTitleProps) {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: 0.2
      }}
      className={`text-[4rem] sm:text-[3rem] md:text-[8rem] lg:text-[10rem] leading-none font-bold font-[strateen] relative z-2 ${className}`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.03 } }
        }}
        className="matrix-text"
      >
        <motion.div className="flex matrix-line" data-text="TV305">
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
  );
} 