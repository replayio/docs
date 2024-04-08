'use client'

import { Fragment, useState } from 'react'
import { Highlight } from 'prism-react-renderer'
import { sortHighlights } from '@/lib/highlights'
import clsx from 'clsx'
import { Icon } from './Icon'

export function Fence({
  children,
  language,
  lineNumbers,
  fileName,
  highlight
}: {
  children: string
  language: string
  lineNumbers: boolean
  fileName: string
  highlight: string[]
}) {
  const [isCopied, setIsCopied] = useState(false)
  const highlightedLines = sortHighlights(highlight)
  return (
    <Highlight
      code={children.trimEnd()}
      language={language}
      theme={{ plain: {}, styles: [] }}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
         {
          fileName &&
            <div className='text-xs text-white pr-4 text-opacity-80 border-b border-white border-opacity-20 pt-1 pb-4 mb-4 flex justify-between'>
              <span className='inline'><Icon icon="file" className='w-4 h-4 inline mr-1.5' />{fileName}</span>
            { !isCopied ? 
              <Icon
                className='w-4 h-4 cursor-pointer' 
                icon="clipboard"
                onClick={() => {navigator.clipboard.writeText(children); setIsCopied(true); setTimeout(() => setIsCopied(false), 4000)}}
              /> : <span>Copied!</span>
            }
            </div>
          }
          <code>
            {tokens.map((line, lineIndex) => (
              <>
                <div className={clsx(highlightedLines.includes(lineIndex + 1) && 'bg-gray-400 bg-opacity-15', 'px-3'
            )}>
                  <Fragment key={lineIndex}>
                    { lineNumbers && <span className='text-white pr-4 text-opacity-30'>{lineIndex + 1}</span>}
                    {line
                      .filter((token) => !token.empty)
                      .map((token, tokenIndex) => (
                        <span key={tokenIndex} {...getTokenProps({ token })} />
                      ))}
                    {'\n'}
                  </Fragment>
                  </div>
                </>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
