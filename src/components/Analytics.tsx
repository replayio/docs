'use client'

import { useEffect } from 'react'
import LogRocket from 'logrocket'

export default function Analytics() {
  useEffect(() => {
    LogRocket.init('4sdo4i/replay-docs')
  }, [])

  return (
    <script
      async
      src="https://analytics.umami.is/script.js"
      data-website-id="9dab9357-6fa2-48ab-966a-82c4e1bb67fe"
    ></script>
  )
}
