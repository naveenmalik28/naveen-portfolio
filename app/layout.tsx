import type { Metadata, Viewport } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@/styles/globals.css";

const siteUrl = "https://naveenmalik.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Naveen Malik - Senior Full Stack Developer",
    template: "%s | Naveen Malik",
  },
  description:
    "Senior Full Stack Developer building scalable SaaS, AI-powered platforms, EdTech systems, FinTech products, and high-performance APIs.",
  keywords: [
    "Naveen Malik",
    "Senior Full Stack Developer",
    "Next.js Developer",
    "Django Developer",
    "SaaS Engineer",
    "AI Developer",
    "EdTech",
    "FinTech",
  ],
  authors: [{ name: "Naveen Malik" }],
  openGraph: {
    title: "Naveen Malik - Senior Full Stack Developer",
    description: "Building scalable SaaS and AI-powered platforms across EdTech and FinTech.",
    url: siteUrl,
    siteName: "Naveen Malik Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Malik - Senior Full Stack Developer",
    description: "Building scalable SaaS and AI-powered platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
