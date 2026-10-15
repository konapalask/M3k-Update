import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, AlertCircle, Send } from 'lucide-react'
import confetti from 'canvas-confetti'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  fullName: string
  phone: string
  email: string
  projectType: string
  location: string
  projectArea: string
  budgetRange: string
  description: string
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Luxury Residential Interior',
    location: '',
    projectArea: '',
    budgetRange: '₹35L – ₹75L ($50k–$100k)',
    description: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {}
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address'
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required'
    } else if (formData.phone.length < 8) {
      errs.phone = 'Please provide a valid phone number'
    }
    if (!formData.location.trim()) errs.location = 'Project location / city is required'
    if (!formData.description.trim()) errs.description = 'Please describe your space requirements'

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    // Store in localStorage for demo / client persistence
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('m3k_consultations') || '[]')
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        })
        localStorage.setItem('m3k_consultations', JSON.stringify(stored))
      } catch (err) {
        console.warn('Storage failed', err)
      }

      setLoading(false)
      setSubmitted(true)

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#df9f3c', '#ffffff', '#222222'],
      })
    }, 700)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: 'Luxury Residential Interior',
      location: '',
      projectArea: '',
      budgetRange: '₹35L – ₹75L ($50k–$100k)',
      description: '',
    })
    setSubmitted(false)
    setErrors({})
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-2xl bg-[#181818] border border-white/15 text-white shadow-2xl p-6 sm:p-10 my-8 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#df9f3c]/20 text-[#df9f3c] flex items-center justify-center rounded-full mx-auto mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display font-medium text-2xl sm:text-3xl text-white mb-2">
                  Consultation Booked
                </h3>
                <p className="text-white/70 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Our senior architectural designer will contact you within 24 hours to review your space specifications.
                </p>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#df9f3c] text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#c6892e] transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-[#df9f3c]" />
                    <span className="text-xs font-semibold tracking-[0.25em] text-[#df9f3c] uppercase">
                      STUDIO ENQUIRY
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-white">
                    Book an Architectural Consultation
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-1 font-light">
                    Transform your residential or commercial space with M3K Interiors bespoke design.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full bg-[#222222] border px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-white/10 focus:border-[#df9f3c]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className={`w-full bg-[#222222] border px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-white/10 focus:border-[#df9f3c]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className={`w-full bg-[#222222] border px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-white/10 focus:border-[#df9f3c]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="e.g. Jubilee Hills, Hyderabad"
                        className={`w-full bg-[#222222] border px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                          errors.location
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-white/10 focus:border-[#df9f3c]'
                        }`}
                      />
                      {errors.location && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full bg-[#222222] border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#df9f3c]"
                      >
                        <option>Luxury Residential Interior</option>
                        <option>Penthouse / Apartment</option>
                        <option>Contemporary Villa</option>
                        <option>Commercial / Executive Office</option>
                        <option>Bespoke Joinery & Styling</option>
                      </select>
                    </div>

                    {/* Project Area */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                        Area (Approx)
                      </label>
                      <input
                        type="text"
                        value={formData.projectArea}
                        onChange={(e) =>
                          setFormData({ ...formData, projectArea: e.target.value })
                        }
                        placeholder="e.g. 3,500 sq ft / 325 M²"
                        className="w-full bg-[#222222] border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#df9f3c]"
                      >
                      </input>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                        Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full bg-[#222222] border border-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#df9f3c]"
                      >
                        <option>₹25L – ₹45L ($30k–$60k)</option>
                        <option>₹45L – ₹80L ($60k–$100k)</option>
                        <option>₹80L – ₹1.5Cr ($100k–$200k)</option>
                        <option>₹1.5Cr+ ($200k+)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                      Project Vision & Details *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Share your timeline, current space condition, aesthetic preferences, and special requirements..."
                      className={`w-full bg-[#222222] border px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                        errors.description
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-white/10 focus:border-[#df9f3c]'
                      }`}
                    />
                    {errors.description && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-[#df9f3c] hover:bg-[#c6892e] text-black font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Transmitting Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-white/40 text-center mt-3">
                      Your details are held confidentially under M3K Interiors Privacy Policy.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
