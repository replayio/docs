import type { NavigationItem } from '@/lib/navigation'

export { VISIBLE_PREFIXES, isHiddenPath } from '@/lib/visibility-paths.mjs'

import { VISIBLE_PREFIXES } from '@/lib/visibility-paths.mjs'

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return pathname
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

function matchesVisiblePrefix(pathname: string): boolean {
  const normalized = normalizePath(pathname)
  return VISIBLE_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  )
}

function itemHasVisibleHref(item: NavigationItem): boolean {
  if (item.href && matchesVisiblePrefix(item.href)) return true
  return item.links?.some(itemHasVisibleHref) ?? false
}

/** True when a nav item should appear in the default (non-internal) sidebar. */
export function isVisibleNavItem(item: NavigationItem): boolean {
  return itemHasVisibleHref(item)
}

/** Filter a nav tree, optionally keeping hidden sections when showHidden is on. */
export function filterNavigation(
  items: NavigationItem[],
  showHidden: boolean,
): NavigationItem[] {
  if (showHidden) return items
  return items.filter(isVisibleNavItem)
}
