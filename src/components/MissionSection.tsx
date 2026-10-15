import React from 'react'
import { motion } from 'framer-motion'

export const MissionSection: React.FC = () => {
  return (
    <section
      id="mission"
      className="relative bg-[#f8f8f7] text-[#1c1c1b] py-24 sm:py-32 overflow-hidden"
    >
      {/* Delicate Watermark Ampersand Glyph in Background */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-[#e8e7e1] pointer-events-none select-none font-script text-[32rem] sm:text-[42rem] opacity-40 leading-none">
        &amp;
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Section Label */}
          <div className="lg:col-span-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-sm tracking-[0.2em] uppercase font-semibold text-[#666663]"
            >
              Mission
            </motion.span>
          </div>

          {/* Right Column: Statement & Editorial Gallery */}
          <div className="lg:col-span-9">
            {/* Primary Editorial Manifesto */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.18] tracking-[-0.03em] text-[#1a1a19] max-w-4xl"
            >
              Our mission is to transform your unique vision into a stunning reality.
              We are deeply committed to designing bespoke spaces that perfectly reflect
              your personality and lifestyle.
            </motion.h2>

            {/* Bottom Row: 3 Image Thumbnails + Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12"
            >
              {/* 3 Thumbnails */}
              <div className="flex items-center gap-3">
                <div className="w-20 h-16 sm:w-24 sm:h-20 overflow-hidden shadow-sm group">
                  <img
                    src="/assets/mission_living_1.jpg"
                    alt="M3K Interior Living Concept"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="w-20 h-16 sm:w-24 sm:h-20 overflow-hidden shadow-sm group">
                  <img
                    src="/assets/mission_living_2.jpg"
                    alt="M3K Bespoke Joinery"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="w-20 h-16 sm:w-24 sm:h-20 overflow-hidden shadow-sm group">
                  <img
                    src="/assets/mission_living_3.jpg"
                    alt="M3K Open Dining Space"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Accompanying statement matching video text */}
              <p className="text-sm sm:text-base text-[#686763] max-w-md leading-relaxed font-normal">
                Our mission is to transform your vision into a reality. We are committed
                to designing spaces with architectural distinction.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
