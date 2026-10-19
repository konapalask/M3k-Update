import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  onExploreDesigns?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreDesigns }) => {
  // Seamless Day to Night transition controller (starts at Night like reference)
  const [isNight, setIsNight] = useState(true)

  useEffect(() => {
    // Continuous slow cinematic transition cycle: 4s smooth fade + 4.5s settled dwell
    const interval = setInterval(() => {
      setIsNight((prev) => !prev)
    }, 8500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      data-theme="dark"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#100f0e]"
    >
      {/* Background Architectural Living Space with Seamless Day/Night Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Layer 01: Daytime Living Room (Sunny natural daylight through floor-to-ceiling windows) */}
        <img
          src="/assets/lumiere_day.jpg"
          alt="M3K Interiors Luxury Living Space - Daylight"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 will-change-transform"
        />

        {/* Layer 02: Nighttime Living Room (Warm glowing cove lighting, shelf lights, evening ambiance) */}
        <div
          className={`absolute inset-0 transition-opacity duration-[4000ms] ease-in-out will-change-[opacity] ${
            isNight ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/assets/lumiere_night.jpg"
            alt="M3K Interiors Luxury Living Space - Night Ambiance"
            className="w-full h-full object-cover object-center transform scale-100 will-change-transform"
          />
        </div>

        {/* Subtle cinematic gradient to guarantee pristine legibility over central room volume */}
        <div className="absolute inset-0 bg-radial from-black/45 via-black/25 to-black/65 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/55 pointer-events-none" />
      </div>

      {/* Hero Editorial Content Block: Horizontally & Vertically Centered with High-Fashion Interior Serif */}
      <div className="relative z-20 w-full px-6 sm:px-12 max-w-3xl mx-auto text-center flex flex-col items-center justify-center select-none pt-8 pb-12 sm:pt-10 sm:pb-14">
        {/* Eyebrow Label: BEAUTIFUL SPACES (Tenor Sans Architectural Tracking) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2.5 sm:mb-3"
        >
          <span className="font-sub text-[10px] sm:text-[11px] font-normal tracking-[0.4em] uppercase text-[#d4a373] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            B E A U T I F U L &nbsp; S P A C E S
          </span>
        </motion.div>

        {/* Master Headline: THOUGHTFULLY DESIGNED FOR YOU (All Capital - Compact Editorial Scale) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 sm:mb-5 max-w-2xl sm:max-w-3xl mx-auto"
        >
          <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.08] tracking-[0.06em] uppercase text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            THOUGHTFULLY<br />
            <span className="whitespace-nowrap">DESIGNED FOR YOU</span>
          </h1>
        </motion.div>

        {/* Subtitle Description (Outfit Architectural Sans) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-7"
        >
          <p className="font-sans text-xs sm:text-sm md:text-[15px] text-white/90 font-light leading-relaxed max-w-lg mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Transform your space into a story of comfort, elegance and timeless design.
          </p>
        </motion.div>

        {/* CTA Action Button: EXPLORE OUR DESIGNS → (All Capital) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#portfolio"
            onClick={onExploreDesigns}
            className="px-7 py-3 sm:px-8 sm:py-3.5 bg-[#d4a373] hover:bg-[#c49562] text-[#121110] font-sub font-medium text-xs sm:text-[12.5px] tracking-[0.16em] uppercase rounded-full shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-[#d4a373]/25 transition-all duration-300 inline-flex items-center gap-2.5 cursor-pointer group active:scale-95"
          >
            <span>EXPLORE OUR DESIGNS</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300 text-[#121110]"
            />
          </a>
        </motion.div>
      </div>

      {/* Clean Bottom Centered Scroll Indicator (Tenor Sans Architectural) */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 select-none">
        <a
          href="#mission"
          className="flex flex-col items-center gap-1.5 text-white/65 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[10px] sm:text-[10.5px] tracking-[0.38em] uppercase font-sub drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="text-[#d4a373] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </a>
      </div>
    </section>
  )
}
