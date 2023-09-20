import React from 'react';

interface IconProps {
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ children }) => {
  return (
    <div className='inline-block pr-1'>
    <div className="inline-flex justify-center items-center p-2 w-10 h-10 bg-pink-400 bg-opacity-25 rounded-full fill-pink-500 stroke-pink-500">
      {children}
    </div>
    </div>
  );
};

export default Icon;
