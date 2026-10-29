import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/site-data'
import { PageHero } from '@/components/site/section-intro'

export const metadata: Metadata = {
  title: 'Services | Stillwell IV Studio',
  description: 'Explore appointment options at Stillwell IV Studio. Every treatment is subject to clinical assessment.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="SERVICES" title="Appointments, clearly explained." copy="Every option starts with a conversation and clinical assessment. Prices shown are illustrative prototype pricing." />
      <section className="section container">
        <div className="service-grid">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} className="service-card" key={service.slug}>
              <div className="service-card-image">
                <img src={service.image} alt={service.imageAlt} />
              </div>
              <div className="service-card-body">
                <div className="service-card-head">
                  <h2>{service.name}</h2>
                  <span>${service.price}</span>
                </div>
                <p>{service.summary}</p>
                <span className="text-link">View details <ArrowRight size={14} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
