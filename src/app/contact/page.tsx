import { FileText, Mail, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

const shell = 'min-h-screen bg-[linear-gradient(180deg,#fafbff_0%,#ffffff_55%)] text-slate-900 antialiased'
const panel = 'rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm'
const soft = 'rounded-3xl border border-slate-200/80 bg-slate-50/80 p-5'

const lanes = [
  { icon: FileText, title: 'Editorial & submissions', body: 'Pitch essays, columns, and long-form ideas that fit the publication.' },
  { icon: Mail, title: 'Partnerships', body: 'Coordinate sponsorships, collaborations, and newsletter programs.' },
  { icon: Sparkles, title: 'Reader support', body: 'Questions about accounts, saved articles, or reading features—we are here to help.' },
]

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <div className={shell}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Contact {SITE_CONFIG.name}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0f172a] sm:text-5xl">We route every message to the right team.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Tell us what you are trying to publish, fix, or launch. We read every note and respond with clear next steps.
            </p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={soft}>
                  <lane.icon className="h-5 w-5 text-violet-600" />
                  <h2 className="mt-3 text-xl font-semibold text-[#0f172a]">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={panel}>
            <h2 className="text-2xl font-semibold text-[#0f172a]">Send a message</h2>
            <form className="mt-6 grid gap-4">
              <input
                className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400"
                placeholder="Your name"
              />
              <input
                className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400"
                placeholder="Email address"
                type="email"
              />
              <input
                className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400"
                placeholder="Topic"
              />
              <textarea
                className="min-h-[180px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
                placeholder="Share context so we can respond with the right next step."
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#3b82f6] px-6 text-sm font-semibold text-white shadow-md hover:opacity-95"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
