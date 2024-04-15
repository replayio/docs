import Link from 'next/link'
import { Icon, icons } from './Icon'

export interface CardAttributes {
  title: string
  content: string
  icon: keyof typeof icons
  href: string
}

export default function Card({ title, content, icon, href }: CardAttributes) {
  return (
    <Link href={href}>
      <div className="max-w-xs overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-sky-500 to-pink-300">
          <Icon icon={icon} className="h-20 w-20 text-white opacity-95" />
        </div>
        <div className="px-6 py-6 dark:bg-slate-700/50">
          <div className="text-md mb-1 font-bold">{title}</div>
          <p className="text-sm text-gray-700 dark:text-gray-300">{content}</p>
        </div>
      </div>
    </Link>
  )
}
