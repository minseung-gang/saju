import { IMAGE_URL } from '@/constants/common';
import { SAJU_DATA, SAJU_TABLE_COLUMNS, USER_SAJU_DATE } from '@/constants/table';

import Image from 'next/image';
import React, { useMemo } from 'react';
import SajuTableRow from './SajuTableRow';
import SajuRowHeader from './SajuRowHeader';
import SajuTableCell from './SajuTableCell';
import SajuElementCell from './SajuElementCell';

const CLOUD_IMAGES = [
  {
    src: IMAGE_URL.left_lainbow_cloud.src,
    alt: IMAGE_URL.left_lainbow_cloud.alt,
    position: 'top-2 left-[9px]',
  },
  {
    src: IMAGE_URL.right_lainbow_cloud.src,
    alt: IMAGE_URL.right_lainbow_cloud.alt,
    position: '-top-3 right-[9px]',
  },
];
const BORDER_LAYER_BASESTYLES = [
  { position: 'top-2 left-0 w-full h-[1px]' },
  { position: 'top-0 left-2 h-full w-[1px]' },
  { position: 'top-0 right-2 h-full w-[1px]' },
  { position: 'bottom-2 left-0 w-full h-[1px]' },
];

const getElementStyle = (char: string) => {
  if (char.includes('水')) return { background: '#2F2F2F', color: '#ffffff' };
  if (char.includes('火')) return { background: '#C23030', color: '#ffffff' };
  if (char.includes('金'))
    return {
      background: 'transparent',
      color: '#000000',
      borderWidth: '1px',
    };
  if (char.includes('木')) return { background: '#18868C', color: '#ffffff' };
  return { backgroundColor: 'transparent', color: '#000000' };
};

const Index = () => {
  const dateInfo = useMemo(() => {
    const dateObj = new Date(USER_SAJU_DATE.birthDateTime);
    return {
      year: dateObj.getFullYear(),
      month: dateObj.getMonth() + 1,
      date: dateObj.getDate(),
      hours: dateObj.getHours(),
      minutes: dateObj.getMinutes(),
    };
  }, [USER_SAJU_DATE.birthDateTime]);

  return (
    <section className='relative mx-3 -mt-5 border-3 border-[#1B2F49] bg-[#F5F3EC]'>
      <h2 className='sr-only'>사주팔자 정보</h2>
      {BORDER_LAYER_BASESTYLES.map((border, idx) => (
        <div key={idx} className={`absolute bg-[#2B557E] ${border.position}`} />
      ))}
      <div className='text-main-color relative mt-[clamp(15px,10vw,40px)] mb-[clamp(10px,2vw,26px)] text-center'>
        {CLOUD_IMAGES.map((cloud, idx) => (
          <div key={idx} className={`absolute ${cloud.position}`}>
            <Image src={cloud.src} width={56} height={36} alt={cloud.alt} />
          </div>
        ))}

        <p className='xs:text-base mb-[clamp(2px,1vw,4px)] text-[clamp(12px,4vw,16px)] font-semibold'>
          {USER_SAJU_DATE.name}님의 사주
        </p>
        <p className='xs:text-xl text-[clamp(14px,5vw,20px)] font-bold'>{`${dateInfo.year}년 ${dateInfo.month}월${dateInfo.date}일 ${dateInfo.hours}:${dateInfo.minutes}`}</p>
      </div>
      <div className='px-5 py-2'>
        <div className='grid grid-cols-5 border-r-2 border-b-2'>
          <div className='border-r-2' />

          {SAJU_TABLE_COLUMNS.map((label, idx) => (
            <div
              key={idx}
              className='border-gray border-r-1 py-3 text-center text-lg text-[21px] font-bold last:border-r-0'
            >
              {label}
            </div>
          ))}
        </div>
        <SajuTableRow>
          <SajuRowHeader title='十星' subtitle='(십성)' />
          {Object.values(SAJU_DATA.sibsungGan).map((item, idx) => (
            <SajuTableCell key={idx} item={item} />
          ))}
        </SajuTableRow>
        <SajuTableRow className='border-b-1'>
          <SajuRowHeader title='天干' subtitle='(천간)' />

          {Object.values(SAJU_DATA.chungan).map((item, idx) => {
            return (
              <SajuElementCell key={idx} item={item} style={() => getElementStyle(item.element)} />
            );
          })}
        </SajuTableRow>
        <SajuTableRow>
          <SajuRowHeader title='地支' subtitle='(지지)' />
          {Object.values(SAJU_DATA.jiji).map((item, idx) => {
            return (
              <SajuElementCell key={idx} item={item} style={() => getElementStyle(item.element)} />
            );
          })}
        </SajuTableRow>
        <SajuTableRow className='border-b-1'>
          <SajuRowHeader title='十星' subtitle='(십성)' />

          {Object.values(SAJU_DATA.sibsungJi).map((item, idx) => (
            <SajuTableCell key={idx} item={item} />
          ))}
        </SajuTableRow>
        <SajuTableRow className='border-b-1'>
          <SajuRowHeader title='十二運星' subtitle='(십이운성)' />

          {Object.values(SAJU_DATA.sibiunsyung).map((item, idx) => (
            <SajuTableCell key={idx} item={item} />
          ))}
        </SajuTableRow>
        <SajuTableRow className='border-b-1'>
          <SajuRowHeader title='十二神殺' subtitle='(십이신살)' />

          {Object.values(SAJU_DATA.sibisinsal).map((item, idx) => (
            <SajuTableCell key={idx} item={item} />
          ))}
        </SajuTableRow>
        <SajuTableRow className='mb-[clamp(20px,6vw,32px)]'>
          <SajuRowHeader title='貴人' subtitle='(귀인)' />

          {Object.values(SAJU_DATA.sinsal).map((content, idx) => (
            <div
              key={idx}
              className='border-gray flex flex-col items-center justify-center gap-y-[clamp(2px,2vw,6px)] border-r-1 bg-white py-[clamp(4px,2vw,8px)] last:border-r-0'
            >
              {content.items.length > 0 ? (
                content.items.map((item, idx) => (
                  <div key={idx} className='flex flex-col items-center'>
                    <span className='text-[clamp(14px,2vw,16px)] leading-[clamp(14px,2vw,16px)] font-bold sm:text-[16px]'>
                      {item.name}
                    </span>
                    <span className='mt-[1px] text-[clamp(9px,2vw,10px)] font-bold sm:text-[10px]'>
                      {item.sub}
                    </span>
                  </div>
                ))
              ) : (
                <span className='text-[clamp(9px,2vw,10px)] font-bold sm:text-[10px]'>(없음)</span>
              )}
            </div>
          ))}
        </SajuTableRow>
      </div>
    </section>
  );
};

export default Index;
