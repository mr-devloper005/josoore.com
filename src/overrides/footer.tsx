import Link from 'next/link'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const columns = [
  {
    title: 'Product',
    links: [
      { name: 'Overview', href: '/articles' },
      { name: 'Search', href: '/search' },
      { name: 'Developers', href: '/developers' },
      { name: 'Security', href: '/privacy' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Status', href: '/status' },
      { name: 'Community', href: '/community' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  },
] as const

export function FooterOverride() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <img
              src="/favicon.png?v=josoore-brand"
              alt=""
              width={220}
              height={64}
              className="h-14 w-auto max-h-14 object-contain sm:h-16 sm:max-h-16 sm:max-w-[220px]"
              aria-hidden
            />
            <span className="text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">{SITE_CONFIG.name}</span>
          </div>
          <div className="mt-4 h-px w-16 rounded-full bg-gradient-to-r from-transparent via-[#C5A028] to-transparent" aria-hidden />
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600">
            Independent articles, explainers, and newsroom updates—built for readers who want depth without noise.
          </p>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-[#0f172a] transition hover:text-violet-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:hello@${SITE_CONFIG.domain}`} className="font-medium text-[#0f172a] hover:text-violet-700">
              hello@{SITE_CONFIG.domain}
            </a>
            <span className="hidden text-slate-300 sm:inline" aria-hidden>
              |
            </span>
            <div className="flex gap-3 text-slate-500">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#0f172a]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#0f172a]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0f172a]">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
