import React, { CSSProperties, useRef, useState } from 'react'
import { track } from '@vercel/analytics'

export const Zoom = ({ children }: {children: React.ReactNode}) => {

  const containerRef = useRef<HTMLDivElement>(null)

  const [clicked, setClicked] = useState(false)

  const handleImageZoom = () => {
    track('Zoom', {})
    if (!containerRef.current || clicked) return

    const containerRect = containerRef.current.getBoundingClientRect()
    let clientHeight = containerRect.height
    let clientWidth = containerRect.width

    const wPrim = (window.innerWidth - containerRect.width) / 2
    const hPrim = (window.innerHeight - containerRect.height) / 2
    const cL = containerRect.left
    const cT = containerRect.top

    const zoomPerc = 0.9
    if (
      ((window.innerHeight * zoomPerc) / clientHeight) * clientWidth >=
      window.innerWidth
    ) {
      containerRef.current.style.transform = `translate(${wPrim - cL}px,${
        hPrim - cT
      }px) scale(${(window.innerWidth * zoomPerc) / clientWidth})`
    } else {
      containerRef.current.style.transform = `translate(${wPrim - cL}px,${
        hPrim - cT
      }px) scale(${(window.innerHeight * zoomPerc) / clientHeight})`
    }

    if (clientWidth <= clientHeight) {
    } else {
    }

    window.document.addEventListener('scroll', closeWrapper, { once: true })
    window.document.addEventListener('click', closeWrapper, { once: true })

    setClicked(true)
  }

  const closeWrapper = () => {
    track('Zoom Out', {})

    if (!containerRef.current) return
    containerRef.current.style.transform = `scale(1)`
    setClicked(false)
  }

  const styles: CSSProperties = {
    position: 'relative',
    transition: `transform 300ms`,
    display:  'block',
    width:  '100%',
    height:  'auto',
    zIndex: clicked ? 50 : 0,
    overflow: clicked ? 'hidden' : '',
    backgroundColor: 'transparent',
    cursor:  clicked ? 'zoom-out' : 'zoom-in'
  }

  return (
    <>
      {clicked ? (
        <div
          data-testid="zoomed-in-player"
          style={{
            position: 'fixed',
            zIndex: 40,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          className={`bg-gray-950 bg-opacity-70 backdrop-blur-sm`}
          onClick={closeWrapper}
        />
      ) : null}
      <div data-testid="zoomed-out-player" style={styles} ref={containerRef} onClick={handleImageZoom}>
        {children}
      </div>
    </>
  )
}

export default Zoom
