import Link from 'next/link'
import { Icon, icons } from './Icon'

export interface CardAttributes {
  title: string
  content: string
  icon: keyof typeof icons
  href: string
}

export default function Card({
  title, 
  content,
  icon,
  href
}: CardAttributes) {

return (
  <Link href={href}>
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-40 bg-gradient-to-br from-sky-500 to-pink-300 flex justify-center items-center">
        <Icon icon={icon} className="w-20 h-20 opacity-95 text-white" />
      </div>
      <div className="px-6 py-9 dark:bg-gray-950/50">
        <div className="font-bold text-xl mb-4">{title}</div>
        <p className="dark:text-gray-300 text-gray-700">
          {content}
        </p>
      </div>
    </div>
  </Link>   
  )
}
