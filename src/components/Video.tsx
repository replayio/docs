import React from 'react'
import { default as NextVideo } from 'next-video'

import marketingHero from '@/videos/marketing-hero.mp4.json'
import bisect from '@/videos/bisect.mp4.json'
import visualize from '@/videos/visualize.mp4.json'
import elementsPanelStopWatch from '@/videos/elements_panel_stopwatch.mp4.json'
import annotate from '@/videos/annotate.mp4.json'
import consoleLogs from '@/videos/console-logs.mp4.json'
import generateApiKey from '@/videos/generate-api-key.mp4.json'
import recordCli  from '@/videos/record-cli.mp4.json'
import jumpToCode from '@/videos/jump-to-code.mp4.json'
// import getStarted from '@/videos/get-started.mp4';

const videos = {
  bisect,
  consoleLogs,
  visualize,
  marketingHero,
  annotate,
  elementsPanelStopWatch,
  generateApiKey,
  recordCli,
  jumpToCode
}

interface VideoProps {
  src: string
  controls?: boolean
}

export const Video: React.FC<VideoProps> = ({ src, controls = false }) => {
  // @ts-ignore
  const video = videos[src]
  return (
    <NextVideo
      src={video}
      autoPlay
      muted
      loop
      controls={controls}
      accentColor="#f02d5e"
      className="overflow-clip rounded-lg border border-transparent"
    />
  )
}

export default Video
