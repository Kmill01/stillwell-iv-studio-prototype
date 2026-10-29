import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode }

export function PrimaryButton({ children = 'Book IV Therapy', className, type = 'button', ...props }: ButtonProps) {
  return (
    <button type={type} className={cn('primary-button', className)} {...props}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </button>
  )
}

export function PrimaryLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn('primary-button', className)}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  )
}
