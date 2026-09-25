import { headers } from 'next/headers'
import type { Metadata } from 'next'

import {
  DEFAULT_DOCUMENT_TITLE,
  getDocumentTitle,
} from '@/lib/getDocumentTitle'

/**
 * Per-page metadata for MDX docs pages, injected as `generateMetadata` by the
 * remark-docs-layout plugin.
 *
 * The title is derived from the navigation tree rather than frontmatter, so it
 * needs the request pathname that middleware forwards as `x-pathname`.
 *
 * `absolute` keeps the existing titles verbatim instead of running them through
 * the root layout's `%s - Docs` template. Pages missing from the navigation fall
 * through to the root layout title.
 */
export function getDocsMetadata(): Metadata {
  const pathname = headers().get('x-pathname') ?? ''
  const documentTitle = getDocumentTitle(pathname)

  if (documentTitle === DEFAULT_DOCUMENT_TITLE) return {}

  return { title: { absolute: documentTitle } }
}
