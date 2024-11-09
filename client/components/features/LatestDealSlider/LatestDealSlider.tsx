'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const swiperParams = {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
  modules: [Autoplay],
};

const LatestDealSlider = () => {
  return (
    <section className='relative pt-15px pl-10px md:p-5 md:pb-0 md:pr-0'>
      <div className='w-full h-2/4 bg-#FAFAFA absolute left-0 bottom-0'></div>

      <Swiper {...swiperParams}>
        {/* <!-- slide 1  --> */}
        <SwiperSlide>
          {/* <!-- offer  --> */}
          <div className='relative w-full min-w-[260px] min-h-[124px] md:min-w-[432px] md:min-h-[234px] xl:min-w-[680px] xl:min-h-[370px] pt-18px px-14px md:px-10 md:pt-50px xl:pt-[66px] overflow-hidden'>
            <div className='relative max-w-[129px] md:max-w-[170px] xl:max-w-[292px] z-10'>
              <h2 className='h2-title mb-15px md:mb-10 xl:mb-50px'>
                <span>Get Best Deal On All The Best Brand</span> Electronics
              </h2>
              <a href='categories.html' className='btn inline-flex'>
                shop now
                <svg
                  className='w-[18px] h-[18px]'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M10.8223 4.44751L15.3748 9.00001L10.8223 13.5525'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                  <path
                    d='M2.625 9H15.2475'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>
            </div>
            <img
              // src='./assets/home/card_01.png'
              src='../../../images/home/card_01.png'
              className='absolute top-0 left-0 w-full h-full object-cover object-[top_0%_left_0%] md:object-[top_0%_left_100%] xl:object-[bottom_0%_left_0%] z-0'
              alt=''
            />
          </div>
        </SwiperSlide>
        {/* <!-- slide 2  --> */}
        <SwiperSlide>
          {/* <!-- offer  --> */}
          <div className='relative w-full min-w-[260px] min-h-[124px] md:min-w-[432px] md:min-h-[234px] xl:min-w-[680px] xl:min-h-[370px] pt-18px px-14px md:px-10 md:pt-50px xl:pt-[66px] overflow-hidden'>
            <div className='relative max-w-[129px] md:max-w-[170px] xl:max-w-[268px] z-10'>
              <h2 className='h2-title mb-15px md:mb-10 xl:mb-50px'>
                <span>Shop Pure Organic Veg From One </span> Store
              </h2>
              <a href='categories.html' className='btn inline-flex'>
                shop now
                <svg
                  className='w-[18px] h-[18px]'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M10.8223 4.44751L15.3748 9.00001L10.8223 13.5525'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                  <path
                    d='M2.625 9H15.2475'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>
            </div>
            <img
              src='../../../images/home/card_02.png'
              className='absolute top-0 left-0 w-full h-full object-cover object-[top_0%_left_0%] md:object-[top_0%_left_100%] xl:object-[bottom_0%_left_0%] z-0'
              alt=''
            />
          </div>
        </SwiperSlide>
        {/* <!-- slide 3  --> */}
        <SwiperSlide>
          {/* <!-- offer  --> */}
          <div className='relative w-full min-w-[260px] min-h-[124px] md:min-w-[432px] md:min-h-[234px] xl:min-w-[680px] xl:min-h-[370px] pt-18px px-14px md:px-10 md:pt-50px xl:pt-[66px] overflow-hidden'>
            <div className='relative max-w-[129px] md:max-w-[170px] xl:max-w-[292px] z-10'>
              <h2 className='h2-title mb-15px md:mb-10 xl:mb-50px'>
                <span>Flash Sale On Women’s Winter </span> Collections
              </h2>
              <a href='categories.html' className='btn inline-flex'>
                shop now
                <svg
                  className='w-[18px] h-[18px]'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M10.8223 4.44751L15.3748 9.00001L10.8223 13.5525'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                  <path
                    d='M2.625 9H15.2475'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>
            </div>
            <img
              src='../../../images/home/card_03.png'
              className='absolute top-0 left-0 w-full h-full object-cover object-[top_0%_left_0%] md:object-[top_0%_left_100%] xl:object-[bottom_0%_left_0%] z-0'
              alt=''
            />
          </div>
        </SwiperSlide>
        {/* <!-- slide 1  --> */}

        <SwiperSlide>
          {/* <!-- offer  --> */}
          <div className='relative w-full min-w-[260px] min-h-[124px] md:min-w-[432px] md:min-h-[234px] xl:min-w-[680px] xl:min-h-[370px] pt-18px px-14px md:px-10 md:pt-50px xl:pt-[66px] overflow-hidden'>
            <div className='relative max-w-[129px] md:max-w-[170px] xl:max-w-[292px] z-10'>
              <h2 className='h2-title mb-15px md:mb-10 xl:mb-50px'>
                <span>Get Best Deal On All The Best Brand</span> Electronics
              </h2>
              <a href='categories.html' className='btn inline-flex'>
                shop now
                <svg
                  className='w-[18px] h-[18px]'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M10.8223 4.44751L15.3748 9.00001L10.8223 13.5525'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                  <path
                    d='M2.625 9H15.2475'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>
            </div>
            <img
              src='../../../images/home/card_01.png'
              className='absolute top-0 left-0 w-full h-full object-cover object-[top_0%_left_0%] md:object-[top_0%_left_100%] xl:object-[bottom_0%_left_0%] z-0'
              alt=''
            />
          </div>
        </SwiperSlide>
        {/* <!-- slide 2  --> */}

        <SwiperSlide>
          {/* <!-- offer  --> */}
          <div className='relative w-full min-w-[260px] min-h-[124px] md:min-w-[432px] md:min-h-[234px] xl:min-w-[680px] xl:min-h-[370px] pt-18px px-14px md:px-10 md:pt-50px xl:pt-[66px] overflow-hidden'>
            <div className='relative max-w-[129px] md:max-w-[170px] xl:max-w-[268px] z-10'>
              <h2 className='h2-title mb-15px md:mb-10 xl:mb-50px'>
                <span>Shop Pure Organic Veg From One </span> Store
              </h2>
              <a href='categories.html' className='btn inline-flex'>
                shop now
                <svg
                  className='w-[18px] h-[18px]'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M10.8223 4.44751L15.3748 9.00001L10.8223 13.5525'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                  <path
                    d='M2.625 9H15.2475'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>
            </div>
            <img
              src='../../../images/home/card_02.png'
              className='absolute top-0 left-0 w-full h-full object-cover object-[top_0%_left_0%] md:object-[top_0%_left_100%] xl:object-[bottom_0%_left_0%] z-0'
              alt=''
            />
          </div>
        </SwiperSlide>
        {/* <!-- slide 3  --> */}

        <SwiperSlide>
          {/* <!-- offer  --> */}
          <div className='relative w-full min-w-[260px] min-h-[124px] md:min-w-[432px] md:min-h-[234px] xl:min-w-[680px] xl:min-h-[370px] pt-18px px-14px md:px-10 md:pt-50px xl:pt-[66px] overflow-hidden'>
            <div className='relative max-w-[129px] md:max-w-[170px] xl:max-w-[292px] z-10'>
              <h2 className='h2-title mb-15px md:mb-10 xl:mb-50px'>
                <span>Flash Sale On Women’s Winter </span> Collections
              </h2>
              <a href='categories.html' className='btn inline-flex'>
                shop now
                <svg
                  className='w-[18px] h-[18px]'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M10.8223 4.44751L15.3748 9.00001L10.8223 13.5525'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                  <path
                    d='M2.625 9H15.2475'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>
            </div>
            <img
              src='../../../images/home/card_03.png'
              className='absolute top-0 left-0 w-full h-full object-cover object-[top_0%_left_0%] md:object-[top_0%_left_100%] xl:object-[bottom_0%_left_0%] z-0'
              alt=''
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default LatestDealSlider;
