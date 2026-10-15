import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0)

  useEffect(() => {
    // Step 0: Initial centered wordmark
    const t1 = setTimeout(() => setStep(1), 600) // Aperture begins revealing
    const t2 = setTimeout(() => setStep(2), 1600) // Full expansion & text split
    const t3 = setTimeout(() => {
      setStep(3)
      onComplete()
    }, 2500) // Complete reveal

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212] overflow-hidden pointer-events-none"
        >
          {/* Expanding interior viewport slice */}
          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={{
              width: step === 0 ? '0px' : step === 1 ? '160px' : '100vw',
              height: step === 0 ? '0px' : step === 1 ? '160px' : '100vh',
            }}
            transition={{
              duration: step === 1 ? 0.9 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute z-10 overflow-hidden shadow-2xl"
          >
            <img
              src="/assets/hero_interior_clean.jpg"
              alt="M3K Interiors reveal"
              className="w-screen h-screen object-cover object-center max-w-none"
            />
          </motion.div>

          {/* Splitting Typographic Wordmark */}
          <div className="relative z-20 flex items-center justify-center gap-6 sm:gap-10 tracking-[0.4em] sm:tracking-[0.6em] text-white font-medium text-xl sm:text-2xl select-none">
            <motion.span
              animate={{
                x: step >= 2 ? -180 : 0,
                opacity: step >= 2 ? 0 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold tracking-widest text-[#f5f5f5]"
            >
              M 3 K
            </motion.span>

            {/* Subtle center aperture indicator */}
            <motion.div
              animate={{
                scale: step >= 1 ? 0 : 1,
                opacity: step >= 1 ? 0 : 1,
              }}
              transition={{ duration: 0.4 }}
              className="w-2 h-2 rounded-full bg-[#df9f3c]"
            />

            <motion.span
              animate={{
                x: step >= 2 ? 180 : 0,
                opacity: step >= 2 ? 0 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[#d1d0cb]"
            >
              INTERIORS
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
