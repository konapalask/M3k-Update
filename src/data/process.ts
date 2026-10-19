export interface ProcessStep {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  image: string
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery-sketch',
    number: '01',
    title: 'Architectural Blueprint',
    subtitle: 'Spatial Analysis & Dimensioning',
    description: 'Detailed structural surveying, isometric layout drafts, and ergonomic circulation analysis down to the millimeter.',
    image: '/assets/process_sketch_clean.jpg'
  },
  {
    id: 'design-mockup',
    number: '02',
    title: 'Design Mockup',
    subtitle: '3D Photorealistic Visualization',
    description: 'We create vivid 3D models that let you see textures, furniture layout, and how natural light interacts in your home.',
    image: '/assets/process_render_clean.jpg'
  },
  {
    id: 'atmospheric-realization',
    number: '03',
    title: 'Atmospheric Realization',
    subtitle: 'Ambient Lighting & Bespoke Joinery',
    description: 'Material curation, customized millwork installation, and tailored nocturnal illumination schemes for sublime living.',
    image: '/assets/process_night_clean.jpg'
  }
]
