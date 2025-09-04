"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [displayText, setDisplayText] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const [showParticles, setShowParticles] = useState(false)
  const [showGlow, setShowGlow] = useState(false)
  const fullText = "Sam"

  useEffect(() => {
    // Start with "S." then type out "Sam"
    setDisplayText("S.")
    
    const timer1 = setTimeout(() => {
      setShowParticles(true)
      setShowGlow(true)
      
      // Start typing animation with smoother timing
      let currentIndex = 0
      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
        }
      }, 200) // Faster, more responsive typing
    }, 800) // Shorter initial pause

    const timer2 = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onLoadingComplete, 1200) // Longer exit animation
    }, 4000) // Total time

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
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #0f172a 30%, #000000 70%, #000000 100%)'
          }}
        >
          {/* Enhanced Universe Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Stars */}
            <div className="absolute inset-0 opacity-70">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-emerald-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: Math.random() * 3 + 1,
                    height: Math.random() * 3 + 1,
                  }}
                  animate={{
                    opacity: [0.1, 1, 0.1],
                    scale: [0.2, 1.5, 0.2],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            
            {/* Enhanced Comets */}
            <motion.div
              className="absolute w-60 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              style={{
                top: '20%',
                left: '-15rem',
              }}
              animate={{
                x: ['0vw', '120vw'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute w-48 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
              style={{
                top: '80%',
                left: '-12rem',
              }}
              animate={{
                x: ['0vw', '120vw'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 2,
                ease: "easeInOut",
              }}
            />

            {/* Floating Particles */}
            {showParticles && (
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-emerald-400/60 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative z-10">
            {/* Main Text with Enhanced Animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3, y: 50, rotateX: -90 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0, 
                rotateX: 0 
              }}
              exit={{ 
                opacity: 0, 
                scale: 1.2, 
                y: -50, 
                rotateX: 90,
                filter: "blur(20px)"
              }}
              transition={{ 
                duration: 1.5, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
              }}
              className="text-8xl md:text-9xl font-bold relative"
            >
              {displayText === "S." ? (
                <motion.span 
                  className="text-emerald-400"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(16, 185, 129, 0.5)",
                      "0 0 40px rgba(16, 185, 129, 0.8)",
                      "0 0 20px rgba(16, 185, 129, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  S.
                </motion.span>
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="text-emerald-400"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(16, 185, 129, 0.5)",
                        "0 0 40px rgba(16, 185, 129, 0.8)",
                        "0 0 20px rgba(16, 185, 129, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {displayText.slice(0, 1)}
                  </motion.span>
                  <motion.span 
                    className="text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {displayText.slice(1)}
                  </motion.span>
                </motion.span>
              )}
            </motion.div>
            
            {/* Enhanced Glowing Effects */}
            {showGlow && (
              <>
                {/* Main Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                />
                
                {/* Secondary Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.2, 0.05],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-400/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
                />
                
                {/* Pulse Ring */}
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-emerald-400/50 rounded-full -translate-x-1/2 -translate-y-1/2"
                />
              </>
            )}

            {/* Loading Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-full mt-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 