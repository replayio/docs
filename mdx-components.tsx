import type { MDXComponents } from 'mdx/types'

import { Accordion, AccordionItem } from '@/components/Accordian'
import { Basic } from '@/components/Basic'
import { Callout } from '@/components/Callout'
import { Fence } from '@/components/Fence'
import { Figure } from '@/components/Figure'
import { Group } from '@/components/Group'
import { Icon } from '@/components/Icon'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { SnapshotsVsReplay } from '@/components/SnapshotsVsReplay'
import { Steps } from '@/components/Steps'
import { Tab, Tabs } from '@/components/Tabs'
import { TwoColumns } from '@/components/TwoColumns'
import { Video } from '@/components/Video'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Figure,
    Video,
    Steps,
    Tabs,
    Tab,
    Accordion,
    AccordionItem,
    QuickLinks,
    QuickLink,
    TwoColumns,
    Group,
    Icon,
    Basic,
    SnapshotsVsReplay,
    pre: ({ children, ...props }: React.ComponentPropsWithoutRef<'pre'>) => {
      const codeEl = children as React.ReactElement<Record<string, unknown>>

      if (codeEl?.props) {
        const codeProps = codeEl.props
        const className = codeProps.className as string | undefined
        const code = codeProps.children as string | undefined
        const fileName = codeProps.fileName as string | undefined
        const lineNumbers = codeProps.lineNumbers as boolean | undefined
        const rawHighlight = codeProps.highlight as
          | string
          | string[]
          | undefined
        const highlight =
          typeof rawHighlight === 'string'
            ? (JSON.parse(rawHighlight) as string[])
            : rawHighlight
        const language = className?.replace('language-', '') || ''

        if (typeof code === 'string') {
          return (
            <Fence
              language={language}
              fileName={fileName ?? ''}
              lineNumbers={lineNumbers ?? false}
              highlight={highlight ?? []}
            >
              {code}
            </Fence>
          )
        }
      }

      return <pre {...props}>{children}</pre>
    },
    th: ({ children, ...props }: React.ComponentPropsWithoutRef<'th'>) => (
      <th scope="col" {...props}>
        {children}
      </th>
    ),
    ...components,
  }
}
