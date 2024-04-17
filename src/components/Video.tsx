import React from 'react'
import { default as NextVideo } from 'next-video'

import marketingHero from '@/videos/marketing-hero.mp4.json'
import bisect from '@/videos/bisect.mp4.json'
import visualize from '@/videos/visualize.mp4.json'
import elementsPanelStopWatch from '@/videos/elements_panel_stopwatch.mp4.json'
import annotate from '@/videos/annotate.mp4.json'
import consoleLogs from '@/videos/console-logs.mp4.json'
import generateApiKey from '@/videos/generate-api-key.mp4.json'
import recordCli from '@/videos/record-cli.mp4.json'
import jumpToCode from '@/videos/jump-to-code.mp4.json'
import deleteApiKey from '@/videos/delete-api-key.mp4.json'
import addingAPrintStatement from '@/videos/Adding_a_print_statement.mp4.json'
import evaluatingInTheConsole from '@/videos/evaluating_in_the_console.mp4.json'
import reactDevTools from '@/videos/React_DevTools.mp4.json'
import reduxDevTools from '@/videos/redux_devtools.mp4.json'
import newtworkPanelCourse from '@/videos/network_panel_course.mp4.json'
import elementsPanelCourse from '@/videos/elements_panel_course.mp4.json'
import reactPanelCourse from '@/videos/react_panel_course.mp4.json'
import consoleLogsCourse from '@/videos/console_logs_course.mp4.json'
import sourceCourse from '@/videos/source_course.mp4.json'
import timelineCourse from '@/videos/timeline_course.mp4.json'
// import getStarted from '@/videos/get-started.mp4';

const videos = {
  addingAPrintStatement,
  bisect,
  consoleLogs,
  visualize,
  marketingHero,
  annotate,
  elementsPanelStopWatch,
  generateApiKey,
  recordCli,
  jumpToCode,
  deleteApiKey,
  evaluatingInTheConsole,
  reactDevTools,
  reduxDevTools,
  newtworkPanelCourse,
  elementsPanelCourse,
  reactPanelCourse,
  consoleLogsCourse,
  sourceCourse,
  timelineCourse
}

interface VideoProps {
  src: string
  controls?: boolean
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
}

export const Video: React.FC<VideoProps> = ({ src, controls = false, autoplay = true, muted = false, loop = true }) => {
  // @ts-ignore
  const video = videos[src]
  return (
    <NextVideo
      src={video}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      controls={controls}
      accentColor="#f02d5e"
      className="overflow-clip rounded-xl border border-transparent"
    />
  )
}

export default Video
