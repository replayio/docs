import React, { Fragment } from 'react'

export function Steps({
  children,
}: {
  children: React.ReactNode
}) {

  function splitArray(arr: React.ReactNode[]) {
    const subArrays = [];
    let currentSubArray: React.ReactNode[] = [];
  
    arr.forEach((item: React.ReactNode) => {
      // @ts-ignore
      if (item?.type === 'h2') {
        if (currentSubArray.length) {
          subArrays.push(currentSubArray);
        }
        currentSubArray = [item];
      } else {
        currentSubArray.push(item);
      }
    });
  
    if (currentSubArray.length) {
      subArrays.push(currentSubArray);
    }
  
    return subArrays;
  }

  const splitArrayResult = splitArray(React.Children.toArray(children));

  return (
    <div className='border-gray-300 border-l-2 border-opacity-50 mt-12 dark:border-pink-800'>
      {splitArrayResult.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex" style={{marginLeft: '-50px'}}>
          <div className="mr-4 mt-0 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tl from-sky-600 to-sky-300 font-bold text-white ">
            {sectionIndex + 1}
          </div>
          <div className='w-full -mt-12'>
            {section.map((item, itemIndex) => (
              <Fragment key={itemIndex}>{item}</Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}