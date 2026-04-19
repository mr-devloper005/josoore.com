import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Globe2, HeartPulse, Laptop } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const roles = [
  {
    title: "Staff Writer, Health & AI",
    location: "Remote (US time zones)",
    type: "Full-time",
    level: "Mid–Senior",
    blurb: "Report on clinical workflows, responsible automation, and the teams shipping safer tools.",
  },
  {
    title: "Frontend Engineer, Reading Experience",
    location: "Hybrid · New York",
    type: "Full-time",
    level: "Senior",
    blurb: "Own typography, performance, and accessibility for our article templates and design system.",
  },
  {
    title: "Audience Editor",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
    blurb: "Shape newsletters, homepage rotations, and partner series with a sharp eye for reader journeys.",
  },
];

const benefits = [
  { icon: Globe2, text: "Remote-first with optional studio weeks in select cities" },
  { icon: Clock, text: "Async-friendly meetings and protected focus blocks" },
  { icon: Laptop, text: "Hardware stipend and learning budget for courses & conferences" },
  { icon: HeartPulse, text: "Medical, dental, and vision for full-time roles (region dependent)" },
];

export default function CareersPage() {
  return (
    <PageShell
      title="Careers"
      description={`Join ${SITE_CONFIG.name} and help build a publication readers trust for depth, clarity, and care.`}
      actions={
        <Button asChild className="rounded-full bg-[#0f172a] px-6 text-white hover:bg-slate-800">
          <Link href="/contact">View open roles</Link>
        </Button>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full bg-slate-100 text-slate-800">{role.level}</Badge>
                <Badge variant="outline" className="rounded-full border-slate-200">
                  {role.type}
                </Badge>
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-[#0f172a]">{role.title}</h2>
              <p className="mt-1 text-sm font-medium text-slate-500">{role.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{role.blurb}</p>
              <Button variant="outline" asChild className="mt-6 rounded-full border-slate-200">
                <Link href="/contact">Ask about this role</Link>
              </Button>
            </article>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0f172a]">Why join us</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We are a small editorial product team obsessed with reader trust: fewer dashboards, more time with writers and
              designers shipping stories that feel finished.
            </p>
            <ul className="mt-6 space-y-4">
              {benefits.map((b) => (
                <li key={b.text} className="flex gap-3 text-sm text-slate-700">
                  <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/60 p-8 text-center">
            <p className="text-sm font-medium text-[#0f172a]">Hiring partners &amp; fellows</p>
            <p className="mt-2 text-sm text-slate-600">
              We occasionally host short-term editorial fellows. Mention “Fellowship” when you reach out on the contact page.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
