import React from 'react'
// @ts-ignore
import { default as NextVideo } from 'next-video'

import marketingHero from '@/videos/marketing-hero.mp4.json'
import bisect from '@/videos/bisect.mp4.json'
import visualize from '@/videos/visualize.mp4.json'
import elementsPanelStopWatch from '@/videos/elements_panel_stopwatch.mp4.json'
import annotate from '@/videos/annotate.mp4.json'

// import getStarted from '@/videos/get-started.mp4';

const videos = {
  bisect,
  visualize,
  marketingHero,
  annotate,
  elementsPanelStopWatch,
}

interface VideoProps {
  src: string
}

export const Video: React.FC<VideoProps> = ({ src }) => {
  // @ts-ignore
  const video = videos[src]
  return (
    <NextVideo
      src={video}
      autoPlay
      muted
      loop
      controls={false}
      accentColor="#f02d5e"
      className="overflow-clip rounded-lg border border-transparent"
    />
  )
}

export default Video
