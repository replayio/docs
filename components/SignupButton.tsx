import React from 'react';

const SignupButton: React.FC = () => {
  return (
    <a href="https://app.replay.io">
      <button className='inline-block bg-pink-500 px-5 py-1.5 rounded-md text-sm font-semibold'>
      Sign up
      </button>
    </a>
  );
};

export default SignupButton;
