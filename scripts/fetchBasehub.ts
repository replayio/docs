import fs from 'fs'

type Data = {
  data: {
    pages: {
      items: {
        _title: string
        articles: {
          items: {
            _title: string
            children: {
              items: {
                _title: string
                body: {
                  markdown: string
                }
                children: {
                  items: {
                    _title: string
                    body: {
                      markdown: string
                    }
                  }[]
                }
              }[]
            }
            body: {
              markdown: string
            }
          }[]
        }
      }[]
    }
  }
}

const query = `
{
  pages {
    items {
      _title
      articles {
        _title
        
        items {
          _title
          children {
            items {
              _title
              body {
                markdown
              }
              children {
                items {
                  _title
                  body {
                    markdown
                  }
                }
              }
            }
          }
          body {
            markdown
          }
        }
      }
    }
  }
}
`
async function fetchBaseHub(query: string) {
  return fetch('https://api.basehub.com/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization:
        'Bearer bshb_pk_epn9gffybmvlc30c1u6ycowzwnyfyfy1hzeedmacrdozyi13tw486xsd4v9bgjr9',
    },
    body: JSON.stringify({ query: query }),
  })
}

;(async () => {
  const res = await fetchBaseHub(query)
  const data: Data = await res.json()
  writeArticle(data)
})()

// Help me parse the images out of markdown
// fetch them and save them to the file system
// replace the image links with the local path
async function fetchImagesFromMarkdown(markdown: string) {
  const regex = /!\[.*\]\((.*)\)/g
  const matches = markdown.match(regex)
  if (!fs.existsSync('out/images')) {
    fs.mkdirSync('out/images', { recursive: true })
  }

  if (matches) {
    for (const match of matches) {
      const url = match.match(/\((.*)\)/)?.[1]
      if (!url) {
        continue
      }
      const res = await fetch(url)
      const buffer = await res.arrayBuffer()
      const path = url.split('/').pop()
      fs.writeFileSync(`out/images/${path}`, buffer as any)
    }
  }
}

// help me replace image links with figure tags
// e.g `![alt](url)` -> `{% figure alt="Elements panel" src="/images/<filename>" height=870 width=870/%}`
function replaceImagesWithFigures(markdown: string) {
  const regex = /!\[.*\]\((.*)\)/g
  const matches = markdown.match(regex)
  if (matches) {
    for (const match of matches) {
      const url = match.match(/\((.*)\)/)?.[1]
      if (!url) {
        continue
      }
      const path = url.split('/').pop()
      markdown = markdown.replace(
        match,
        `{% figure alt="Elements panel" src="/images/${path}" height=870 width=870/%}`,
      )
    }
  }
  return markdown
}

// add a `--- title: Console Panel ---` to the top of the file
// where title is passed in as an argument
function addTitleToMarkdown(title: string, markdown: string) {
  return `---\ntitle: ${title}\n---\n${markdown}`
}

async function writeArticle(data: Data) {
  for (const sections of data.data.pages.items) {
    const title = sections._title
    const articles = sections.articles.items
    for (const article of articles) {
      const articleTitle = article._title
      console.log(`${title} - ${articleTitle}`)
      for (const child of article.children.items) {
        const childTitle = child._title
        const path = `${title}/${articleTitle}/${childTitle}`.replace(
          /\s/g,
          '-',
        )

        // console.log(`    ${path}`);
        const markdown = child?.body?.markdown
        writeFileFromMarkdown(`out/${path}/page.md`, childTitle, markdown)

        for (const subChild of child.children.items) {
          const subChildTitle = subChild._title
          const subPath = `${path}/${subChildTitle}`.replace(/\s/g, '-')
          const markdown = subChild?.body?.markdown
          writeFileFromMarkdown(
            `out/${subPath}/page.md`,
            subChildTitle,
            markdown,
          )
        }
      }
    }
  }
}

async function writeFileFromMarkdown(
  path: string,
  title: string,
  content: string,
) {
  if (!content) {
    console.log(path, title, 'no content')
    return
  }

  await fetchImagesFromMarkdown(content)
  const m1 = replaceImagesWithFigures(content)
  const m2 = addTitleToMarkdown(title, m1)

  path = path.toLowerCase()
  console.log('writing file', path)

  const dir = path.split('/')
  dir.pop()
  const dirname = dir.join('/')

  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true })
  }
  fs.writeFileSync(path, m2)
}
