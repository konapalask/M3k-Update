export interface FAQItem {
  id: string
  number: string
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    id: '01',
    number: '01',
    question: 'WHAT IS YOUR DESIGN PROCESS?',
    answer: 'Our process typically involves an initial consultation, concept development, design refinement, and final implementation. We work closely with you at every stage.'
  },
  {
    id: '02',
    number: '02',
    question: 'HOW DO YOU DETERMINE THE PROJECT BUDGET?',
    answer: 'We establish detailed itemized cost breakdowns covering architectural joinery, finishes, furnishings, and site management early in concept development, ensuring total transparency.'
  },
  {
    id: '03',
    number: '03',
    question: 'CAN I USE MY OWN CONTRACTOR?',
    answer: 'Yes, we regularly collaborate with trusted client contractors while providing architectural supervision, technical drawings, and site coordination.'
  },
  {
    id: '04',
    number: '04',
    question: 'WHAT ARE YOUR STANDARD LEAD TIMES?',
    answer: 'Comprehensive residential projects typically range from 6 to 14 weeks depending on the scale, custom millwork, and procurement specifications.'
  }
]
