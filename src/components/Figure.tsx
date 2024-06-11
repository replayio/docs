'use client'
import Zoom from '@/components/Zoom'
import Image from 'next/image'
import { LoaderAnimation } from './icons/LoaderAnimation'

export function Figure({
  className = '',
  src,
  alt = '',
  children,
  height,
  width,
  gradient = '',
  showRadius = true,
  ripple = false,
}: {
  className: string
  src: string
  alt: string
  children?: React.ReactNode
  height?: number
  width?: number
  showRadius?: boolean
  gradient?: string
  ripple: boolean
}) {
  const fill = !(height && width)
  const imgProps = {
    src,
    alt,
    height,
    width,
    fill,
    className: `${gradient} object-contain rounded ${
      ripple && 'shadow-ripple'
    } ${
      showRadius &&
      !gradient &&
      'rounded-lg border border-gray-200 p-1 dark:border-slate-600'
    }
    }`,
  }

  return (
    <figure title={alt} className={`not-prose mt-6 flex flex-col ${className}`}>
      <div
        className={`relative grid flex-grow justify-center ${
          gradient ? `rounded p-10 sm:rounded-lg sm:p-10 ${gradient}` : ''
        }`}
      >
        {fill && gradient ? (
          <div className="absolute bottom-3 left-3 right-3 top-3 sm:bottom-4 sm:left-4 sm:right-4 sm:top-4">
            <Zoom>
              <Image {...imgProps} placeholder={LoaderAnimation} />
            </Zoom>
          </div>
        ) : (
          <Zoom>
            <Image {...imgProps} placeholder={LoaderAnimation} />
          </Zoom>
        )}
      </div>
      {children ? (
        <figcaption className="flex-shrink pt-3 text-center">
          {children}
        </figcaption>
      ) : null}
    </figure>
  )
}
