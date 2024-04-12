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
        className="col-span-1 flex cursor-pointer rounded-md  border border-gray-100 shadow-sm hover:border-gray-200 dark:bg-slate-800"
      >
        <div className="flex items-center justify-center p-5">
          <Icon icon={icon} className="h-8 w-8" />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex-1 px-4 py-2 text-sm">
            <p className="font-semibold text-gray-800 hover:text-gray-900 dark:text-slate-50">
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
