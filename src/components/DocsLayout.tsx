import { type Node } from '@markdoc/markdoc'

import { DocsHeader } from '@/components/DocsHeader'
import { PrevNextLinks } from '@/components/PrevNextLinks'
import { Prose } from '@/components/Prose'
import { TableOfContents } from '@/components/TableOfContents'
import { collectSections } from '@/lib/sections'

export function DocsLayout({
  children,
  documentTitle,
  frontmatter: { title, description, image, imageHeight, badge },
  nodes,
}: {
  children: React.ReactNode
  documentTitle: string
  frontmatter: {
    title?: string
    description?: string
    image?: string
    imageHeight?: number
    badge?: string
  }
  nodes: Array<Node>
}) {
  let tableOfContents = collectSections(nodes)

  return (
    <>
      <div
        data-test-id="docs-layout"
        className="flex min-w-0  flex-auto grow px-4 py-8 "
      >
        <div className="flex w-full flex-col  items-center">
          <article className=" grow lg:max-w-4xl  lg:pl-16 lg:pr-0 xl:px-4">
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
      <TableOfContents tableOfContents={tableOfContents} />
    </>
  )
}
