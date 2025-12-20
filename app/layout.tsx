import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sanidhyamehra.com"), // Replace with your actual domain
  
  title: {
    default: "Sanidhya Mehra - Full Stack Developer | React, Next.js Expert",
    template: "%s | Sanidhya Mehra"
  },
  
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable, high-performance web and mobile applications with 5+ years of expertise in JavaScript, TypeScript, and API development.",
  
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Web Developer India",
    "Mobile App Developer",
    "Frontend Developer",
    "Backend Developer",
    "API Development",
    "Database Design",
    "Sanidhya Mehra",
    "sanidhyamehra",
    "Sanidhya mehra",
    "Software Engineer",
    "Web Application Development",
    "Responsive Design",
    "UI/UX Development"
  ],
  
  authors: [{ name: "Sanidhya Mehra", url: "https://sanidhyamehra.tech" }],
  creator: "Sanidhya Mehra",
  publisher: "Sanidhya Mehra",
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanidhyamehra.com",
    title: "Sanidhya Mehra - Full Stack Developer | React, Next.js Expert",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js. Building scalable web and mobile applications with modern technologies.",
    siteName: "Sanidhya Mehra Portfolio",
    images: [
      {
        url: "/photo.svg",
        width: 1200,
        height: 630,
        alt: "Sanidhya Mehra - Full Stack Developer",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Sanidhya Mehra - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js. Building scalable web and mobile applications.",
    images: ["/photo.svg"],
    creator: "@sanidhyamehra", // Add your Twitter handle if you have one
  },
  
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
  

  
  manifest: "/manifest.json",
  
  alternates: {
    canonical: "https://sanidhyamehra.tech",
  },
  
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://sanidhyamehra.tech" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}