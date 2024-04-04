'use client'

import React from 'react'

const TabContext = React.createContext(0)

export function Tabs({
  labels,
  children,
}: {
  labels: string[]
  children: React.ReactNode
}) {
  const [currentTab, setCurrentTab] = React.useState(0)

  return (
    <TabContext.Provider value={currentTab}>
      <ul
        role="tablist"
        className="mt-4 flex w-max min-w-full border-b border-gray-200 p-0 pb-px dark:border-neutral-800"
      >
        {labels.map((label, index) => (
          <li className="not-prose m-0 list-none p-0" key={label}>
            <button
              role="tab"
              className={`-mb-0.5 mr-2 select-none rounded-t border-b-2 border-transparent p-2 font-medium leading-5 text-gray-600 transition-colors hover:border-gray-200 hover:text-black aria-selected:border-pink-500 dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white`}
              aria-selected={index === currentTab}
              onClick={() => setCurrentTab(index)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      {React.Children.toArray(children)[currentTab]}
    </TabContext.Provider>
  )
}

// rendering is controlled by Tabs so this is just a passthrough
// to give the markdown file a special tag to delimit each tab
export function Tab({ children }: { children: React.ReactNode }) {
  return children
}
