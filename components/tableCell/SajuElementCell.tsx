import { SajuItem } from '@/types/table';

interface SajuElementCellProps {
  item: SajuItem;
  style: () => React.CSSProperties;
}

const SajuElementCell = ({ item, style }: SajuElementCellProps) => (
  <div className='border-gray aspect-square border-r bg-white p-[clamp(2px,1vw,4px)] last:border-0'>
    <div
      className='flex h-full w-full flex-col items-center justify-center rounded-xl p-[clamp(2px,7vw,4px)]'
      style={style()}
    >
      <p className='text-[clamp(6px,2vw,9px)]'>{item.hangul}</p>
      <p className='text-[clamp(14px,6vw,25px)] leading-[clamp(14px,6vw,30px)] font-bold'>
        {item.hanja}
      </p>
      <p className='text-[clamp(6px,2vw,9px)]'>{item.element}</p>
    </div>
  </div>
);

export default SajuElementCell;
