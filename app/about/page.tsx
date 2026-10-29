import type { Metadata } from 'next'
import { ShieldCheck } from 'lucide-react'
import { values } from '@/lib/site-data'
import { BookButton } from '@/components/site/book-button'
import { PrimaryLink } from '@/components/site/primary-button'
import { PageHero, SectionIntro } from '@/components/site/section-intro'

export const metadata: Metadata = {
  title: 'About | Stillwell IV Studio',
  description: 'Learn about Stillwell IV Studio, a calm IV hydration studio in Austin, Texas built around clear, assessment-first care.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT STILLWELL" title="A quieter approach to IV hydration." copy="We built Stillwell around a simple idea: you should understand your care, the price, and the process before you commit to anything." />

      <section className="section care-section container">
        <div className="care-image">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85" alt="Healthcare professional preparing a calm care space" />
        </div>
        <div className="care-copy">
          <span className="eyebrow">OUR STORY</span>
          <h2>Care starts with understanding your needs.</h2>
          <p>Stillwell IV Studio is a fictional Austin studio designed for this prototype. Our approach puts clinical assessment first, gives you time to ask questions, and keeps pricing transparent from the start.</p>
          <div className="placeholder">
            <ShieldCheck size={18} aria-hidden="true" />
            <span>Verified provider profiles and credentials will appear here.</span>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionIntro eyebrow="WHAT GUIDES US" title="Principles behind every visit." />
          <div className="feature-grid">
            {values.map((value, i) => (
              <article className="feature-card" key={value.title}>
                <span className="value-number">0{i + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container cta-band">
        <SectionIntro title="Have a question before booking?" copy="Reach out to our team, or plan a demo visit now." />
        <div className="cta-actions">
          <BookButton />
          <PrimaryLink href="/contact" className="secondary">Contact us</PrimaryLink>
        </div>
      </section>
    </>
  )
}
