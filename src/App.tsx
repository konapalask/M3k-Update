import { useState } from 'react'
import { Preloader } from './components/Preloader'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { MissionSection } from './components/MissionSection'
import { ProjectGallery } from './components/ProjectGallery'
import { DesignStyles } from './components/DesignStyles'
import { DesignProcess } from './components/DesignProcess'
import { TestimonialsSection } from './components/TestimonialsSection'
import { PartnersSection } from './components/PartnersSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { ConsultationModal } from './components/ConsultationModal'

export function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)
  const [consultationOpen, setConsultationOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#121212] text-[#f4f4f4] overflow-x-hidden">
      {/* Reference-Matched Opening Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Main Website Experience */}
      <div
        className={`transition-opacity duration-1000 ${
          preloaderDone ? 'opacity-100' : 'opacity-90'
        }`}
      >
        {/* Navigation */}
        <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Section 01: Cinematic Hero ("Living & Function") */}
        <HeroSection />

        {/* Section 02: Mission / Studio Introduction */}
        <MissionSection />

        {/* Section 03: Editorial Project Gallery ("The Form of" / "Interior Design") */}
        <ProjectGallery onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Section 04: Interior Design Style Selector */}
        <DesignStyles onSelectStyle={() => {}} />

        {/* Section 05: Design Process / Isometric 3D Workflow */}
        <DesignProcess />

        {/* Section 06: Client Testimonials (Curved Divider & Warm Atrium) */}
        <TestimonialsSection />

        {/* Section 07: Featured Partners Strip */}
        <PartnersSection />

        {/* Section 08: Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* Section 09: Grand Architectural Footer */}
        <Footer />
      </div>

      {/* Functional Consultation Flow Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  )
}

export default App
