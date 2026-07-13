import React from "react";

/**
 * components/PlaceDetailLayoutSkeleton.tsx
 *
 * Skeleton that mirrors PlaceDetailLayout:
 *   - Back link bone
 *   - Left column: Title bone, rating bone, contact info bones, description bones
 *   - Right column: Large main image bone
 *   - Gallery row bones
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
`;

function Bone({
  width = "100%",
  height,
  radius = 8,
  delay = 0,
}: {
  width?: string | number;
  height: string | number;
  radius?: number | string;
  delay?: number;
}) {
  return (
    <div
      className="dl-shimmer"
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

export default function PlaceDetailLayoutSkeleton() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <style>{shimmerCss}</style>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="pt-28 md:pt-36 px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        {/* Back link */}
        <div className="flex items-center gap-2 mb-8">
          <Bone width={18} height={18} radius={4} />
          <Bone width={100} height={15} radius={6} delay={40} />
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-5 w-full">
            {/* Name */}
            <div className="flex flex-col gap-3">
              <Bone width="80%" height={50} radius={12} />
              <Bone width="50%" height={50} radius={12} delay={40} />
            </div>

            {/* Star rating */}
            <div className="flex items-center gap-2.5 mt-2">
              <Bone width={120} height={16} radius={4} delay={80} />
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3 pt-3">
              <div className="flex items-center gap-2.5">
                <Bone width={15} height={15} radius={4} delay={120} />
                <Bone width={140} height={14} radius={4} delay={160} />
              </div>
              <div className="flex items-center gap-2.5">
                <Bone width={15} height={15} radius={4} delay={200} />
                <Bone width={180} height={14} radius={4} delay={240} />
              </div>
              <div className="flex items-start gap-2.5">
                <Bone width={15} height={15} radius={4} delay={280} />
                <Bone width={240} height={28} radius={4} delay={320} />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2.5 pt-4">
              <Bone width="95%" height={14} radius={4} delay={360} />
              <Bone width="90%" height={14} radius={4} delay={400} />
              <Bone width="85%" height={14} radius={4} delay={440} />
              <Bone width="70%" height={14} radius={4} delay={480} />
            </div>
          </div>

          {/* Right column — main image */}
          <div className="w-full md:w-[46%] lg:w-[44%] flex-1 shrink-0">
             <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[3/4] md:aspect-auto md:h-[700px]">
                <Bone width="100%" height="100%" radius={0} delay={100} />
             </div>
          </div>
        </div>
      </section>
      
      {/* ══ IMAGE GALLERY SKELETON ════════════════════════════ */}
      <section className="bg-[#FAF9F6] py-12 md:py-16">
        <div className="px-6 md:px-10 lg:px-16 flex items-center justify-between mb-6">
           <Bone width={200} height={30} radius={6} />
        </div>
        <div className="overflow-hidden pl-6 md:pl-10 lg:pl-16 pr-6 md:pr-10 lg:pr-16">
          <div className="flex gap-5 pb-2">
             {[0, 1, 2, 3].map((i) => (
               <div key={i} className="shrink-0 rounded-2xl overflow-hidden aspect-[4/5] w-[260px]">
                 <Bone width="100%" height="100%" radius={0} delay={i * 60 + 200} />
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}
