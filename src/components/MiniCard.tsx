import Link from 'next/link'
import { CardAttributes } from './Card'
import { Icon } from './Icon'

export default function MiniCard({
  title,
  content,
  icon,
  href,
}: CardAttributes) {
  return (
    <Link href={href} className="w-full">
      <li
        key={title}
        className="col-span-1 flex rounded-md bg-gray-100/70 bg-opacity-30 shadow-md transition-colors hover:bg-gray-200/90 dark:bg-gray-950/50 dark:hover:bg-gray-900/50"
      >
        <div className="flex justify-center pl-4 pt-3">
          <Icon icon={icon} className="h-6 w-6" />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex-1 px-4 py-2 text-sm">
            <p className="font-bold dark:text-white">{title}</p>
            <p className="text-gray-700 dark:text-gray-300">{content}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
