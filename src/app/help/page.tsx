import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BookOpen, Mail, Search, UserCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

const guides = [
  {
    icon: UserCircle,
    title: 'Accounts & sign-in',
    body: 'Create an account to save articles, sync preferences on this device, and get a smoother reading experience.',
  },
  {
    icon: Search,
    title: 'Search & categories',
    body: 'Use the search bar or category filters on the articles page to narrow topics like health, technology, or news.',
  },
  {
    icon: BookOpen,
    title: 'Reading & saved items',
    body: 'Open any article for a print-style layout. Save pieces from your account menu when you are signed in.',
  },
]

const faqs = [
  {
    id: 'faq-1',
    question: 'How do I submit a story idea?',
    answer:
      'Use the Contact page and choose “Editorial submissions.” Include a short summary, audience, and any relevant links. We review pitches weekly.',
  },
  {
    id: 'faq-2',
    question: 'Do you offer corrections or updates?',
    answer:
      'Yes. If we change a headline, data point, or conclusion, we add a dated note at the top of the article so readers can see what changed.',
  },
  {
    id: 'faq-3',
    question: 'Is there a paywall?',
    answer:
      'Core articles on this site are free to read. Some partner series may link to external publications with their own access rules.',
  },
]

export default function HelpPage() {
  return (
    <PageShell
      title="Help Center"
      description="Guides for reading, searching, and getting support from the newsroom."
      actions={
        <Button asChild className="rounded-full bg-[#0f172a] px-6 text-white hover:bg-slate-800">
          <Link href="/contact">Contact support</Link>
        </Button>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Start here</p>
            <h2 className="mt-2 text-xl font-semibold text-[#0f172a]">Popular topics</h2>
            <div className="mt-6 grid gap-5">
              {guides.map((g) => (
                <div key={g.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                  <g.icon className="mt-0.5 h-6 w-6 shrink-0 text-violet-600" />
                  <div>
                    <h3 className="font-semibold text-[#0f172a]">{g.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{g.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50/80 to-white p-8">
            <Mail className="h-8 w-8 text-violet-600" />
            <h3 className="mt-4 text-lg font-semibold text-[#0f172a]">Still stuck?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Send us a note with screenshots if something looks broken—we typically reply within two business days.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full border-slate-200">
              <Link href="/contact">Open contact form</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-lg font-semibold text-[#0f172a]">Frequently asked questions</h3>
          <Accordion type="single" collapsible className="mt-4 w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-slate-200">
                <AccordionTrigger className="text-left text-sm font-medium text-[#0f172a] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageShell>
  )
}
