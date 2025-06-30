"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [displayText, setDisplayText] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const fullText = "Sam"

  useEffect(() => {
    // Start with "S." then type out "Sam"
    setDisplayText("S.")
    
    const timer1 = setTimeout(() => {
      // Start typing animation with smoother timing
      let currentIndex = 0
      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
        }
      }, 400) // Slower typing for more elegant feel
    }, 1200) // Slightly longer initial pause

    const timer2 = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onLoadingComplete, 800) // Longer exit animation
    }, 4500) // Slightly longer total time

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #0f172a 30%, #000000 70%, #000000 100%)'
          }}
        >
          {/* Universe Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Stars */}
            <div className="absolute inset-0 opacity-60">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.3, 1.2, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            
            {/* Comets */}
            <motion.div
              className="absolute w-40 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              style={{
                top: '25%',
                left: '-10rem',
              }}
              animate={{
                x: ['0vw', '100vw'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              style={{
                top: '75%',
                left: '-8rem',
              }}
              animate={{
                x: ['0vw', '100vw'],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 2.5,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                delay: 0.3
              }}
              className="text-8xl md:text-9xl font-bold"
            >
              {displayText === "S." ? (
                <span className="text-emerald-400">S.</span>
              ) : (
                <span>
                  <span className="text-emerald-400">{displayText.slice(0, 1)}</span>
                  <span className="text-white">{displayText.slice(1)}</span>
                </span>
              )}
            </motion.div>
            
            {/* Glowing orb behind text */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 