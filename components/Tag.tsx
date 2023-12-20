import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <div className='inline-block relative bottom-3'>
      <div className='text-xs bg-opacity-40 rounded-lg px-2 py-1 bg-pink-500 border-pink-500 border-2 border-opacity-50'>
        {children}
      </div>
    </div>
  );
};

export default Tag;
