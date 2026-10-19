import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'

export const MissionSection: React.FC = () => {
  const [activeThumbnail, setActiveThumbnail] = useState<number>(0)
  const [previewOpen, setPreviewOpen] = useState(false)

  const perspectives = [
    {
      badge: 'PERSPECTIVE 01',
      subtitle: 'DAYLIGHT & PROPORTION',
      title: 'Architectural Living Volume',
      caption: 'Low-profile linen furnishings framed by continuous floor-to-ceiling natural daylight and warm acoustics.',
      image: '/assets/mission_living_1.jpg',
      specs: 'Living Salon • Double-Height Ceiling • Natural Oak & Quartzite',
    },
    {
      badge: 'PERSPECTIVE 02',
      subtitle: 'BESPOKE TIMBER JOINERY',
      title: 'Custom Floating Millwork',
      caption: 'Continuous fumed smoked oak cabinetry with concealed ambient illumination and precision bookmatching.',
      image: '/assets/mission_living_2.jpg',
      specs: 'Media Gallery • Integrated Acoustic Panels • Concealed Hardware',
    },
    {
      badge: 'PERSPECTIVE 03',
      subtitle: 'ORGANIC SOCIAL ATRIUM',
      title: 'Monolithic Dining Courtyard',
      caption: 'Open dining gallery calibrated for unhurried gatherings, hand-cast textures, and natural garden vistas.',
      image: '/assets/mission_living_3.jpg',
      specs: 'Dining Courtyard • Travertine Hearth • Linen & Bronze Detailing',
    },
  ]

  const nextPerspective = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveThumbnail((prev) => (prev + 1) % perspectives.length)
  }

  const prevPerspective = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveThumbnail((prev) => (prev - 1 + perspectives.length) % perspectives.length)
  }

  return (
    <section
      id="mission"
      data-theme="light"
      className="relative bg-[#f8f8f7] text-[#1c1c1b] py-24 sm:py-32 lg:py-36 overflow-hidden select-none border-b border-black/[0.05]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Architectural Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="font-sub text-[10.5px] sm:text-xs font-normal tracking-[0.38em] uppercase text-[#b8864e]">
            01 // PHILOSOPHY &amp; MISSION
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-[#b8864e]/35" />
        </div>

        {/* Top Editorial Row: Balanced Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Main Manifesto Headline */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] leading-[1.12] text-[#1a1a19] tracking-[-0.01em]"
            >
              Our mission is to transform your unique vision into a stunning reality.
            </motion.h2>
          </div>

          {/* Narrative Body Copy */}
          <div className="lg:col-span-5 lg:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <p className="font-sans text-sm sm:text-base text-[#52504b] font-light leading-relaxed">
                We are deeply committed to designing bespoke spaces that perfectly reflect your personality, lifestyle, and architectural aspirations.
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#73716a] font-light leading-relaxed">
                Every volume, curated material, and axis of natural light is harmonized to cultivate an enduring atmosphere of comfort, understated elegance, and quiet luxury.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Architectural Metric Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 pt-8 pb-10 sm:pt-10 sm:pb-12 border-y border-black/[0.08] my-12 sm:my-16"
        >
          <div>
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1a19] block tracking-tight">
              150<span className="text-[#b8864e] font-normal">+</span>
            </span>
            <span className="font-sub text-[11px] sm:text-xs text-[#706f69] tracking-[0.2em] uppercase block mt-1.5 font-normal">
              Bespoke Residences
            </span>
          </div>

          <div>
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1a19] block tracking-tight">
              14
            </span>
            <span className="font-sub text-[11px] sm:text-xs text-[#706f69] tracking-[0.2em] uppercase block mt-1.5 font-normal">
              Global Design Awards
            </span>
          </div>

          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1a19] block tracking-tight">
              100<span className="text-[#b8864e] font-normal">%</span>
            </span>
            <span className="font-sub text-[11px] sm:text-xs text-[#706f69] tracking-[0.2em] uppercase block mt-1.5 font-normal">
              Tailored Materiality
            </span>
          </div>
        </motion.div>

        {/* Generous 3-Photo Architectural Gallery Spread */}
        <div>
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <span className="font-sub text-[11px] sm:text-xs tracking-[0.25em] text-[#787670] uppercase font-normal">
              SELECTED RESIDENCE PERSPECTIVES
            </span>
            <span className="text-[11px] font-mono text-[#b8864e] uppercase tracking-wider hidden sm:block">
              CLICK ANY IMAGE TO EXPAND
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-9">
            {perspectives.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => {
                  setActiveThumbnail(idx)
                  setPreviewOpen(true)
                }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Generous Photograph Frame with Smooth Hover Zoom */}
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xs bg-[#e4e2dc] shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                  />

                  {/* Clean Subtle Frame Border */}
                  <div className="absolute inset-0 border border-black/[0.06] pointer-events-none" />

                  {/* Top Perspective Index Pill */}
                  <div className="absolute top-3.5 left-3.5 bg-black/65 backdrop-blur-md px-2.5 py-1 text-[9.5px] tracking-[0.22em] uppercase font-sub text-white/90">
                    {item.badge}
                  </div>

                  {/* Hover Overlay with View Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1a1a19] transform scale-80 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <Eye size={18} />
                    </div>
                  </div>
                </div>

                {/* Refined Architectural Typography Caption */}
                <div className="pt-4 flex flex-col">
                  <span className="font-sub text-[10px] tracking-[0.24em] text-[#b8864e] uppercase font-medium">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#1a1a19] mt-1 group-hover:text-[#b8864e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#6b6963] leading-relaxed font-light mt-1.5">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Modal Lightbox for Perspective Inspection */}
      <AnimatePresence>
        {previewOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-lg"
            onClick={() => setPreviewOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#141413] border border-white/15 overflow-hidden shadow-2xl text-white rounded-xs"
            >
              {/* Close Button */}
              <button
                onClick={() => setPreviewOpen(false)}
                className="absolute top-4 right-4 z-20 text-white/70 hover:text-white p-2 rounded-full bg-black/50 backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close preview"
              >
                <X size={20} />
              </button>

              {/* Prev / Next Arrows */}
              <button
                onClick={prevPerspective}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white p-2.5 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/80 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextPerspective}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white p-2.5 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/80 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>

              {/* High-Resolution Photograph Display */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden bg-black">
                <img
                  src={perspectives[activeThumbnail].image}
                  alt={perspectives[activeThumbnail].title}
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Metadata Drawer at Bottom */}
              <div className="p-6 sm:p-7 bg-[#141413] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="font-mono text-[10.5px] text-[#df9f3c] uppercase tracking-widest block mb-1">
                    {perspectives[activeThumbnail].badge} // {perspectives[activeThumbnail].subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {perspectives[activeThumbnail].title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-xl font-light">
                    {perspectives[activeThumbnail].caption}
                  </p>
                  <span className="text-[11px] font-mono text-[#a8a69f] block mt-2">
                    SPECIFICATIONS: {perspectives[activeThumbnail].specs}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono text-white/50 block">
                    0{activeThumbnail + 1} / 0{perspectives.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
