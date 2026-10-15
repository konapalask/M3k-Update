import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { designStyles, type DesignStyle } from '../data/styles'

interface DesignStylesProps {
  onSelectStyle?: (styleId: string) => void
}

export const DesignStyles: React.FC<DesignStylesProps> = ({ onSelectStyle }) => {
  const [hoveredStyle, setHoveredStyle] = useState<DesignStyle | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<string>('all')

  const handleSelect = (style: DesignStyle) => {
    setSelectedStyle(style.id)
    if (onSelectStyle) onSelectStyle(style.id)
  }

  // Positioning presets matching the exact visual composition in the video
  const layoutPositions: Record<string, string> = {
    all: 'col-span-12 flex justify-center py-4',
    bohemian: 'col-span-12 sm:col-span-5 flex justify-start sm:pl-12 py-6',
    scandinavian: 'col-span-12 sm:col-span-7 flex justify-center sm:justify-start py-8',
    japandi: 'col-span-12 sm:col-span-6 flex justify-start sm:pl-20 py-6',
    industrial: 'col-span-12 sm:col-span-6 flex justify-end sm:pr-16 py-6',
  }

  return (
    <section
      id="styles"
      className="relative bg-[#f8f8f7] text-[#1c1c1b] py-24 sm:py-36 overflow-hidden select-none border-t border-black/5"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative">
        <div className="grid grid-cols-12 items-center relative min-h-[460px]">
          {/* Floating Hover Photographic Preview Card */}
          <AnimatePresence>
            {hoveredStyle && (
              <motion.div
                key={hoveredStyle.id}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 5 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-10 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={hoveredStyle.image}
                  alt={hoveredStyle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <p className="text-white text-xs font-light tracking-wide">
                    {hoveredStyle.tagline}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scattered Typographic Style Elements */}
          {designStyles.map((style) => {
            const isHovered = hoveredStyle?.id === style.id
            const isSelected = selectedStyle === style.id

            return (
              <div
                key={style.id}
                className={`${layoutPositions[style.id] || 'col-span-12'} relative z-20`}
              >
                <motion.div
                  onMouseEnter={() => setHoveredStyle(style)}
                  onMouseLeave={() => setHoveredStyle(null)}
                  onClick={() => handleSelect(style)}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer inline-flex items-baseline gap-2 group transition-all"
                >
                  <span
                    className={`font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.03em] transition-all duration-300 ${
                      isHovered || isSelected
                        ? 'text-[#141414] font-medium drop-shadow-sm'
                        : hoveredStyle
                        ? 'text-[#a2a099]/40'
                        : 'text-[#85837c]'
                    }`}
                  >
                    {style.name}
                  </span>
                  <span
                    className={`font-mono text-xs sm:text-sm transition-colors duration-300 ${
                      isHovered || isSelected
                        ? 'text-[#df9f3c] font-semibold'
                        : 'text-[#9c9a93]'
                    }`}
                  >
                    ({style.count})
                  </span>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
