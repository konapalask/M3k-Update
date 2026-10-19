import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

interface NavbarProps {
  onOpenContact?: () => void
  onOpenConsultation?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('HOME')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isOnLightSection, setIsOnLightSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('[data-theme]')
      let currentTheme = 'dark'

      // Check which section intersects with the top navbar line (50px from top)
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 55 && rect.bottom > 55) {
          currentTheme = section.getAttribute('data-theme') || 'dark'
          break
        }
      }

      setIsOnLightSection(currentTheme === 'light')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#mission' },
    { label: 'SERVICES', href: '#process' },
    { label: 'PORTFOLIO', href: '#gallery' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
          isOnLightSection
            ? 'pt-3.5 sm:pt-4.5 pb-2.5 sm:pb-3'
            : 'pt-6 sm:pt-8 pb-4'
        }`}
      >
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 flex items-center justify-between relative">
          {/* Brand Wordmark: M3K INTERIORS (Adapts to black on white background, original on dark background) */}
          <a href="#hero" className="flex flex-col select-none group z-20">
            <span
              className={`font-brand uppercase leading-none transition-all duration-300 ${
                isOnLightSection
                  ? 'text-black text-xl sm:text-[24px] font-semibold tracking-[0.18em]'
                  : 'text-white text-xl sm:text-[23px] font-medium tracking-[0.16em]'
              }`}
            >
              M3K
            </span>
            <span
              className={`font-sub uppercase mt-1 pl-0.5 transition-colors duration-300 ${
                isOnLightSection
                  ? 'text-[#a36b2b] text-[8.5px] sm:text-[9px] tracking-[0.45em] font-medium'
                  : 'text-[#d4a373] text-[8px] sm:text-[8.5px] tracking-[0.42em] font-normal'
              }`}
            >
              INTERIORS
            </span>
          </a>

          {/* Exact Dead-Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-auto">
            {navLinks.map((link) => {
              const isActive = activeTab === link.label
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveTab(link.label)}
                  className={`relative py-1 uppercase transition-all duration-300 font-sub ${
                    isOnLightSection
                      ? `text-[13.5px] sm:text-[14px] tracking-[0.14em] ${
                          isActive
                            ? 'text-black font-bold'
                            : 'text-black/85 hover:text-black font-semibold'
                        }`
                      : `text-[13px] tracking-[0.12em] ${
                          isActive
                            ? 'text-white font-medium'
                            : 'text-white/75 hover:text-white font-normal'
                        }`
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 transition-colors duration-300 ${
                        isOnLightSection
                          ? 'w-7 h-[2px] rounded-full bg-black'
                          : 'w-6 h-[1.5px] rounded-full bg-white'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action Icons: Search + Divider + Hamburger Menu */}
          <div
            className={`flex items-center gap-4 sm:gap-5 z-20 transition-colors duration-300 ${
              isOnLightSection ? 'text-black' : 'text-white/90'
            }`}
          >
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-1.5 transition-colors cursor-pointer ${
                isOnLightSection ? 'hover:text-black' : 'hover:text-white'
              }`}
              aria-label="Search site"
            >
              <Search size={19} strokeWidth={isOnLightSection ? 2 : 1.75} />
            </button>

            {/* Fine Vertical Hairline Divider */}
            <div
              className={`h-4 w-[1px] hidden sm:block transition-colors duration-300 ${
                isOnLightSection ? 'bg-black/30' : 'bg-white/25'
              }`}
            />

            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 transition-colors cursor-pointer flex flex-col justify-center items-center gap-1.5 w-7 h-7 ${
                isOnLightSection ? 'hover:text-black' : 'hover:text-white'
              }`}
              aria-label="Open menu"
            >
              <span
                className={`w-5 h-[1.5px] block transition-colors duration-300 ${
                  isOnLightSection ? 'bg-black' : 'bg-white'
                }`}
              />
              <span
                className={`w-5 h-[1.5px] block transition-colors duration-300 ${
                  isOnLightSection ? 'bg-black' : 'bg-white'
                }`}
              />
              <span
                className={`w-5 h-[1.5px] block transition-colors duration-300 ${
                  isOnLightSection ? 'bg-black' : 'bg-white'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-xl mx-auto px-6 mt-3"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search residences, styles, spaces..."
                  className={`w-full rounded-full px-5 py-2.5 text-xs focus:outline-none shadow-xl transition-all ${
                    isOnLightSection
                      ? 'bg-white text-black placeholder-black/45 border border-black/20 focus:border-[#b8864e]'
                      : 'bg-[#181716] text-white placeholder-white/40 border border-white/20 focus:border-[#d4a373]'
                  }`}
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-[#121110] border-l border-white/15 p-8 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <div className="flex flex-col">
                  <span className="font-serif tracking-[0.28em] text-lg text-white">
                    M 3 K
                  </span>
                  <span className="text-[8px] tracking-[0.4em] text-[#d4a373]">
                    INTERIORS
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.label)
                      setMobileMenuOpen(false)
                    }}
                    className="font-serif text-2xl text-white/90 hover:text-[#c9a87c] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="border-t border-white/10 pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onOpenConsultation) {
                    onOpenConsultation()
                  } else if (onOpenContact) {
                    onOpenContact()
                  }
                }}
                className="w-full py-3.5 bg-[#d4a373] text-black font-medium text-xs tracking-wider uppercase cursor-pointer hover:bg-[#c59564] transition-colors"
              >
                Inquire For Commission
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
