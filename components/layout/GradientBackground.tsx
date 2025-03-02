"use client";

import { useEffect, useRef } from 'react';

export default function GradientBackground() {
  const interBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let animationFrame: number;

    function move() {
      if (!interBubbleRef.current) return;
      
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      animationFrame = requestAnimationFrame(move);
    }

    function handleMouseMove(event: MouseEvent) {
      tgX = event.clientX;
      tgY = event.clientY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(move);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 gradient-bg -z-10">
      <div 
        className="gradients-container" 
        style={{ "--circle-size": "160%" } as React.CSSProperties}
      >
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div ref={interBubbleRef} className="interactive"></div>
      </div>
      <svg style={{ visibility: "hidden", position: "absolute" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
} 