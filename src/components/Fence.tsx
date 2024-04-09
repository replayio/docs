'use client'

import { Fragment, useState } from 'react'
import { Highlight } from 'prism-react-renderer'
import { sortHighlights } from '@/lib/highlights'
import clsx from 'clsx'
import { Icon } from './Icon'

const CopyButton = ({ children, className }: { children: string, className?: string }) => {
  const [isCopied, setIsCopied] = useState(false)
  return (
      !isCopied ? 
        <Icon
          className={clsx(className, 'absolute top-4 right-4 w-4 h-4 cursor-pointer text-white text-opacity-40 hover:text-opacity-100')}
          icon="clipboard"
          onClick={() => {navigator.clipboard.writeText(children); setIsCopied(true); setTimeout(() => setIsCopied(false), 4000)}}
        /> : <span className='absolute top-3 right-4'>Copied!</span>
  )
}

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
  const highlightedLines = sortHighlights(highlight)
  return (
    <Highlight
      code={children.trimEnd()}
      language={language}
      theme={{ plain: {}, styles: [] }}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={clsx(className, 'relative mt-0')} style={style}>
          <CopyButton>{children}</CopyButton>
         {
          fileName &&
            <div className='text-xs text-white pr-4 text-opacity-80 border-b border-white border-opacity-20 pt-1 pb-4 mb-4'>
              <span className='inline'><Icon icon="file" className='w-4 h-4 inline mr-1.5' />{fileName}</span>
            </div>
          }
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                <div className={clsx(highlightedLines.includes(lineIndex + 1) && 'bg-gray-400 bg-opacity-15', 'px-3'
                )}>
                  <>
                    { lineNumbers && <span className='text-white pr-4 text-opacity-30'>{(lineIndex + 1).toString().padStart(2, ' ')}</span>}
                    {line
                      .filter((token) => !token.empty)
                      .map((token, tokenIndex) => (
                        <span key={tokenIndex} {...getTokenProps({ token })} />
                      ))}
                    {'\n'}
                  </>
                </div>
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
