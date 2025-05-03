import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navmenucomponent from "@/components/navmenucomponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata =  {
  title: {
    default: "Script Cruise Technologies",
    template: "%s | Script Cruise Technologies",
  },
  description:
    "Discover automation, integration, and digital transformation solutions with Script Cruise Technologies.",
  keywords: [
    "Script Cruise",
    "Technology",
    "Teknologia",
    "Script",
    "Cruise",
    "business automation",
    "digital transformation",
    "ERP",
    "Next.js",
    "AI solutions",
    "website",
    "Technology firms in Kenya",
    "Technology firms in Nairobi",
    "Technology firms in Nakuru",
    "Technology firms in East Africa"
  ],
  authors: [{ name: "Script Cruise Technologies", url: "site:script-cruise-technologies.vercel.app" }],
  metadataBase: new URL("site:script-cruise-technologies.vercel.app"), // Replace with your real domain
  openGraph: {
    title: "Script Cruise Technologies",
    description: "Automation and ERP solutions for the modern business.",
    url: "site:script-cruise-technologies.vercel.app",
    siteName: "Script Cruise",
    images: [
      {
        url: "/download.png", // Put this in your /public folder
        width: 1200,
        height: 630,
        alt: "Script Cruise Technologies preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Script Cruise Technologies",
    description: "Automation and ERP solutions for the modern business.",
    images: ["/download.png"],
    creator: "@ScriptCruise", // Replace with your actual handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" bg-[linear-gradient(to_right,_black_50%,_green_53%,_black_55%)] min-h-screen" >
          <Navmenucomponent/>
        {children}
        </div>
      </body>
    </html>
  );
}
