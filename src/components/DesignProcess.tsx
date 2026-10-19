import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react'
import { processSteps } from '../data/process'

export const DesignProcess: React.FC = () => {
  // Store [currentIndex, direction] where direction 1 = forward (flows right-to-left)
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([1, 1])
  const [isPaused, setIsPaused] = useState(false)
  const [activePin, setActivePin] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const activeStep = processSteps[currentIndex]

  // Phase-specific hotspots for realistic architectural inspection
  const phaseHotspots: Record<
    number,
    Array<{ id: number; x: string; y: string; title: string; desc: string }>
  > = {
    0: [
      {
        id: 1,
        x: '26%',
        y: '48%',
        title: 'Fenestration Axis (4900mm)',
        desc: 'Triple-glazed thermal sliding glass facade optimizing natural passive solar gain',
      },
      {
        id: 2,
        x: '51%',
        y: '42%',
        title: 'Hearth Flue Alignment',
        desc: 'Centralized wood stove flue stack centered on fireproof concrete corner plinth',
      },
      {
        id: 3,
        x: '76%',
        y: '44%',
        title: 'Built-in Loggia Storage',
        desc: 'Recessed timber alcove dimensioned for stacked seasoned firewood and side credenza',
      },
    ],
    1: [
      {
        id: 1,
        x: '48%',
        y: '26%',
        title: 'Circadian Cove Lighting',
        desc: 'Indirect warm ambient LED channels recessed into the ceiling perimeter',
      },
      {
        id: 2,
        x: '52%',
        y: '60%',
        title: 'Ergonomic Modular Seating',
        desc: 'High-density memory foam encased in textured natural Belgian linen upholstery',
      },
      {
        id: 3,
        x: '80%',
        y: '56%',
        title: 'Integrated Floating Millwork',
        desc: 'Fluted natural smoked oak joinery with concealed acoustic push-to-open hardware',
      },
    ],
    2: [
      {
        id: 1,
        x: '26%',
        y: '44%',
        title: 'Nocturnal Sky Glass Reflection',
        desc: 'Deep blue evening sky contrast framed by insulated minimal timber window casings',
      },
      {
        id: 2,
        x: '51%',
        y: '46%',
        title: 'Warm Hearth Radiant Glow',
        desc: 'Cast-iron fireplace radiating 1800K warm embers across herringbone parquet',
      },
      {
        id: 3,
        x: '80%',
        y: '56%',
        title: 'Accentuated Credenza Lighting',
        desc: 'Concealed warm linear downlight grazing the textured acoustic timber wall',
      },
    ],
  }

  const currentHotspots = phaseHotspots[currentIndex] || phaseHotspots[1]

  const nextStep = () => {
    setActivePin(null)
    setSlide(([prev]) => [(prev + 1) % processSteps.length, 1])
  }

  const prevStep = () => {
    setActivePin(null)
    setSlide(([prev]) => [(prev - 1 + processSteps.length) % processSteps.length, -1])
  }

  const selectStep = (idx: number) => {
    setActivePin(null)
    setSlide(([prev]) => [idx, idx >= prev ? 1 : -1])
  }

  // Automatic smooth transition every 3 seconds (3000ms), flowing continuously right to left
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setSlide(([prev]) => [(prev + 1) % processSteps.length, 1])
      setActivePin(null)
    }, 3000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, currentIndex])

  // Motion variants for simultaneous right-to-left flow
  // When direction is positive (1): enters from right (+80px) and exits to left (-80px)
  const textSlideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 25 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 25 },
        opacity: { duration: 0.3 },
      },
    }),
  }

  const imageSlideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 25 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 25 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  }

  return (
    <section
      id="process"
      data-theme="light"
      className="relative bg-[#ffffff] text-[#1c1c1b] py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-b border-black/[0.06] select-none"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Eyebrow Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="font-sub text-[10.5px] sm:text-xs font-normal tracking-[0.38em] uppercase text-[#b8864e]">
              03 // SPATIAL ARCHITECTURE &amp; WORKFLOW
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#b8864e]/35" />
          </div>

          {/* Auto-Play 3s Status Pill */}
          <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06]">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-[#1a1a19] hover:text-[#b8864e] transition-colors p-0.5 cursor-pointer"
              title={isPaused ? 'Resume 3s auto-play' : 'Pause auto-play'}
              aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
            >
              {isPaused ? <Play size={12} /> : <Pause size={12} />}
            </button>
            <span className="text-[10.5px] font-mono text-[#73716b] tracking-wider uppercase">
              {isPaused ? 'PAUSED' : 'AUTO-CYCLE // 3S'}
            </span>
            {/* Live 3s Progress Line */}
            {!isPaused && (
              <div className="w-12 h-1 bg-black/10 rounded-full overflow-hidden">
                <motion.div
                  key={currentIndex}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: 'linear' }}
                  className="h-full bg-[#b8864e]"
                />
              </div>
            )}
          </div>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {processSteps.map((step, idx) => {
            const isActive = currentIndex === idx
            return (
              <button
                key={step.id}
                onClick={() => selectStep(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sub tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#1a1a19] text-white font-medium shadow-md scale-102'
                    : 'bg-black/[0.04] hover:bg-black/[0.08] text-[#6d6b65]'
                }`}
              >
                <span className={isActive ? 'text-[#d4a373]' : 'text-[#9c9a93]'}>
                  0{idx + 1}
                </span>
                <span>{step.title}</span>
              </button>
            )
          })}
        </div>

        {/* Main 2-Column Split: Perfectly Centered on Horizontal Midline */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column: Dedicated Editorial Content Panel - Vertically Centered */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Animated Editorial Content (Simultaneous Right-to-Left Flow) */}
            <div className="relative overflow-hidden w-full min-h-[360px] sm:min-h-[380px] flex flex-col justify-center">
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                <motion.div
                  key={activeStep.id}
                  custom={direction}
                  variants={textSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full space-y-5"
                >
                  {/* Phase Badge */}
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#d4a373]/15 text-[#b8864e] font-mono text-[11px] font-medium tracking-widest uppercase">
                      PHASE 0{currentIndex + 1} // 03
                    </span>
                    <span className="text-xs font-mono text-[#8a8882] tracking-wider uppercase">
                      {activeStep.subtitle}
                    </span>
                  </div>

                  {/* Main Phase Title */}
                  <h3 className="font-serif font-light text-3xl sm:text-4xl text-[#1a1a19] leading-[1.15]">
                    {activeStep.title}
                  </h3>

                  {/* Narrative Summary */}
                  <p className="font-sans text-sm sm:text-base text-[#5c5a55] font-light leading-relaxed">
                    {activeStep.description}
                  </p>

                  {/* Interactive Architectural Hotspots List */}
                  <div className="pt-4 border-t border-black/[0.08]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-sub text-[11px] tracking-[0.2em] uppercase text-[#787671] font-medium">
                        ARCHITECTURAL CALLOUTS
                      </span>
                      <span className="text-[10.5px] font-mono text-[#b8864e] flex items-center gap-1">
                        <Sparkles size={11} />
                        HOVER TO HIGHLIGHT
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {currentHotspots.map((pin) => {
                        const isHighlighted = activePin === pin.id
                        return (
                          <div
                            key={pin.id}
                            onMouseEnter={() => setActivePin(pin.id)}
                            onMouseLeave={() => setActivePin(null)}
                            onClick={() => setActivePin(isHighlighted ? null : pin.id)}
                            className={`p-3 rounded-xs border transition-all duration-300 cursor-pointer flex items-start gap-3 ${
                              isHighlighted
                                ? 'bg-black/[0.04] border-[#d4a373] shadow-sm'
                                : 'bg-transparent border-black/[0.06] hover:border-black/20'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-mono text-[10px] font-bold transition-colors ${
                                isHighlighted
                                  ? 'bg-[#1a1a19] text-[#d4a373]'
                                  : 'bg-black/10 text-[#444]'
                              }`}
                            >
                              {pin.id}
                            </span>
                            <div>
                              <h5 className="font-sans text-xs font-medium text-[#1a1a19]">
                                {pin.title}
                              </h5>
                              <p className="font-sans text-[11.5px] text-[#6d6b65] leading-snug mt-0.5">
                                {pin.desc}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stable Navigation Controls & Pagination */}
            <div className="flex items-center justify-between pt-5 mt-5 border-t border-black/[0.08]">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevStep}
                  className="w-10 h-10 rounded-full border border-black/15 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous step"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextStep}
                  className="w-10 h-10 rounded-full border border-black/15 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next step"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <span className="font-mono text-xs text-[#787671]">
                0{currentIndex + 1} &nbsp;/&nbsp; 0{processSteps.length}
              </span>
            </div>
          </div>

          {/* Right Column: Dedicated 3D Isometric Stage - Vertically Centered Across from Left Text */}
          <div className="lg:col-span-7 flex items-center justify-center relative">
            {/* Subtle Circular Radial Ambient Glow Behind Model */}
            <div className="absolute w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-[#d4a373]/12 via-black/[0.02] to-transparent pointer-events-none blur-3xl -z-10" />

            {/* 
              Stage Container:
              - -translate-y-4 sm:-translate-y-6 perfectly lifts the isometric room's visual centroid to align directly with the left column's text midline
              - max-w-[460px] sm:max-w-[500px] maintains balanced luxury scale
            */}
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] flex items-center justify-center overflow-hidden -translate-y-4 sm:-translate-y-6">
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                <motion.div
                  key={activeStep.id}
                  custom={direction}
                  variants={imageSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full flex items-center justify-center p-2 select-none"
                >
                  {/* 
                    CRITICAL: 
                    - mix-blend-multiply cleanly blends any pure white background seamlessly into #ffffff
                    - Uncut clean image: entire floor corner and outer perimeter completely visible with margins
                  */}
                  <img
                    src={activeStep.image}
                    alt={activeStep.title}
                    className="w-full h-auto object-contain mix-blend-multiply select-none will-change-transform drop-shadow-xs"
                  />

                  {/* Soft Elliptical Ground Pedestal Shadow Under Room */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[75%] h-8 bg-[radial-gradient(ellipse,rgba(0,0,0,0.12)_0%,transparent_70%)] pointer-events-none -z-10" />

                  {/* Interactive Hotspot Pins Positioned Accurately on the 3D Room */}
                  {currentHotspots.map((pin) => {
                    const isHighlighted = activePin === pin.id
                    return (
                      <div
                        key={pin.id}
                        style={{ left: pin.x, top: pin.y }}
                        className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                      >
                        <button
                          onClick={() => setActivePin(isHighlighted ? null : pin.id)}
                          onMouseEnter={() => setActivePin(pin.id)}
                          onMouseLeave={() => setActivePin(null)}
                          className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer relative ${
                            isHighlighted
                              ? 'bg-[#b8864e] text-white scale-125 ring-4 ring-[#b8864e]/30'
                              : 'bg-[#1a1a19] text-white hover:scale-115 ring-2 ring-white/80'
                          }`}
                          title={pin.title}
                          aria-label={pin.title}
                        >
                          <span className="text-[10px] font-bold font-mono">
                            {pin.id}
                          </span>

                          {/* Soft Outer Pulse Ring */}
                          <span className="absolute inset-0 rounded-full bg-[#b8864e] animate-ping opacity-25 pointer-events-none" />
                        </button>

                        {/* Clean Floating Tooltip */}
                        {isHighlighted && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            className="absolute left-9 -top-3 w-56 bg-[#181716] border border-white/15 text-white p-3 rounded-xs shadow-2xl text-left pointer-events-none z-40 backdrop-blur-md"
                          >
                            <span className="font-sans font-medium text-xs text-[#d4a373] block">
                              {pin.title}
                            </span>
                            <span className="font-sans text-[11px] text-white/70 block mt-1 leading-snug">
                              {pin.desc}
                            </span>
                          </motion.div>
                        )}
                      </div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

