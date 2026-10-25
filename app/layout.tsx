import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Marcel Mendes | Software Engineer",
  description:
    "Software Engineer based in Tokyo. Building exceptional digital experiences.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={cn(instrumentSans.variable, bebasNeue.variable, "font-sans")}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
