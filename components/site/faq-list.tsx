'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/site-data'

export function FaqList() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <>
      {faqs.map(([q, a], i) => (
        <div className="faq-item" key={q}>
          <button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
            <span>{q}</span>
            <ChevronDown className={openFaq === i ? 'rotated' : ''} size={18} aria-hidden="true" />
          </button>
          {openFaq === i && <p>{a}</p>}
        </div>
      ))}
    </>
  )
}
