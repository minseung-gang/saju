import { SajuItem } from '@/types/table';
import React from 'react';

interface SajuTableCellProps {
  item: SajuItem;
}

const SajuTableCell = ({ item }: SajuTableCellProps) => {
  return (
    <div className='border-gray flex flex-col items-center justify-center border-r-1 bg-white py-[clamp(4px,2vw,8px)] last:border-r-0'>
      <span className='text-[clamp(14px,2vw,16px)] leading-[clamp(14px,2vw,16px)] font-bold sm:text-[16px]'>
        {item.name}
      </span>
      <span className='mt-[1px] text-[clamp(9px,2vw,10px)] sm:text-[10px]'>{item.sub}</span>
    </div>
  );
};

export default SajuTableCell;
