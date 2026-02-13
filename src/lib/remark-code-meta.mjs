import { visit } from 'unist-util-visit'

export default function remarkCodeMeta() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      let meta = node.meta
      if (!meta) return

      // Strip Markdoc {% ... %} wrapper if present
      meta = meta.replace(/^\{%\s*/, '').replace(/\s*%\}$/, '')

      const props = {}

      // Parse key=value pairs from the meta string
      const regex = /(\w+)=(?:"([^"]*)"|(\[[^\]]*\])|(true|false|\d+))/g
      let match
      while ((match = regex.exec(meta)) !== null) {
        const key = match[1]
        const strVal = match[2]
        const arrVal = match[3]
        const literalVal = match[4]

        if (strVal !== undefined) {
          props[key] = strVal
        } else if (arrVal !== undefined) {
          // Keep array values as JSON strings — hProperties must be
          // primitives so MDX can serialise them into JSX attributes.
          props[key] = arrVal
        } else if (literalVal === 'true') {
          props[key] = true
        } else if (literalVal === 'false') {
          props[key] = false
        } else if (literalVal !== undefined) {
          props[key] = Number(literalVal)
        }
      }

      if (Object.keys(props).length > 0) {
        node.data = node.data || {}
        node.data.hProperties = {
          ...(node.data.hProperties || {}),
          ...props,
        }
      }
    })
  }
}
