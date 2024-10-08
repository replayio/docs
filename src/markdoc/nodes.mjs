import { nodes as defaultNodes, Tag } from '@markdoc/markdoc'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import yaml from 'js-yaml'
import { headers } from 'next/headers'

import { DocsLayout } from '@/components/DocsLayout'
import { Fence } from '@/components/Fence'
import { getDocumentTitle } from '@/lib/getDocumentTitle'

let documentSlugifyMap = new Map()

const nodes = {
  document: {
    ...defaultNodes.document,
    render: DocsLayout,
    transform(node, config) {
      documentSlugifyMap.set(config, slugifyWithCounter())

      const heads = headers()
      const pathname = heads.get('x-pathname')

      const title = getDocumentTitle(pathname)

      return new Tag(
        this.render,
        {
          documentTitle: title,
          frontmatter: yaml.load(node.attributes.frontmatter),
          nodes: node.children,
        },
        node.transformChildren(config),
      )
    },
  },
  heading: {
    ...defaultNodes.heading,
    transform(node, config) {
      let slugify = documentSlugifyMap.get(config)
      let attributes = node.transformAttributes(config)
      let children = node.transformChildren(config)
      let text = children.filter((child) => typeof child === 'string').join(' ')
      let id = attributes.id ?? slugify(text)

      return new Tag(`a`, { href: `#${id}`, ...attributes }, [
        new Tag(`h${node.attributes.level}`, { id }, children),
      ])
    },
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: 'col',
      },
    },
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
      lineNumbers: {
        type: Boolean,
      },
      fileName: {
        type: Boolean,
      },
      highlight: {
        type: Array,
      },
    },
  },
}

export default nodes
