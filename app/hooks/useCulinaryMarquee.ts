/**
 * useCulinaryMarquee.ts
 *
 * Drives an infinite horizontal marquee for the Culinary section.
 *
 * - Runs a GSAP tween with `repeat: -1` and `modifiers` (same pattern as the
 *   Reviews marquee in PlaceDetailLayout.tsx) so the strip loops seamlessly.
 * - Listens to the window's `wheel` event to detect scroll velocity and
 *   temporarily boosts the playback rate, then eases it back to 1×.
 * - Works on all breakpoints (no media-query guard needed).
 *
 * @param stripRef  Ref to the element that contains two copies of the images.
 */

import { useEffect, RefObject } from "react";
import gsap from "gsap";

const BASE_DURATION = 30;          // seconds to scroll one full copy-set
const MAX_SPEED_MULTIPLIER = 6;    // max ×speed when scrolling fast
const SPEED_DECAY = 0.96;          // multiplicative decay per animation frame

export function useCulinaryMarquee(
  stripRef: RefObject<HTMLElement | null>
): void {
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    // Duplicated children → totalWidth = scrollWidth / 2
    const totalWidth = el.scrollWidth / 2;
    if (totalWidth <= 0) return;

    // ── Core marquee tween ─────────────────────────────────────────
    const tween = gsap.to(el, {
      x: -totalWidth,
      duration: BASE_DURATION,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => {
          return parseFloat(String(x)) % totalWidth;
        }),
      },
    });

    // ── Scroll-velocity boost ──────────────────────────────────────
    let currentMultiplier = 1;
    let rafId: number | null = null;

    function decayLoop() {
      currentMultiplier = Math.max(1, currentMultiplier * SPEED_DECAY);
      tween.timeScale(currentMultiplier);
      if (currentMultiplier > 1.005) {
        rafId = requestAnimationFrame(decayLoop);
      } else {
        currentMultiplier = 1;
        tween.timeScale(1);
        rafId = null;
      }
    }

    function handleWheel(e: WheelEvent) {
      const delta = Math.abs(e.deltaY) + Math.abs(e.deltaX);
      const normalized = Math.min(delta, 300) / 300;
      const targetMultiplier = 1 + normalized * (MAX_SPEED_MULTIPLIER - 1);
      currentMultiplier = Math.max(currentMultiplier, targetMultiplier);
      tween.timeScale(currentMultiplier);
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(decayLoop);
    }

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      tween.kill();
      window.removeEventListener("wheel", handleWheel);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [stripRef]);
}
