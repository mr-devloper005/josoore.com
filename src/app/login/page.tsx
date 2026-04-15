import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ArticleLoginForm } from '@/components/auth/article-login-form'
import { SITE_CONFIG } from '@/lib/site-config'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

const shell = 'min-h-screen bg-[linear-gradient(180deg,#fafbff_0%,#ffffff_55%)] text-slate-900 antialiased'

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  return (
    <div className={shell}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col justify-center rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">Member access</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0f172a] sm:text-5xl">Welcome back to {SITE_CONFIG.name}</h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Sign in to save articles and keep your preferences on this device.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Sign in</p>
            <div className="mt-8">
              <ArticleLoginForm />
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/forgot-password" className="font-medium hover:text-violet-700 hover:underline">
                Forgot password?
              </Link>
              <Link href="/register" className="inline-flex items-center gap-2 font-semibold text-violet-700 hover:underline">
                <Sparkles className="h-4 w-4" />
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
