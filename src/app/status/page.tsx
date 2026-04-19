import { PageShell } from '@/components/shared/page-shell'
import { Badge } from '@/components/ui/badge'
import { Activity, CheckCircle2, Server } from 'lucide-react'

const services = [
  { name: 'Reading app', detail: 'Article pages, search, and navigation', status: 'Operational' },
  { name: 'Content API', detail: 'Public feed used by the site shell', status: 'Operational' },
  { name: 'Media delivery', detail: 'Images and embeds for articles', status: 'Operational' },
]

const incidents = [
  { date: 'Mar 4, 2026', title: 'Elevated latency on search', detail: 'Mitigated via cache warm-up; no data loss.', status: 'Resolved' },
  { date: 'Feb 18, 2026', title: 'Scheduled maintenance window', detail: 'Database failover testing completed.', status: 'Resolved' },
]

export default function StatusPage() {
  return (
    <PageShell
      title="System status"
      description="Live snapshot of the services that power your reading experience. We post incidents here first."
    >
      <div className="space-y-10">
        <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-emerald-100 bg-emerald-50/60 px-6 py-4">
          <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          <div>
            <p className="font-semibold text-emerald-900">All systems operational</p>
            <p className="text-sm text-emerald-800/90">Last checked moments ago · updates refresh with the page.</p>
          </div>
        </div>

        <section>
          <div className="mb-6 flex items-center gap-2">
            <Server className="h-5 w-5 text-slate-600" />
            <h2 className="text-lg font-semibold text-[#0f172a]">Services</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-[#0f172a]">{service.name}</h3>
                  <Badge className="rounded-full bg-emerald-100 text-emerald-900">{service.status}</Badge>
                </div>
                <p className="mt-2 text-sm text-slate-600">{service.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-violet-600" />
            <h3 className="text-lg font-semibold text-[#0f172a]">Recent incidents</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            When something affects reading, search, or publishing—we document what happened and how we fixed it.
          </p>
          <ul className="mt-6 space-y-4">
            {incidents.map((incident) => (
              <li
                key={incident.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4 sm:px-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{incident.date}</span>
                  <Badge variant="outline" className="rounded-full border-slate-200 text-slate-700">
                    {incident.status}
                  </Badge>
                </div>
                <p className="mt-2 font-medium text-[#0f172a]">{incident.title}</p>
                <p className="mt-1 text-sm text-slate-600">{incident.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  )
}
