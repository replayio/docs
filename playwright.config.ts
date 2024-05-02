import { PlaywrightTestConfig, devices } from '@playwright/test'
import { devices as replayDevices } from '@replayio/playwright'
import dotenv from 'dotenv';
dotenv.config();

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.CI ? process.env.BASE_URL : "http://localhost:3000"
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
      use: { ...replayDevices['Replay Chromium'] },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
}
export default config
