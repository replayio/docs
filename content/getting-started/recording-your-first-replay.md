---
title: Recording your first Replay
---
import { Steps, Callout, Cards, Card } from 'nextra/components'
import RecButton from '@icons/RecButton'
import StopButton from '@icons/StopButton'
import IcBaselineApple from '@icons/IcBaselineApple'
import MdiMicrosoftWindows from '@icons/MdiMicrosoftWindows'
import CodiconTerminalLinux from '@icons/CodiconTerminalLinux'

# Recording your first Replay

There are just few simple steps to create your first recording:

<Steps>
### Download Replay Browser
<Cards>
<Card icon={<IcBaselineApple />} title="Mac" href="https://www.replay.io/downloads/replay.dmg" />
<Card icon={<MdiMicrosoftWindows />} title="Windows (BETA)" href="https://replay.io/downloads/windows-replay.zip" />
<Card icon={<CodiconTerminalLinux />} title="Linux" href="https://www.replay.io/downloads/linux-replay.tar.bz2" />
</Cards>
[Or follow these instructions](/getting-started/replay-browser/installation#cli-replay-chrome-new) on how to install use our CLI tool.

:VideoPlayer{id="ee5XbXlGSnIWMrjPdrbgwrluron8Iy6vjKGq8EqiAAA"}

### Install Replay Browser on your computer
Follow the standard installation process on your machine or check out our docs to get a more detailed information.

### Open Replay Browser, navigate to the page you want to record, and click <RecButton className="w-12 mb-0.5 inline-block" /> button 

Capture an issue, replicate a bug or simply interact with your app and then click on <StopButton className="w-14 mb-0.5 inline-block" /> button

:VideoPlayer{id="ee5XbXlGSnIWMrjPdrbgwrluron8Iy6vjKGq8EqiAAA"}

### Give your recording a name
:VideoPlayer{id="ee5XbXlGSnIWMrjPdrbgwrluron8Iy6vjKGq8EqiAAA"}

### That’s it! You can now start debugging or share the recording.
:VideoPlayer{id="ee5XbXlGSnIWMrjPdrbgwrluron8Iy6vjKGq8EqiAAA"}

</Steps>

<Callout type="info">
Did you know you can create Replays using your existing [Test Automation Suite](/test-suites)? You can pass Replay Browser as the browser of choice to Cypress, Playwright or Webdriver.io.
</Callout>