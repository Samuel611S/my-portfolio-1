"use client"

import { useState } from "react"
import LoadingScreen from "./loading-screen"

interface LoadingScreenWrapperProps {
  children: React.ReactNode
}

export default function LoadingScreenWrapper({ children }: LoadingScreenWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && children}
    </>
  )
} 