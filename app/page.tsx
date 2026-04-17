"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SlidingImageReveal, SlidingSvgReveal, WordReveal, SimpleOpacityReveal } from "./components/RevealElements";
import { Footer } from "./components/Footer";
import YogyakartaMap from "@/components/YogyakartaMap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);
  const cloudLeftRef = useRef<HTMLImageElement>(null);
  const cloudRightRef = useRef<HTMLImageElement>(null);
  const prambananRef = useRef<HTMLImageElement>(null);
  const keratonRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const quoteRef2 = useRef<HTMLHeadingElement>(null);
  const quoteRef3 = useRef<HTMLHeadingElement>(null);
  const quoteRef4 = useRef<HTMLHeadingElement>(null);
  const parallaxBannerRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const loadingScreenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        if (prev >= 90) {
          if (document.readyState === 'complete') {
            return 100;
          }
          return prev;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    const handleLoad = () => {
      setProgress(100);
    };

    if (document.readyState === 'complete') {
      setProgress(100);
      clearInterval(interval);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useGSAP(() => {
    if (progress === 100 && isLoading && loadingScreenRef.current) {
      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false)
      });

      tl.to(loadingScreenRef.current, {
        yPercent: 100,
        duration: 1.2,
        ease: "power4.inOut",
      }).from(
        [
          textRef.current,
          mainImageRef.current,
          keratonRef.current,
          prambananRef.current,
          cloudLeftRef.current,
          cloudRightRef.current,
        ],
        {
          y: 60,
          opacity: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }
  }, { dependencies: [progress, isLoading] });

  useGSAP(
    () => {

      // Scroll-based Text Reveal Animation
      if (quoteRef.current) {
        const words = gsap.utils.toArray(quoteRef.current.querySelectorAll('.word')) as HTMLElement[];
        gsap.fromTo(
          words,
          { opacity: 0.1, },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 85%",
              end: "bottom 95%",
              scrub: true, // Ties the reveal directly to the scroll position
            },
          }
        );
      }

      if (quoteRef2.current) {
        const words2 = gsap.utils.toArray(quoteRef2.current.querySelectorAll('.word')) as HTMLElement[];
        gsap.fromTo(
          words2,
          { opacity: 0.1, },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef2.current,
              start: "top 85%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        );
      }

      if (quoteRef3.current) {
        const words3 = gsap.utils.toArray(quoteRef3.current.querySelectorAll('.word')) as HTMLElement[];
        gsap.fromTo(
          words3,
          { opacity: 0.1, },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef3.current,
              start: "top 85%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        );
      }

      if (quoteRef4.current) {
        const words4 = gsap.utils.toArray(quoteRef4.current.querySelectorAll('.word')) as HTMLElement[];
        gsap.fromTo(
          words4,
          { opacity: 0.1, },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef4.current,
              start: "top 85%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        );
      }

      // Create a GSAP Timeline attached to ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Efek parallax untuk text: bergerak ke bawah sedikit agar terasa tenggelam
      tl.to(
        textRef.current,
        {
          yPercent: 30,
          opacity: 0,
          ease: "none",
        },
        0
      );

      // Animasi Main Image naik ke atas dan membesar untuk reveal secara penuh
      tl.to(
        mainImageRef.current,
        {
          yPercent: -20,
          scale: 1.25, // Menambahkan efek membesar (zoom-in)
          ease: "none",
        },
        0
      );

      // Animasi Prambanan ke kanan dan atas
      tl.to(
        prambananRef.current,
        {
          xPercent: 40,
          yPercent: -50,
          ease: "none",
        },
        0
      );

      // Animasi Keraton ke kiri dan atas
      tl.to(
        keratonRef.current,
        {
          xPercent: -40,
          yPercent: -35,
          ease: "none",
        },
        0
      );


      // Animasi Cloud Left terbuka ke kiri
      tl.to(
        cloudLeftRef.current,
        {
          xPercent: -50,
          ease: "none",
        },
        0
      );

      // Animasi Cloud Right terbuka ke kanan
      tl.to(
        cloudRightRef.current,
        {
          xPercent: 50,
          ease: "none",
        },
        0
      );
    },
    { scope: containerRef }
  );

  // Parallax effect for the banner section
  useGSAP(() => {
    if (parallaxBannerRef.current && parallaxBgRef.current) {
      gsap.to(parallaxBgRef.current, {
        yPercent: 35,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxBannerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });

  return (
    <>
      {isLoading && (
        <div 
          ref={loadingScreenRef}
          className="fixed inset-0 z-[9999] bg-cream flex flex-col items-center justify-center"
        >
          <svg width="47" height="137" viewBox="0 0 94 273" fill="#0000003e" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M45.093 1.32497C43.485 4.32897 43.754 6.29597 45.934 7.46297C48.9 9.04997 49.142 8.78597 48.424 4.74797C47.563 -0.0940342 46.459 -1.22803 45.093 1.32497ZM44 11.438C44 12.481 43.766 13.944 43.48 14.689C42.996 15.951 48.612 20.219 49.538 19.293C49.758 19.073 49.676 17.278 49.356 15.304C48.954 12.826 48.036 11.38 46.387 10.628C44.328 9.68997 44 9.80096 44 11.438ZM43 22.731C43 25.676 43.555 26.441 47.156 28.466L51.313 30.802L50.67 28.4C50.317 27.079 50.021 25.283 50.014 24.409C50.002 23.054 48.83 22.172 43.75 19.697C43.338 19.496 43 20.861 43 22.731ZM41.819 31.678C41.627 33.677 41.003 34.899 40.25 34.748C39.563 34.61 39 35.398 39 36.498C39 38.193 38.333 38.498 34.622 38.498C27.919 38.498 27.289 40.091 29.577 51.248C30.033 53.471 30.235 53.498 46.421 53.498H62.804L63.503 47.472C64.353 40.152 63.316 38.498 57.878 38.498C55.446 38.498 53.997 38.032 53.993 37.248C53.987 36.1 52.119 34.633 44.819 30.044L42.137 28.358L41.819 31.678ZM31 56.439C31 56.957 31.45 57.658 32 57.998C32.55 58.338 33 59.489 33 60.557C33 61.831 33.687 62.498 35 62.498C36.556 62.498 37 63.165 37 65.498V68.498H46.5H56V65.615C56 63.57 56.583 62.579 58.004 62.207C59.336 61.859 59.804 61.152 59.4 60.099C59.034 59.145 59.43 58.27 60.396 57.899C64.771 56.221 60.59 55.498 46.5 55.498C37.481 55.498 31 55.891 31 56.439ZM34.346 73.248C33.965 74.761 31.819 90.925 29.577 109.17C25.604 141.499 25.451 142.306 23.559 140.92C20.219 138.474 19 139.163 19 143.498V147.498H28.411H37.822L39.96 143.081C41.136 140.651 43.158 137.969 44.453 137.121C46.666 135.671 46.972 135.741 49.544 138.288C51.049 139.779 52.898 142.461 53.653 144.248L55.027 147.498H64.513H74V143.498C74 139.063 72.121 138.174 68.903 141.086C66.839 142.954 67.552 147.007 62.471 104.498C60.532 88.273 58.517 73.985 57.994 72.748C57.187 70.84 56.28 70.498 52.021 70.498H47V88.012C47 99.915 47.385 106.142 48.202 107.45C49.15 108.969 49.12 109.905 48.057 111.891C47.217 113.462 46.894 116.209 47.198 119.203C47.465 121.84 47.359 125.348 46.961 126.998L46.237 129.998L45.965 126.998C45.816 125.348 45.802 121.498 45.934 118.443C46.111 114.338 45.754 112.539 44.565 111.552C43.115 110.348 43.106 109.985 44.477 107.892C45.695 106.034 46 102.051 46 88.033V70.498H40.519C35.374 70.498 34.996 70.667 34.346 73.248ZM16.379 149.952C16.073 150.751 16.537 152.426 17.411 153.674C18.285 154.922 19 156.708 19 157.644C19 158.579 20.048 160.617 21.33 162.171C22.611 163.726 23.95 165.794 24.306 166.768C24.901 168.398 26.665 168.516 46.726 168.268C65.77 168.032 68.502 167.8 68.516 166.42C68.525 165.552 69.763 163.38 71.266 161.593C72.77 159.806 74 157.698 74 156.908C74 156.117 74.521 154.637 75.158 153.617C75.795 152.597 76.034 151.028 75.689 150.13C75.13 148.672 71.959 148.498 46 148.498C21.501 148.498 16.85 148.726 16.379 149.952ZM29.25 158.449C28.563 159.561 28 161.377 28 162.484C28 164.055 28.66 164.498 31 164.498C34.534 164.498 35.057 162.017 32.25 158.573C30.503 156.43 30.498 156.429 29.25 158.449ZM37.132 158.252C35.144 161.965 35.699 164.498 38.5 164.498C40.445 164.498 41 163.985 41 162.189C41 160.919 40.384 159.038 39.632 158.009C38.307 156.197 38.227 156.204 37.132 158.252ZM60.25 158.449C59.563 159.561 59 161.407 59 162.551C59 164.229 59.53 164.57 61.741 164.314C65.077 163.929 65.713 161.595 63.292 158.625C61.506 156.434 61.496 156.433 60.25 158.449ZM44.035 159.432C42.162 162.932 42.77 164.498 46 164.498C48.464 164.498 49 164.087 49 162.198C49 159.945 47.352 157.498 45.835 157.498C45.415 157.498 44.605 158.368 44.035 159.432ZM52.035 159.432C50.162 162.932 50.77 164.498 54 164.498C56.056 164.498 57 164.005 57 162.932C57 160.835 55.158 157.498 54 157.498C53.489 157.498 52.605 158.368 52.035 159.432ZM24.417 171.415C24.188 171.644 24 181.206 24 192.665V213.498H46H68V192.248V170.998H46.417C34.546 170.998 24.646 171.186 24.417 171.415ZM33.392 178.92C33.092 179.702 33.331 181.247 33.923 182.354C34.515 183.461 35 187.996 35 192.432C35 199.831 34.835 200.498 33 200.498C31.381 200.498 31 201.165 31 203.998C31 207.22 31.238 207.498 34 207.498C36 207.498 37 206.998 37 205.998C37 204.776 38.667 204.498 46 204.498C53.333 204.498 55 204.776 55 205.998C55 206.998 56 207.498 58 207.498C60.762 207.498 61 207.22 61 203.998C61 201.554 60.548 200.498 59.5 200.498C58.292 200.498 58 198.948 58 192.545C58 188.171 58.528 183.434 59.173 182.018C60.053 180.086 60.06 179.158 59.202 178.3C58.343 177.441 57.534 177.821 55.958 179.824C54.243 182.005 53.506 182.304 51.929 181.46C50.868 180.892 50 179.768 50 178.963C50 177.918 48.841 177.498 45.956 177.498C42.66 177.498 41.967 177.821 42.206 179.248C42.648 181.881 38.41 182.127 36.807 179.561C35.3 177.147 34.154 176.932 33.392 178.92ZM42.25 185.243C39.106 186.808 39 187.063 39 193.072C39 200.226 39.315 200.498 47.582 200.498H53V193.511V186.525L49.378 185.011C47.386 184.179 45.698 183.527 45.628 183.562C45.558 183.597 44.037 184.354 42.25 185.243ZM22 218.926C22 220.473 20.828 222.27 18.765 223.885C15.776 226.224 15.615 226.64 16.647 229.375C17.449 231.497 17.458 232.64 16.682 233.416C15.906 234.192 24.169 234.498 45.907 234.498C73.056 234.498 76.151 234.334 75.611 232.926C75.279 232.061 75.497 230.438 76.096 229.319C77.011 227.61 76.69 226.773 74.092 224.093C72.392 222.339 71 219.912 71 218.7V216.498H46.5H22V218.926ZM16 242.498V248.498H46.5H77V242.498V236.498H46.5H16V242.498ZM13 253.998V257.498H46.5H80V253.998V250.498H46.5H13V253.998ZM0.677002 259.155C0.304002 259.527 0 262.681 0 266.165V272.498H46.546H93.091L92.796 265.748L92.5 258.998L46.927 258.738C21.861 258.595 1.049 258.783 0.677002 259.155Z" fill="#0000003e" />
                </svg>
        </div>
      )}

      <main
        ref={containerRef}
        className="relative w-full h-[100vh] lg:h-[125vh] overflow-hidden bg-sky-100 flex items-center justify-center"
      >
        {/* Background Hero (z-index 0) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/background-hero.webp"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Text Overlay (z-index 10) */}
        <div
          ref={textRef}
          className="absolute top-[15%] md:top-[20%] z-10 flex flex-col items-center text-center w-full px-4"
        >
          <h1 className="text-5xl md:text-8xl text-slate-100 font-extrabold tracking-tight font-caveat text-black mb-4 drop-shadow-sm">
            The Cultural Capital of Indonesia
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 font-medium mb-8">
            <span className="text-gray-500 font-caveat">Discover the heart of Javanese culture, where ancient traditions meet vibrant modern life.</span>
          </p>

        </div>

        <Image
          ref={mainImageRef}
          src="/assets/tugu.webp"
          alt="Main Element"
          width={1200}
          height={800}
          quality={100}
          className="absolute -bottom-[10%] md:-bottom-[27%] left-1/2 -translate-x-1/2 z-15 w-[95%] md:w-[75%] lg:w-[40%] h-auto object-contain origin-bottom"
        />

        <Image
          ref={prambananRef}
          src="/assets/prambanan.webp"
          alt="Candi Prambanan"
          width={1000}
          height={800}
          className="absolute -bottom-[5%] md:-bottom-[25%] right-[0%] md:right-[5%] z-[13] w-[95%] md:w-[35%] lg:w-[55%] h-auto object-contain origin-bottom"
        />

        <Image
          ref={keratonRef}
          src="/assets/keraton-2.png"
          alt="Keraton Yogyakarta"
          width={1000}
          height={800}
          className="absolute -bottom-[5%] md:-bottom-[25%] left-[0%] md:-left-[0%] z-[18] w-[95%] md:w-[35%] lg:w-[60%] h-auto object-contain origin-bottom"
        />

        {/* Cloud Left (z-index 20) */}
        <Image
          ref={cloudLeftRef}
          src="/assets/cloud-left.webp"
          alt="Cloud Left"
          width={1000}
          height={1000}
          className="absolute top-[50%] opacity-70 left-0 z-20 w-1/2 h-full object-cover object-right pointer-events-none"
        />

        {/* Cloud Right (z-index 20) */}
        <Image
          ref={cloudRightRef}
          src="/assets/cloud-right.webp"
          alt="Cloud Right"
          width={1000}
          height={1000}
          className="absolute top-[40%] right-0 opacity-80 z-20 w-1/2 h-full object-cover object-left pointer-events-none"
        />
      </main>


      {/* Konten Tambahan agar ada ruang untuk meng-scroll ke bawah */}
      <section className="relative w-full  pt-24 md:py-32 bg-white z-20">
        {/* Cloud Divider separator to overlap and create seamless transition */}
        <div className="absolute -top-16 left-0 w-full z-30 -mt-[10vw] md:-mt-[12vw] lg:-mt-[10vw] pointer-events-none">
          <Image
            src="/assets/cloud-divider.webp"
            alt="Cloud Divider"
            width={1920}
            height={300}
            className="w-full h-auto object-cover bg-transparent"
          />
        </div>
        <div className="absolute -top-16 left-0 w-full z-30 -mt-[10vw] md:-mt-[12vw] lg:-mt-[10vw] pointer-events-none">
          <Image
            src="/assets/cloud-divider.webp"
            alt="Cloud Divider"
            width={1920}
            height={300}
            className="w-full h-auto object-cover bg-transparent"
          />
        </div>
        <div className="absolute -top-16 left-0 w-full z-30 -mt-[10vw] md:-mt-[12vw] lg:-mt-[10vw] pointer-events-none">
          <Image
            src="/assets/cloud-divider.webp"
            alt="Cloud Divider"
            width={1920}
            height={300}
            className="w-full h-auto object-cover bg-transparent"
          />
        </div>

        <div className="mt-0 lg:mt-24 px-8">
          <div className="mb-8 flex flex-col lg:gap-4 justify-between">

            <div>
              <h2 ref={quoteRef} className="relative z-90 text-3xl md:text-7xl text-left font-bold text-gray-800 font-jakarta max-w-[30ch] flex flex-wrap gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2">
                {"From Javanese festivals and contemporary art exhibitions to vibrant community gatherings, find out what's happening in City and join us."
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} className="word inline-block">{word}</span>
                  ))}
              </h2>

              <div className="w-full flex justify-end ">
                <div className="flex flex-col items-center mb-12 relative px-4 absolute -bottom-10 right-0">
                  <WordReveal
                    text="Don't miss out on special experiences!"
                    className="font-caveat leading-snug text-xl md:text-3xl max-w-lg text-center justify-center uppercase leading-snug font-semibold text-gray-800"
                  />

                  {/* Custom Arrow */}
                  <SlidingSvgReveal className="transform translate-y-2 translate-x-4 scale-75 rotate-[45deg]">
                    <svg width="60" height="60" viewBox="0 0 39 47" fill="none" className="text-black">
                      <path d="M1 1C1.0221 1.0048 1.15377 1.09601 2.25615 2.07106C3.24706 2.94752 5.07851 4.6386 6.181 5.6196C7.28349 6.60061 7.59244 6.83044 8.60478 7.44622C9.61712 8.062 11.3235 9.05677 13.1657 10.0303C15.008 11.0039 16.9344 11.9261 18.0282 12.4609C19.6587 13.2582 20.0491 13.6233 20.8916 14.1554C21.6933 14.6616 23.0121 15.6562 25.1593 17.3848C25.6892 17.8114 26.2828 18.6508 27.2054 20.0344C27.9993 21.2251 28.6333 22.9294 29.1927 24.6357C29.4338 25.3708 29.7807 26.1735 30.2183 27.3493C30.4414 28.0736 30.6202 28.8761 30.9493 31.9988C31.1571 34.5705 31.4478 39.1464 31.7094 43.8846" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M27.0654 40.3569C27.0772 40.4347 27.2017 40.7186 27.8046 41.7269C28.0674 42.1664 28.7262 42.8549 29.5 43.5C30.2559 44.1302 30.5491 44.5781 30.8123 44.9415C31.0128 45.2181 31.2983 45.4115 31.5 45.5C31.6455 45.5639 32.2956 45.1533 33.539 44.3478C34.2124 43.9117 35.0522 43.5506 35.5806 43.2676C36.6982 42.6693 37.1219 42.2697 37.3876 42.0628C37.4383 42.0281 37.4893 41.9934 37.5245 41.9461C37.5596 41.8987 37.5772 41.8399 37.5953 41.7793" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </SlidingSvgReveal>
                </div>
              </div>
            </div>

            <SlidingImageReveal className="w-full h-full rounded-[1.5rem] overflow-hidden rounded-xl">
              <video src="/assets/jogja-culture.mp4" autoPlay loop muted />
            </SlidingImageReveal>

          </div>
          <SimpleOpacityReveal className="text-lg md:text-2xl text-gray-600 font-medium mb-8">There is always something happening in Jogja. Here you’ll find a dynamic events where traditional dance, modern music, indie art, and cultural festivals blend seamlessly into the city’s everyday life. Whether you’re looking for family-friendly workshops, outdoor concerts at the temples, batik exhibitions, or festivals that capture the unique "Jogja Istimewa" spirit. Stay tuned!</SimpleOpacityReveal>
        </div>
      </section>

      <section className="relative w-full py-12 lg:pt-24 md:py-32 bg-cream z-20 px-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-start">

          <div className="flex flex-col">
            <h2 ref={quoteRef2} className="relative z-90 text-3xl md:text-7xl text-left font-bold text-gray-800 font-jakarta max-w-[30ch] flex flex-wrap gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2">
              {"Yogyakarta is the Heart of the Cultural Circle. Explore ancient temples, merapi landscapes, royal palaces, and exotic beaches – all within a short drive."
                .split(" ")
                .map((word, index) => (
                  <span key={index} className="word inline-block">{word}</span>
                ))}
            </h2>
            <button className="my-12 w-fit bg-[#2C2C2C] hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-colors">
              Learn More
            </button>

            <div className="w-full flex justify-end md:block hidden">
              <div className="flex flex-col items-end mb-12 relative absolute -bottom-10 right-0">
                {/* Custom Arrow */}
                <SlidingSvgReveal className="transform translate-y-2 translate-x-4 scale-75 rotate-[270deg]">
                  <svg width="60" height="60" viewBox="0 0 39 47" fill="none" className="text-black">
                    <path d="M1 1C1.0221 1.0048 1.15377 1.09601 2.25615 2.07106C3.24706 2.94752 5.07851 4.6386 6.181 5.6196C7.28349 6.60061 7.59244 6.83044 8.60478 7.44622C9.61712 8.062 11.3235 9.05677 13.1657 10.0303C15.008 11.0039 16.9344 11.9261 18.0282 12.4609C19.6587 13.2582 20.0491 13.6233 20.8916 14.1554C21.6933 14.6616 23.0121 15.6562 25.1593 17.3848C25.6892 17.8114 26.2828 18.6508 27.2054 20.0344C27.9993 21.2251 28.6333 22.9294 29.1927 24.6357C29.4338 25.3708 29.7807 26.1735 30.2183 27.3493C30.4414 28.0736 30.6202 28.8761 30.9493 31.9988C31.1571 34.5705 31.4478 39.1464 31.7094 43.8846" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M27.0654 40.3569C27.0772 40.4347 27.2017 40.7186 27.8046 41.7269C28.0674 42.1664 28.7262 42.8549 29.5 43.5C30.2559 44.1302 30.5491 44.5781 30.8123 44.9415C31.0128 45.2181 31.2983 45.4115 31.5 45.5C31.6455 45.5639 32.2956 45.1533 33.539 44.3478C34.2124 43.9117 35.0522 43.5506 35.5806 43.2676C36.6982 42.6693 37.1219 42.2697 37.3876 42.0628C37.4383 42.0281 37.4893 41.9934 37.5245 41.9461C37.5596 41.8987 37.5772 41.8399 37.5953 41.7793" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </SlidingSvgReveal>
                <WordReveal
                  text="Enjoy the quality, the beauty and the hospitality of Jogja!"
                  className="font-caveat leading-snug text-xl md:text-3xl max-w-lg text-center justify-center uppercase leading-snug font-semibold text-gray-800"
                />
              </div>
            </div>

            <SimpleOpacityReveal className="text-lg md:text-2xl text-gray-600 font-medium md:mt-12">Discover the heritage-city charm with majestic palace views, vibrant street art, and a soul-soothing atmosphere. Yogyakarta is a haven for culture enthusiasts, boasting the richest collection of Javanese traditions and ancient wonders. Also a perfect base for the Cultural Circle. After a day on the road—come back to what really matters: authentic flavors, warm hospitality, and genuine comfort.</SimpleOpacityReveal>
          </div>

          <div className="w-full">
            <Image
              src="/assets/gunung-kidul-beach.avif"
              alt="Church at night"
              width={500} height={600}
              className="md:max-w-[500px] w-full h-full object-cover rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* Culinary Section */}
      <section id="culinary-section" className="relative w-full py-16 lg:py-32 bg-white z-20 overflow-hidden">
        <div className="px-8 max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-20">
            <div className="w-full">
              <h2 ref={quoteRef4} className="relative z-90 text-3xl md:text-6xl lg:text-7xl text-left font-bold text-gray-800 font-jakarta max-w-[30ch] flex flex-wrap gap-x-2 md:gap-x-3 gap-y-1 md:gap-y-2">
                {"A Feast for the Senses Awaits in Every Corner of Yogyakarta."
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} className="word inline-block">{word}</span>
                  ))}
              </h2>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-12 lg:mb-20">
            {/* Large Featured Image */}
            <div className="md:col-span-7 h-[300px] md:h-[500px]">
              <SlidingImageReveal className="w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/culinary-gudeg.png"
                  alt="Traditional Jogja Gudeg - Signature Javanese jackfruit stew"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </SlidingImageReveal>
            </div>

            {/* Stacked Right Images */}
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
              <div className="h-[200px] md:h-[240px]">
                <SlidingImageReveal className="w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/culinary-street.png"
                    alt="Yogyakarta street food - Sate, Bakpia, Es Dawet, Wedang Ronde"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </SlidingImageReveal>
              </div>
              <div className="h-[200px] md:h-[240px]">
                <SlidingImageReveal className="w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/culinary-ambience.png"
                    alt="Traditional Javanese restaurant ambience in Yogyakarta"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </SlidingImageReveal>
              </div>
            </div>
          </div>

            {/* Description & CTA */}
            <div className="flex-1 flex flex-col gap-6">
              <SimpleOpacityReveal className="text-base md:text-xl text-gray-600 font-medium leading-relaxed">
                Yogyakarta is not just a feast for the eyes — it&#39;s a paradise for food lovers. The city&#39;s culinary heritage is deeply intertwined with its royal past, from the sweet, aromatic gudeg born in the Sultan&#39;s kitchen to the smoky sate klatak grilled over iron skewers. Wander through angkringan stalls at midnight, sip a bold kopi joss infused with burning charcoal, or savor centuries-old recipes at iconic restaurants. Every meal in Jogja tells a story.
              </SimpleOpacityReveal>
              <a
                href="/discover"
                className="w-fit bg-[#2C2C2C] hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-colors font-jakarta"
              >
                Explore Culinary Map
              </a>
            </div>
   
        </div>
      </section>

      {/* Jogjakarta Map */}
      <YogyakartaMap />

      {/* Parallax Banner Section */}
      <div
        ref={parallaxBannerRef}
        className="relative w-full px-24 overflow-hidden"
        style={{ height: "520px" }}
      >
        {/* Parallax Background */}
        <div
          ref={parallaxBgRef}
          className="absolute inset-0 w-full"
          style={{ top: "-45%", height: "130%" }}
        >
          <Image
            src="/assets/candi-prambanan.webp"
            alt="Parallax Banner Background"
            fill
            className="object-cover object-center"
            quality={90}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h2 ref={quoteRef3} className="relative text-3xl md:text-7xl text-center justify-center font-bold text-white/80 font-jakarta max-w-[30ch] flex flex-wrap gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2 ">
            {"Planning a trip to Yogyakarta has never been easier."
                .split(" ")
                .map((word, index) => (
                  <span key={index} className="word inline-block">{word}</span>
                ))}
          </h2>
          <p className="text-white/80 text-base md:text-lg mt-4 font-medium">
            Our all-in-one AI travel guide for accommodations, itineraries, local tours, and essential seasonal tips.
          </p>
          <a
            href="/quiz"
            className="my-12 w-fit bg-white hover:bg-white/80 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors"
          >
            Plan Your Visit
          </a>
        </div>
      </div>


    <Footer/>
    </>
  );
}
