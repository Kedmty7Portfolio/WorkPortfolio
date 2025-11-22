import { Geist, Geist_Mono, Share_Tech,Changa } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MyWorks from "@/components/MyWorks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight:"400"
});

const changa = Changa({
  subsets: ["latin", "arabic"], 
  weight: ["400", "700"], 
});

export const metadata = {
  title: "Content Creator Portfolio",
  description: "Personal Content Creator Portfolio",
  icons: [{ rel: "icon", url: "icon.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${shareTech.className} ${changa.className}`}
      >
        <HeroSection/>
       <MyWorks/>
         <SpeedInsights />
        {children}
         <Footer/>
      </body>
    </html>
  );
}
