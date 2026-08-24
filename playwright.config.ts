import { PlaywrightTestConfig } from '@playwright/test'
import { devices as replayDevices, replayReporter } from '@replayio/playwright'
import dotenv from 'dotenv'
dotenv.config()

const baseURL =
  process.env.BASE_URL ||
  (process.env.CI ? 'http://127.0.0.1:3000' : 'http://localhost:3000')

const config: PlaywrightTestConfig = {
  use: {
    baseURL,
  },
  webServer: process.env.CI
    ? {
        command: 'pnpm start',
        url: baseURL,
        reuseExistingServer: false,
        timeout: 120_000,
      }
    : undefined,
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
