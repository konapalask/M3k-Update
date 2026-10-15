import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#121212]"
    >
      {/* Background Architectural Interior Photo */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          src="/assets/hero_interior_clean.jpg"
          alt="M3K Interiors Luxury Architectural Living Space"
          className="w-full h-full object-cover object-center filter brightness-[0.88]"
        />
        {/* Soft atmospheric gradient vignette to ensure contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/45" />
      </div>

      {/* Decorative hairline crossing the hero */}
      <div className="absolute top-[48%] left-0 right-0 h-[1px] bg-white/15 z-10 pointer-events-none" />

      {/* Center Display Headline */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 w-full pt-24 sm:pt-28">
        <div className="relative select-none">
          {/* "Living" */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-baseline"
          >
            <h1 className="text-white font-display font-medium text-[4.8rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem] leading-[0.88] tracking-[-0.04em]">
              Living
            </h1>
          </motion.div>

          {/* Cursive Gold Ampersand linking between words */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[38%] sm:left-[35%] md:left-[32%] top-[38%] sm:top-[36%] z-30 pointer-events-none"
          >
            <span className="font-script text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10.5rem] text-[#df9f3c] drop-shadow-[0_4px_18px_rgba(0,0,0,0.5)]">
              &amp;
            </span>
          </motion.div>

          {/* "Function" */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-end pr-2 sm:pr-12 md:pr-24 -mt-4 sm:-mt-8 md:-mt-12"
          >
            <h2 className="text-white font-display font-medium text-[4.8rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem] leading-[0.88] tracking-[-0.04em]">
              Function
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Bottom Architectural Overlay Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-8 sm:pb-12 pt-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-white/20 pt-6">
          {/* Left: Award Metric */}
          <div className="md:col-span-3">
            <p className="text-white font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase">
              AWARD-WINNING DESIGN
            </p>
            <div className="flex items-center gap-1 mt-1 text-[#df9f3c]">
              <span className="text-xs text-white/80 mr-1.5 font-light tracking-wider">
                Excelent
              </span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="#df9f3c" color="#df9f3c" />
              ))}
            </div>
          </div>

          {/* Center: Curated Editorial Statement */}
          <div className="md:col-span-7">
            <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl">
              Blends with innovative design and timeless aesthetics to create spaces
              that are both beautiful and highly functional.
            </p>
          </div>

          {/* Right: Year Badge */}
          <div className="md:col-span-2 text-left md:text-right">
            <span className="text-white/60 font-mono text-xs sm:text-sm tracking-widest">
              2025
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
