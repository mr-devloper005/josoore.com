import { PageShell } from '@/components/shared/page-shell'
import { ExternalLink } from 'lucide-react'

const licenses = [
  { name: 'Next.js', href: 'https://github.com/vercel/next.js', description: 'MIT License' },
  { name: 'React', href: 'https://github.com/facebook/react', description: 'MIT License' },
  { name: 'Tailwind CSS', href: 'https://github.com/tailwindlabs/tailwindcss', description: 'MIT License' },
  { name: 'Radix UI', href: 'https://www.radix-ui.com', description: 'MIT License' },
  { name: 'Lucide Icons', href: 'https://lucide.dev', description: 'ISC License' },
]

export default function LicensesPage() {
  return (
    <PageShell
      title="Open source licenses"
      description="We build on top of a modern open source stack. Below are the core packages surfaced in this product experience."
    >
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
        <ul className="divide-y divide-slate-100">
          {licenses.map((license) => (
            <li key={license.name} className="flex flex-col gap-2 py-5 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-[#0f172a]">{license.name}</h3>
                <p className="text-sm text-slate-600">{license.description}</p>
              </div>
              <a
                href={license.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-violet-700 hover:text-violet-900"
              >
                Repository
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs leading-relaxed text-slate-500">
          Full dependency notices ship with the application bundle. Reach out on the contact page if you need a complete
          SPDX export for enterprise procurement.
        </p>
      </div>
    </PageShell>
  )
}
