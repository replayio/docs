import { PlaywrightTestConfig } from '@playwright/test'
import { devices as replayDevices, replayReporter } from '@replayio/playwright'
import dotenv from 'dotenv'
dotenv.config()

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.CI ? process.env.BASE_URL : 'http://localhost:3000',
  },
  reporter: [
    replayReporter({
      apiKey: process.env.REPLAY_API_KEY,
      upload: true,
    }),
    ['line'],
  ],
  projects: [
    {
      name: 'replay-chromium',
      use: { ...replayDevices['Replay Chromium'] },
    },
  ],
}
export default config
