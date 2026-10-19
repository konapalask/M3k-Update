import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { designStyles, type DesignStyle } from '../data/styles'
import { Sparkles } from 'lucide-react'

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

  const activeStyleData =
    designStyles.find((s) => s.id === selectedStyle) || designStyles[0]

  // Positioning presets matching the exact visual composition
  const layoutPositions: Record<string, string> = {
    all: 'col-span-12 flex justify-center py-4',
    bohemian: 'col-span-12 sm:col-span-5 flex justify-start sm:pl-12 py-6',
    scandinavian: 'col-span-12 sm:col-span-7 flex justify-center sm:justify-start py-8',
    japandi: 'col-span-12 sm:col-span-6 flex justify-start sm:pl-20 py-6',
    industrial: 'col-span-12 sm:col-span-6 flex justify-end sm:pr-16 py-6',
  }

  // Curated color palette chips per style
  const stylePalettes: Record<string, string[]> = {
    all: ['#1a1a19', '#df9f3c', '#d6d4ce', '#f4f3ef'],
    bohemian: ['#a66f44', '#c9a87c', '#e2d3be', '#5a4632'],
    scandinavian: ['#ffffff', '#dedad2', '#9fa4a6', '#4a4f52'],
    industrial: ['#2b2b2b', '#8c7d70', '#b55a30', '#d1d1d1'],
    japandi: ['#1e1e1e', '#c2b29f', '#7d826a', '#eae6df'],
  }

  return (
    <section
      id="styles"
      data-theme="light"
      className="relative bg-[#f8f8f7] text-[#1c1c1b] py-24 sm:py-36 overflow-hidden select-none border-t border-black/5"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative">
        {/* Subtle section prompt */}
        <div className="text-center mb-8">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#73716b] flex items-center justify-center gap-1.5">
            <Sparkles size={12} className="text-[#df9f3c]" />
            Select an Aesthetic Archetype
          </span>
        </div>

        <div className="grid grid-cols-12 items-center relative min-h-[460px]">
          {/* Floating Hover Photographic Preview Card */}
          <AnimatePresence>
            {(hoveredStyle || selectedStyle !== 'all') && (
              <motion.div
                key={hoveredStyle ? hoveredStyle.id : selectedStyle}
                initial={{ opacity: 0, scale: 0.88, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 5 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-30 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border-4 border-white will-change-transform"
              >
                <img
                  src={(hoveredStyle || activeStyleData).image}
                  alt={(hoveredStyle || activeStyleData).name}
                  className="w-full h-full object-cover transform scale-100 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[#df9f3c] font-mono text-[10px] uppercase tracking-widest">
                    ACTIVE ARCHETYPE
                  </span>
                  <p className="text-white text-xs font-light tracking-wide mt-0.5">
                    {(hoveredStyle || activeStyleData).tagline}
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
                className={`${layoutPositions[style.id] || 'col-span-12'} relative z-10`}
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
                        ? 'text-[#a2a099]/35'
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

        {/* Dynamic Interactive Palette Bar at Bottom */}
        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#73716b] uppercase tracking-wider">
              {activeStyleData.name} Palette:
            </span>
            <div className="flex items-center gap-1.5">
              {(stylePalettes[selectedStyle] || stylePalettes.all).map((c, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border border-black/20 shadow-xs transition-transform hover:scale-125"
                  style={{ backgroundColor: c }}
                  title={`Color sample ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-xs font-mono text-[#555] flex items-center gap-2">
            <span className="text-[#df9f3c] font-semibold">{activeStyleData.count}</span>
            <span>Residences Designed in this vernacular</span>
          </div>
        </div>
      </div>
    </section>
  )
}
