'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { track } from '@vercel/analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

export default function NotFound() {
  useEffect(() => {
    track('404', {
      pathname: window.location.pathname,
      referrer: document.referrer,
    })
  }, [])
  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="font-display text-sm font-medium text-gray-900 dark:text-white">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl tracking-tight text-gray-900 dark:text-white">
          Page not found
        </h1>
        <Image
          src="/images/404.png"
          width={450}
          height={450}
          alt="Broken Delorean"
          placeholder="data:image/svg+xml;base64,PHN2ZyBpZD0iZUNNeXNXN3BMbXQxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDAwIDI0IiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+DQo8c3R5bGU+PCFbQ0RBVEFbDQojZUNNeXNXN3BMbXQyIHthbmltYXRpb246IGVDTXlzVzdwTG10Ml9jX28gMTAwMG1zIGxpbmVhciBpbmZpbml0ZSBub3JtYWwgZm9yd2FyZHM7IHdpZHRoOiA0MDBweDsgaGVpZ2h0OiAyNHB4OyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwIGF1dG87fUBrZXlmcmFtZXMgZUNNeXNXN3BMbXQyX2NfbyB7IDAlIHtvcGFjaXR5OiAxO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQyLDAsMC41OCwxKX0gNTAlIHtvcGFjaXR5OiAwLjU7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDIsMCwwLjU4LDEpfSAxMDAlIHtvcGFjaXR5OiAxfX0NCl1dPjwvc3R5bGU+DQo8ZyBpZD0iZUNNeXNXN3BMbXQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODcuMzUzNTQ0LS4xNTY0NTgpIj48cGF0aCBkPSJNMTEuNjQ3ODk2LDUuNTU3Mjk1TDguMTI0Mjg0LDMuNTAzMDAyTDQuNjAwNjYyLDEuNDQ4ODM5Yy0uMTUyODIxLS4wODkwNi0uMzI2MTc1LS4xMzU5MzgtLjUwMjYyMi0uMTM1OTIzcy0uMzQ5NzgyLjA0NjkxNS0uNTAyNTg4LjEzNTk5OS0uMjc5NzA0LjIxNzIwOS0uMzY3OTM5LjM3MTUtLjEzNDY4OS4zMjkzMS0uMTM0NzE0LjUwNzQ3NXY4LjIxNzE5MWMtLjAwMDAxNS4xNzgxODUuMDQ2NDI1LjM1MzIzMy4xMzQ2NS41MDc1NDhzLjIxNTExOC4yODI0NDUuMzY3OTM4LjM3MTUzNy4zMjYxNzUuMTM1OTkyLjUwMjYzOC4xMzU5OTIuMzQ5ODIxLS4wNDY5MTguNTAyNjM3LS4xMzYwM0w4LjEyNDI4NCw5LjM2OTk3bDMuNTIzNjEyLTIuMDU0MjkyYy4xNTI5LS4wODkwNzUuMjc5ODQzLS4yMTcyMDUuMzY4MTMyLS4zNzE1NHMuMTM0NzY4LS4zMjk0MjEuMTM0NzY4LS41MDc2NjItLjA0NjQ5Ny0uMzUzMzEtLjEzNDc2OC0uNTA3NjQ1LS4yMTUyMzItLjI4MjQ2My0uMzY4MTMyLS4zNzE1MzZaIiBmaWxsPSIjMzM0MTU1Ii8+PHBhdGggZD0iTTExLjY0Nzg3NiwxNi45OTcyMzJMOC4xMjQyNjUsMTQuOTQzMDUzTDQuNjAwNTEzLDEyLjg4ODg5NGMtLjE1Mjc5NS0uMDg5MTEtLjMyNjEyNy0uMTM2MDI4LS41MDI1NzQtLjEzNjA0N3MtLjM0OTc5Ni4wNDY4NzktLjUwMjYwNi4xMzU5NTItLjI3OTY4Ny4yMTcyMDUtLjM2NzkwNi4zNzE1MTktLjEzNDY1Mi4zMjkzMjUtLjEzNDYzNS41MDc0OTF2OC4yMTcxMzJjMCwuMTc4MjYzLjA0NjQzNC4zNTMyNzQuMTM0NjUyLjUwNzYyNC4wODgyMTcuMTU0MTY0LjIxNTEwNS4yODIzMTMuMzY3OTA2LjM3MTQ0M3MuMzI2MTI5LjEzNTk5Mi41MDI1NzQuMTM1OTkyLjM0OTc3Ny0uMDQ2ODYyLjUwMjU4OS0uMTM1OTkybDMuNTIzNzUyLTIuMDU0MDI2bDMuNTIzNjExLTIuMDU0MjU0Yy4xNTI4OC0uMDg5MDkxLjI3OTg2My0uMjE3MjQyLjM2ODEzMy0uMzcxNTk2cy4xMzQ3NjgtLjMyOTQxOC4xMzQ3NjgtLjUwNzY2MS0uMDQ2NDk4LS4zNTMzMjktLjEzNDc2OC0uNTA3NjgxLS4yMTUyNTMtLjI4MjQ4Ni0uMzY4MTMzLS4zNzE1NThaIiBmaWxsPSIjMzM0MTU1Ii8+PHBhdGggZD0iTTIxLjY5NzIyLDExLjI3NzM2OUwxOC4xNzM2MDksOS4yMjMwNzZMMTQuNjQ5OTk2LDcuMTY4ODk4Yy0uMTUyODIzLS4wODkwOTMtLjMyNjE2OC0uMTM2MDExLS41MDI2MzItLjEzNjAxMXMtLjM0OTgxLjA0Njg5OS0uNTAyNjMyLjEzNTk5Mi0uMjc5NzI5LjIxNzIyMi0uMzY3OTQyLjM3MTUzOC0uMTM0NjcyLjMyOTM2My0uMTM0NjUzLjUwNzU0OHY4LjIxNzE3Yy4wMDAwMTkuMTc4MTY3LjA0NjQ5Ny4zNTMxOTUuMTM0NzI5LjUwNzQ5cy4yMTUxMTguMjgyNDA4LjM2Nzk0Mi4zNzE1LjMyNjEzLjEzNTk5Mi41MDI1NzUuMTM1OTkyLjM0OTc5LS4wNDY4Ni41MDI2MTMtLjEzNTkxNmwzLjUyMzYxMy0yLjA1NDI5MmwzLjUyMzYxMS0yLjA1NDE3OGMuMTUyODk5LS4wODkwNTUuMjc5ODgyLS4yMTcyMDQuMzY4MTUyLS4zNzE1MzhzLjEzNDc0OS0uMzI5NDIuMTM0NzQ5LS41MDc2NDQtLjA0NjQ1OS0uMzUzMzA4LS4xMzQ3NDktLjUwNzY0Mi0uMjE1MjUzLS4yODI0ODUtLjM2ODE1Mi0uMzcxNTM4WiIgZmlsbD0iIzMzNDE1NSIvPjwvZz48L3N2Zz4NCg=="
        />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          You might need to travel back in time.
        </p>
        <Link
          href="/"
          className="mt-8 text-sm font-medium text-gray-900 dark:text-white"
        >
          Go back home
        </Link>
      </div>
      <VercelAnalytics />
    </div>
  )
}
