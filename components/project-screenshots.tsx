"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useReducedMotion } from "framer-motion"

interface Screenshot {
  id: string
  title: string
  url: string
  image: string
  description: string
}

const screenshots: Screenshot[] = [
  {
    id: "nextkey-global",
    title: "NextKey Global Solutions",
    url: "https://www.nextkeyglobal.com/",
    image: "/Screenshot 2025-06-30 032251.png",
    description: "NYC housing partner website with tenant placement services"
  },
  {
    id: "nextkey-app",
    title: "NextKey App Platform",
    url: "https://www.nextkeyapp.com/",
    image: "/Screenshot 2025-06-30 032307.png",
    description: "Technology platform for investors and partners"
  },
  {
    id: "nextkey-foundation",
    title: "NextKey Housing Access Foundation",
    url: "https://www.nextkeyhousingaccess.org/",
    image: "/Screenshot 2025-06-30 032315.png",
    description: "Nonprofit website for housing access advocacy"
  }
]

export default function ProjectScreenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  // Animation variants that respect reduced motion
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: "easeOut" }

  return (
    <section id="featured-work" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="relative mb-4 inline-block text-4xl font-bold text-white">
            Featured Client Work
            <span className="absolute -bottom-3 left-1/2 h-1 w-12 -translate-x-1/2 rounded bg-emerald-500"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recent professional websites built for NextKey - showcasing modern web development and client satisfaction
          </p>
        </div>

        {/* Screenshot Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/90 z-10"></div>
              <Image
                src={screenshots[currentIndex].image}
                alt={screenshots[currentIndex].title}
                fill
                className="object-cover transition-opacity duration-300"
                onError={(e) => {
                  // Fallback for missing images
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className="text-gray-200 mb-4 drop-shadow-md">
                    {screenshots[currentIndex].description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={screenshots[currentIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 font-medium hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 p-2 rounded-full transition-colors z-30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 p-2 rounded-full transition-colors z-30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black ${
                  index === currentIndex ? 'bg-emerald-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 