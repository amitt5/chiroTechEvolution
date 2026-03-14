import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChiroTech Evolution — Websites That Book Patients",
  description:
    "Stop paying for a website that can't book patients. ChiroTech Evolution builds revenue-optimized, AI-native digital marketing for solo chiropractors.",
  keywords: [
    "chiropractic website design",
    "chiropractic marketing",
    "chiropractic SEO",
    "chiropractor digital marketing",
  ],
  openGraph: {
    title: "ChiroTech Evolution — Websites That Book Patients",
    description:
      "Modern, revenue-optimized websites for chiropractors. No templates. No lock-in. Just results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
