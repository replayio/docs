import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Icon } from './Icon'

const BackToTop = () => {
  const [showGoTop, setShowGoTop] = useState(false)

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50)
  }

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton)
  }, [])

  return (
    <>
      <div
        className={clsx(
          showGoTop ? 'opacity-100' : 'opacity-0',
          'transition-all',
        )}
      >
        <hr className="border-px my-4 w-12 border-gray-500 border-opacity-35" />
        <div
          className="text-sm font-normal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          onClick={handleScrollUp}
        >
          <button className="flex">
            <Icon icon="arrowup" className="h-7 w-7" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default BackToTop
