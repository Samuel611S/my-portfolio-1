"use client"

import type React from "react"
import { useState } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "sonner"
import ErrorBoundary from "@/components/ui/error-boundary"
import ScrollProgress from "@/components/ui/scroll-progress"
import LoadingScreenWrapper from "@/components/loading-screen-wrapper"
import UniverseMode from "@/components/universe-mode"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isUniverseMode, setIsUniverseMode] = useState(false)

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#10b981" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Samuel Sameh",
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
              "url": "https://your-domain.com",
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
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Samuel Sameh Portfolio",
              "url": "https://your-domain.com",
              "description": "Portfolio website showcasing Samuel Sameh's work as a Full-Stack Developer and Computer Science Student",
              "author": {
                "@type": "Person",
                "name": "Samuel Sameh"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} text-gray-200`}>
        {/* Scroll Progress Bar */}
        <ScrollProgress />
        
        {/* Cosmic Universe Elements */}
        <div className="cosmic-nebula"></div>
        <div className="cosmic-dust"></div>
        
        {/* Universe Mode */}
        <UniverseMode 
          isActive={isUniverseMode} 
          onToggle={() => setIsUniverseMode(!isUniverseMode)} 
        />
        
        <ErrorBoundary>
          <LoadingScreenWrapper>
            {/* Hide content when in universe mode */}
            <div className={isUniverseMode ? 'opacity-0 pointer-events-none transition-opacity duration-1000' : 'transition-opacity duration-1000'}>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </LoadingScreenWrapper>
        </ErrorBoundary>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
