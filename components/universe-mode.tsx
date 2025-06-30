"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, Volume2, VolumeX, Loader2 } from "lucide-react"
import BlackHole3D from "./black-hole-3d"

interface UniverseModeProps {
  isActive: boolean
  onToggle: () => void
}

// Performance optimization: detect mobile and reduce animations
function usePerformanceMode() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return isMobile
}

export default function UniverseMode({ isActive, onToggle }: UniverseModeProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isFading, setIsFading] = useState(false)
  const [isAudioLoading, setIsAudioLoading] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const isMobile = usePerformanceMode()

  // Lazy load audio only when Universe Mode is activated
  const loadAudio = async () => {
    if (audioLoaded || audio) return audio
    
    setIsAudioLoading(true)
    try {
      const spaceAudio = new Audio('/space-ambient.mp3')
      spaceAudio.loop = true
      spaceAudio.volume = 0 // Start silent for fade in
      spaceAudio.preload = 'none' // Don't preload
      
      // Wait for audio to be ready
      await new Promise((resolve, reject) => {
        spaceAudio.addEventListener('canplaythrough', resolve, { once: true })
        spaceAudio.addEventListener('error', reject, { once: true })
        spaceAudio.load() // Start loading
      })
      
      setAudio(spaceAudio)
      setAudioLoaded(true)
      setIsAudioLoading(false)
      return spaceAudio
    } catch (error) {
      console.warn('Audio failed to load:', error)
      setIsAudioLoading(false)
      return null
    }
  }

  // Load audio when Universe Mode is activated
  useEffect(() => {
    if (isActive && !audioLoaded && !isAudioLoading) {
      loadAudio()
    }
  }, [isActive, audioLoaded, isAudioLoading])

  // Cleanup audio when component unmounts
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause()
        audio.src = ''
        audio.remove()
      }
    }
  }, [audio])

  // Fade in/out helper
  const fadeVolume = (targetVolume: number, duration = 1200) => {
    if (!audio) return
    setIsFading(true)
    const start = audio.volume
    const diff = targetVolume - start
    const steps = 30
    let currentStep = 0
    const stepTime = duration / steps
    const fade = () => {
      currentStep++
      audio.volume = Math.max(0, Math.min(1, start + (diff * currentStep) / steps))
      if (currentStep < steps) {
        setTimeout(fade, stepTime)
      } else {
        setIsFading(false)
      }
    }
    fade()
  }

  // Play/pause and fade audio on mode change
  useEffect(() => {
    if (!audio || !audioLoaded) return
    if (isActive && !isMuted) {
      audio.play().then(() => {
        fadeVolume(0.3)
      }).catch(() => {
        // Autoplay restrictions
        audio.volume = 0.3
      })
    } else {
      fadeVolume(0, 800)
      setTimeout(() => audio.pause(), 900)
    }
  }, [isActive, isMuted, audio, audioLoaded])

  // Mute toggle with fade
  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audio && audioLoaded) {
      if (isMuted) {
        fadeVolume(0.3)
      } else {
        fadeVolume(0)
      }
    }
  }

  return (
    <>
      {/* Universe Mode Button */}
      <motion.button
        onClick={onToggle}
        className={`fixed top-4 right-4 z-[9999] p-3 rounded-full shadow-lg transition-all duration-300 ${
          isActive 
            ? 'bg-emerald-500/20 backdrop-blur-md border border-emerald-400/50 text-emerald-400' 
            : 'bg-black/50 backdrop-blur-md border border-gray-600/50 text-gray-300 hover:text-emerald-400 hover:border-emerald-400/50'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Rocket className="w-6 h-6" />
      </motion.button>

      {/* Sound Toggle Button (only visible in universe mode) */}
      <AnimatePresence>
        {isActive && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={toggleMute}
            disabled={isAudioLoading || !audioLoaded}
            className={`fixed top-4 right-16 z-[9999] p-3 rounded-full shadow-lg transition-all duration-300 ${
              isAudioLoading || !audioLoaded
                ? 'bg-gray-500/20 backdrop-blur-md border border-gray-400/50 text-gray-400 cursor-not-allowed'
                : 'bg-emerald-500/20 backdrop-blur-md border border-emerald-400/50 text-emerald-400 hover:scale-105 active:scale-95'
            }`}
          >
            {isAudioLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : !audioLoaded ? (
              <VolumeX className="w-6 h-6" />
            ) : isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Enhanced Universe Overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[9998] pointer-events-none"
          >
            {/* 3D Black Hole */}
            <div className="absolute inset-0 z-0">
              <BlackHole3D />
            </div>
            
            {/* Enhanced Stars - Reduced count for mobile */}
            <div className="absolute inset-0">
              {[...Array(isMobile ? 25 : 50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.1, 1, 0.1],
                    scale: [0.2, 1.5, 0.2],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Shooting Stars - Reduced count for mobile */}
            {[...Array(isMobile ? 4 : 8)].map((_, i) => (
              <motion.div
                key={`shooting-${i}`}
                className="absolute w-20 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: '-5rem',
                }}
                animate={{
                  x: ['0vw', '100vw'],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Nebula Clouds - Only show on desktop for performance */}
            {!isMobile && (
              <>
                <motion.div
                  className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.05, 0.2, 0.05],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}

            {/* Asteroid Belt - Reduced count for mobile */}
            <div className="absolute inset-0">
              {[...Array(isMobile ? 8 : 15)].map((_, i) => (
                <motion.div
                  key={`asteroid-${i}`}
                  className="absolute w-2 h-2 bg-emerald-600/60 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30 + Math.random() * 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Cosmic Dust Particles - Reduced count for mobile */}
            <div className="absolute inset-0">
              {[...Array(isMobile ? 15 : 30)].map((_, i) => (
                <motion.div
                  key={`dust-${i}`}
                  className="absolute w-0.5 h-0.5 bg-emerald-300/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 8,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 