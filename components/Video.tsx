import React from 'react';

interface VideoProps {
  src: string
  props: React.ReactNode;
}

const Video: React.FC<VideoProps> = ({ src, ...props }) => {
  return (
    <video autoPlay muted loop width="80%" className="p-4" {...props}>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
