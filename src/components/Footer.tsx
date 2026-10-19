import React from 'react'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  return (
    <footer id="contact" data-theme="dark" className="bg-[#100f0e] text-white pt-20 sm:pt-28 pb-10 border-t border-white/10 select-none overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Giant Architectural Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center py-6 sm:py-12 border-b border-white/15"
        >
          <h2 className="font-serif font-light text-3xl sm:text-6xl md:text-7xl lg:text-[6.5rem] tracking-[0.2em] sm:tracking-[0.35em] uppercase text-white/95">
            M 3 K &nbsp; I N T E R I O R S
          </h2>
        </motion.div>

        {/* 3 Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 sm:py-16 text-center md:text-left border-b border-white/10">
          {/* Email */}
          <div>
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-2">
              STUDIO INQUIRIES
            </span>
            <a
              href="mailto:contact@m3kinteriors.com"
              className="text-sm sm:text-base text-white/90 hover:text-[#d4a373] transition-colors"
            >
              contact@m3kinteriors.com
            </a>
          </div>

          {/* Location */}
          <div>
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-2">
              DESIGN ATELIER
            </span>
            <p className="text-sm sm:text-base text-white/90">
              M3K Design Atelier, Luxury Living Residences
            </p>
          </div>

          {/* Time Zone */}
          <div className="md:text-right">
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-2">
              COMMISSIONS
            </span>
            <p className="text-sm sm:text-base text-white/90">
              Private Residential &amp; Hospitality
            </p>
          </div>
        </div>

        {/* Studio Statement */}
        <div className="py-10 text-center max-w-2xl mx-auto">
          <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
            M3K Interiors transforms spaces into stories of comfort, elegance, and timeless architectural harmony.
          </p>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 tracking-wider">
          <a
            href="#hero"
            className="hover:text-white transition-colors uppercase font-medium"
          >
            PRIVACY POLICY
          </a>
          <span>&copy; {new Date().getFullYear()} M3K INTERIORS. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  )
}
