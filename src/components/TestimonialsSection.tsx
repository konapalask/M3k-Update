import React from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative min-h-[900px] lg:min-h-[1050px] w-full bg-[#121212] text-white overflow-hidden flex flex-col justify-between py-24 sm:py-32"
    >
      {/* Curved Arched Mask Top Divider matching frame 13 */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-[#ffffff] rounded-b-[50%] z-20 pointer-events-none" />

      {/* Background Cinematic Warm Atrium Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/testimonials_atrium_clean.jpg"
          alt="M3K Architectural Studio Atrium"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
        />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-black/40 to-[#121212]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full h-full flex flex-col justify-between">
        {/* Top Header: "Real Stories From Our Clients" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 sm:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6"
          >
            <h2 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl leading-[1.0] tracking-[-0.03em] text-white">
              Real Stories<br />From Our Clients
            </h2>
          </motion.div>

          {/* Testimonial 1: Top Right (Vinsmoke Sanji) */}
          <div className="lg:col-span-6 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="max-w-md bg-black/40 backdrop-blur-md p-6 sm:p-8 border border-white/10"
            >
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-4">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <div>
                <p className="font-display font-semibold text-sm text-white">
                  {testimonials[0].author}
                </p>
                <p className="text-xs text-white/50 tracking-wider">
                  {testimonials[0].role}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle & Bottom Spatial Layout of Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-16 sm:my-24">
          {/* Testimonial 2: Middle Left (Capone Bege) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="max-w-md bg-black/40 backdrop-blur-md p-6 sm:p-8 border border-white/10"
            >
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-4">
                &ldquo;{testimonials[1].quote}&rdquo;
              </p>
              <div>
                <p className="font-display font-semibold text-sm text-white">
                  {testimonials[1].author}
                </p>
                <p className="text-xs text-white/50 tracking-wider">
                  {testimonials[1].role}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-2" />

          {/* Testimonial 3: Bottom Right (Trafalgar Law) */}
          <div className="lg:col-span-5 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="max-w-md bg-black/40 backdrop-blur-md p-6 sm:p-8 border border-white/10"
            >
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mb-4">
                &ldquo;{testimonials[2].quote}&rdquo;
              </p>
              <div>
                <p className="font-display font-semibold text-sm text-white">
                  {testimonials[2].author}
                </p>
                <p className="text-xs text-white/50 tracking-wider">
                  {testimonials[2].role}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
