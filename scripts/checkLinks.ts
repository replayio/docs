import * as fs from 'fs'
import { Glob } from 'bun'
import fetch from 'node-fetch'
import { marked } from 'marked'

const LOCAL_BASE = 'http://localhost:3000'

function isFullUrl(url: string): boolean {
  // A regular expression to check if the URL starts with http://, https://, or //
  return /^(https?:\/\/|\/\/)/.test(url)
}

async function checkLink(url: string): Promise<boolean> {
  try {
    const response = await fetch(url)
    return response.ok // Returns true if the response is 2xx
  } catch (error) {
    console.error(`Error checking ${url}: ${error}`)
    return false
  }
}

async function checkLinksInFile(filePath: string): Promise<void> {
  const content = fs.readFileSync(filePath, 'utf8')
  const links: string[] = []

  const renderer = new marked.Renderer()
  const originalLinkRenderer = renderer.link

  renderer.link = (href, title, text) => {
    links.push(href)
    return originalLinkRenderer.call(renderer, href, title, text)
  }

  marked(content, { renderer })

  for (const link of links) {
    if (link.match(/^(mailto|blob)/)) {
      continue
    }
    const url = isFullUrl(link) ? link : `${LOCAL_BASE}${link}`

    const isOk = await checkLink(url)
    if (!isOk) {
      console.error(`${filePath} :: ${link} is broken`)
    }
  }
}

async function main(): Promise<void> {
  const glob = new Glob('./src/app/**/*.md')

  for await (const file of glob.scan('.')) {
    await checkLinksInFile(file)
  }
}

main().catch(console.error)
