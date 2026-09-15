import clsx from 'clsx'

export function Prose<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: React.ComponentPropsWithoutRef<T> & {
  as?: T
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'prose prose-gray dark:prose-invert dark:text-zinc-300',
        // headings — semibold + tight tracking (matches marketing site feel)
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-gray-600 dark:prose-lead:text-zinc-400',
        // links — bold primary token with a muted underline so they read as links, not bold text
        'prose-a:font-semibold prose-a:text-primary prose-a:underline prose-a:decoration-gray-400 prose-a:underline-offset-2 hover:prose-a:decoration-gray-700 dark:prose-a:decoration-zinc-500 dark:hover:prose-a:decoration-zinc-300',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-gray-900 prose-pre:shadow-lg dark:prose-pre:bg-zinc-900 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-white/5',
        // hr
        'prose-hr:border-gray-200 dark:prose-hr:border-zinc-800',
        // Always defer max-width to the parent <article> so wide tokens
        // (long URLs, oversized <pre>, images) can never push the page
        // wider than the viewport.
        'min-w-0 max-w-full',
      )}
      {...props}
    />
  )
}
