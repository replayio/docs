import React from 'react';

interface IconProps {
  children: React.ReactNode;
}

const IconSquare: React.FC<IconProps> = ({ children }) => {
  return (
    <div className='inline-flex justify-center items-center bg-opacity-20 rounded-3xl p-5 w-28 h-28 bg-pink-500'>
      {children}
    </div>
  );
};

export default IconSquare;
