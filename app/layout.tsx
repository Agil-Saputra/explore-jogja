import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat_Brush } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";


const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  weight: "400",
  variable: "--font-caveat-brush",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // 1. Core SEO
  title: {
    default: "Explore Jogja - Explore Yogyakarta",
    template: "%s | Explore Jogja", // Automatically adds the brand name to child pages
  },
  description:
    "Discover the best of Yogyakarta. Explore iconic temples like Borobudur and Prambanan, find hidden beaches, taste local culinary delights, and plan your perfect Jogja adventure.",
  keywords: [
    "Jogja travel",
    "Yogyakarta tourism",
    "Explore Jogja",
    "Jogja tours",
    "Borobudur",
    "Prambanan",
    "Malioboro",
    "Jogja hidden gems",
    "Indonesia travel",
  ],
  authors: [{ name: "Explore Jogja Team" }],
  creator: "Explore Jogja",
  
  // 2. Canonical URL (Prevents duplicate content penalties)
  alternates: {
    canonical: "https://www.yourdomain.com", 
  },

  // 3. Open Graph (For sharing on Facebook, WhatsApp, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US", // Change to "id_ID" if your site is in Indonesian
    url: "https://www.yourdomain.com",
    title: "Explore Jogja | Your Ultimate Travel Guide to Yogyakarta",
    description:
      "Discover the best of Yogyakarta. Explore iconic temples, find hidden beaches, taste local culinary delights, and plan your perfect Jogja adventure.",
    siteName: "Explore Jogja",
    images: [
      {
        url: "https://www.yourdomain.com/images/og-image-jogja.jpg", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "Beautiful view of Prambanan Temple at sunset",
      },
    ],
  },

  // 4. Twitter Cards (For sharing on X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Explore Jogja | Your Ultimate Travel Guide to Yogyakarta",
    description:
      "Discover the best of Yogyakarta. Explore iconic temples, find hidden beaches, and plan your perfect Jogja adventure.",
    images: ["https://www.yourdomain.com/images/twitter-image-jogja.jpg"], // Must be an absolute URL
    creator: "@explorejogja", // Replace with your actual Twitter handle
  },

  // 5. Crawler instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} ${caveatBrush.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white">
        {/* <SmoothScrolling> */}
          <ConditionalNavbar />
          {children}
        {/* </SmoothScrolling> */}
      </body>
    </html>
  );
}
