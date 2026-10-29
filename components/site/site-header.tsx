'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/site-data'
import { BookButton } from './book-button'
import { Brand } from './brand'

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMenuOpen(false), [pathname])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="site-header">
      <Link href="/" aria-label="Stillwell IV Studio home">
        <Brand />
      </Link>
      <nav className="main-nav" aria-label="Main">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={isActive(link.href) ? 'active' : undefined} aria-current={isActive(link.href) ? 'page' : undefined}>
            {link.label}
          </Link>
        ))}
      </nav>
      <BookButton className="header-cta" />
      <button
        className="menu-toggle icon-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={isActive(link.href) ? 'active' : undefined} aria-current={isActive(link.href) ? 'page' : undefined}>
              {link.label}
            </Link>
          ))}
          <BookButton />
        </nav>
      )}
    </header>
  )
}
