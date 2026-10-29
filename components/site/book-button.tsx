'use client'

import { useBooking } from './booking-provider'
import { PrimaryButton } from './primary-button'

export function BookButton({ serviceSlug, children, className }: { serviceSlug?: string; children?: React.ReactNode; className?: string }) {
  const { openBooking } = useBooking()
  return (
    <PrimaryButton className={className} onClick={() => openBooking(serviceSlug)}>
      {children}
    </PrimaryButton>
  )
}
