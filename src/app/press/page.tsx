'use client'

import { useState } from 'react'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { SITE_CONFIG } from '@/lib/site-config'

const pressAssets = [
  {
    id: 'brand-kit',
    title: 'Brand kit (logos)',
    description: 'PNG wordmarks and icon marks for light backgrounds—ideal for partner pages and decks.',
    fileType: 'ZIP',
    previewSrc: '/favicon.png?v=josoore-brand',
  },
  {
    id: 'screenshots',
    title: 'Product screenshots',
    description: 'Curated captures of the article reading experience and news hub for media use.',
    fileType: 'ZIP',
    previewSrc: '/placeholder.svg?height=720&width=1280',
  },
  {
    id: 'factsheet',
    title: 'Editorial fact sheet',
    description: 'One-pager with audience, beats, and contact paths for producers and event organizers.',
    fileType: 'PDF',
    previewSrc: null as string | null,
  },
] as const

const coverage = [
  {
    id: 'c1',
    outlet: 'Industry note',
    headline: `${SITE_CONFIG.name} launches a calmer article hub for healthcare and technology readers.`,
    date: 'January 2026',
  },
  {
    id: 'c2',
    outlet: 'Partner briefing',
    headline: 'Editorial team outlines responsible AI coverage guidelines for 2026 series.',
    date: 'December 2025',
  },
]

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = pressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      title="Press"
      description="Brand assets, product context, and recent coverage—everything a journalist or partner needs in one place."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-[#0f172a]">Media kit</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {`Download logos, screenshots, and our editorial fact sheet. Prefer something custom? Email press@${SITE_CONFIG.domain}.`}
          </p>
          <ul className="mt-6 space-y-4">
            {pressAssets.map((asset) => (
              <li
                key={asset.id}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4 sm:px-5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-semibold text-[#0f172a]">{asset.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{asset.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 ring-1 ring-slate-200">
                      {asset.fileType}
                    </span>
                    <Button size="sm" variant="outline" className="rounded-full border-slate-200" onClick={() => setActiveAssetId(asset.id)}>
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full bg-[#0f172a] text-white hover:bg-slate-800"
                      onClick={() =>
                        toast({
                          title: 'Download started',
                          description: `${asset.title} will arrive as a bundle shortly.`,
                        })
                      }
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-[#0f172a]">In the news</h2>
          <p className="text-sm text-slate-600">Highlights from launches, partnerships, and editorial initiatives.</p>
          {coverage.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.outlet}</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#0f172a]">{item.headline}</p>
            </article>
          ))}
        </section>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-lg rounded-3xl border-slate-200 sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-[#0f172a]">{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewSrc ? (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img src={activeAsset.previewSrc} alt="" className="h-full w-full object-contain" />
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-6 text-sm text-slate-600">
              Preview not available for this asset—download the pack for the full document.
            </p>
          )}
          <p className="text-sm text-slate-600">{activeAsset?.description}</p>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" className="rounded-full border-slate-200" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="rounded-full bg-[#0f172a] text-white hover:bg-slate-800"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is preparing.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}
