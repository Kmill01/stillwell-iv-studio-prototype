import Link from 'next/link'
import { navLinks } from '@/lib/site-data'
import { BookButton } from './book-button'
import { Brand } from './brand'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-brand">
            <Brand />
            <p>IV hydration in a calm, comfortable setting.</p>
          </div>
          <div>
            <span className="footer-label">EXPLORE</span>
            <nav className="footer-nav" aria-label="Footer">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </nav>
          </div>
          <div>
            <span className="footer-label">LOCATION</span>
            <p>Austin, Texas</p>
            <small>Verified address and opening hours will be added before launch.</small>
          </div>
        </div>
        <div className="footer-booking">
          <div>
            <span className="eyebrow">PLAN YOUR VISIT</span>
            <h3>IV Hydration <i>·</i> $179 <small>per appointment</small></h3>
            <p>Illustrative prototype pricing. Treatment is subject to clinical assessment.</p>
          </div>
          <BookButton />
        </div>
        <div className="footer-bottom">
          <span>Fictional business. Prototype only.</span>
          <span>Prices, service details, provider information, and proposed policies require verification before launch.</span>
        </div>
      </div>
    </footer>
  )
}
