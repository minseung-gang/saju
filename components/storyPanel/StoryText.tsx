import React from 'react';
import { StoryMessage } from '@/types/story';

interface StoryTextProps {
  content: StoryMessage;
}

/**
 * min-w-max가 텍스트가 줄바꿈이 되지 않게 최소 넓이를 보장하지만 이 스타일 때문에 font-size가 더이상 줄어들지 않는 현상 발견
 * 결국 css에서 tailwind css4에서 지원하는 @layer을 사용하여 유틸리티 커스텀 클래스를 만들어서 우선적으로 적용되게 함
 * 컴포넌트 내에서 tailwind가 지원하는 스타일을 적용하면 제한되지만 커스텀 클래스를 적용하면 min-w-max 스타일과 협력이됨
 * 해당 텍스트의 영역을 지켜주면서도 사이즈도 반응형으로 적용
 *
 */
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
      <p className='word-break xs:text-lg text-story-responsive flex text-center whitespace-break-spaces'>
        {content.message}
      </p>
    </div>
  );
};

export default StoryText;
