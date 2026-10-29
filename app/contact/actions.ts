'use server'

export type ContactState = {
  status: 'idle' | 'error' | 'success'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'message', string>>
  values?: { name: string; email: string; topic: string; message: string }
}

const topics = ['general', 'booking', 'pricing', 'other']

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: String(formData.get('name') ?? '').trim().slice(0, 100),
    email: String(formData.get('email') ?? '').trim().slice(0, 200),
    topic: topics.includes(String(formData.get('topic'))) ? String(formData.get('topic')) : 'general',
    message: String(formData.get('message') ?? '').trim().slice(0, 2000),
  }

  const errors: ContactState['errors'] = {}
  if (values.name.length < 2) errors.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (values.message.length < 10) errors.message = 'Please write at least 10 characters.'

  if (Object.keys(errors).length) {
    return { status: 'error', errors, values, message: 'Please fix the highlighted fields.' }
  }

  return {
    status: 'success',
    message: `Thanks, ${values.name.split(' ')[0]}. This is a demo, so your message was validated but not sent to a clinic.`,
  }
}
