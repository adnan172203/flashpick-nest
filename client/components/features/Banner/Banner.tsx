import ShopButton from '@/components/ui/Button/ShopButton';
import React from 'react';

const Banner = () => {
  return (
    <section className='relative min-h-[172px] md:min-h-[380px] xl:min-h-[454px] pl-5 md:pl-50px flex flex-col justify-center'>
      <div className='max-w-[207px] md:max-w-max lg:max-w-[529px] xl:max-w-[834px] z-10'>
        <h3 className='font-medium text-[10px] md:text-sm leading-[14px] uppercase text-[#E8E7FF] pb-2 md:pb-10px'>
          Wecome to Flashpick
        </h3>
        <h1 className='h1-title text-white md:max-w-[416px] lg:max-w-max'>
          Pick Out The Best Product Online From
          <span className='text-#17201D'>Flashpick</span> Store
        </h1>
        <p className='hidden md:block leading-7 xl:leading-4 text-#3B3A48 pt-15px md:max-w-[392px] lg:max-w-max'>
          We provide the best security and customer service for our customer. So
          don’t worry and shop instantly.
        </p>
        <ShopButton btnText='Shop Now' />
      </div>
      <img
        src='../../../images/home/banner.png'
        className='hidden md:block absolute top-0 left-0 w-full h-full object-[top_0%_right_20%] md:object-[top_0%_right_31%] object-cover'
        alt=''
      />
      <img
        // src='./assets/home/banner-mobile.png'
        src='../../../images/home/banner-mobile.png'
        className='md:hidden absolute top-0 left-0 w-full h-full object-[top_0%_right_0%] object-cover'
        alt=''
      />
      <span className='hidden xl:block circle-var w-[105px] h-[105px] rounded-[105px] z-20 top-[46px] right-[35%]'></span>
      <span className='hidden xl:block circle-var w-[31px] h-[31px] rounded-[31px] z-20 top-[15px] right-[7%]'></span>
      <span className='hidden xl:block circle-var w-[9px] h-[9px] rounded-[9px] z-20 bottom-[55px] right-[5%]'></span>
    </section>
  );
};

export default Banner;
