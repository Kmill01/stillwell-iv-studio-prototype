export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export type Service = {
  slug: string
  name: string
  price: number
  summary: string
  description: string
  includes: string[]
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    slug: 'iv-hydration',
    name: 'IV Hydration',
    price: 179,
    summary: 'Our core appointment: a clinical assessment, IV hydration if appropriate, and aftercare guidance.',
    description:
      'Your visit begins with a pre-treatment assessment. If a clinician determines treatment is appropriate, your care team explains the process before you decide whether to proceed. You leave with aftercare guidance relevant to the treatment provided.',
    includes: ['Pre-treatment clinical assessment', 'IV hydration, if clinically appropriate', 'Aftercare guidance'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Calm, sunlit treatment room',
  },
  {
    slug: 'hydration-electrolytes',
    name: 'Hydration + Electrolytes',
    price: 209,
    summary: 'An illustrative extended appointment option, pending clinical and business review.',
    description:
      'This proposed option follows the same care process as our core appointment, with additional time to discuss your questions. The formulation and suitability criteria must be reviewed and approved by clinical leadership before launch.',
    includes: ['Pre-treatment clinical assessment', 'Extended appointment time', 'Treatment if clinically appropriate', 'Aftercare guidance'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Healthcare professional preparing a calm care space',
  },
  {
    slug: 'consultation',
    name: 'Consultation Only',
    price: 49,
    summary: 'A conversation with a clinician to ask questions before deciding on any treatment.',
    description:
      'Not sure whether IV hydration is right for you? A consultation gives you time to discuss your questions with a clinician, with no obligation to proceed with treatment.',
    includes: ['One-on-one conversation with a clinician', 'Time for your questions', 'No obligation to proceed'],
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Quiet consultation room with two chairs',
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export const testimonials = [
  'The price and appointment process were easy to understand. I knew what to expect before arriving.',
  'I appreciated having time to ask questions before deciding whether to proceed.',
  'The setting felt calm, and the aftercare instructions were explained clearly.',
]

export const faqs: [string, string][] = [
  ['Is IV hydration appropriate for me?', 'Booking does not establish that treatment is appropriate for you. A clinician must assess your suitability before treatment proceeds. You’ll have an opportunity to discuss your questions before making a decision.'],
  ['What is included in the $179 price?', 'The illustrative $179 appointment price includes a pre-treatment clinical assessment, IV hydration if clinically appropriate, and aftercare guidance. This is proposed prototype pricing and requires confirmation before launch.'],
  ['What happens if treatment isn’t appropriate for me?', 'Treatment will not proceed if the clinician determines it is unsuitable. Under the proposed prototype policy, no appointment fee would be charged in that situation. This policy requires business approval before launch.'],
  ['Are there additional charges or a membership commitment?', 'This prototype presents single appointments with no membership or recurring commitment. Any additional charges must be explained and approved before proceeding.'],
  ['Who will provide my treatment?', 'Verified provider profiles, qualifications, and clinical oversight details will be published before launch. These details are not yet available in this fictional prototype.'],
  ['How long does the appointment take?', 'Allow time for assessment, discussion, treatment if appropriate, and aftercare instructions. A verified appointment duration will be added before launch.'],
  ['Does the treatment involve needles, and are there risks?', 'IV treatment involves placing a catheter into a vein. It is a medical procedure and carries risks. Reviewed information about potential complications will be added before launch.'],
  ['What results can I expect?', 'Individual experiences and outcomes vary. This website does not guarantee a particular benefit or result. The fictional testimonials shown here are not evidence of treatment effectiveness.'],
  ['Can I cancel or reschedule?', 'The cancellation and rescheduling policy has not been finalized. Approved terms must be displayed before real bookings are enabled.'],
  ['Will this website reserve an appointment or charge me?', 'No. This is a frontend demonstration using sample availability. Completing the demo does not reserve an appointment, collect payment, or send your information to a clinic.'],
]

export const values = [
  { title: 'Clarity first', copy: 'Prices, process, and policies are explained before you commit to anything.' },
  { title: 'Assessment before treatment', copy: 'A clinician reviews suitability before any treatment proceeds.' },
  { title: 'Room for questions', copy: 'Every appointment includes time to talk through what to expect.' },
  { title: 'A calm setting', copy: 'Our studio is designed to feel quiet, unhurried, and comfortable.' },
]
