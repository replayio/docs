import * as fs from 'fs'
import { Glob } from 'bun'
import fetch from 'node-fetch'
import { marked } from 'marked'

const LOCAL_BASE = 'http://localhost:3000'

const excludePage = [
  './src/app/test-runners/cypress-io/panel.md',
  './src/app/test-runners/cypress-io/dashboard.md',
  './src/app/test-runners/_archive/jest.md',
]
const excludeUrl = ['https://webreplay.us.auth0.com/login/callback?connection=']

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

async function checkLinksInFile(filePath: string, links: string[]) {
  const failedLinks = []
  for (const link of links) {
    if (link.match(/^(mailto|blob)/)) {
      continue
    }

    if (excludeUrl.includes(link)) {
      continue
    }
    const url = isFullUrl(link) ? link : `${LOCAL_BASE}${link}`

    const isOk = await checkLink(url)
    if (!isOk) {
      const message = `Link ${url} in ${filePath} is broken`
      console.error(message)
      failedLinks.push(message)
    }
  }
  return failedLinks
}

async function collectLinksInFile(
  filePath: string,
): Promise<{ file: string; links: string[] }> {
  const content = fs.readFileSync(filePath, 'utf8')
  const links: string[] = []

  const renderer = new marked.Renderer()
  const originalLinkRenderer = renderer.link

  renderer.link = (href, title, text) => {
    links.push(href)
    return originalLinkRenderer.call(renderer, href, title, text)
  }

  marked(content, { renderer })
  return { file: filePath, links }
}

async function main(): Promise<void> {
  const glob = new Glob('./src/app/**/page.md')

  const files = []
  for await (const file of glob.scan('.')) {
    if (excludePage.includes(file)) {
      continue
    }
    const newLinks = await collectLinksInFile(file)
    files.push(newLinks)
  }

  console.log(`Checking ${files.length} files...`)

  const failedLinks = []
  for (const file of files.slice(0, 5)) {
    const { file: filePath, links } = file
    console.log(`${filePath}`)
    failedLinks.push(...(await checkLinksInFile(filePath, links)))
  }

  if (failedLinks.length > 0) {
    console.error('\nThe following links are broken:')
    for (const link of failedLinks) {
      console.error(link)
    }
    process.exit(1)
  } else {
    console.log('All links are working')
  }
}

main().catch(console.error)
