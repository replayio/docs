import React from 'react';

interface LoomVideoProps {
  src: string
}

const LoomVideo: React.FC<LoomVideoProps> = ({ src }) => {
  return (
    <div className="relative pb-[59.73451327433629%] h-0">
      <iframe src={src} allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe>
    </div>
  );
};

export default LoomVideo;
