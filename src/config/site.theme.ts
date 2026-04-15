import { defineSiteTheme } from '@/config/site.theme.defaults'

export const SITE_THEME = defineSiteTheme({
  shell: 'directory',
  hero: {
    variant: 'search-first',
    eyebrow: 'Business discovery system',
  },
  home: {
    layout: 'directory-stack',
    primaryTask: 'listing',
    featuredTaskKeys: ['listing', 'profile', 'classified'],
  },
  navigation: {
    variant: 'compact',
  },
  footer: {
    variant: 'columns',
  },
  cards: {
    listing: 'listing-elevated',
    article: 'listing-elevated',
    image: 'listing-elevated',
    profile: 'listing-elevated',
    classified: 'listing-elevated',
    pdf: 'listing-elevated',
    sbm: 'listing-elevated',
    social: 'listing-elevated',
    org: 'listing-elevated',
    comment: 'listing-elevated',
  },
})
