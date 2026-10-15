import React from 'react'
import { motion } from 'framer-motion'

export const PartnersSection: React.FC = () => {
  // 7 minimalist architectural brand glyphs matching the symbols in frame 15
  const partnerLogos = [
    {
      name: 'B&B Italia',
      svg: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 fill-current">
          <rect x="6" y="8" width="28" height="6" rx="1" />
          <rect x="6" y="18" width="28" height="6" rx="1" />
          <rect x="6" y="28" width="28" height="6" rx="1" />
        </svg>
      ),
    },
    {
      name: 'Poliform',
      svg: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 fill-current">
          <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="20" cy="20" r="6" />
        </svg>
      ),
    },
    {
      name: 'Flos',
      svg: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 fill-current">
          <path d="M8 20 C8 12 32 12 32 20 C32 28 8 28 8 20 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="20" cy="20" r="3" />
        </svg>
      ),
    },
    {
      name: 'Molteni&C',
      svg: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 fill-current">
          <path d="M10 28 L10 12 L20 22 L30 12 L30 28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Minotti',
      svg: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 fill-current">
          <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <line x1="20" y1="8" x2="20" y2="32" stroke="currentColor" strokeWidth="2.5" />
          <line x1="8" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      name: 'Boffi',
      svg: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 fill-current">
          <line x1="10" y1="10" x2="18" y2="30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="20" y1="10" x2="28" y2="30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="30" y1="10" x2="38" y2="30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Rimadesio',
      svg: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 fill-current">
          <polygon points="20,6 34,34 6,34" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="20" cy="24" r="3" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-[#121212] text-white py-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 bg-[#df9f3c]" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50">
            FEATURED PARTNERS
          </span>
        </div>

        {/* Logos Bar between fine dividers */}
        <div className="border-y border-white/10 py-8 flex items-center justify-between gap-6 sm:gap-12 overflow-x-auto no-scrollbar">
          {partnerLogos.map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.15, color: '#df9f3c' }}
              className="text-white/40 hover:text-white transition-all duration-300 flex-shrink-0 cursor-pointer flex flex-col items-center gap-2"
              title={partner.name}
            >
              {partner.svg}
              <span className="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
