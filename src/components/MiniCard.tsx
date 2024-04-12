import clsx from 'clsx'
import { CardAttributes } from './Card'
import { Icon } from './Icon'

export default function MiniCard({
  title,
  content,
  icon,
  href,
}: CardAttributes) {
  return (
    <div>
      <li
        key={title}
        className="light:border-gray-100 light:hover:border-gray-200 col-span-1 flex  cursor-pointer rounded-md border shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:hover:border-slate-400"
      >
        <div className="flex items-center justify-center p-5">
          <Icon icon={icon} className="h-8 w-8" />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex-1 px-4 py-2 text-sm">
            <p className="light:hover:text-gray-900 font-semibold text-gray-800 dark:text-slate-200 dark:hover:text-slate-100">
              {title}
            </p>
            <p className="text-gray-600 dark:text-slate-300">{content}</p>
          </div>
          <div className="flex-shrink-0 pr-2 ">
            <Icon icon="chevron" className="h-8 w-8" />
          </div>
        </div>
      </li>
    </div>
  )
}
