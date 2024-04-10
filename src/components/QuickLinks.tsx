import Link from 'next/link'

import { Icon } from '@/components/Icon'

export function QuickLinks({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
  return (
    <div className='bg-sky-500 dark:bg-gray-900 bg-opacity-10 rounded-xl px-8 py-8 mt-12'>
      { title && <div className='text-2xl dark:text-gray-100 text-gray-800 font-medium'>{title}</div> }
      { description && <p className='dark:text-gray-400 text-gray-700'>{description}</p>}
      <div className="not-prose mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {children}
      </div>
    </div>
  )
}

export function QuickLink({
  title,
  description,
  href,
  icon,
}: {
  title: string
  description: string
  href: string
  icon: React.ComponentProps<typeof Icon>['icon']
}) {
  return (
    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative overflow-hidden rounded-xl p-6">
        <Icon icon={icon} className="h-8 w-8" />
        <h2 className="mt-4 font-display text-base text-gray-900 dark:text-white">
          <Link href={href}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}
