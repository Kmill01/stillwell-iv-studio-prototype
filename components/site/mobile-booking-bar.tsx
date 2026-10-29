'use client'

import { useEffect, useState } from 'react'
import { useBooking } from './booking-provider'
import { BookButton } from './book-button'

export function MobileBookingBar({ watchId }: { watchId: string }) {
  const { isOpen } = useBooking()
  const [targetVisible, setTargetVisible] = useState(true)

  useEffect(() => {
    const target = document.getElementById(watchId)
    if (!target) return
    const observer = new IntersectionObserver(([entry]) => setTargetVisible(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(target)
    return () => observer.disconnect()
  }, [watchId])

  if (targetVisible || isOpen) return null
  return (
    <div className="mobile-booking">
      <span><strong>IV Hydration</strong><small>$179 per appointment</small></span>
      <BookButton />
    </div>
  )
}
