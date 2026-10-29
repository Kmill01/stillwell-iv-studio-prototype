'use client'

import { useActionState } from 'react'
import { Check } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/contact/actions'
import { PrimaryButton } from './primary-button'

const initialState: ContactState = { status: 'idle' }

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div className="contact-card confirmation" role="status">
        <div className="success-mark"><Check /></div>
        <h2>Message received.</h2>
        <p>{state.message}</p>
      </div>
    )
  }

  const errors = state.errors ?? {}
  const values = state.values

  return (
    <form action={formAction} className="contact-card" noValidate>
      <div className="demo-notice">Demo form — please don&apos;t include medical or personal health information.</div>
      <div className="form-grid">
        <label>
          Name
          <input name="name" autoComplete="name" defaultValue={values?.name} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" defaultValue={values?.email} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
        </label>
        <label className="full">
          Topic
          <select name="topic" defaultValue={values?.topic ?? 'general'}>
            <option value="general">General question</option>
            <option value="booking">Booking & availability</option>
            <option value="pricing">Pricing</option>
            <option value="other">Something else</option>
          </select>
        </label>
        <label className="full">
          Message
          <textarea name="message" rows={5} defaultValue={values?.message} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
          {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
        </label>
      </div>
      {state.status === 'error' && <p className="form-status" role="alert">{state.message}</p>}
      <PrimaryButton type="submit" disabled={pending}>{pending ? 'Sending…' : 'Send message'}</PrimaryButton>
    </form>
  )
}
