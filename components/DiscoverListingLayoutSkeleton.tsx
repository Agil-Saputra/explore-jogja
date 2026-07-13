/**
 * components/DiscoverListingLayoutSkeleton.tsx
 *
 * Skeleton that precisely mirrors DiscoverListingLayout:
 *   - Header: back link bone, h1 bone, subtitle bone, 3 filter-pill bones
 *   - Grid: 8 aspect-[3/4] card skeletons with inner title/street/tag bones
 *
 * Used as the Suspense / loading.tsx fallback for all discover category pages.
 */

const shimmerCss = `
  @keyframes dl-shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position:  200% 0; }
  }
  .dl-shimmer {
    background: linear-gradient(90deg, #e2e5ea 25%, #f0f2f5 50%, #e2e5ea 75%);
    background-size: 200% 100%;
    animation: dl-shimmer 1.5s ease-in-out infinite;
  }
  .dl-shimmer-light {
    background: linear-gradient(90deg,
      rgba(255,255,255,0.18) 25%,
      rgba(255,255,255,0.35) 50%,
      rgba(255,255,255,0.18) 75%
    );
    background-size: 200% 100%;
    animation: dl-shimmer 1.5s ease-in-out infinite;
  }
`;

function Bone({
  width = "100%",
  height,
  radius = 8,
  delay = 0,
  light = false,
}: {
  width?: string | number;
  height: string | number;
  radius?: number | string;
  delay?: number;
  light?: boolean;
}) {
  return (
    <div
      className={light ? "dl-shimmer-light" : "dl-shimmer"}
      style={{
        width,
        height,
        borderRadius: radius,
        animationDelay: `${delay}ms`,
        flexShrink: 0,
      }}
    />
  );
}

function SkeletonCard({ index }: { index: number }) {
  const d = index * 70;
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        aspectRatio: "3 / 4",
        background: "#d1d5db",
      }}
    >
      {/* Main image shimmer */}
      <div
        className="dl-shimmer"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 0,
          animationDelay: `${d}ms`,
        }}
      />

      {/* Gradient overlay — mirrors real card */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(148, 148, 148, 0.6) 0%, rgba(170, 170, 170, 0.1) 55%, transparent 100%)",
        }}
      />

      {/* Rating badge placeholder */}
      <div style={{ position: "absolute", top: 12, right: 12 }}>
        <Bone width={52} height={22} radius={999} delay={d + 40} light />
      </div>

      {/* Bottom content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: 9,
        }}
      >
        <Bone width="78%" height={18} radius={6} delay={d} light />
        <Bone width="52%" height={12} radius={5} delay={d + 40} light />
        <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
          <Bone width={62} height={22} radius={999} delay={d + 80} light />
          <Bone width={50} height={22} radius={999} delay={d + 120} light />
        </div>
      </div>
    </div>
  );
}

export default function DiscoverListingLayoutSkeleton() {
  return (
    <main style={{ minHeight: "100dvh", background: "#faf9f6" }}>
      <style>{shimmerCss}</style>

      {/* ── Header ───────────────────────────── */}
      <section
        style={{
          paddingTop: "clamp(7rem, 10vw, 9rem)",
          paddingLeft: "clamp(1.5rem, 5vw, 3.5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 3.5rem)",
        }}
      >
        {/* Back link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
          }}
        >
          <Bone width={18} height={18} radius={4} />
          <Bone width={130} height={14} radius={6} delay={40} />
        </div>

        {/* h1 */}
        <Bone width="clamp(140px, 28%, 260px)" height={52} radius={10} />

        {/* Subtitle */}
        <div style={{ marginTop: 14, marginBottom: 36 }}>
          <Bone
            width="clamp(220px, 48%, 460px)"
            height={14}
            radius={6}
            delay={60}
          />
        </div>

        {/* Filter pills */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          <Bone width={112} height={40} radius={10} />
          <Bone width={112} height={40} radius={10} delay={40} />
          <Bone width={112} height={40} radius={10} delay={80} />
        </div>
      </section>

      {/* ── Cards grid ───────────────────────── */}
      <section
        style={{
          paddingLeft: "clamp(1.5rem, 5vw, 3.5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 3.5rem)",
          paddingBottom: "6rem",
        }}
      >
        {/*
          Mirror: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5
          Using auto-fill so it adapts without media queries in plain CSS.
        */}
        <div
          className="grid-cols-4 grid gap-6"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
