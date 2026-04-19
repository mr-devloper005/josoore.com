import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Cookie, LineChart, SlidersHorizontal } from 'lucide-react'

const sections = [
  {
    icon: Cookie,
    title: 'Essential cookies',
    body: 'Required for sign-in, security, and basic preferences such as theme or saved filters on this device.',
  },
  {
    icon: LineChart,
    title: 'Analytics',
    body: 'Helps us understand which sections readers use most so we can improve navigation and performance.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Preference storage',
    body: 'Remembers choices you make in modals, forms, and reading tools so you do not have to reconfigure each visit.',
  },
]

export default function CookiesPage() {
  return (
    <PageShell
      title="Cookie policy"
      description="Transparent detail about the cookies and local storage keys we rely on to run the reading experience."
    >
      <div className="space-y-8">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-[#0f172a]">Last updated:</span> April 15, 2026
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((s) => (
            <div key={s.title} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <s.icon className="h-8 w-8 text-violet-600" />
              <h3 className="mt-4 text-base font-semibold text-[#0f172a]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-slate-200/80 bg-slate-50/70 p-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600">
            Questions about tracking? Our privacy overview explains retention and your rights in plain language.
          </p>
          <Button asChild variant="outline" className="rounded-full border-slate-200">
            <Link href="/privacy">Read privacy policy</Link>
          </Button>
        </div>
      </div>
    </PageShell>
  )
}
