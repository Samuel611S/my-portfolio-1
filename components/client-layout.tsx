"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ErrorBoundary from "@/components/ui/error-boundary"
import ScrollProgress from "@/components/ui/scroll-progress"
import LoadingScreenWrapper from "@/components/loading-screen-wrapper"
import UniverseMode from "@/components/universe-mode"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isUniverseMode, setIsUniverseMode] = useState(false)

  return (
    <>
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
    </>
  )
}
