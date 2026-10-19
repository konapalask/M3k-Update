import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '../data/projects'
import { ArrowUpRight, X, Compass, Sparkles } from 'lucide-react'

interface ProjectGalleryProps {
  onOpenConsultation: () => void
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [blueprintModes, setBlueprintModes] = useState<Record<string, boolean>>({})
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const toggleBlueprint = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    setBlueprintModes((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Architectural blueprint specs mapping
  const projectSpecs: Record<
    string,
    { dimensions: string; ceiling: string; lighting: string; materials: string }
  > = {
    'jungle-retreat-house': {
      dimensions: '312 M² (3,358 SQ.FT)',
      ceiling: '4.8M Double-Height Cedar Vault',
      lighting: 'Circadian Linear Cove + 2700K Spots',
      materials: 'Natural Cedar • Honed Quartzite • Linen',
    },
    'the-urban-haven': {
      dimensions: '212 M² (2,280 SQ.FT)',
      ceiling: '3.6M Arched Plaster Coving',
      lighting: 'Indirect Reflected Architectural Glow',
      materials: 'Smoked Oak • Tadelakt Lime • Bouclé',
    },
    'the-modern-residence': {
      dimensions: '185 M² (1,990 SQ.FT)',
      ceiling: '4.2M Vaulted Timber Trusses',
      lighting: 'Natural Skylight Axis + Flos Recessed',
      materials: 'Natural White Oak • Matte Stone • Raw Wool',
    },
    'the-executive-suite': {
      dimensions: '265 M² (2,852 SQ.FT)',
      ceiling: '3.8M Continuous Monolithic Plane',
      lighting: 'Concealed LED Shelf Tracing (3000K)',
      materials: 'Bookmatched Marble • Bronze • Patinated Brass',
    },
  }

  const filterCategories = [
    { id: 'all', label: 'All Residences', count: '04' },
    { id: 'retreat', label: 'Retreat Houses', count: '01' },
    { id: 'apartment', label: 'Apartments', count: '01' },
    { id: 'villa', label: 'Villas', count: '01' },
    { id: 'suite', label: 'Executive Suites', count: '01' },
  ]

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'retreat') return p.id.includes('retreat')
    if (activeFilter === 'apartment') return p.category.toLowerCase().includes('apartment')
    if (activeFilter === 'villa') return p.category.toLowerCase().includes('villa')
    if (activeFilter === 'suite') return p.category.toLowerCase().includes('suite')
    return true
  })

  return (
    <section
      id="gallery"
      data-theme="dark"
      className="relative bg-[#100f0e] text-[#f4f4f4] py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-b border-white/[0.08] select-none"
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Architectural Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="font-sub text-[10.5px] sm:text-xs font-normal tracking-[0.38em] uppercase text-[#d4a373]">
            02 // PORTFOLIO &amp; ARCHITECTURAL MONOGRAPHS
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-[#d4a373]/35" />
        </div>

        {/* Master Editorial Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <h2 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] text-white tracking-[-0.01em]">
              The Form of <span className="italic font-normal text-[#d4a373]">Interior Design</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/65 font-light leading-relaxed mt-4 max-w-2xl">
              A curated chronicle of bespoke residences crafted with architectural precision, tactile materiality, and enduring spatial proportion.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {filterCategories.map((f) => {
              const isActive = activeFilter === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-2 rounded-full text-xs font-sub tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#d4a373] text-[#100f0e] font-medium shadow-lg shadow-[#d4a373]/25 scale-102'
                      : 'bg-[#181716] hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{f.label}</span>
                  <span className={`text-[10px] font-mono ${isActive ? 'text-[#100f0e]/75' : 'text-white/40'}`}>
                    ({f.count})
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Defined Architectural 2x2 Exhibition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isBlueprint = !!blueprintModes[project.id]

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-pointer flex flex-col bg-[#141312] border border-white/[0.09] hover:border-[#d4a373]/50 transition-all duration-500 rounded-xs shadow-2xl overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Viewport: Clean, Defined, Border-Free */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#0a0a09]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform scale-[1.02] group-hover:scale-106 transition-transform duration-700 ease-out will-change-transform"
                    />

                    {/* Clean Gradient Edge Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                    {/* Top Architectural Badge */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className="bg-black/75 backdrop-blur-md px-3 py-1 text-[10px] tracking-[0.22em] uppercase font-sub text-white/90 border border-white/10 rounded-xs">
                        0{idx + 1} // {project.category}
                      </span>
                    </div>

                    {/* Blueprint Mode Flip Over Button */}
                    <button
                      onClick={(e) => toggleBlueprint(e, project.id)}
                      className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xs bg-black/75 hover:bg-[#d4a373] hover:text-[#100f0e] text-white text-[10px] font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md border border-white/15 cursor-pointer"
                      title="Toggle Architectural CAD Blueprint View"
                    >
                      <Compass size={12} className={isBlueprint ? 'text-[#100f0e]' : 'text-[#d4a373]'} />
                      <span>{isBlueprint ? 'Photo View' : 'CAD Blueprint'}</span>
                    </button>

                    {/* View Monograph Hover Pill */}
                    <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/90 text-[#100f0e] px-3.5 py-1.5 rounded-full text-[11px] font-sub tracking-wider uppercase flex items-center gap-1.5 shadow-xl">
                        <span>EXPLORE MONOGRAPH</span>
                        <ArrowUpRight size={13} />
                      </span>
                    </div>

                    {/* Interactive Architectural Blueprint Overlay */}
                    <AnimatePresence>
                      {isBlueprint && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-[#0e0e0d]/95 backdrop-blur-md p-6 sm:p-7 text-white flex flex-col justify-between font-mono text-xs z-10 border border-[#d4a373]/30"
                        >
                          <div className="flex items-center justify-between border-b border-white/15 pb-3">
                            <span className="text-[#d4a373] font-semibold tracking-widest uppercase flex items-center gap-2">
                              <Sparkles size={13} />
                              ARCHITECTURAL BLUEPRINT SPECIFICATION
                            </span>
                            <span className="text-[10px] text-white/50">DWG // 00{idx + 1}</span>
                          </div>

                          <div className="space-y-3 py-2 text-white/80">
                            <div className="flex items-baseline justify-between border-b border-white/5 pb-1.5">
                              <span className="text-white/50">USABLE FLOOR AREA</span>
                              <span className="text-[#d4a373] font-medium">{projectSpecs[project.id]?.dimensions}</span>
                            </div>
                            <div className="flex items-baseline justify-between border-b border-white/5 pb-1.5">
                              <span className="text-white/50">CEILING ARCHITECTURE</span>
                              <span className="text-white font-light">{projectSpecs[project.id]?.ceiling}</span>
                            </div>
                            <div className="flex items-baseline justify-between border-b border-white/5 pb-1.5">
                              <span className="text-white/50">LIGHTING REGIME</span>
                              <span className="text-white font-light">{projectSpecs[project.id]?.lighting}</span>
                            </div>
                            <div className="flex items-baseline justify-between">
                              <span className="text-white/50">MATERIAL PALETTE</span>
                              <span className="text-white font-light text-right">{projectSpecs[project.id]?.materials}</span>
                            </div>
                          </div>

                          <div className="text-[10px] text-white/40 border-t border-white/10 pt-2 flex items-center justify-between">
                            <span>CLICK ANYWHERE ON CARD TO EXPAND MONOGRAPH</span>
                            <span className="text-[#d4a373]">M3K ARCHIVE</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Content & Typographic Base */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 border-t border-white/[0.08] bg-[#141312]">
                    <div>
                      {/* Sub-header info */}
                      <div className="flex items-baseline justify-between">
                        <span className="text-[10.5px] font-sub tracking-[0.24em] text-[#d4a373] uppercase font-medium">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs sm:text-[13px] text-white/60 tracking-wider">
                          {project.area}
                        </span>
                      </div>

                      {/* Main Residence Title */}
                      <h3 className="font-serif font-light text-2xl sm:text-3xl text-white group-hover:text-[#d4a373] transition-colors mt-2 flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight size={18} className="text-[#d4a373] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>

                      {/* Architectural Summary */}
                      <p className="font-sans text-xs sm:text-[13px] text-white/60 leading-relaxed font-light mt-2.5">
                        {project.description}
                      </p>
                    </div>

                    {/* Material Spec Pills */}
                    <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span>{projectSpecs[project.id]?.materials.split('•')[0]?.trim()}</span>
                      <span className="text-[#d4a373]/50">•</span>
                      <span>{projectSpecs[project.id]?.materials.split('•')[1]?.trim()}</span>
                      <span className="text-[#d4a373]/50">•</span>
                      <span>{projectSpecs[project.id]?.materials.split('•')[2]?.trim()}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Editorial Inquiry Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <span className="font-sub text-[11px] tracking-[0.25em] text-[#d4a373] uppercase font-normal block mb-1">
              CUSTOM RESIDENTIAL ARCHITECTURE
            </span>
            <p className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed font-light">
              Every space is bespoke. We design floor plans, bespoke joinery, and custom furnishings tailored to your way of life.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 bg-[#d4a373] hover:bg-[#c59564] text-[#100f0e] font-sub font-medium text-xs tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#d4a373]/20 hover:shadow-2xl hover:scale-102 cursor-pointer shrink-0"
          >
            Inquire For Commission
          </button>
        </motion.div>
      </div>

      {/* Interactive Project Monograph Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#141312] border border-white/20 overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col rounded-xs"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 text-white/70 hover:text-white p-2 rounded-full bg-black/60 backdrop-blur-md cursor-pointer"
                aria-label="Close monograph"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 bg-[#d4a373] text-[#100f0e] font-sub font-medium text-xs uppercase tracking-widest rounded-xs">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                      {selectedProject.title}
                    </h2>
                    <span className="text-xs font-mono text-[#d4a373] tracking-widest uppercase mt-1.5 block">
                      ARCHITECTURAL MONOGRAPH ARCHIVE
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="font-mono text-xl text-white font-medium block">
                      {selectedProject.area}
                    </span>
                    <span className="text-[11px] text-white/50 uppercase font-sub tracking-wider">USABLE INTERIOR VOLUME</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-b border-white/10 font-mono text-xs">
                  <div>
                    <span className="text-white/40 block mb-1">CEILING ARCHITECTURE</span>
                    <p className="text-white/90">
                      {projectSpecs[selectedProject.id]?.ceiling || '4.0M Double-Height'}
                    </p>
                  </div>
                  <div>
                    <span className="text-white/40 block mb-1">LIGHTING REGIME</span>
                    <p className="text-white/90">
                      {projectSpecs[selectedProject.id]?.lighting || 'Flos Recessed & Linear'}
                    </p>
                  </div>
                  <div>
                    <span className="text-white/40 block mb-1">MATERIAL SPECIFICATION</span>
                    <p className="text-white/90">
                      {projectSpecs[selectedProject.id]?.materials || 'Smoked Oak & Travertine'}
                    </p>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed font-light text-sm pt-6">
                  {selectedProject.description}
                </p>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedProject(null)
                      onOpenConsultation()
                    }}
                    className="px-7 py-3 bg-[#d4a373] text-[#100f0e] font-sub font-medium text-xs tracking-widest uppercase hover:bg-[#c59564] transition-colors rounded-full cursor-pointer"
                  >
                    Request Similar Concept
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
