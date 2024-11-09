import ShopNowButton from '@/components/ui/Button/shopButtonSlick';
import React from 'react';

const SlideContent = ({
  title,
  subtitle,
  imageUrl,
}: {
  title: string;
  subtitle: string;
  imageUrl: string;
}) => {
  return (
    <div className='relative w-full min-w-[260px] min-h-[124px] md:min-w-[432px] md:min-h-[234px] xl:min-w-[680px] xl:min-h-[370px] pt-18px px-14px md:px-10 md:pt-50px xl:pt-[66px] overflow-hidden'>
      <div className='relative max-w-[129px] md:max-w-[170px] xl:max-w-[292px] z-10'>
        <h2 className='h2-title mb-15px md:mb-10 xl:mb-50px'>
          <span>{title}</span> {subtitle}
        </h2>
        <ShopNowButton />
      </div>
      <img
        src={imageUrl}
        className='absolute top-0 left-0 w-full h-full object-cover object-[top_0%_left_0%] md:object-[top_0%_left_100%] xl:object-[bottom_0%_left_0%] z-0'
        alt={`${title} ${subtitle}`}
      />
    </div>
  );
};

export default SlideContent;
