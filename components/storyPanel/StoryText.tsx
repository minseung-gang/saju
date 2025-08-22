import React from 'react';
import { StoryMessage } from '@/types/story';

interface StoryTextProps {
  content: StoryMessage;
}

const StoryText = ({ content }: StoryTextProps) => {
  return (
    <div
      className='absolute min-w-max'
      style={{
        top: `${content.position.top}%`,
        left: `${content.position.left}%`,

        transform: 'translateX(-50%) translateY(-50%)',
      }}
    >
      <p className='word-break xs:text-lg text-[clamp(11px, 4.5vw, 18px)] leading-[clamp(15px, 6vw, 24px)] flex min-w-fit text-center whitespace-break-spaces'>
        {content.message}
      </p>
    </div>
  );
};

export default StoryText;
