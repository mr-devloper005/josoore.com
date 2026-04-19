import { PageShell } from "@/components/shared/page-shell";
import { SITE_CONFIG } from "@/lib/site-config";
import { FileWarning, Scale, Users } from "lucide-react";

const sections = [
  {
    icon: Users,
    title: "Acceptable use",
    body: "Do not harass others, post illegal content, attempt to break site security, or scrape the service in ways that degrade performance for readers.",
  },
  {
    icon: Scale,
    title: "Content & intellectual property",
    body: `You retain rights to material you submit. By publishing here you grant ${SITE_CONFIG.name} a license to host, display, and promote that content in connection with the product.`,
  },
  {
    icon: FileWarning,
    title: "Disclaimers",
    body: "Articles may include analysis or opinion. They are not professional medical, legal, or financial advice unless explicitly stated and provided by a qualified contributor.",
  },
];

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of service"
      description={`The rules that apply when you read, share, or contribute through ${SITE_CONFIG.name}.`}
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
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
          <h3 className="text-base font-semibold text-[#0f172a]">Accounts & termination</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We may suspend accounts that violate these terms or create risk for other readers. Where reasonable, we will
            notify you and provide an opportunity to appeal enforcement decisions.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
