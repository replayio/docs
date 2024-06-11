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
        className="m-0 flex w-max min-w-full justify-end pb-px text-xs dark:border-neutral-800"
      >
        {labels.map((label, index) => (
          <li className="not-prose m-0 list-none p-0" key={label}>
            <button
              role="tab"
              className={`-mb-0.5 mr-2 select-none rounded-t border-b-2 border-transparent px-2 pb-1 pt-2 font-medium leading-5 text-gray-400 transition-colors hover:text-pink-500 aria-selected:text-gray-900 dark:text-gray-600 dark:aria-selected:text-white`}
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
