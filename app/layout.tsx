import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Toaster } from "sonner"
import ClientLayout from "@/components/client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portfolio-1.vercel.app"),
  title: { default: "Samuel — Frontend Developer", template: "%s | Samuel" },
  description: "I design & build fast, accessible sites with Next.js, React, and Tailwind.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Samuel — Frontend Developer",
    description: "I design & build fast, accessible sites with Next.js, React, and Tailwind.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    creator: "@yourhandle",
    images: ["/og.png"],
  },
}

export const viewport = {
  themeColor: "#10b981",
} as const

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Samuel Sameh",
  "url": process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portfolio-1.vercel.app",
  "jobTitle": "Full-Stack Developer & Computer Science Student",
  "alumniOf": {
    "@type": "Organization",
    "name": "University of London"
  },
  "sameAs": [
    "https://github.com/Samuel611S",
    "https://www.linkedin.com/in/samuel-sameh-423b15239/"
  ],
  "image": "/profile.jpg",
  "description": "Computer Science student at University of London specializing in Python development, full-stack web technologies, and machine learning.",
  "email": "samuels.sameh@gmail.com",
  "telephone": "+201284333155",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cairo",
    "addressCountry": "Egypt"
  },
  "knowsAbout": [
    "Python Development",
    "Full-Stack Web Development",
    "React",
    "Next.js",
    "Machine Learning",
    "Mobile Development",
    "Flutter"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance Developer"
  }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Samuel Sameh Portfolio",
  "url": process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portfolio-1.vercel.app",
  "description": "Portfolio website showcasing Samuel Sameh's work as a Full-Stack Developer and Computer Science Student",
  "author": {
    "@type": "Person",
    "name": "Samuel Sameh"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-200`}>
        {/* Skip Link for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium z-[9999] transition-all duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
        >
          Skip to main content
        </a>
        
        <Script 
          id="ld-person" 
          type="application/ld+json" 
          strategy="beforeInteractive"
        >
          {JSON.stringify(personSchema)}
        </Script>
        <Script 
          id="ld-website" 
          type="application/ld+json" 
          strategy="beforeInteractive"
        >
          {JSON.stringify(websiteSchema)}
        </Script>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
