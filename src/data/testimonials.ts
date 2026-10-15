export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  position: 'top-right' | 'middle-left' | 'bottom-right'
}

export const testimonials: Testimonial[] = [
  {
    id: 'sanji',
    quote: 'The entire process was seamless. They turned my empty space into a true sanctuary. Their attention to detail is unparalleled.',
    author: 'Vinsmoke Sanji',
    role: 'Homeowner',
    position: 'top-right'
  },
  {
    id: 'capone',
    quote: "I'm amazed at how they transformed my cluttered layout into such an airy, functional space. Every piece of furniture serves a purpose without sacrificing style. It's the perfect blend of 'less is more'.",
    author: 'Capone Bege',
    role: 'Architectural Enthusiast',
    position: 'middle-left'
  },
  {
    id: 'trafalgar',
    quote: 'The attention to detail is world-class. From the seamless cabinetry to the soft ambient lighting, the execution was flawless. They truly understood the Japandi philosophy and brought it to life in my home.',
    author: 'Trafalgar Law',
    role: 'Private Client',
    position: 'bottom-right'
  }
]
