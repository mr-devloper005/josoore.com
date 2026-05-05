import { PageShell } from '@/components/shared/page-shell'
import { SITE_CONFIG } from '@/lib/site-config'
import { Lock, Mail, Shield } from 'lucide-react'

const sections = [
  {
    icon: Shield,
    title: 'What we collect',
    body: `When you use ${SITE_CONFIG.name}, we may process account details you provide (such as name and email), reading preferences stored on your device, and technical logs needed to keep the service secure and fast.`,
  },
  {
    icon: Lock,
    title: 'How we use information',
    body: 'We use data to authenticate sessions, personalize the reading surface, fix bugs, and understand aggregate usage. We do not sell personal information.',
  },
  {
    icon: Mail,
    title: 'Your choices',
    body: `You can request access, correction, or deletion of personal data tied to your account by contacting hello@${SITE_CONFIG.domain}. You may also adjust marketing preferences from any email we send.`,
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy policy"
      description="How we handle personal information for readers, contributors, and partners who use this site."
    >
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((s) => (
            <div key={s.title} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <s.icon className="h-8 w-8 text-violet-600" />
              <h3 className="mt-4 text-base font-semibold text-[#0f172a]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200/80 bg-slate-50/60 p-8">
          <h3 className="text-base font-semibold text-[#0f172a]">Cookies &amp; similar tech</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We use essential cookies for sign-in and preferences, plus limited analytics to understand traffic patterns. See
            the Cookie Policy for category-level detail and opt-out guidance where available.
          </p>
        </div>
      </div>
    </PageShell>
  )
}
