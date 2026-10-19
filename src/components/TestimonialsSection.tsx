import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'
import { Star, CheckCircle2 } from 'lucide-react'

export const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0)

  return (
    <section
      id="testimonials"
      data-theme="dark"
      className="relative min-h-[900px] lg:min-h-[1050px] w-full bg-[#121212] text-white overflow-hidden flex flex-col justify-between py-24 sm:py-32"
    >
      {/* Curved Arched Mask Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-[#ffffff] rounded-b-[50%] z-20 pointer-events-none" />

      {/* Background Cinematic Warm Atrium Photograph (No GPU filter lag) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/testimonials_atrium_clean.jpg"
          alt="M3K Architectural Studio Atrium"
          className="w-full h-full object-cover object-center will-change-transform"
        />
        {/* Clean hardware-accelerated dark gradient overlay */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/90 via-black/30 to-[#121212]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full h-full flex flex-col justify-between">
        {/* Top Header: "Real Stories From Our Clients" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 sm:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <h2 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl leading-[1.0] tracking-[-0.03em] text-white">
              Real Stories<br />From Our Clients
            </h2>

            <div className="flex items-center gap-2 mt-4 text-[#df9f3c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#df9f3c" color="#df9f3c" />
              ))}
              <span className="text-xs text-white/80 ml-2 font-mono">
                5.0 RATED • VERIFIED ARCHITECTURAL COMMISSIONS
              </span>
            </div>
          </motion.div>

          {/* Testimonial 1: Top Right */}
          <div className="lg:col-span-6 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              onClick={() => setActiveTestimonial(0)}
              className={`max-w-md p-6 sm:p-8 border transition-all duration-300 cursor-pointer ${
                activeTestimonial === 0
                  ? 'bg-black/80 border-[#df9f3c] shadow-xl shadow-[#df9f3c]/10 scale-[1.02]'
                  : 'bg-black/50 border-white/10 hover:border-white/30'
              }`}
            >
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-4">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="font-display font-semibold text-sm text-white">
                    {testimonials[0].author}
                  </p>
                  <p className="text-xs text-white/50 tracking-wider">
                    {testimonials[0].role}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#df9f3c] flex items-center gap-1">
                  <CheckCircle2 size={12} /> Verified Client
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle & Bottom Spatial Layout of Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-16 sm:my-24">
          {/* Testimonial 2: Middle Left */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onClick={() => setActiveTestimonial(1)}
              className={`max-w-md p-6 sm:p-8 border transition-all duration-300 cursor-pointer ${
                activeTestimonial === 1
                  ? 'bg-black/80 border-[#df9f3c] shadow-xl shadow-[#df9f3c]/10 scale-[1.02]'
                  : 'bg-black/50 border-white/10 hover:border-white/30'
              }`}
            >
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-4">
                &ldquo;{testimonials[1].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="font-display font-semibold text-sm text-white">
                    {testimonials[1].author}
                  </p>
                  <p className="text-xs text-white/50 tracking-wider">
                    {testimonials[1].role}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#df9f3c] flex items-center gap-1">
                  <CheckCircle2 size={12} /> Verified Client
                </span>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-2" />

          {/* Testimonial 3: Bottom Right */}
          <div className="lg:col-span-5 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              onClick={() => setActiveTestimonial(2)}
              className={`max-w-md p-6 sm:p-8 border transition-all duration-300 cursor-pointer ${
                activeTestimonial === 2
                  ? 'bg-black/80 border-[#df9f3c] shadow-xl shadow-[#df9f3c]/10 scale-[1.02]'
                  : 'bg-black/50 border-white/10 hover:border-white/30'
              }`}
            >
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-4">
                &ldquo;{testimonials[2].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="font-display font-semibold text-sm text-white">
                    {testimonials[2].author}
                  </p>
                  <p className="text-xs text-white/50 tracking-wider">
                    {testimonials[2].role}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#df9f3c] flex items-center gap-1">
                  <CheckCircle2 size={12} /> Verified Client
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
