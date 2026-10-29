'use client'

import { useEffect, useState } from 'react'
import { Check, X } from 'lucide-react'
import { getService, services } from '@/lib/site-data'
import { PrimaryButton } from './primary-button'

const dates = ['Thu, Nov 12', 'Fri, Nov 13', 'Mon, Nov 16']
const times = ['9:00 AM', '11:30 AM', '2:00 PM']
const stepLabels = ['Appointment', 'Contact details', 'Review']

export function BookingFlow({ initialServiceSlug, close }: { initialServiceSlug: string; close: () => void }) {
  const [step, setStep] = useState(1)
  const [serviceSlug, setServiceSlug] = useState(initialServiceSlug)
  const [slot, setSlot] = useState('')
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ first: '', last: '', email: '' })
  const service = getService(serviceSlug) ?? services[0]

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [close])

  const contactValid = form.first.trim() && form.last.trim() && /\S+@\S+\.\S+/.test(form.email)

  return (
    <div className="overlay" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="booking-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <div className="booking-top">
          <div>
            <span className="eyebrow">DEMO BOOKING</span>
            <h2 id="booking-title">Plan your visit</h2>
          </div>
          <button className="icon-button" onClick={close} aria-label="Close booking">
            <X />
          </button>
        </div>
        <div className="demo-notice">Demo booking — use sample details. No appointment will be reserved.</div>
        {done ? (
          <div className="confirmation">
            <div className="success-mark"><Check /></div>
            <h2>Your demo booking is complete.</h2>
            <p>No appointment has been reserved, no payment has been taken, and no information has been sent to a clinic.</p>
            <button className="text-button" onClick={close}>Close demo</button>
          </div>
        ) : (
          <>
            <div className="steps" aria-label="Booking progress">
              {stepLabels.map((label, i) => (
                <div className={step === i + 1 ? 'active' : step > i + 1 ? 'complete' : ''} key={label}>
                  <span>{step > i + 1 ? <Check size={14} /> : i + 1}</span>
                  {label}
                </div>
              ))}
            </div>
            {step === 1 && (
              <div className="flow-content">
                <label className="service-select">
                  <span className="muted-label">SERVICE</span>
                  <select value={serviceSlug} onChange={(e) => setServiceSlug(e.target.value)}>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name} · ${s.price}</option>
                    ))}
                  </select>
                </label>
                <p className="flow-note">Sample availability · America/Chicago · Treatment is subject to clinical assessment.</p>
                <div className="slot-grid">
                  {dates.map((date, i) => (
                    <div className="date-group" key={date}>
                      <strong>{date}</strong>
                      {times.map((time, j) => (
                        <button
                          key={time}
                          className={slot === `${date} ${time}` ? 'slot selected' : 'slot'}
                          onClick={() => setSlot(`${date} ${time}`)}
                          disabled={i === 2 && j === 2}
                          aria-pressed={slot === `${date} ${time}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
                <PrimaryButton className="flow-button" onClick={() => slot && setStep(2)} disabled={!slot}>Continue</PrimaryButton>
              </div>
            )}
            {step === 2 && (
              <div className="flow-content">
                <p className="flow-lead">Use sample details for this prototype. We don&apos;t request medical or payment information.</p>
                <div className="form-grid">
                  <label>First name<input autoComplete="given-name" value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} /></label>
                  <label>Last name<input autoComplete="family-name" value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} /></label>
                  <label className="full">Email address<input type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
                </div>
                <div className="flow-actions">
                  <button className="back-button" onClick={() => setStep(1)}>Back</button>
                  <PrimaryButton onClick={() => contactValid && setStep(3)} disabled={!contactValid}>Review details</PrimaryButton>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="flow-content">
                <div className="review-list">
                  <div><span>Service</span><strong>{service.name} · ${service.price}</strong></div>
                  <div><span>Sample appointment</span><strong>{slot} · America/Chicago</strong></div>
                  <div><span>Contact</span><strong>{form.first} {form.last}<br />{form.email}</strong></div>
                </div>
                <div className="review-note"><Check size={17} /> {service.includes.join(', ')}. Proposed policy requires approval.</div>
                <p className="flow-note">Treatment is subject to clinical assessment. This prototype does not reserve appointments or process payments.</p>
                <div className="flow-actions">
                  <button className="back-button" onClick={() => setStep(2)}>Back</button>
                  <PrimaryButton onClick={() => setDone(true)}>Complete demo booking</PrimaryButton>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
