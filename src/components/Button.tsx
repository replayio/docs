import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'rounded-full bg-pink-500 text-white py-2 px-4 text-sm font-semibold text-gray-900 hover:bg-pink-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500/50 active:bg-pink-500 transition-all',
  secondary:
    'rounded-full bg-gray-900/90 dark:bg-gray-600/70 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-gray-400 transition-all',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(variantStyles[variant], className)

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
