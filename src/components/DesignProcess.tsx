import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { processSteps } from '../data/process'

export const DesignProcess: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1) // Default to step 2 as shown in frame 12

  const nextStep = () => {
    setCurrentIndex((prev) => (prev + 1) % processSteps.length)
  }

  const prevStep = () => {
    setCurrentIndex((prev) => (prev - 1 + processSteps.length) % processSteps.length)
  }

  const activeStep = processSteps[currentIndex]

  return (
    <section
      id="workflow"
      className="relative bg-[#ffffff] text-[#1c1c1b] py-24 sm:py-36 overflow-hidden border-t border-black/5"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 bg-[#df9f3c]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#73716b]">
              WORKFLOW
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] text-[#1a1a19]"
          >
            Design Process
          </motion.h2>
        </div>

        {/* Central Spatial Carousel Presentation */}
        <div className="relative min-h-[460px] sm:min-h-[540px] flex items-center justify-center">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevStep}
            className="absolute left-2 sm:left-6 z-30 p-3 rounded-full hover:bg-black/5 text-black/60 hover:text-black transition-colors cursor-pointer"
            aria-label="Previous step"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextStep}
            className="absolute right-2 sm:right-6 z-30 p-3 rounded-full hover:bg-black/5 text-black/60 hover:text-black transition-colors cursor-pointer"
            aria-label="Next step"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>

          {/* Isometric Visual Stage */}
          <div className="relative w-full max-w-2xl flex items-center justify-center">
            {/* Adjacent Left Preview */}
            <div
              onClick={prevStep}
              className="hidden lg:block absolute -left-48 w-64 opacity-35 filter blur-[1px] hover:opacity-60 transition-opacity cursor-pointer transform scale-90"
            >
              <img
                src={
                  processSteps[
                    (currentIndex - 1 + processSteps.length) % processSteps.length
                  ].image
                }
                alt="Previous stage"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Active Center Stage Item */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 w-80 sm:w-96 md:w-[480px] flex items-center justify-center"
              >
                <img
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="w-full h-auto object-contain drop-shadow-xl"
                />

                {/* Hairline Pointer from Room Corner to Description */}
                <div className="hidden md:block absolute -bottom-6 -right-12 w-28 h-[1px] bg-black/20 origin-left rotate-45 pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Adjacent Right Preview */}
            <div
              onClick={nextStep}
              className="hidden lg:block absolute -right-48 w-64 opacity-35 filter blur-[1px] hover:opacity-60 transition-opacity cursor-pointer transform scale-90"
            >
              <img
                src={processSteps[(currentIndex + 1) % processSteps.length].image}
                alt="Next stage"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Description Block on Bottom Right */}
          <div className="absolute right-0 sm:right-6 bottom-0 sm:bottom-4 z-20 max-w-xs text-left bg-white/90 backdrop-blur-sm sm:bg-transparent p-4 sm:p-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="font-display font-semibold text-lg text-[#1a1a19] mb-1">
                  {activeStep.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#666560] leading-relaxed">
                  {activeStep.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots at Bottom Center */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {processSteps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'bg-[#1a1a19] scale-125'
                  : 'bg-[#d6d4ce] hover:bg-[#a8a69e]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
