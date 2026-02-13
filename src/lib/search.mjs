import { slugifyWithCounter } from '@sindresorhus/slugify'
import glob from 'fast-glob'
import * as fs from 'fs'
import matter from 'gray-matter'
import * as path from 'path'
import { createLoader } from 'simple-functional-loader'
import * as url from 'url'

const __filename = url.fileURLToPath(import.meta.url)

function extractSections(content) {
  const slugify = slugifyWithCounter()
  const lines = content.split('\n')
  const sections = []
  let currentContent = []

  for (const line of lines) {
    // Skip import/export lines
    if (
      line.startsWith('import ') ||
      line.startsWith('export ') ||
      line.trim().startsWith('<') ||
      line.trim().startsWith('{')
    ) {
      continue
    }

    const headingMatch = line.match(/^#{1,2}\s+(.+)$/)
    if (headingMatch && headingMatch[1]) {
      const title = headingMatch[1].trim()
      const hash = slugify(title)
      // Push any accumulated content to previous section
      if (sections.length > 0 && currentContent.length > 0) {
        sections[sections.length - 1][2].push(...currentContent)
        currentContent = []
      }
      sections.push([title, hash, []])
    } else {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith('```')) {
        currentContent.push(trimmed)
      }
    }
  }

  // Flush remaining content
  if (sections.length > 0 && currentContent.length > 0) {
    sections[sections.length - 1][2].push(...currentContent)
  }

  return sections
}

export default function withSearch(nextConfig = {}) {
  let cache = new Map()

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: __filename,
        use: [
          createLoader(function () {
            let pagesDir = path.resolve('./src/app')
            this.addContextDependency(pagesDir)

            let files = glob.sync('**/page.mdx', { cwd: pagesDir })
            let data = files.map((file) => {
              let fileUrl =
                file === 'page.mdx'
                  ? '/'
                  : `/${file.replace(/\/page\.mdx$/, '')}`
              let raw = fs.readFileSync(path.join(pagesDir, file), 'utf8')

              let sections
              const { data: fm, content } = matter(raw)
              let keywords = []
              if (fm.keywords) {
                keywords =
                  typeof fm.keywords === 'string'
                    ? fm.keywords.split(/,\s+/)
                    : Array.isArray(fm.keywords)
                      ? fm.keywords
                      : []
              }

              if (cache.get(file)?.[0] === raw) {
                sections = cache.get(file)[1]
              } else {
                let title = fm.title || ''
                sections = [[title, null, []]]
                const extracted = extractSections(content)
                sections.push(...extracted)
                cache.set(file, [raw, sections])
              }

              return { url: fileUrl, sections, keywords }
            })

            // When this file is imported within the application
            // the following module is loaded:
            return `
              import FlexSearch from 'flexsearch'

              let sectionIndex = new FlexSearch.Document({
                tokenize: 'full',
                document: {
                  id: 'url',
                  index: 'content',
                  store: ['title', 'pageTitle', 'keywords'],
                },
                context: {
                  resolution: 9,
                  depth: 2,
                  bidirectional: true
                }
              })

              let data = ${JSON.stringify(data)}

              for (let { url, sections, keywords } of data) {
                for (let [title, hash, content] of sections) {
                  sectionIndex.add({
                    url: url + (hash ? ('#' + hash) : ''),
                    title,
                    content: [title, ...keywords, ...content ].join('\\n'),
                    pageTitle: hash ? sections[0][0] : undefined,
                  })
                }
              }

              export function search(query, options = {}) {
                let result = sectionIndex.search(query, {
                  ...options,
                  enrich: true,
                })
                if (result.length === 0) {
                  return []
                }
                return result[0].result.map((item) => ({
                  url: item.id,
                  title: item.doc.title,
                  pageTitle: item.doc.pageTitle,
                }))
              }
            `
          }),
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}
