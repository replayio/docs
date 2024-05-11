'use client'
import clsx from 'clsx'
import React, { Fragment, useCallback, useEffect, useState } from 'react'

export function Steps({ children }: { children: React.ReactNode }) {
  function splitArray(arr: React.ReactNode[]) {
    const subArrays = []
    let currentSubArray: React.ReactNode[] = []

    arr.forEach((item: React.ReactNode) => {
      // @ts-ignore
      if (item?.type === 'a') {
        if (currentSubArray.length) {
          subArrays.push(currentSubArray)
        }
        currentSubArray = [item]
      } else {
        currentSubArray.push(item)
      }
    })

    if (currentSubArray.length) {
      subArrays.push(currentSubArray)
    }

    return subArrays
  }

  const splitArrayResult = splitArray(React.Children.toArray(children))
  return (
    <>
      {splitArrayResult.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div
            className={clsx(
              'ml-0 flex before:relative before:bottom-0 before:left-[18px] before:top-0 before:-z-10 before:-mb-12 before:mt-28 before:border-2 before:border-sky-500/20 md:before:block lg:-ml-[50px]',
              sectionIndex + 1 === splitArrayResult.length && 'before:mb-0',
            )}
          >
            <div className="mr-4 mt-16 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-sky-500 font-bold text-sky-500 ">
              {sectionIndex + 1}
            </div>
            <div className="w-full">
              {section.map((item, itemIndex) => (
                <Fragment key={itemIndex}>{item}</Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
