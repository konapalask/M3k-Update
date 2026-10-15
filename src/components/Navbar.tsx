import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  onOpenConsultation: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#mission' },
    { label: 'Services', href: '#styles' },
    { label: 'Projects', href: '#gallery' },
    { label: 'Process', href: '#workflow' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#121212]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group tracking-[0.25em] text-white font-semibold text-lg sm:text-xl uppercase transition-colors"
          >
            <span className="font-display">M3K</span>
            <span className="text-white/40 group-hover:text-[#df9f3c] transition-colors font-light text-xs sm:text-sm tracking-[0.3em]">
              INTERIORS
            </span>
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#df9f3c] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-none bg-[#df9f3c] hover:bg-[#c6892e] text-black font-medium text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#df9f3c]/20 flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-3.5 py-1.5 bg-[#df9f3c] text-black text-xs font-semibold"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 hover:text-[#df9f3c] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#121212]/98 backdrop-blur-xl pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-light text-white/90 hover:text-[#df9f3c] flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={20} className="text-[#df9f3c]" />
                </motion.a>
              ))}
            </nav>

            <div className="pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenConsultation()
                }}
                className="w-full py-4 bg-[#df9f3c] text-black font-semibold tracking-wider uppercase text-center block text-sm"
              >
                Book a Consultation
              </button>
              <div className="mt-8 text-xs text-white/40 tracking-widest text-center">
                M3K INTERIORS ARCHITECTURAL STUDIO
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
