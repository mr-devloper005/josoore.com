import Link from 'next/link'
import { FileText, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

const shell = 'min-h-screen bg-[linear-gradient(180deg,#fafbff_0%,#ffffff_55%)] text-slate-900 antialiased'

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  return (
    <div className={shell}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 lg:p-10">
            <FileText className="h-8 w-8 text-violet-600" />
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#0f172a]">Create your {SITE_CONFIG.name} account</h1>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Save articles, follow topics, and keep your reading list in sync on this device.
            </p>
            <div className="mt-8 grid gap-4">
              {['Reading-first experience', 'Saved stories and preferences', 'Lightweight account, no clutter'].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Create account</p>
            <form className="mt-6 grid gap-4">
              <input
                className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400"
                placeholder="Full name"
              />
              <input
                className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400"
                placeholder="Email address"
                type="email"
              />
              <input
                className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400"
                placeholder="Password"
                type="password"
              />
              <input
                className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400"
                placeholder="What do you like to read?"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#3b82f6] px-6 text-sm font-semibold text-white shadow-md hover:opacity-95"
              >
                Create account
              </button>
            </form>
            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold text-violet-700 hover:underline">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
