import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { FileText, Newspaper, Shield, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const pillars = [
  {
    icon: Newspaper,
    title: "Editorial clarity",
    body: "Every story is edited for accuracy, context, and readability—so you spend less time decoding jargon.",
  },
  {
    icon: Shield,
    title: "Responsible publishing",
    body: "We prioritize sourcing, corrections, and transparent updates when guidance or facts change.",
  },
  {
    icon: Sparkles,
    title: "Reader-first design",
    body: "Typography, pacing, and navigation are tuned for long-form reading on any device.",
  },
];

const team = [
  {
    name: "Amelia Chen",
    role: "Editor-in-Chief",
    bio: "Former investigative reporter focused on healthcare policy and data storytelling.",
    initials: "A",
  },
  {
    name: "Marcus Webb",
    role: "Managing Editor",
    bio: "Leads commissioning for guides, explainers, and weekly analysis across beats.",
    initials: "M",
  },
  {
    name: "Priya Nandakumar",
    role: "Audience & Product",
    bio: "Connects reader research with product improvements and accessibility reviews.",
    initials: "P",
  },
];

const stats = [
  { value: "120+", label: "Published features" },
  { value: "48", label: "Contributing writers" },
  { value: "12", label: "Weekly briefing issues" },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description="We publish thoughtful articles on health, technology, and how people live with both—written for professionals and curious readers alike."
      actions={
        <>
          <Button variant="outline" asChild className="rounded-full border-slate-200">
            <Link href="/articles">Browse articles</Link>
          </Button>
          <Button asChild className="rounded-full bg-[#0f172a] px-6 text-white hover:bg-slate-800">
            <Link href="/contact">Contact editorial</Link>
          </Button>
        </>
      }
    >
      <div className="space-y-12">
        <section className="grid gap-8 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Our mission</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">
              A calmer place for stories that deserve more than a headline.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {SITE_CONFIG.name} exists to slow the scroll: deep interviews, practical guides, and explainers that respect
              your time. We combine rigorous editing with a product experience that keeps focus on the words—not widgets.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-5 text-center">
                  <div className="text-2xl font-semibold text-[#0f172a]">{s.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-slate-200 bg-[linear-gradient(180deg,#fafbff_0%,#ffffff_100%)] p-8">
            <FileText className="h-10 w-10 text-violet-600" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Whether you are here for clinical workflow explainers, product analysis, or policy context—we treat every
              article as a standalone piece worth revisiting and sharing.
            </p>
          </div>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">How we work</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f172a]">Principles behind every issue</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p.icon className="h-8 w-8 text-violet-600" />
                <h3 className="mt-4 text-lg font-semibold text-[#0f172a]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Editorial desk</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f172a]">Meet the leads</h2>
            </div>
            <Button variant="ghost" asChild className="w-fit rounded-full text-violet-700 hover:text-violet-900">
              <Link href="/team">See full team</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-slate-100 text-lg font-semibold text-[#0f172a]">
                  {member.initials}
                </div>
                <p className="mt-4 text-base font-semibold text-[#0f172a]">{member.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
