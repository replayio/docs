import { DocsHeader } from '@/components/DocsHeader'
import { PrevNextLinks } from '@/components/PrevNextLinks'
import { Prose } from '@/components/Prose'
import { TableOfContents } from '@/components/TableOfContents'

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
  return (
    <>
      <div
        data-test-id="docs-layout"
        className="flex w-full min-w-0 flex-auto py-10"
      >
        <div className="flex w-full min-w-0 flex-col items-center">
          <article className="w-full min-w-0 grow break-words px-4 sm:px-6 lg:mr-8 lg:max-w-3xl lg:pl-16">
            <DocsHeader
              description={description}
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
