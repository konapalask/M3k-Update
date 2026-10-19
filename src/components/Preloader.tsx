import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500)
    const t2 = setTimeout(() => setStep(2), 1400)
    const t3 = setTimeout(() => {
      setStep(3)
      onComplete()
    }, 2200)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete])

  if (step >= 3) return null

  const clipPaths = [
    'inset(50% 50% 50% 50%)',
    'inset(calc(50% - 90px) calc(50% - 90px) calc(50% - 90px) calc(50% - 90px))',
    'inset(0% 0% 0% 0%)',
  ]

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#100f0e] overflow-hidden pointer-events-none"
      >
        {/* Expanding interior viewport slice */}
        <motion.div
          animate={{
            clipPath: clipPaths[Math.min(step, 2)],
          }}
          transition={{
            duration: step === 1 ? 0.8 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 z-10 overflow-hidden will-change-[clip-path]"
        >
          <img
            src="/assets/lumiere_night.jpg"
            alt="Lumière Interiors reveal"
            className="w-full h-full object-cover object-center transform scale-100 will-change-transform"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Splitting Typographic Wordmark: Cinzel Roman + Tenor Sans */}
        <div className="relative z-20 flex items-center justify-center gap-6 sm:gap-10 text-white select-none">
          <motion.span
            animate={{
              x: step >= 2 ? -180 : 0,
              opacity: step >= 2 ? 0 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-brand tracking-[0.25em] text-2xl sm:text-3xl text-[#f5f5f5] font-medium"
          >
            M3K
          </motion.span>

          <motion.div
            animate={{
              scale: step >= 1 ? 0 : 1,
              opacity: step >= 1 ? 0 : 1,
            }}
            transition={{ duration: 0.35 }}
            className="w-1.5 h-1.5 rounded-full bg-[#d4a373]"
          />

          <motion.span
            animate={{
              x: step >= 2 ? 180 : 0,
              opacity: step >= 2 ? 0 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sub text-xs sm:text-sm tracking-[0.45em] text-[#d4a373] uppercase"
          >
            INTERIORS
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
