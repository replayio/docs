import { Parser } from 'acorn'
import acornJsx from 'acorn-jsx'

const parser = Parser.extend(acornJsx())

function parse(code) {
  return parser.parse(code, {
    sourceType: 'module',
    ecmaVersion: 'latest',
  })
}

export default function remarkDocsLayout() {
  return (tree) => {
    // Skip if there's already a default export
    const hasDefaultExport = tree.children.some(
      (node) =>
        node.type === 'mdxjsEsm' &&
        node.data?.estree?.body?.some(
          (n) => n.type === 'ExportDefaultDeclaration',
        ),
    )
    if (hasDefaultExport) return

    const importCode = `import { DocsLayout } from '@/components/DocsLayout'`
    const exportCode = `export default ({ children }) => <DocsLayout frontmatter={frontmatter}>{children}</DocsLayout>`

    tree.children.unshift(
      {
        type: 'mdxjsEsm',
        value: importCode,
        data: { estree: parse(importCode) },
      },
      {
        type: 'mdxjsEsm',
        value: exportCode,
        data: { estree: parse(exportCode) },
      },
    )
  }
}
