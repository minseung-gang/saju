import React from 'react';
import SajuTableRow from './SajuTableRow';

interface SajuRowHeader {
  title: string;
  subtitle: string;
}

const SajuRowHeader = ({ title, subtitle }: SajuRowHeader) => {
  return (
    <div className='flex flex-col items-center justify-center border-r-2 border-gray-800 font-bold'>
      <p className='text-[clamp(10px,1vw,12px)] font-bold sm:text-sm'>{title}</p>
      <p className='text-[clamp(6px,2vw,10px)]'>{subtitle}</p>
    </div>
  );
};

export default SajuRowHeader;
