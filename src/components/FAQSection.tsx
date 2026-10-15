import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data/faqs'
import { Plus, Minus } from 'lucide-react'

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('01') // Default to '01' open as shown in frame 16

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="bg-[#121212] text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em] text-white">
              Frequently Asked<br />Questions
            </h2>
          </motion.div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 flex flex-col">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id

              return (
                <div key={faq.id} className="border-b border-white/15 py-6">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-start justify-between gap-4 text-left group cursor-pointer"
                  >
                    <div className="flex items-start gap-6 sm:gap-10">
                      <span className="font-mono text-sm sm:text-base text-white/50 group-hover:text-[#df9f3c] transition-colors pt-0.5">
                        {faq.number}
                      </span>
                      <h3 className="font-display font-medium text-sm sm:text-base tracking-wider uppercase text-white/90 group-hover:text-white transition-colors">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="text-white/60 group-hover:text-[#df9f3c] transition-colors pt-0.5 flex-shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pl-12 sm:pl-16 pt-3 pr-6"
                      >
                        <p className="text-white/65 text-xs sm:text-sm leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
