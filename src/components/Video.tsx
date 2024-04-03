import React from 'react';
// @ts-ignore
import { default as NextVideo } from 'next-video'
import jumpToLine from '@/videos/jump-to-line_ydsnd.mp4'
import jumpToCypress from '@/videos/jump-to-cypress-event_slvih.mp4.json'
import jumpToRequest from '@/videos/jump-to-request_oopaa.mp4.json'
import jumpToConsoleMessage from '@/videos/jump-to-console-message_vuzcc.mp4.json'

import getStarted from '@/videos/get-started.mp4';

const videos = { jumpToLine, jumpToCypress, jumpToRequest, jumpToConsoleMessage, getStarted }



interface VideoProps {
  src: string
}

const Video: React.FC<VideoProps> = ({ src }) => {
  // @ts-ignore
  const video = videos[src]
  return <NextVideo src={video} autoPlay muted loop className="pt-5"/>
};

export default Video;
