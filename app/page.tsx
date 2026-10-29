import Link from 'next/link'
import { Check, HeartHandshake, Leaf, ShieldCheck, Sparkles, UserRound } from 'lucide-react'
import { services, testimonials } from '@/lib/site-data'
import { BookButton } from '@/components/site/book-button'
import { FaqList } from '@/components/site/faq-list'
import { MobileBookingBar } from '@/components/site/mobile-booking-bar'
import { PrimaryLink } from '@/components/site/primary-button'
import { SectionIntro } from '@/components/site/section-intro'

const features = [
  { Icon: HeartHandshake, title: 'Pre-treatment assessment', copy: 'Your visit begins with an assessment to determine whether treatment is appropriate.' },
  { Icon: UserRound, title: 'Time for your questions', copy: 'Discuss the proposed treatment and what to expect before deciding whether to proceed.' },
  { Icon: Leaf, title: 'A comfortable setting', copy: 'A calm space designed around your appointment.' },
  { Icon: ShieldCheck, title: 'Aftercare guidance', copy: 'Receive guidance relevant to the treatment provided.' },
]

const steps = [
  ['01', 'Clinical assessment', 'A clinician reviews whether treatment is appropriate.'],
  ['02', 'Your appointment', 'If appropriate, your care team explains the treatment and what to expect before you decide whether to proceed.'],
  ['03', 'Aftercare guidance', 'Receive instructions relevant to your appointment.'],
]

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">IV HYDRATION <i>•</i> AUSTIN, TEXAS</span>
          <h1>IV hydration in a calm, comfortable setting.</h1>
          <p>Understand your appointment, explore availability, and plan your visit to Stillwell IV Studio.</p>
          <div className="hero-offer">
            <strong>IV Hydration <i>·</i> $179</strong>
            <span>Illustrative prototype pricing.</span>
          </div>
          <div id="hero-cta" className="hero-actions">
            <BookButton />
            <Link href="/services" className="text-link">Explore services</Link>
          </div>
          <small className="clinical-note">Treatment is subject to clinical assessment.</small>
        </div>
        <div className="hero-image">
          <img src={services[0].image} alt={services[0].imageAlt} />
        </div>
      </section>

      <section className="section container">
        <SectionIntro title="One appointment. A clear care process." copy="Understand what your visit includes before you book. Treatment is subject to clinical assessment." />
        <div className="feature-grid">
          {features.map(({ Icon, title, copy }) => (
            <article className="feature-card" key={title}>
              <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionIntro eyebrow="WHAT TO EXPECT" title="A clear process, from arrival to aftercare." />
          <div className="process-grid">
            {steps.map(([num, title, copy]) => (
              <article className="process-step" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionIntro title="Care that feels clear and personal." copy="From your first question to your aftercare instructions, the experience matters." />
        <div className="disclosure">Illustrative testimonials — fictional examples for design preview.</div>
        <div className="testimonial-grid">
          {testimonials.map((quote, i) => (
            <blockquote key={quote}>
              <Sparkles size={18} aria-hidden="true" />
              <p>{`“${quote}”`}</p>
              <cite>Fictional example <span>0{i + 1}</span></cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <SectionIntro title="Clear pricing for your visit." />
          <div className="pricing-card">
            <div className="pricing-main">
              <span className="eyebrow">THE IV HYDRATION VISIT</span>
              <div className="big-price">$179 <small>per appointment</small></div>
              <p>Illustrative prototype pricing</p>
              <div className="included">
                <strong>Included in this prototype offer</strong>
                {services[0].includes.map((item) => (
                  <span key={item}><Check size={14} aria-hidden="true" /> {item}.</span>
                ))}
              </div>
            </div>
            <div className="pricing-policy">
              <span className="policy-label">PROPOSED POLICY — REQUIRES BUSINESS APPROVAL</span>
              <p>Under this proposed policy, the $179 appointment fee applies only if treatment proceeds. If the clinician determines treatment is unsuitable, no appointment fee is charged.</p>
              <BookButton />
            </div>
          </div>
          <div className="guarantee">
            <Check size={18} aria-hidden="true" />
            <div>
              <span>PROPOSED SERVICE GUARANTEE</span>
              <h3>Know the price before you proceed.</h3>
              <p>We explain the appointment price and any applicable charges before you agree to treatment. No additional charge is made without your approval.</p>
              <small>Prototype policy for review. Clinical suitability and individual outcomes vary; treatment results are not guaranteed.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section container">
        <div className="faq-intro">
          <SectionIntro title="Questions before you book?" copy="Understand the appointment, the price, and what happens next." />
        </div>
        <div className="faq-list">
          <FaqList />
          <PrimaryLink href="/contact">Ask us a question</PrimaryLink>
          <small>Demo only. Treatment is subject to clinical assessment.</small>
        </div>
      </section>

      <MobileBookingBar watchId="hero-cta" />
    </>
  )
}
