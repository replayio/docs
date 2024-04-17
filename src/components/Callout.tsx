import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import Link from 'next/link'

const styles = {
  note: {
    container:
      'bg-sky-50 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10',
    title: 'text-sky-900 dark:text-sky-400',
    body: 'text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-gray-300 dark:prose-code:text-gray-300',
  },
  link: {
    container:
      'bg-sky-50 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10',
    title: 'text-sky-900 dark:text-sky-400',
    body: 'text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-gray-300 dark:prose-code:text-gray-300',
  },
  warning: {
    container:
      'bg-amber-50 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10',
    title: 'text-amber-900 dark:text-amber-500',
    body: 'text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-gray-300 dark:[--tw-prose-underline:theme(colors.sky.700)] dark:prose-code:text-gray-300',
  },
}

const icons = {
  note: (props: { className?: string }) => <Icon icon="lightbulb" {...props} />,
  link: (props: { className?: string }) => <Icon icon="link" {...props} />,
  warning: (props: { className?: string }) => (
    <Icon icon="warning" color="amber" {...props} />
  ),
  none: ''
}

export function Callout({
  title,
  children,
  type = 'note',
  showIcon = true,
  href
}: {
  title: string
  children: React.ReactNode
  type?: keyof typeof styles
  showIcon?: boolean
  href?: string
}) {
  let IconComponent = icons[type]

  const getTitleComponent = () => href ? 
    <Link href={href} className={clsx('m-0 font-display text-xl', styles[type].title)}>
      {title}
    </Link> :
    title && <p className={clsx('m-0 font-display text-xl', styles[type].title)}>
      {title}
    </p>

  return (
    <div className={clsx('my-8 flex rounded-3xl p-6', styles[type].container)}>
      { showIcon && <IconComponent className="h-8 w-8 flex-none" /> }
      <div className="ml-4 flex-auto">
        { title && getTitleComponent() }
        <div className={clsx('prose', styles[type].body)}>
          {children}
        </div>
      </div>
    </div>
  )
}
