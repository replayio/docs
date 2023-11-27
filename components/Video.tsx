import React from 'react';
// @ts-ignore
import { default as NextVideo } from 'next-video'

interface VideoProps {
  src: React.ReactNode
}

const Video: React.FC<VideoProps> = ({ src }) => {
  return <NextVideo src={src} autoPlay muted loop accentColor="#D01644" className="pt-5" />
};

export default Video;
