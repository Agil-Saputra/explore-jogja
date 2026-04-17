"use client";

import { useState, useEffect, useRef } from "react";
import { VolumeX } from "lucide-react";

export default function HistoryMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt auto-play when component mounts
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; // Set volume to 50%
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Auto-play was prevented by browser
            console.log("Auto-play prevented by browser. User interaction needed.");
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999999] flex flex-col items-center">
      <audio 
        ref={audioRef} 
        src="/music/sabdotomo.mp3" 
        loop 
      />
      
      <button 
        onClick={togglePlay}
        className="relative group flex items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-full text-gray-800 hover:scale-110 hover:shadow-2xl transition-all duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-5">
            <span className="w-1 bg-gray-800 rounded-full h-2/5 animate-music-bar-1"></span>
            <span className="w-1 bg-gray-800 rounded-full h-full animate-music-bar-2"></span>
            <span className="w-1 bg-gray-800 rounded-full h-3/5 animate-music-bar-3"></span>
            <span className="w-1 bg-gray-800 rounded-full h-4/5 animate-music-bar-4"></span>
          </div>
        ) : (
          <VolumeX size={24} className="text-gray-500" />
        )}
      </button>
    </div>
  );
}
