'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

export const NAVBAR_OVERRIDE_ENABLED = true

const gradientCta =
  'rounded-full bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-fuchsia-500/20 hover:opacity-95'

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 text-slate-900 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[80px] max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3 sm:gap-4"
          onClick={() => setOpen(false)}
          aria-label={`${SITE_CONFIG.name}, home`}
        >
          <div className="flex h-[52px] shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-2.5 shadow-sm sm:h-[58px] sm:px-3.5">
            <img
              src="/favicon.png?v=josoore-brand"
              alt=""
              width={200}
              height={56}
              className="h-11 w-auto max-h-11 object-contain object-center sm:h-[3.25rem] sm:max-h-[3.25rem] sm:max-w-[200px]"
              aria-hidden
            />
          </div>
          <div className="min-w-0">
            <span className="block truncate text-lg font-semibold tracking-tight text-[#0f172a] sm:text-xl">
              {SITE_CONFIG.name}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link href="/articles" className={cn('rounded-full px-4 py-2', pathname.startsWith('/articles') ? 'bg-[#0f172a] text-white' : 'text-sm font-semibold text-slate-600 hover:bg-slate-100')}>
            Articles
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-600 outline-none hover:bg-slate-100 hover:text-[#0f172a]">
              Resources
              <ChevronDown className="h-4 w-4 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/help">Help Center</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search">Search</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-600 outline-none hover:bg-slate-100 hover:text-[#0f172a]">
              Company
              <ChevronDown className="h-4 w-4 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/careers">Careers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="icon" asChild className="hidden rounded-full text-slate-600 md:flex">
            <Link href="/search" aria-label="Search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" asChild className="rounded-full px-4 text-slate-700">
                <Link href="/login">Sign in</Link>
              </Button>
              <Link href="/contact" className={cn('hidden sm:inline-flex', gradientCta)}>
                Contact us
              </Link>
            </div>
          )}

          <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <Link
            href="/search"
            className="mb-3 flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            <Search className="h-4 w-4" />
            Search
          </Link>
          <Link href="/articles" className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-slate-50" onClick={() => setOpen(false)}>
            Articles
          </Link>
          <Link href="/help" className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-slate-50" onClick={() => setOpen(false)}>
            Help Center
          </Link>
          <Link href="/blog" className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-slate-50" onClick={() => setOpen(false)}>
            Editorial blog
          </Link>
          <Link href="/about" className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-slate-50" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="mt-3 block rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#3b82f6]" onClick={() => setOpen(false)}>
            Contact us
          </Link>
          {!isAuthenticated ? (
            <Link href="/login" className="mt-2 block rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold" onClick={() => setOpen(false)}>
              Sign in
            </Link>
          ) : null}
        </div>
      ) : null}
    </header>
  )
}
