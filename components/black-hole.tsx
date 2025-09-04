"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import BlackHole3D with SSR disabled
const BlackHole3D = dynamic(() => import("./black-hole-3d"), {
  ssr: false,
  loading: () => (
    <div className="h-72 w-full rounded-2xl border border-gray-800 bg-gray-900/50 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-emerald-500/20 rounded-full">
        <div className="w-full h-full border-4 border-transparent border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
    </div>
  ),
})

interface BlackHoleProps {
  className?: string
}

export default function BlackHole({ className = "" }: BlackHoleProps) {
  return (
    <div className={`relative ${className}`}>
      <Suspense 
        fallback={
          <div className="h-72 w-full rounded-2xl border border-gray-800 bg-gray-900/50 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-emerald-500/20 rounded-full">
              <div className="w-full h-full border-4 border-transparent border-t-emerald-500 rounded-full animate-spin"></div>
            </div>
          </div>
        }
      >
        <BlackHole3D />
      </Suspense>
    </div>
  )
}
