"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// 1. Sliding Image Reveal (Horizontal from center)
export function SlidingImageReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // The overlay is initially covering the image.
    // It shrinks from scaleX: 1 down to scaleX: 0 from the center, revealing the image
    gsap.fromTo(overlayRef.current,
      { scaleX: 1, transformOrigin: "left" },
      {
        scaleX: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
      {/* Overlay div directly on top of the image */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 z-10 bg-white pointer-events-none"
      />
    </div>
  );
}

// 2. Sliding SVG Reveal (Vertical)
export function SlidingSvgReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ScaleY: 1 to 0 from bottom means it reveals from the top down. 
    // This perfectly satisfies the vertical sliding door reveal request.
    gsap.fromTo(overlayRef.current,
      { scaleY: 1, transformOrigin: "bottom" },
      {
        scaleY: 0,
        duration: 1.2,
        delay: 0.2, // slight delay for coordination
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {children}
      {/* Overlay div directly on top of the SVG */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 z-10 bg-white pointer-events-none"
      />
    </div>
  );
}

// 3. Word-by-Word Reveal
export function WordReveal({ text, className = "" }: { text: string, className?: string }) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const words = textRef.current?.querySelectorAll('.word');
    if (words) {
      gsap.fromTo(words,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.5)", // very smooth and bouncy
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
          }
        }
      );
    }
  }, { scope: textRef });

  return (
    <p ref={textRef} className={`flex flex-wrap ${className}`}>
      {text.split(/\s+/).map((word, idx) => (
        <span key={idx} className="word inline-block opacity-0 mr-[0.3em] last:mr-0 drop-shadow-sm">{word}</span>
      ))}
    </p>
  );
}

// 4. Simple Opacity Reveal
export function SimpleOpacityReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 3 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: textRef });

  return (
    <p ref={textRef} className={className}>
      {children}
    </p>
  );
}
