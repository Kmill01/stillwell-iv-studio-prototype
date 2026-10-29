import type { Metadata } from 'next'
import { Clock3, Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/site/contact-form'
import { PageHero } from '@/components/site/section-intro'

export const metadata: Metadata = {
  title: 'Contact | Stillwell IV Studio',
  description: 'Get in touch with Stillwell IV Studio in Austin, Texas with questions about appointments, pricing, or what to expect.',
}

const details = [
  { Icon: MapPin, label: 'Location', value: 'Austin, Texas', note: 'Verified address to be added before launch.' },
  { Icon: Clock3, label: 'Hours', value: 'To be confirmed', note: 'Opening hours will be published before launch.' },
  { Icon: Mail, label: 'Email', value: 'hello@stillwell.example', note: 'Fictional address for this prototype.' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="We're here to answer your questions." copy="Ask about appointments, pricing, or what to expect. We'll never ask for medical information through this form." />
      <section className="section container contact-layout">
        <div className="contact-details">
          {details.map(({ Icon, label, value, note }) => (
            <div key={label} className="contact-detail">
              <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <span className="muted-label">{label.toUpperCase()}</span>
                <strong>{value}</strong>
                <small>{note}</small>
              </div>
            </div>
          ))}
        </div>
        <ContactForm />
      </section>
    </>
  )
}
