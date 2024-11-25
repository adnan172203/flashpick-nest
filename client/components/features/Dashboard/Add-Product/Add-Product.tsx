'use client';

import React, { useState } from 'react';
import FilterColor from './components/Filter-Color';
import FilterSize from './components/Filter-Size';
import RichTextEditor from './components/Tex-editor';
import ImageUpload from './components/Image-Upload';

const AddProduct = () => {
  return (
    <>
      <main className='bg-#FAFAFA col-start-2 px-5 md:px-10 pt-6 pb-30px overflow-x-hidden'>
        {/* <!-- add product  --> */}
        <div className='bg-white p-5 md:p-30px'>
          {/* <!-- card titles and button  --> */}
          <div className='flex justify-between items-center gap-3 sm:gap-5 mb-4'>
            <h2 className='font-bold text-sm sm:text-base leading-4 tracking-[0.16px] text-#17201D capitalize'>
              Add Product
            </h2>
            <a
              href='product-list.html'
              className='flex items-center gap-2 md:gap-10px p-10px md:px-6 md:py-15px bg-#17201D hover:bg-#5B9982 rounded font-medium text-xs md:text-[15px] leading-15px tracking-[-0.3px] text-white capitalize shadow-btn transition-colors duration-300'
            >
              <span className='whitespace-nowrap'>View All</span>
            </a>
          </div>
          <div className='flex flex-col 2xl:flex-row gap-6'>
            {/* <!-- upload an image    --> */}
            <div className='w-full 2xl:max-w-[606px] 2xl:min-w-[606px]'>
              <ImageUpload />
              <div
                id='imagePreviewContainer'
                className='flex flex-wrap gap-4 mt-30px'
              >
                <div className='w-60px h-60px min-[608px]:w-[100px] min-[608px]:h-[100px] min-[796px]:w-[132px] min-[796px]:h-[146px] py-25px px-[23px] bg-#F8F8F8 relative'>
                  <img
                    src='../../../../images/admin-product-list/12.png'
                    className='w-full h-full object-cover'
                    alt=''
                  />
                  <img
                    src='../../../images/icons/icon-close-solid.png'
                    className='max-[607px]:w-15px absolute top-0 right-0 min-[608px]:top-5px min-[608px]:right-5px cursor-pointer'
                    alt=''
                  />
                </div>
                <div className='w-60px h-60px min-[608px]:w-[100px] min-[608px]:h-[100px] min-[796px]:w-[132px] min-[796px]:h-[146px] py-25px px-[23px] bg-#F8F8F8 relative'>
                  <img
                    src='../../../../images/admin-product-list/13.png'
                    className='w-full h-full object-cover'
                    alt=''
                  />
                  <img
                    src='../../../images/icons/icon-close-solid.png'
                    className='max-[607px]:w-15px absolute top-0 right-0 min-[608px]:top-5px min-[608px]:right-5px cursor-pointer'
                    alt=''
                  />
                </div>
                <div className='w-60px h-60px min-[608px]:w-[100px] min-[608px]:h-[100px] min-[796px]:w-[132px] min-[796px]:h-[146px] py-25px px-[23px] bg-#F8F8F8 relative'>
                  <img
                    src='../../../../images/admin-product-list/14.png'
                    className='w-full h-full object-cover'
                    alt=''
                  />
                  <img
                    src='../../../images/icons/icon-close-solid.png'
                    className='max-[607px]:w-15px absolute top-0 right-0 min-[608px]:top-5px min-[608px]:right-5px cursor-pointer'
                    alt=''
                  />
                </div>
                <div className='w-60px h-60px min-[608px]:w-[100px] min-[608px]:h-[100px] min-[796px]:w-[132px] min-[796px]:h-[146px] py-25px px-[23px] bg-#F8F8F8 relative'>
                  <img
                    src='../../../../images/admin-product-list/15.png'
                    className='w-full h-full object-cover'
                    alt=''
                  />
                  <img
                    src='../../../images/icons/icon-close-solid.png'
                    className='max-[607px]:w-15px absolute top-0 right-0 min-[608px]:top-5px min-[608px]:right-5px cursor-pointer'
                    alt=''
                  />
                </div>
              </div>
            </div>
            {/* <!-- add product info  --> */}
            <div className='flex-auto space-y-6'>
              {/* <!-- Product Name | Select Categories  --> */}
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full'>
                  <label
                    htmlFor='productName'
                    className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block select-none'
                  >
                    Product Name
                  </label>
                  <input
                    type='text'
                    id='productName'
                    className='w-full py-22px px-5 bg-#F2F2F2 rounded border-none outline-none focus:ring-#57AD8D font-medium text-sm leading-15px text-#17201D'
                  />
                </div>
                <div className='w-full'>
                  <label
                    htmlFor='selectCategories'
                    className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block select-none'
                  >
                    Select Categories
                  </label>
                  <select
                    name='selectCategories'
                    id='selectCategories'
                    className='w-full py-22px px-5 bg-#F2F2F2 rounded border-none outline-none focus:ring-#57AD8D font-medium text-sm leading-15px text-#17201D capitalize'
                  >
                    <option
                      className='capitalize text-sm leading-15px text-#17201D'
                      value='snacks'
                    >
                      snacks
                    </option>
                    <option
                      className='capitalize text-sm leading-15px text-#17201D'
                      value='furniture'
                    >
                      furniture
                    </option>
                    <option
                      className='capitalize text-sm leading-15px text-#17201D'
                      value='electronics'
                    >
                      electronics
                    </option>
                  </select>
                </div>
              </div>
              {/* <!-- Short Description  --> */}
              <div className='max-w-full break-words'>
                <RichTextEditor title='Short Description' />
              </div>
              {/* <!-- Price | Quantity  --> */}
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full'>
                  <label
                    htmlFor='price'
                    className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block select-none'
                  >
                    Price
                  </label>
                  <div className=' relative'>
                    <input
                      type='number'
                      id='price'
                      step='0.1'
                      className='appearance-none w-full py-22px px-5 bg-#F2F2F2 rounded-none border-none outline-none focus:ring-#57AD8D font-medium text-sm leading-15px text-#17201D '
                    />
                    {/* <button onClick="document.getElementById('price').stepUp()" */}
                    <button className='absolute top-3 right-5'>
                      <svg
                        className='w-4 h-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <g clip-path='url(#clip0_362_5821)'>
                          <path
                            d='M8.00001 7.21868L4.70001 10.5187L3.75734 9.57601L8.00001 5.33334L12.2427 9.57601L11.3 10.5187L8.00001 7.21868Z'
                            fill='#787786'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_362_5821'>
                            <rect
                              width='16'
                              height='16'
                              fill='white'
                              transform='matrix(-1 0 0 -1 16 16)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    {/* <button onClick="document.getElementById('price').stepDown()" */}
                    <button className='absolute bottom-3 right-5 scale-y-[-1]'>
                      <svg
                        className='w-4 h-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <g clip-path='url(#clip0_362_58222)'>
                          <path
                            d='M8.00001 7.21868L4.70001 10.5187L3.75734 9.57601L8.00001 5.33334L12.2427 9.57601L11.3 10.5187L8.00001 7.21868Z'
                            fill='#787786'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_362_58222'>
                            <rect
                              width='16'
                              height='16'
                              fill='white'
                              transform='matrix(-1 0 0 -1 16 16)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className='w-full'>
                  <label
                    htmlFor='quantity'
                    className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block select-none'
                  >
                    Quantity
                  </label>
                  <div className=' relative'>
                    <input
                      type='number'
                      id='quantity'
                      min='1'
                      step='1'
                      className='w-full py-22px px-5 bg-#F2F2F2 rounded-none border-none outline-none focus:ring-#57AD8D font-medium text-sm leading-15px text-#17201D '
                    />
                    {/* <button onClick="document.getElementById('quantity').stepUp()" */}
                    <button className='absolute top-3 right-5'>
                      <svg
                        className='w-4 h-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <g clip-path='url(#clip0_362_58221)'>
                          <path
                            d='M8.00001 7.21868L4.70001 10.5187L3.75734 9.57601L8.00001 5.33334L12.2427 9.57601L11.3 10.5187L8.00001 7.21868Z'
                            fill='#787786'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_362_58221'>
                            <rect
                              width='16'
                              height='16'
                              fill='white'
                              transform='matrix(-1 0 0 -1 16 16)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    {/* <button
                    onClick="document.getElementById('quantity').stepDown()"
                    className='absolute bottom-3 right-5 scale-y-[-1]'
                  > */}
                    <button className='absolute bottom-3 right-5 scale-y-[-1]'>
                      <svg
                        className='w-4 h-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <g clip-path='url(#clip0_362_5822)'>
                          <path
                            d='M8.00001 7.21868L4.70001 10.5187L3.75734 9.57601L8.00001 5.33334L12.2427 9.57601L11.3 10.5187L8.00001 7.21868Z'
                            fill='#787786'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_362_5822'>
                            <rect
                              width='16'
                              height='16'
                              fill='white'
                              transform='matrix(-1 0 0 -1 16 16)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- SKU | Product Tags  --> */}
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full'>
                  <label
                    htmlFor='sku'
                    className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block'
                  >
                    SKU
                  </label>
                  <input
                    type='text'
                    id='sku'
                    placeholder='FML32516'
                    className='w-full py-22px px-5 bg-#F2F2F2 rounded border-none outline-none focus:ring-#57AD8D font-medium text-sm leading-15px text-#17201D'
                  />
                </div>
                <div className='w-full relative '>
                  <label className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block select-none'>
                    Product Tags
                  </label>
                  <div className='relative py-6px px-5 bg-#F2F2F2 rounded flex flex-wrap items-center focus-within:border-#57AD8D'>
                    <div className='tag-input flex flex-wrap items-center w-auto'></div>
                    <input
                      id='tag-input-main'
                      type='text'
                      placeholder='Enter tags'
                      className='py-4 px-0 border-none outline-none bg-transparent font-medium text-sm leading-15px text-#17201D focus:ring-0'
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Colors | Size  --> */}
              <div className='flex flex-col md:flex-row gap-6'>
                <FilterColor />
                <FilterSize />
              </div>
              {/* <!-- Full Description  --> */}
              <div className='max-w-full break-words'>
                <RichTextEditor title='Full Description' />
              </div>
              {/* <!-- Additional Information  --> */}
              <div className='max-w-full break-words'>
                <RichTextEditor title='Additional Description' />
              </div>
              <button className='flex items-center gap-2 md:gap-10px p-10px md:px-6 md:py-15px bg-#5B9982 hover:bg-#57AD8D rounded font-medium text-xs md:text-[15px] leading-15px tracking-[-0.3px] text-white capitalize shadow-btn transition-colors duration-300 -translate-y-5px'>
                <span className='whitespace-nowrap'>Add Product</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddProduct;
