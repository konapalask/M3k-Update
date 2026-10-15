import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { ArrowUpRight } from 'lucide-react'

interface ProjectGalleryProps {
  onOpenConsultation: () => void
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenConsultation }) => {

  return (
    <section
      id="gallery"
      className="relative bg-[#f8f8f7] text-[#1c1c1b] py-20 sm:py-32 overflow-hidden"
    >
      {/* Background Watermark Ampersand */}
      <div className="absolute right-12 bottom-12 text-[#eceae4] pointer-events-none select-none font-script text-[36rem] opacity-35 leading-none">
        &amp;
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Header Row with Asymmetric Headline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6"
          >
            <h2 className="font-display font-medium text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-[-0.03em] text-[#222221]">
              The<br />Form of
            </h2>
          </motion.div>

          {/* Project 1: Top Right (Jungle Retreat House) */}
          <div className="md:col-span-6 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full sm:max-w-md group cursor-pointer"
              onClick={onOpenConsultation}
            >
              <div className="overflow-hidden bg-[#eae8e3] aspect-[4/3] shadow-md">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between border-b border-black/10 pb-2">
                <div>
                  <h3 className="font-display font-medium text-lg sm:text-xl text-[#1a1a19] flex items-center gap-1 group-hover:text-[#df9f3c] transition-colors">
                    {projects[0].title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs text-[#706f6b] tracking-wider uppercase">
                    {projects[0].category}
                  </span>
                </div>
                <span className="font-mono text-sm text-[#444] font-medium">
                  {projects[0].area}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle Row: Project 2 (The Urban Haven) & Second Headline "Interior Design" */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-16 sm:my-28">
          {/* Project 2: Middle Left (The Urban Haven - grey chair) */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full sm:max-w-sm group cursor-pointer"
              onClick={onOpenConsultation}
            >
              <div className="overflow-hidden bg-[#eae8e3] aspect-square shadow-md">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between border-b border-black/10 pb-2">
                <div>
                  <h3 className="font-display font-medium text-lg sm:text-xl text-[#1a1a19] flex items-center gap-1 group-hover:text-[#df9f3c] transition-colors">
                    {projects[1].title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs text-[#706f6b] tracking-wider uppercase">
                    {projects[1].category}
                  </span>
                </div>
                <span className="font-mono text-sm text-[#444] font-medium">
                  {projects[1].area}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Headline 2: Bottom Right "Interior Design" */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 flex justify-end text-right"
          >
            <h2 className="font-display font-medium text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92] tracking-[-0.03em] text-[#222221]">
              Interior<br />Design
            </h2>
          </motion.div>
        </div>

        {/* Lower Row: Project 3 & Project 4 Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end my-16 sm:my-24">
          {/* Project 3: Center Lower (The Modern Residence) */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-full sm:max-w-xl group cursor-pointer"
              onClick={onOpenConsultation}
            >
              <div className="overflow-hidden bg-[#eae8e3] aspect-[16/11] shadow-md">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between border-b border-black/10 pb-2">
                <div>
                  <h3 className="font-display font-medium text-lg sm:text-xl text-[#1a1a19] flex items-center gap-1 group-hover:text-[#df9f3c] transition-colors">
                    {projects[2].title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs text-[#706f6b] tracking-wider uppercase">
                    {projects[2].category}
                  </span>
                </div>
                <span className="font-mono text-sm text-[#444] font-medium">
                  {projects[2].area}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Project 4: Right Lower (Executive Marble Desk) */}
          <div className="md:col-span-5 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full sm:max-w-sm group cursor-pointer"
              onClick={onOpenConsultation}
            >
              <div className="overflow-hidden bg-[#eae8e3] aspect-[4/3] shadow-md">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between border-b border-black/10 pb-2">
                <div>
                  <h3 className="font-display font-medium text-lg sm:text-xl text-[#1a1a19] flex items-center gap-1 group-hover:text-[#df9f3c] transition-colors">
                    {projects[3].title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs text-[#706f6b] tracking-wider uppercase">
                    {projects[3].category}
                  </span>
                </div>
                <span className="font-mono text-sm text-[#444] font-medium">
                  {projects[3].area}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA Row: "Discover our collection..." and "[ See More ]" Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-[#656460] text-sm sm:text-base max-w-lg leading-relaxed">
            Discover our collection of stunning interiors, showcasing quality
            craftsmanship and aesthetic brilliance.
          </p>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-3 border border-black/80 hover:border-black hover:bg-black hover:text-white transition-all duration-300 text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-pointer"
          >
            See More
          </button>
        </motion.div>
      </div>
    </section>
  )
}
