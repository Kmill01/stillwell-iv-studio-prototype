'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { services } from '@/lib/site-data'
import { BookingFlow } from './booking-flow'

type BookingContextValue = {
  isOpen: boolean
  openBooking: (serviceSlug?: string) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [serviceSlug, setServiceSlug] = useState<string | null>(null)
  const openBooking = useCallback((slug?: string) => setServiceSlug(slug ?? services[0].slug), [])
  const value = useMemo(() => ({ isOpen: serviceSlug !== null, openBooking }), [serviceSlug, openBooking])

  return (
    <BookingContext.Provider value={value}>
      {children}
      {serviceSlug && <BookingFlow key={serviceSlug} initialServiceSlug={serviceSlug} close={() => setServiceSlug(null)} />}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) throw new Error('useBooking must be used within BookingProvider')
  return context
}
