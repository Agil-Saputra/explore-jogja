"use client";

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Change Here
const PHOTOS = [
    {
    id: "photo-1",
    src: "/assets/tamansari.jpg",
    alt: "Code and development",
    rotation: 15,
    x: 75,
    y: 5,
    zIndex: 30,
  },
  {
    id: "photo-2",
    src: "/assets/districts/gunungkidul.avif",
    alt: "Technology setup",
    rotation: -15,
    x: -90,
    y: 10,
    zIndex: 10,
  },
  {
    id: "photo-3",
    src: "/assets/malioboro.jpg ",
    alt: "Design research",
    rotation: -3,
    x: -10,
    y: -15,
    zIndex: 20,
  },

];

const transition = {
  type: "spring",
  stiffness: 160,
  damping: 18,
  mass: 1,
} as const;

export function PhotoGallery() {
  return (
    <section className="relative w-full px-4 md:px-8 bg-background ">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative h-[450px] w-full flex items-center justify-center mb-8">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={`card-${photo.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: photo.rotation || 0,
                x: photo.x || 0,
                y: photo.y || 0,
                zIndex: photo.zIndex || index,
              }}
              transition={transition}
              whileHover={{
                scale: 1.05,
                y: (photo.y || 0) - 15,
                rotate: (photo.rotation || 0) * 0.8,
                zIndex: 50,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
              className={cn(
                "absolute w-44 h-44 lg:h-[450px] lg:w-[450px] rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden bg-muted"
              )}
            >
              <div className="w-full h-full relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover select-none pointer-events-none"
                  priority={index < 3}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PhotoGallery;
