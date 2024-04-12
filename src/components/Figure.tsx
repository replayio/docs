'use client'
import Zoom from "@/components/Zoom";

export function Figure({
  className = '',
  src,
  alt = '',
  children,
  height,
  width,
  gradient = '',
  ripple = false
}: {
  className: string
  src: string
  alt: string
  children: React.ReactNode
  height?: number
  width?: number
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
    className: `${gradient} object-contain rounded ${ripple ? 'shadow-ripple' : ''}`,
  }

  return (
    <figure title={alt} className={`not-prose flex flex-col ${className}`}>
      <div
        className={`relative grid flex-grow justify-center ${
          gradient ? `rounded p-10 sm:rounded-lg sm:p-10 ${gradient}` : '' 
        }`}
      >
        {fill && gradient ? (
          <div className="absolute bottom-3 left-3 right-3 top-3 sm:bottom-4 sm:left-4 sm:right-4 sm:top-4">
            <Zoom {...imgProps} />
          </div>
        ) : (
          <Zoom {...imgProps} />
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
