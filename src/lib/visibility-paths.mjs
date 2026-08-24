/**
 * Canonical path visibility rules for docs pages.
 *
 * Used by webpack loaders (search.mjs), middleware, and re-exported from
 * visibility.ts for the Next.js runtime.
 */

export const VISIBLE_PREFIXES = ['/basics/replay-qa']

/** Doc sections that may contain hidden pages. */
const DOC_SECTION_PREFIXES = ['/basics/', '/learn/', '/reference/']

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return pathname
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

function matchesVisiblePrefix(pathname) {
  const normalized = normalizePath(pathname)
  return VISIBLE_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  )
}

/**
 * True when a path lives under /basics/, /learn/, or /reference/ but is not
 * part of the visible Replay QA surface.
 */
export function isHiddenPath(pathname) {
  const normalized = normalizePath(pathname)
  if (!normalized) return false

  const inDocSection = DOC_SECTION_PREFIXES.some(
    (prefix) =>
      normalized === prefix.slice(0, -1) || normalized.startsWith(prefix),
  )
  if (!inDocSection) return false

  return !matchesVisiblePrefix(normalized)
}
