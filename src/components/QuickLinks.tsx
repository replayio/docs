import Link from 'next/link'

import { Icon } from '@/components/Icon'

export function QuickLinks({
  children,
  title,
  description,
  mini,
}: {
  children: React.ReactNode
  title: string
  description: string
  mini?: boolean
}) {
  return (
    <div className={mini ? 'mt-12' : 'mt-12 rounded-xl py-8 '}>
      {title && (
        <div className="text-2xl font-medium text-gray-800 dark:text-gray-100">
          {title}
        </div>
      )}
      {description && (
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
      )}
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
  mini,
}: {
  title: string
  description: string
  href: string
  mini?: boolean
  icon: React.ComponentProps<typeof Icon>['icon']
}) {
  return (
    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />{' '}
      {mini ? (
        <div className="relative flex flex-row items-center overflow-hidden rounded-xl p-3 align-middle">
          <Icon
            icon={icon}
            className="mr-2 h-6 w-6 self-center fill-yellow-300 "
            viewBox={24}
            color="amber"
          />
          <h3 className=" font-display text-base text-gray-900 dark:text-white">
            <Link href={href}>{title}</Link>
          </h3>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-xl p-6">
          <Icon icon={icon} className="h-8 w-8" />
          <h3 className=" font-display text-base text-gray-900 dark:text-white">
            <Link href={href}>
              <span className="absolute -inset-px rounded-xl" />
              {title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      )}
    </div>
  )
}
