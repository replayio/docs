import type { MetadataRoute } from 'next'

import { flatNavigation, NavigationItem } from '@/lib/navigation'
import { getSiteOrigin } from '@/lib/agentReadiness'
import { isVisibleNavItem } from '@/lib/visibility'

/**
 * /sitemap.xml
 *
 * Derived from the navigation tree so it stays in sync with the actual docs
 * structure. Each canonical doc page contributes a single entry; nested links
 * are flattened.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin()
  const seen = new Set<string>()
  const urls: MetadataRoute.Sitemap = []

  function visit(item: NavigationItem) {
    if (!isVisibleNavItem(item)) return
    if (item.href && !seen.has(item.href)) {
      seen.add(item.href)
      urls.push({
        url: `${origin}${item.href}`,
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
    item.links?.forEach(visit)
  }

  flatNavigation.forEach(visit)

  // Always include the homepage as the highest-priority entry.
  urls.unshift({
    url: `${origin}/`,
    changeFrequency: 'weekly',
    priority: 1.0,
  })

  return urls
}
