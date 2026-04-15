'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const FILTER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'company', label: 'Company Updates' },
  { id: 'product', label: 'Product' },
  { id: 'healthcare', label: 'Healthcare Insights' },
  { id: 'announcements', label: 'Announcements' },
] as const

type FilterId = (typeof FILTER_TABS)[number]['id']

function getCategory(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const raw = typeof content.category === 'string' ? content.category : ''
  if (raw) return raw
  const tag = post.tags?.find((t) => typeof t === 'string')
  return tag || 'Editorial'
}

function getPostImage(post: SitePost) {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : null
  const images = content && Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((url: unknown) => typeof url === 'string' && url) as string | undefined
  return mediaUrl || contentImage || '/placeholder.svg?height=900&width=1400'
}

function formatPostDate(post: SitePost) {
  const raw = post.publishedAt || post.createdAt
  if (!raw) return ''
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()
}

function readMinutes(post: SitePost) {
  const base = (post.summary?.length || 0) + (post.title?.length || 0)
  return Math.max(2, Math.min(12, Math.round(base / 900) || 4))
}

function postMatchesFilter(post: SitePost, filterId: FilterId) {
  if (filterId === 'all') return true
  const blob = [post.title, post.summary || '', getCategory(post), ...(post.tags || [])].join(' ').toLowerCase()
  if (filterId === 'company') return /company|team|culture|business|founder|office|hiring|people|organization/.test(blob)
  if (filterId === 'product') return /product|feature|release|platform|workflow|integration|api|roadmap|update|tool/.test(blob)
  if (filterId === 'healthcare') return /health|clinical|care|patient|medical|hospital|diagnosis|therapy|wellness|bio/.test(blob)
  if (filterId === 'announcements') return /announce|launch|introducing|new report|statement|press|award|partnership|event/.test(blob)
  return true
}

const EXPLORE_TAGS = [
  { label: 'Company Updates', slug: 'news' },
  { label: 'Product', slug: 'technology' },
  { label: 'Healthcare Insights', slug: 'health' },
  { label: 'Announcements', slug: 'news' },
  { label: 'Best Practices', slug: 'education' },
  { label: 'Data', slug: 'digital' },
  { label: 'Case Studies', slug: 'business' },
  { label: 'Editorial', slug: 'blog' },
]

export function ArticleNewsHomeContent({ posts }: { posts: SitePost[] }) {
  const [filter, setFilter] = useState<FilterId>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return posts.filter((p) => postMatchesFilter(p, filter)).filter((p) => {
      if (!query.trim()) return true
      const q = query.toLowerCase()
      return (
        p.title.toLowerCase().includes(q) ||
        (p.summary || '').toLowerCase().includes(q) ||
        getCategory(p).toLowerCase().includes(q)
      )
    })
  }, [posts, filter, query])

  const featured = filtered[0]
  const grid = filtered.slice(1, 7)
  const highlight = filtered[7] || filtered[1]
  const list = filtered.slice(8, 12).length ? filtered.slice(8, 12) : filtered.slice(4, 10)

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-100 bg-[linear-gradient(180deg,#fafbff_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h1 className="text-4xl font-semibold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">News &amp; Updates</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Updates, insights, and announcements from {SITE_CONFIG.name} focused on editorial quality, responsible publishing, and
            practical guidance for readers and teams.
          </p>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    filter === tab.id ? 'bg-[#0f172a] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="relative w-full max-w-xs lg:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="h-11 rounded-full border-slate-200 bg-white pl-10 pr-4 shadow-sm"
                aria-label="Search articles"
              />
            </div>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href={`/articles/${featured.slug}`}
            className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.06)] transition hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)] lg:grid-cols-[1.15fr_1fr]"
          >
            <div className="relative min-h-[240px] bg-slate-100 lg:min-h-[320px]">
              <ContentImage src={getPostImage(featured)} alt={featured.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{getCategory(featured)}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">{featured.title}</h2>
              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {featured.summary || 'A closer look at the ideas shaping how we publish, read, and share long-form work online.'}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {formatPostDate(featured) ? <span>{formatPostDate(featured)}</span> : null}
                {formatPostDate(featured) ? <span aria-hidden="true">—</span> : null}
                <span>{readMinutes(featured)} min read</span>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <ContentImage
                    src="/placeholder.svg?height=80&width=80"
                    alt={featured.authorName || 'Author'}
                    className="h-full w-full object-cover"
                    intrinsicWidth={80}
                    intrinsicHeight={80}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">{featured.authorName || 'Editorial team'}</p>
                  <p className="text-xs text-slate-500">Staff writer</p>
                </div>
              </div>
            </div>
          </Link>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-4 py-16 text-center text-slate-600 sm:px-6 lg:px-8">
          <p>No articles match these filters yet. Try &ldquo;All&rdquo; or clear your search.</p>
          <Button type="button" variant="outline" className="mt-4 rounded-full" onClick={() => { setFilter('all'); setQuery('') }}>
            Reset filters
          </Button>
        </section>
      )}

      {grid.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((post) => (
              <Link
                key={post.id}
                href={`/articles/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative h-48 bg-slate-100">
                  <ContentImage src={getPostImage(post)} alt={post.title} fill className="object-cover transition group-hover:scale-[1.02]" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{getCategory(post)}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#0f172a] group-hover:text-violet-700">{post.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm text-slate-600">{post.summary}</p>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {formatPostDate(post) || '—'} · {readMinutes(post)} min read
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {highlight ? (
        <section className="bg-[#fffbeb] py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-900/70">Featured guide</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">{highlight.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-amber-950/80 sm:text-base">
                {highlight.summary ||
                  'Practical ideas for building a sustainable editorial rhythm, from research and drafting to promotion and measurement.'}
              </p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-wide text-amber-900/70">
                {formatPostDate(highlight) || 'Latest'} · {readMinutes(highlight)} min read
              </div>
              <Button asChild className="mt-8 rounded-full bg-[#0f172a] px-6 text-white hover:bg-slate-800">
                <Link href={`/articles/${highlight.slug}`}>Read the guide</Link>
              </Button>
            </div>
            <Link href={`/articles/${highlight.slug}`} className="relative block aspect-square max-h-[420px] overflow-hidden rounded-3xl border border-amber-200/80 bg-amber-100 shadow-sm">
              <ContentImage src={getPostImage(highlight)} alt={highlight.title} fill className="object-cover" />
            </Link>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a]">Articles</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Short reads and notes from the newsroom.</p>
          </div>
          <div>
            <ul className="divide-y divide-slate-100">
              {list.map((post) => (
                <li key={post.id}>
                  <Link href={`/articles/${post.slug}`} className="flex gap-4 py-6 transition hover:bg-slate-50/80 sm:gap-6 sm:rounded-2xl sm:px-2">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-24 sm:w-24">
                      <ContentImage src={getPostImage(post)} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold tracking-tight text-[#0f172a] sm:text-lg">{post.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-600">{post.summary}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {formatPostDate(post)} · {readMinutes(post)} min read
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/articles"
                className="inline-flex rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:border-slate-400 hover:bg-slate-50"
              >
                View all articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eff6ff] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">Explore by categories</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Browse reporting and commentary organized the way our editors think about the beat.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {EXPLORE_TAGS.map((tag) => (
              <Link
                key={tag.label}
                href={`/articles?category=${encodeURIComponent(tag.slug)}`}
                className="rounded-full border border-sky-200/80 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-violet-300 hover:text-violet-800"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
