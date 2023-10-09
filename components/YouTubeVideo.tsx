import React from 'react';

interface YouTubeVideoProps {
  src: string
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ src }) => {
  return (
    <div className="relative pb-[56.25%] mt-5 h-0">
      <iframe src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe>
    </div>
  );
};

export default YouTubeVideo;
