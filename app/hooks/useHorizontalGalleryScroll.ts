/**
 * useHorizontalGalleryScroll.ts
 *
 * GALLERY LENGTH DECISION:
 * We're using 5 images (3 originals + 2 extras from /assets) at lg:w-[38vw] each.
 * At ~38vw per card on a 1440px screen, strip ≈ 5×547px = 2735px vs viewport 1440px,
 * giving scrollLength ≈ 1295px — a generous, satisfying horizontal travel distance.
 */

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Attaches a GSAP pin + horizontal-scroll ScrollTrigger to the given wrapper/strip pair.
 *
 * - wrapperRef: the element that gets pinned (trigger element).
 * - stripRef:   the element that gets translated on the X axis.
 *
 * The effect only runs on:
 *   (min-width: 1024px) AND (prefers-reduced-motion: no-preference)
 *
 * Below that breakpoint (or when reduced-motion is active), no ScrollTrigger is
 * created — the component relies on native CSS overflow-x / snap scrolling instead.
 */
export function useHorizontalGalleryScroll(
  wrapperRef: RefObject<HTMLElement | null>,
  stripRef: RefObject<HTMLElement | null>
): void {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const strip = stripRef.current;
    if (!wrapper || !strip) return;

    // matchMedia handles both the lg breakpoint AND reduced-motion preference.
    // When conditions don't match, GSAP simply doesn't run the inner callback,
    // so no ScrollTrigger is ever created for those environments.
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        /**
         * PIN LENGTH MATH:
         *   pinWrapWidth  = strip.scrollWidth  (total width of all cards + gaps)
         *   scrollLength  = pinWrapWidth - window.innerWidth
         *                 = how many px to translate so the last card's right edge
         *                   aligns with the viewport's right edge.
         *
         * We pass `end: () => "+=" + strip.scrollWidth` so GSAP keeps the section
         * pinned for as long as there are pixels of strip to reveal.
         * invalidateOnRefresh: true re-runs these functions on every ScrollTrigger
         * refresh (window resize, font load, etc.), so the math stays accurate.
         */
        let scrollLength = 0;

        function refresh() {
          // Re-measure on each refreshInit event (triggered by resize / layout shift)
          scrollLength = strip!.scrollWidth - window.innerWidth;
        }

        refresh(); // Initial measurement

        // Re-measure before every ScrollTrigger refresh cycle
        ScrollTrigger.addEventListener("refreshInit", refresh);

        gsap.to(strip, {
          // Translate the strip left by exactly scrollLength px
          x: () => -scrollLength,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            pin: true, // Lock the wrapper in place during scroll
            scrub: true, // Tie animation progress directly to scroll position
            start: "top top", // Pin starts when wrapper top hits viewport top
            // Keep pinned for the full strip width of scroll distance
            end: () => "+=" + strip!.scrollWidth,
            invalidateOnRefresh: true, // Re-run start/end/x() after any refresh
          },
        });

        // Cleanup returned from matchMedia context — GSAP calls this
        // automatically when the media query no longer matches OR on unmount.
        return () => {
          ScrollTrigger.removeEventListener("refreshInit", refresh);
        };
      }
    );

    // Revert all matchMedia contexts on component unmount.
    // This kills all ScrollTriggers created inside, preventing stale triggers
    // when Next.js client-side navigates away from this page.
    return () => {
      mm.revert();
    };
  }, [wrapperRef, stripRef]);
}
