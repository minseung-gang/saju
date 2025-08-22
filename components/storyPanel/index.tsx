import React from 'react';
import Image from 'next/image';
import StoryText from '@/components/storyPanel/StoryText';
import { STORY_PANEL_MESSAGE } from '@/constants/story';
import { IMAGE_URL } from '@/constants/common';

const Index = () => {
  return (
    <section className='relative'>
      <h2 className='sr-only'>사주 이야기</h2>
      <div className='relative aspect-[750/2806] overflow-x-clip'>
        <Image
          src={IMAGE_URL.chapter1_scene.src}
          alt={IMAGE_URL.chapter1_scene.alt}
          fill
          className='object-cover'
        />
      </div>
      {STORY_PANEL_MESSAGE.map((content, idx) => (
        <StoryText key={idx} content={content} />
      ))}
    </section>
  );
};

export default Index;
