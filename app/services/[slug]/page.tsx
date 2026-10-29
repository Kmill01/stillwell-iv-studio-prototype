import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check } from 'lucide-react'
import { getService, services } from '@/lib/site-data'
import { BookButton } from '@/components/site/book-button'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: 'Service not found | Stillwell IV Studio' }
  return { title: `${service.name} | Stillwell IV Studio`, description: service.summary }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <section className="hero container service-hero">
        <div className="hero-copy">
          <Link href="/services" className="back-link"><ArrowLeft size={14} aria-hidden="true" /> All services</Link>
          <span className="eyebrow">SERVICE</span>
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          <div className="hero-offer">
            <strong>${service.price} <i>·</i> per appointment</strong>
            <span>Illustrative prototype pricing.</span>
          </div>
          <BookButton serviceSlug={service.slug}>Book {service.name}</BookButton>
          <small className="clinical-note">Treatment is subject to clinical assessment.</small>
        </div>
        <div className="hero-image">
          <img src={service.image} alt={service.imageAlt} />
        </div>
      </section>
      <section className="section process-section">
        <div className="container detail-grid">
          <div>
            <span className="eyebrow">WHAT&apos;S INCLUDED</span>
            <ul className="check-list">
              {service.includes.map((item) => (
                <li key={item}><Check size={16} aria-hidden="true" /> {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">OTHER OPTIONS</span>
            <ul className="other-services">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}><span>{s.name}</span><span>${s.price}</span></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
