import { headers } from 'next/headers'

import { DocsHeader } from '@/components/DocsHeader'
import { PrevNextLinks } from '@/components/PrevNextLinks'
import { Prose } from '@/components/Prose'
import { TableOfContents } from '@/components/TableOfContents'
import { getDocumentTitle } from '@/lib/getDocumentTitle'

export function DocsLayout({
  children,
  frontmatter: { title, description, image, imageHeight, badge },
}: {
  children: React.ReactNode
  frontmatter: {
    title?: string
    description?: string
    image?: string
    imageHeight?: number
    badge?: string
  }
}) {
  const heads = headers()
  const pathname = heads.get('x-pathname')
  const documentTitle = getDocumentTitle(pathname ?? '')

  return (
    <>
      <div
        data-test-id="docs-layout"
        className="flex w-full min-w-0 flex-auto py-8"
      >
        <div className="flex w-full flex-col items-center">
          <article className="grow break-words lg:mr-8 lg:max-w-3xl lg:pl-16">
            <DocsHeader
              description={description}
              documentTitle={documentTitle}
              imageHeight={imageHeight}
              image={image}
              badge={badge}
              title={title}
            />
            <Prose>{children}</Prose>
          </article>
          <PrevNextLinks />
        </div>
      </div>
      <TableOfContents />
    </>
  )
}
