/**
 * app/maps/loading.tsx — Maps Page Skeleton
 *
 * Mirrors the real MapsClient layout:
 * - Full-screen map area (shimmer background)
 * - Desktop: left glassmorphism panel with title, description, and category buttons
 * - Desktop: Near Me + Recenter buttons below the panel
 * - Mobile: bottom category pill strip
 */

export default function MapsLoadingSkeleton() {
  const categories = Array.from({ length: 6 });
  const mobileCats = Array.from({ length: 5 });

  return (
    <main className="relative w-full h-screen bg-neutral-100 overflow-hidden">
      {/* ── MAP AREA ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 skeleton" />

      {/* ── DESKTOP LEFT PANEL ───────────────────────────────────────────── */}
      <div className="absolute top-28 left-6 z-10 hidden md:flex flex-col gap-4">
        {/* Glassmorphism filter card */}
        <div className="bg-white/70 rounded-2xl p-5 border border-white/50 w-72 backdrop-blur-md">
          {/* Title */}
          <div className="skeleton h-6 w-40 rounded-lg mb-2" />
          {/* Description – two lines */}
          <div className="skeleton h-3.5 w-56 rounded mb-1.5" />
          <div className="skeleton h-3.5 w-44 rounded mb-5" />

          {/* Category buttons */}
          <div className="flex flex-col gap-2.5">
            {/* "All" — active state */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-900/10">
              <div className="skeleton w-7 h-7 rounded-lg" />
              <div className="skeleton h-4 w-20 rounded" />
            </div>

            {categories.map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/60"
              >
                <div className="skeleton w-7 h-7 rounded-lg" />
                <div
                  className="skeleton h-4 rounded"
                  style={{ width: `${60 + (i % 3) * 16}px` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Near Me button */}
        <div className="skeleton h-12 w-72 rounded-xl" />

        {/* Recenter button */}
        <div className="skeleton h-11 w-72 rounded-xl" />
      </div>

      {/* ── MOBILE BOTTOM STRIP ──────────────────────────────────────────── */}
      <div className="absolute bottom-6 left-4 right-4 z-10 md:hidden flex flex-col gap-3">
        {/* Near Me button */}
        <div className="skeleton h-12 rounded-2xl" />

        {/* Category pills */}
        <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-2 flex gap-2 overflow-hidden">
          {mobileCats.map((_, i) => (
            <div
              key={i}
              className="skeleton flex-shrink-0 h-9 rounded-xl"
              style={{ width: `${64 + (i % 3) * 12}px` }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -800px 0; }
          100% { background-position:  800px 0; }
        }
        .skeleton {
          background: linear-gradient(
            90deg,
            rgba(200,200,200,0.35) 25%,
            rgba(230,230,230,0.55) 50%,
            rgba(200,200,200,0.35) 75%
          );
          background-size: 800px 100%;
          animation: shimmer 1.6s infinite linear;
        }
      `}</style>
    </main>
  );
}
