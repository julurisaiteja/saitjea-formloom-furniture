import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { ShowroomFrame } from "@/showroom/ShowroomFrame";
import { ConciergeFloater } from "@/showroom/ConciergeFloater";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formloom — Sculpted living",
  description: "Architectural furniture showroom",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sora.variable}`}>
      <body>
        <CartProvider>
          <ShowroomFrame>{children}</ShowroomFrame>
          <ConciergeFloater />
        </CartProvider>
      </body>
    </html>
  );
}
