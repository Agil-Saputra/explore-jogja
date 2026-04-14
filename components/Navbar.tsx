"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import ChatModal from "./ChatModal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Languages } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/plan-your-visit", label: "Plan Your Visit" },
  { href: "/events", label: "Events" },
  { href: "/history", label: "History" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);

  // Refs for the sliding pill (inline nav)
  const inlineNavRef = useRef<HTMLDivElement>(null);
  const inlinePillRef = useRef<HTMLDivElement>(null);
  const inlineLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Refs for the sliding pill (overlay menu)
  const overlayNavRef = useRef<HTMLDivElement>(null);
  const overlayPillRef = useRef<HTMLDivElement>(null);
  const overlayLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Track if pill has been initially positioned
  const inlinePillInitialized = useRef(false);
  const overlayPillInitialized = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setIsCollapsed(false);
      } else if (currentScrollY > lastScrollY.current) {
        setIsCollapsed(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsCollapsed(false);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    if (!menuRef.current) return;

    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (isCollapsed) {
      gsap.to(menuRef.current, {
        width: 0,
        opacity: 0,
        marginLeft: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(menuRef.current, {
        width: "auto",
        opacity: 1,
        marginLeft: 32,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isCollapsed]);

  // Animate the inline nav pill
  const animateInlinePill = useCallback(() => {
    const activeIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);
    const activeLink = activeIndex >= 0 ? inlineLinkRefs.current[activeIndex] : null;
    const pill = inlinePillRef.current;
    const container = inlineNavRef.current;

    if (!activeLink || !pill || !container) {
      if (pill) gsap.to(pill, { opacity: 0, duration: 0.3 });
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const targetX = linkRect.left - containerRect.left;
    const targetWidth = linkRect.width;
    const targetHeight = linkRect.height;

    if (!inlinePillInitialized.current) {
      // Set instantly on first render
      gsap.set(pill, {
        x: targetX,
        width: targetWidth,
        height: targetHeight,
        opacity: 1,
      });
      inlinePillInitialized.current = true;
    } else {
      gsap.to(pill, {
        x: targetX,
        width: targetWidth,
        height: targetHeight,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [pathname]);

  // Animate the overlay nav pill
  const animateOverlayPill = useCallback(() => {
    const activeIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);
    const activeLink = activeIndex >= 0 ? overlayLinkRefs.current[activeIndex] : null;
    const pill = overlayPillRef.current;
    const container = overlayNavRef.current;

    if (!activeLink || !pill || !container) {
      if (pill) gsap.to(pill, { opacity: 0, duration: 0.3 });
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const targetY = linkRect.top - containerRect.top;
    const targetWidth = linkRect.width;
    const targetHeight = linkRect.height;

    if (!overlayPillInitialized.current) {
      gsap.set(pill, {
        y: targetY,
        width: targetWidth,
        height: targetHeight,
        opacity: 1,
      });
      overlayPillInitialized.current = true;
    } else {
      gsap.to(pill, {
        y: targetY,
        width: targetWidth,
        height: targetHeight,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [pathname]);

  // Run inline pill animation on pathname change
  useEffect(() => {
    // Small delay to ensure layout is settled after navigation
    const timer = setTimeout(animateInlinePill, 50);
    return () => clearTimeout(timer);
  }, [pathname, animateInlinePill]);

  // Run overlay pill animation when overlay opens or pathname changes
  useEffect(() => {
    if (isMenuOpen) {
      overlayPillInitialized.current = false;
      const timer = setTimeout(animateOverlayPill, 100);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen, pathname, animateOverlayPill]);

  // Re-position pills on window resize
  useEffect(() => {
    const handleResize = () => {
      animateInlinePill();
      if (isMenuOpen) animateOverlayPill();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [animateInlinePill, animateOverlayPill, isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 font-sans w-full">
        <nav className="flex items-center bg-white/50 backdrop-blur-2xl rounded-full px-4 md:px-6 py-2 md:py-2.5 shadow-sm border border-white/20">
          <button
            onClick={() => setIsMenuOpen(true)}
            onMouseEnter={() => setIsCollapsed(false)}
            onMouseLeave={() => setIsCollapsed(true)}
            className="flex items-center gap-2.5 text-gray-800 hover:text-black transition-colors font-medium text-[15px] whitespace-nowrap "
          >
            <svg width="18" height="18" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="black" />
              <circle cx="5" cy="26" r="5" fill="black" />
              <circle cx="30" cy="5" r="5" fill="black" />
              <circle cx="30" cy="26" r="5" fill="black" />
            </svg>
            Menu
          </button>

          <div
            ref={(el) => {
              menuRef.current = el;
              inlineNavRef.current = el;
            }}
            className="hidden md:flex items-center overflow-hidden gap-1 ml-8 relative"
          >
            {/* Sliding pill background */}
            <div
              ref={inlinePillRef}
              className="absolute top-0 left-0 bg-[#2C2C2C] rounded-full opacity-0 pointer-events-none"
              style={{ zIndex: 0 }}
            />

            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => { inlineLinkRefs.current[index] = el; }}
                className={`relative z-10 transition-colors duration-300 font-medium text-[15px] whitespace-nowrap rounded-full px-3.5 py-1.5 ${pathname === item.href
                    ? "text-white"
                    : "text-gray-800 hover:bg-black/5 hover:text-black"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div
          className={`hidden md:flex items-center gap-3 transition-opacity duration-500 ease-in-out ${isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
            }`}
        >
          {/* Map Pill */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="flex items-center gap-2.5 bg-white/70 backdrop-blur-md rounded-full px-5 py-2.5 shadow-sm border border-white/20 text-gray-800 hover:text-black hover:bg-white/80 transition-all font-medium text-[15px]"
          >
            <span>Ask Anything</span>
            <MessageCircle size={18} />
          </button>

          {/* Language Selector Pill */}
          <button className="flex items-center gap-2 bg-white/70 backdrop-blur-md rounded-full pl-5 pr-4 py-2.5 shadow-sm border border-white/20 text-gray-800 hover:text-black hover:bg-white/80 transition-all font-medium text-[15px]">
            <span>Indonesia</span>
            <Languages />
          </button>
        </div>
      </header>

      {/* Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-45 transition-opacity duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Dropdown Menu Panel */}
      <div
        className={`fixed top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 z-50 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
            : "opacity-0 pointer-events-none -translate-y-4 scale-[0.97]"
          }`}
        style={{ maxHeight: "calc(100vh - 2rem)" }}
      >
        {/* Panel Header — close button at top right */}
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 pb-2">
          <span className="text-[13px] font-semibold uppercase tracking-widest text-gray-400">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-gray-600 hover:text-gray-900"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div ref={overlayNavRef} className="flex flex-col px-6 md:px-10 py-6 md:py-8 relative">
          {/* Sliding pill background for overlay */}
          <div
            ref={overlayPillRef}
            className="absolute bg-black/[0.04] rounded-xl opacity-0 pointer-events-none"
            style={{ zIndex: 0 }}
          />

          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => { overlayLinkRefs.current[index] = el; }}
              onClick={() => setIsMenuOpen(false)}
              className={`relative z-10 text-2xl md:text-[2rem] font-semibold transition-colors py-3 md:py-4 rounded-xl px-3 -mx-3 ${pathname === item.href
                  ? "text-black"
                  : "text-gray-800 hover:text-gray-500"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Panel Footer */}
        <div className="mt-auto border-t border-gray-100 px-6 md:px-10 py-5 md:py-6">
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 text-[15px]">Visit Yogyakarta</h3>
            <p className="text-gray-500 text-[14px] mt-0.5">info@visityogyakarta.id</p>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => setIsChatOpen(true), 300);
              }}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium text-[14px]"
            >
              <span>Ask Anything</span>
              <MessageCircle size={16} strokeWidth={1.5} />
            </button>

            <button className="flex items-center gap-1.5 font-medium text-[14px] text-gray-700 hover:text-gray-900 transition-colors">
              <span>Indonesia</span>
              <Languages size={16} />
            </button>
          </div>
        </div>
      </div>
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
