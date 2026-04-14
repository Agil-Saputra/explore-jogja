import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat_Brush } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import SmoothScrolling from "@/components/SmoothScrolling";

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
  title: "Find What Moves You | Luxury Real Estate",
  description: "Expert agents. Real guidance. A clear path to find what's next.",
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
