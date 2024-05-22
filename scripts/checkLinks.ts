/*
  This script is used to check all links in the docs and verify that they are working.

  To run the script, run:
  bun scripts/checkLinks.ts
*/

import * as fs from 'fs'
import { Glob } from 'bun'
import fetch from 'node-fetch'
import { marked } from 'marked'
import vercelConfig from '../vercel.json'

const LOCAL_BASE = process.env.BASE_URL || 'http://localhost:3000'

const excludePage = [
  './src/app/test-runners/cypress-io/panel.md',
  './src/app/test-runners/cypress-io/dashboard.md',
  './src/app/test-runners/_archive/jest.md',
]
const excludeUrl = [
  'https://webreplay.us.auth0.com/login/callback?connection=',
  '/discord',
]

function isFullUrl(url: string): boolean {
  // A regular expression to check if the URL starts with http://, https://, or //
  return /^(https?:\/\/|\/\/)/.test(url)
}

async function checkLink(url: string): Promise<boolean> {
  let timeout
  try {
    // cancel after 10 seconds
    const controller = new AbortController()
    timeout = setTimeout(() => controller.abort(), 10_000)

    const response = await fetch(url, { signal: controller.signal })
    return response.ok // Returns true if the response is 2xx
  } catch (error) {
    console.error(`Error checking ${url}: ${error}`)
    return false
  } finally {
    clearTimeout(timeout)
  }
}

async function checkLinkInFile(
  link: string,
  filePath: string,
): Promise<boolean> {
  if (link.match(/^(mailto|blob)/)) {
    return true
  }

  if (excludeUrl.includes(link)) {
    return true
  }
  const url = isFullUrl(link) ? link : `${LOCAL_BASE}${link}`

  const isOk = await checkLink(url)

  if (!isOk) {
    process.stdout.write('x')
    return false
  } else {
    // write a dot to the same line
    process.stdout.write('.')
    return true
  }
}

async function checkLinksInFile(filePath: string, links: string[]) {
  const failedLinks = []
  for (const link of links) {
    const isOk = await checkLinkInFile(link, filePath)
    if (!isOk) {
      failedLinks.push(link)
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
  for (const [index, file] of files.entries()) {
    const { file: filePath, links } = file
    process.stdout.write(`${index + 1} ${filePath} `)
    failedLinks.push(...(await checkLinksInFile(filePath, links)))
    process.stdout.write('\n')
  }

  console.log('Checking links in Vercel.json')
  failedLinks.push(
    ...(await checkLinksInFile(
      'vercel.json',
      vercelConfig.redirects.map((l) => l.destination),
    )),
  )

  const dedupedFailedLinks = [...new Set(failedLinks)]

  if (failedLinks.length > 0) {
    console.error('\nThe following links are broken:')
    for (const link of dedupedFailedLinks) {
      console.error(link)
    }
    process.exit(1)
  } else {
    console.log('\nAll links are working')
    process.exit(0)
  }
}

main().catch(console.error)
