'use client';

import { toggleRegisterModal } from '@/lib/features/nav/authToggleSlice';
import React from 'react';

import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleRegisterClick = () => {
    dispatch(toggleRegisterModal());
  };

  return (
    <>
      <div className='h-full flex justify-center md:justify-between items-center gap-5'>
        {/* <!-- logo  --> */}
        <div className='max-w-[121px]'>
          <a href='index.html'>
            <img src='../images/logo.png' className='mx-auto' alt='' />
          </a>
        </div>
        {/* <!-- nav links and search  --> */}
        <div className='hidden md:flex items-center justify-end flex-auto'>
          {/* <!-- Categories  --> */}
          <div className='categories relative mr-4 group'>
            <div className='flex justify-between items-center py-4 pl-5 pr-6 gap-16 bg-#F5F6F6 rounded cursor-pointer'>
              <div className='flex items-center gap-3'>
                <svg
                  className='w-6 h-6 text-#5B9982'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <g clipPath='url(#clip0_1_3350)'>
                    <path
                      d='M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z'
                      fill='currentColor'
                    ></path>
                  </g>
                  <defs>
                    <clipPath id='clip0_1_3350_54_115'>
                      <rect width='24' height='24' fill='white'></rect>
                    </clipPath>
                  </defs>
                </svg>
                <h3 className='font-semibold leading-4 text-#5B9982 hidden xl:block'>
                  Categories
                </h3>
              </div>
              <svg
                className='w-2 h-2 cursor-pointer hidden xl:block text-#5B9982'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 8 8'
                fill='none'
              >
                <path
                  d='M7.87213 2.03238L7.61008 1.76851C7.52761 1.6861 7.41788 1.6407 7.30061 1.6407C7.18341 1.6407 7.07355 1.6861 6.99108 1.76851L4.00179 4.75793L1.00905 1.76519C0.926707 1.68278 0.816852 1.63745 0.699648 1.63745C0.582444 1.63745 0.472524 1.68278 0.390117 1.76519L0.128001 2.02744C-0.042667 2.19798 -0.042667 2.47577 0.128001 2.64631L3.69122 6.22233C3.77356 6.30468 3.88328 6.36269 4.00153 6.36269H4.00289C4.12016 6.36269 4.22989 6.30461 4.31223 6.22233L7.87213 2.656C7.9546 2.57365 7.99987 2.46061 8 2.34341C8 2.22614 7.9546 2.11466 7.87213 2.03238Z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
            <div className='categories-item invisible grid grid-cols-2 max-w-[640px] md:w-[70vw] lg:w-[640px] p-5 pb-35px bg-white rounded absolute left-0 -bottom-1 opacity-0 shadow-[0_4px_24px_0px_rgba(0,0,0,0.10)] z-50 transition-all duration-500'>
              {/* <!-- category col 1  --> */}
              <div className='grid gap-y-15px'>
                {/* <!-- category Laptop  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Laptop
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            34
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Snickers  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Snickers
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            32
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Kitchen Tools  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Kitchen Tools
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            14
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Cosmetics  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Cosmetics
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            314
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Gaming Device  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Gaming Device
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            124
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Plants & Gardening  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Plants &amp; Gardening
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            42
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Drinks  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Drinks
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            24
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Tablet  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Tablet
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            24
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Furniture  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Furniture
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            25
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Tablet  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Tablet
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            32
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- category col 2  --> */}
              <div className='grid gap-y-15px'>
                {/* <!-- category Perfume  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Perfume
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            14
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Electronics  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Electronics
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            321
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Sports  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Sports
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            114
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Tablet  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Tablet
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            24
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Beverage  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Beverage
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            314
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Book and Print  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Book and Print
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            124
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Baby Care  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Baby Care
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            42
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Canned Food  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Canned Food
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            24
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Pet Care  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Pet Care
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            25
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- category Glasses  --> */}
                <div className='group/category-single max-w-max'>
                  <a href='categories.html'>
                    <div className='flex gap-2 lg:gap-10px items-center'>
                      {/* <!-- category image  --> */}
                      <div className='w-7 h-7 lg:w-9 lg:h-9'>
                        <img
                          src='./assets/nav/category/dummy_60x60.png'
                          className='w-full h-full object-cover rounded-full'
                          alt=''
                        />
                      </div>
                      {/* <!-- category info  --> */}
                      <div className='flex items-center gap-[6px]'>
                        <h3 className='font-medium text-[13px] leading-[13px] lg:text-[15px] lg:leading-[15px] text-#17201D group-hover/category-single:text-#5B9982'>
                          Glasses
                        </h3>
                        <div className='font-medium text-xs leading-3 h-fit lg:pt-1'>
                          <span className='text-#8B928F group-hover/category-single:text-#5B9982'>
                            32
                          </span>
                          <span className='text-#4D5250 group-hover/category-single:text-#5B9982'>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- search bar  --> */}
          <div className='flex-auto md:mr-10px lg:mr-30px xl:mr-45px max-w-[828px]'>
            <form>
              <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only'
              >
                Search
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none'>
                  <svg
                    className='w-5 h-5 text-#17201D'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='none'
                  >
                    <path
                      d='M9.58334 17.5001C13.9556 17.5001 17.5 13.9557 17.5 9.58341C17.5 5.21116 13.9556 1.66675 9.58334 1.66675C5.21108 1.66675 1.66667 5.21116 1.66667 9.58341C1.66667 13.9557 5.21108 17.5001 9.58334 17.5001Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                    <path
                      d='M18.3333 18.3334L16.6667 16.6667'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  className='block w-full p-5 pl-14 font-light text-sm leading-4 text-gray-900 rounded-lg bg-#F2F2F2 focus:border-none border-none outline-none focus:ring-#5B9982 focus:ring-1'
                  placeholder='What are you looking for...'
                  required
                />
              </div>
            </form>
          </div>
          {/* <!-- nav links  --> */}
          <ul className='flex items-center space-x-30px lg:space-x-45px text-[13px] leading-[14px] text-center'>
            {/* <!-- sign in  --> */}
            <li
              className='open-login hidden lg:block'
              onClick={handleRegisterClick}
            >
              <div className='group flex flex-col gap-[5px] justify-center items-center cursor-pointer'>
                <svg
                  className='w-[22px] h-[22px] text-#17201D group-hover:text-#5B9982'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 22 22'
                  fill='none'
                >
                  <circle
                    cx='11'
                    cy='5.49992'
                    r='3.66667'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  ></circle>
                  <ellipse
                    opacity='0.5'
                    cx='11'
                    cy='15.5834'
                    rx='6.41667'
                    ry='3.66667'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  ></ellipse>
                </svg>
                <h3 className='text-#464646 group-hover:text-#5B9982'>
                  Sign In
                </h3>
              </div>
            </li>
            {/* <!-- Wishlist  --> */}
            <li className='hidden lg:block'>
              <a
                href='wishlist.html'
                className='group flex flex-col gap-[5px] justify-center items-center cursor-pointer'
              >
                <svg
                  className='w-[22px] h-[22px] text-#1C274C group-hover:text-#5B9982'
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                >
                  <path
                    d='M11 5.04231C6.87513 0.756736 1.83331 3.91804 1.83331 8.37573C1.83331 12.8334 5.51779 15.2089 8.2149 17.335C9.16665 18.0853 10.0833 18.7917 11 18.7917'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  ></path>
                  <path
                    opacity='0.5'
                    d='M11 5.04231C15.1249 0.756736 20.1667 3.91804 20.1667 8.37573C20.1667 12.8334 16.4822 15.2089 13.7851 17.335C12.8333 18.0853 11.9167 18.7917 11 18.7917'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  ></path>
                </svg>
                <h3 className='text-#464646 group-hover:text-#5B9982'>
                  Wishlist
                </h3>
              </a>
            </li>
            {/* <!-- Be A Seller  --> */}
            <li className='hidden lg:block'>
              <div className='group flex flex-col gap-[5px] justify-center items-center cursor-pointer'>
                <svg
                  className='w-[23px] h-[23px] text-#17201D group-hover:text-#5B9982'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 23 23'
                  fill='none'
                >
                  <circle
                    cx='9.66667'
                    cy='6.49992'
                    r='3.66667'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  ></circle>
                  <path
                    opacity='0.5'
                    d='M17 17.0417C17 19.3199 17 21.1667 9.66665 21.1667C2.33331 21.1667 2.33331 19.3199 2.33331 17.0417C2.33331 14.7636 5.61656 12.9167 9.66665 12.9167C13.7167 12.9167 17 14.7636 17 17.0417Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  ></path>
                  <path
                    d='M19.75 10.1666H17.9166M17.9166 10.1666H16.0833M17.9166 10.1666L17.9166 8.33325M17.9166 10.1666L17.9166 11.9999'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  ></path>
                </svg>
                <h3 className='text-#464646 group-hover:text-#5B9982'>
                  Be A Seller
                </h3>
              </div>
            </li>
            {/* <!--Cart --> */}
            <li className='open-cart pr-5'>
              <div className='group flex flex-col gap-[5px] justify-center items-center cursor-pointer relative'>
                <svg
                  className='w-[23px] h-[23px] text-#17201D group-hover:text-#5B9982'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 23 22'
                  fill='none'
                >
                  <path
                    d='M3.71507 11.1935C4.20748 8.73143 4.45368 7.50042 5.26719 6.70756C5.41755 6.56102 5.58021 6.42767 5.75339 6.30897C6.69039 5.66675 7.94578 5.66675 10.4566 5.66675H12.0176C14.5284 5.66675 15.7838 5.66675 16.7208 6.30897C16.8939 6.42767 17.0566 6.56102 17.207 6.70756C18.0205 7.50042 18.2667 8.73143 18.7591 11.1934C19.466 14.7281 19.8195 16.4955 19.0058 17.7478C18.8585 17.9746 18.6865 18.1843 18.493 18.3733C17.4246 19.4167 15.6223 19.4167 12.0176 19.4167H10.4566C6.85189 19.4167 5.04956 19.4167 3.98111 18.3733C3.78765 18.1843 3.61569 17.9746 3.46836 17.7478C2.65467 16.4955 3.00814 14.7281 3.71507 11.1935Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  ></path>
                  <circle
                    opacity='0.5'
                    cx='13.987'
                    cy='8.41667'
                    r='0.916667'
                    fill='currentColor'
                  ></circle>
                  <circle
                    opacity='0.5'
                    cx='8.48704'
                    cy='8.41667'
                    r='0.916667'
                    fill='currentColor'
                  ></circle>
                  <path
                    opacity='0.5'
                    d='M8.48706 5.66667V4.75C8.48706 3.23122 9.71828 2 11.2371 2C12.7558 2 13.9871 3.23122 13.9871 4.75V5.66667'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  ></path>
                </svg>
                <h3 className='text-#464646 group-hover:text-#5B9982'>Cart</h3>
                <div className='w-[26px] h-[26px] absolute top-[-20px] right-[-15px]'>
                  <div className='w-[26px] h-[26px] left-0 top-0 absolute bg-black rounded-full'></div>
                  <div className='left-[9px] top-[7px] absolute text-center text-white text-[12px] font-bold leading-3 z-10'>
                    2
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- Menu btn  --> */}
            {/* <li className="menu-btn" onClick="toggleMenu()"> */}
            <li className='menu-btn'>
              <svg
                className='w-6 h-6 text-#17201D hover:text-#5B9982 cursor-pointer'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z'
                  fill='currentColor'
                ></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- nav links  --> */}
      <ul className='flex md:hidden justify-between items-center space-x-5 fixed bottom-0 left-0 w-full bg-white px-5 py-18px shadow-navmobile border-t'>
        {/* <!-- Menu btn  --> */}
        {/* <li className="menu-btn" onclick="toggleMenu()"> */}
        <li className='menu-btn'>
          <svg
            className='w-6 h-6 text-#17201D hover:text-#5B9982 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z'
              fill='currentColor'
            ></path>
            <path
              d='M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z'
              fill='currentColor'
            ></path>
            <path
              d='M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z'
              fill='currentColor'
            ></path>
            <path
              d='M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z'
              fill='currentColor'
            ></path>
          </svg>
        </li>
        {/* <!-- search  --> */}
        <li className='open-search'>
          <div className='group flex flex-col gap-[5px] justify-center items-center cursor-pointer'>
            <svg
              className='w-[22px] h-[22px] text-#8E93A6'
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
            >
              <circle
                cx='10.5416'
                cy='10.5417'
                r='8.70833'
                stroke='currentColor'
                strokeWidth='1.5'
              ></circle>
              <path
                d='M16.9583 16.9583L20.1666 20.1667'
                stroke='#1C274C'
                strokeWidth='1.5'
                strokeLinecap='round'
              ></path>
            </svg>
          </div>
        </li>
        {/* <!-- home  --> */}
        <li className=''>
          <a href='index.html'>
            <svg
              className='w-[22px] h-[22px] text-#1C274C'
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
            >
              <path
                opacity='0.5'
                d='M1.83331 11.1869C1.83331 9.0892 1.83331 8.04034 2.30925 7.17085C2.78518 6.30136 3.65468 5.76172 5.39368 4.68245L7.22701 3.54463C9.06525 2.40377 9.98437 1.83334 11 1.83334C12.0156 1.83334 12.9347 2.40377 14.7729 3.54463L16.6063 4.68245C18.3453 5.76172 19.2148 6.30136 19.6907 7.17085C20.1666 8.04034 20.1666 9.0892 20.1666 11.1869V12.5812C20.1666 16.157 20.1666 17.9449 19.0927 19.0558C18.0188 20.1667 16.2903 20.1667 12.8333 20.1667H9.16665C5.70968 20.1667 3.9812 20.1667 2.90725 19.0558C1.83331 17.9449 1.83331 16.157 1.83331 12.5812V11.1869Z'
                stroke='currentColor'
                strokeWidth='1.5'
              ></path>
              <path
                d='M11 13.75L11 16.5'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
              ></path>
            </svg>
          </a>
        </li>
        {/* <!--Cart --> */}
        <li className='open-cart'>
          <div className='group flex flex-col gap-[5px] justify-center items-center cursor-pointer relative'>
            <svg
              className='w-[23px] h-[23px] text-#17201D group-hover:text-#5B9982'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 23 22'
              fill='none'
            >
              <path
                d='M3.71507 11.1935C4.20748 8.73143 4.45368 7.50042 5.26719 6.70756C5.41755 6.56102 5.58021 6.42767 5.75339 6.30897C6.69039 5.66675 7.94578 5.66675 10.4566 5.66675H12.0176C14.5284 5.66675 15.7838 5.66675 16.7208 6.30897C16.8939 6.42767 17.0566 6.56102 17.207 6.70756C18.0205 7.50042 18.2667 8.73143 18.7591 11.1934C19.466 14.7281 19.8195 16.4955 19.0058 17.7478C18.8585 17.9746 18.6865 18.1843 18.493 18.3733C17.4246 19.4167 15.6223 19.4167 12.0176 19.4167H10.4566C6.85189 19.4167 5.04956 19.4167 3.98111 18.3733C3.78765 18.1843 3.61569 17.9746 3.46836 17.7478C2.65467 16.4955 3.00814 14.7281 3.71507 11.1935Z'
                stroke='currentColor'
                strokeWidth='1.5'
              ></path>
              <circle
                opacity='0.5'
                cx='13.987'
                cy='8.41667'
                r='0.916667'
                fill='currentColor'
              ></circle>
              <circle
                opacity='0.5'
                cx='8.48704'
                cy='8.41667'
                r='0.916667'
                fill='currentColor'
              ></circle>
              <path
                opacity='0.5'
                d='M8.48706 5.66667V4.75C8.48706 3.23122 9.71828 2 11.2371 2C12.7558 2 13.9871 3.23122 13.9871 4.75V5.66667'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
              ></path>
            </svg>
            <div className='w-[26px] h-[26px] absolute top-[-17px] right-[-19px]'>
              <div className='w-[26px] h-[26px] left-0 top-0 absolute bg-black rounded-full'></div>
              <div className='left-[9px] top-[7px] absolute text-center text-white text-[12px] font-bold leading-3 z-10'>
                2
              </div>
            </div>
          </div>
        </li>

        {/* <!-- account  --> */}
        <li className='open-login'>
          <div className='group flex flex-col gap-[5px] justify-center items-center cursor-pointer'>
            <svg
              className='w-[22px] h-[22px] text-#17201D group-hover:text-#5B9982'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 22 22'
              fill='none'
            >
              <circle
                cx='11'
                cy='5.49992'
                r='3.66667'
                stroke='currentColor'
                strokeWidth='1.5'
              ></circle>
              <ellipse
                opacity='0.5'
                cx='11'
                cy='15.5834'
                rx='6.41667'
                ry='3.66667'
                stroke='currentColor'
                strokeWidth='1.5'
              ></ellipse>
            </svg>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
