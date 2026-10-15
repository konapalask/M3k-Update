import React from 'react'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-white pt-20 sm:pt-28 pb-10 border-t border-white/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Giant Architectural Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center py-6 sm:py-12 border-b border-white/15"
        >
          <h2 className="font-display font-bold text-4xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-[0.25em] sm:tracking-[0.4em] uppercase text-white/95">
            M 3 K &nbsp; I N T E R I O R S
          </h2>
        </motion.div>

        {/* 3 Contact Columns Matching Frame 17 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 sm:py-16 text-center md:text-left border-b border-white/10">
          {/* Email */}
          <div>
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-2">
              EMAIL
            </span>
            <a
              href="mailto:contact@m3kinteriors.com"
              className="text-sm sm:text-base text-white/90 hover:text-[#df9f3c] transition-colors"
            >
              contact@m3kinteriors.com
            </a>
          </div>

          {/* Location */}
          <div>
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-2">
              LOCATION
            </span>
            <p className="text-sm sm:text-base text-white/90">
              M3K Design Studio, Road 36, Jubilee Hills
            </p>
          </div>

          {/* Time Zone */}
          <div className="md:text-right">
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-2">
              TIME ZONE
            </span>
            <p className="text-sm sm:text-base text-white/90 font-mono">
              UTC/GMT +5:30
            </p>
          </div>
        </div>

        {/* Studio Statement */}
        <div className="py-10 text-center max-w-2xl mx-auto">
          <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
            M3K Interiors delivers exceptional and functional interior design solutions
            globally, bringing beauty and purpose to every space.
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
          <span>&copy;M3K INTERIORS 2025</span>
        </div>
      </div>
    </footer>
  )
}
