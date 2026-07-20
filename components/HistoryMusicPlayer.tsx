"use client";

import { useState, useRef, useEffect } from "react";
import { Music2, Play } from "lucide-react";
import { useLocale } from "@/components/LocaleContext";

export default function HistoryMusicPlayer() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Hide tooltip after user interacts with button or after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowTooltip(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999999] flex flex-col items-end gap-2">
      <audio ref={audioRef} src="/music/sabdotomo.mp3" loop />

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="
            relative flex items-center gap-2 max-w-[220px]
            bg-black backdrop-blur-md text-white
            text-xs font-medium px-4 py-3 rounded-2xl shadow-2xl
            border border-white/10
            animate-tooltip-in
          "
        >
          <Music2 size={14} className="shrink-0 text-white" />
          <span>{t("history.musicTooltip")}</span>
          {/* Arrow pointing down-right */}
          <span
            className="absolute -bottom-2 right-5 w-4 h-4 bg-gray-900/95 border-r border-b border-white/10 rotate-45"
          />
        </div>
      )}

      {/* Play / Pause Button */}
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
          <Play size={24} className="text-gray-500" />
        )}
      </button>
    </div>
  );
}
