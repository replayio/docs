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
        <div className="px-6 py-9 dark:bg-white/5">
          <div className="mb-2 text-xl font-bold dark:text-slate-100">
            {title}
          </div>
          <p className="dark:text-slate-300">{content}</p>
        </div>
      </div>
    </Link>
  )
}
