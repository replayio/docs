'use client'
import React, { useState } from 'react'
import { default as NextVideo } from 'next-video'
import Zoom from './Zoom'

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
import networkPanelCourse from '@/videos/network_panel_course.mp4.json'
import elementsPanelCourse from '@/videos/elements_panel_course.mp4.json'
import reactPanelCourse from '@/videos/react_panel_course.mp4.json'
import consoleLogsCourse from '@/videos/console_logs_course.mp4.json'
import sourceCourse from '@/videos/source_course.mp4.json'
import timelineCourse from '@/videos/timeline_course.mp4.json'
import playwrightDebugging from '@/videos/playwright_debugging.mp4.json'
import networkPanelCypress from '@/videos/network_panel_cypress.mp4.json'
import introductionCourse from '@/videos/introduction_course.mp4.json'
import firstReplayCourse from '@/videos/first_replay_course.mp4.json'
import devtoolsCourse from '@/videos/devtools_course.mp4.json'
import commentingCourse from '@/videos/commenting_course.mp4.json'
import addingAComment from '@/videos/adding_a_comment3.mp4.json'
// import getStarted from '@/videos/get-started.mp4';

const videos = {
  addingAPrintStatement,
  addingAComment,
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
  networkPanelCourse,
  elementsPanelCourse,
  reactPanelCourse,
  consoleLogsCourse,
  sourceCourse,
  timelineCourse,
  playwrightDebugging,
  networkPanelCypress,
  introductionCourse,
  firstReplayCourse,
  devtoolsCourse,
  commentingCourse,
}

interface VideoProps {
  src: string
  controls?: boolean
  autoplay?: boolean
  loop?: boolean
}

export const Video: React.FC<VideoProps> = ({ src, autoplay = true }) => {
  const commonProps = {
    // @ts-ignore
    src: videos[src],
    autoPlay: autoplay,
    accentColor: '#f02d5e',
    className: 'overflow-clip rounded-xl border border-transparent',
    poster: '',
  }
  return autoplay ? (
    <Zoom>
      <NextVideo muted={true} loop={true} controls={false} {...commonProps} />
    </Zoom>
  ) : (
    <NextVideo muted={false} loop={false} controls={true} {...commonProps} />
  )
}

export default Video
