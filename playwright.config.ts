import { PlaywrightTestConfig } from '@playwright/test'
import { devices as replayDevices } from '@replayio/playwright'

const config: PlaywrightTestConfig = {
  use: {
    baseURL: "http://localhost:3000"
  },
  reporter: [
    [
      '@replayio/playwright/reporter',
      {
        apiKey: process.env.REPLAY_API_KEY,
        upload: true,
      },
    ],
    ['line'],
  ],
  projects: [
    {
      name: 'replay-chromium',
      use: { ...(replayDevices['Replay Chromium'] as any) },
    },
  ],
}
export default config
