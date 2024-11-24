'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const AddProduct = () => {
  const [selectedColors, setSelectedColors] = useState(new Set());
  const [selectedSize, setSelectedSize] = useState('S');

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const colors = [
    { id: 'navy', label: 'Navy Blue', class: 'bg-blue-600' },
    { id: 'teal', label: 'Teal', class: 'bg-teal-500' },
    { id: 'yellow', label: 'Yellow', class: 'bg-yellow-400' },
    { id: 'slate', label: 'Slate', class: 'bg-slate-500' },
    { id: 'darkblue', label: 'Dark Blue', class: 'bg-blue-900' },
    { id: 'pink', label: 'Pink', class: 'bg-pink-200' },
  ];

  const toggleColor = (colorId: string) => {
    const newSelected = new Set(selectedColors);
    if (newSelected.has(colorId)) {
      newSelected.delete(colorId);
    } else {
      newSelected.add(colorId);
    }
    setSelectedColors(newSelected);
  };

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
              <div
                id='uploadImage'
                className='h-[250px] md:h-[416px] bg-#F2F2F2 p-10px rounded'
              >
                <div className='h-full w-full flex justify-center items-center border border-dashed border-white rounded'>
                  <div className='text-center'>
                    <img
                      src='../../../../images/icons/icon-upload.svg'
                      alt=''
                    />
                    <p className='font-medium text-xs md:text-sm leading-14px text-#8B8582 mt-4'>
                      <span className='text-#847DD2'>Upload an Image</span> or
                      drag and drop
                    </p>
                    <p className='font-medium text-xs leading-14px text-#8B8582 mt-2'>
                      PNG, JPG
                    </p>
                  </div>
                </div>
              </div>
              <input
                type='file'
                id='fileInput'
                accept='.jpg, .jpeg, .png'
                className='hidden'
                multiple
              />
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
                <label
                  htmlFor='productName'
                  className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block select-none'
                >
                  Short Description
                </label>
                {/* <!-- Create toolbar container --> */}
                <div className='relative rich-editor'>
                  <div
                    id='toolbar1'
                    className='flex flex-wrap gap-2 md:gap-4 border-0'
                  >
                    {/* <!-- block 1  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add a bold button --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-bold'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 32 32'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                fill='#000000'
                                fill-rule='evenodd'
                                d='M7 6a1 1 0 0 1 1-1h9.5a5.5 5.5 0 0 1 3.813 9.464A5.999 5.999 0 0 1 19 26H8a1 1 0 0 1-1-1V6Zm2 10v8h10a4 4 0 1 0 0-8H9Zm8.5-2H9V7h8.5a3.5 3.5 0 1 1 0 7Z'
                                clip-rule='evenodd'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a italic --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-italic'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                            fill-rule='evenodd'
                          >
                            <g>
                              <path
                                d='M13.557 5H12a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-2.307l-5.25 14H12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h2.307z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a underline button --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-underline'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='M20 22.5H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zM12 18c-4.1 0-7.5-3.4-7.5-7.5v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 4.1-3.4 7.5-7.5 7.5z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a link --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-link'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 511.997 511.997'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='m212.26 390.24-60.331 60.331c-25.012 25.012-65.517 25.012-90.508.005-24.996-24.996-24.996-65.505-.005-90.496l120.683-120.683c24.991-24.992 65.5-24.992 90.491 0 8.331 8.331 21.839 8.331 30.17 0 8.331-8.331 8.331-21.839 0-30.17-41.654-41.654-109.177-41.654-150.831 0L31.247 329.909c-41.654 41.654-41.654 109.177 0 150.831 41.649 41.676 109.177 41.676 150.853 0l60.331-60.331c8.331-8.331 8.331-21.839 0-30.17s-21.84-8.33-30.171.001z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                              <path
                                d='M480.751 31.24c-41.654-41.654-109.199-41.654-150.853 0l-72.384 72.384c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l72.384-72.384c24.991-24.992 65.521-24.992 90.513 0 24.991 24.991 24.991 65.5 0 90.491L317.845 284.638c-24.992 24.992-65.5 24.992-90.491 0-8.331-8.331-21.839-8.331-30.17 0s-8.331 21.839 0 30.17c41.654 41.654 109.177 41.654 150.831 0l132.736-132.736c41.654-41.654 41.654-109.178 0-150.832z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a image --> */}
                      <li className='px-1 pt-[3px]'>
                        <button className='ql-image'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='M19.14 21.75H4.86a2.61 2.61 0 0 1-2.61-2.61V4.86a2.61 2.61 0 0 1 2.61-2.61h14.28a2.61 2.61 0 0 1 2.61 2.61v14.28a2.61 2.61 0 0 1-2.61 2.61Zm-14.28-18a1.11 1.11 0 0 0-1.11 1.11v14.28a1.11 1.11 0 0 0 1.11 1.11h14.28a1.11 1.11 0 0 0 1.11-1.11V4.86a1.11 1.11 0 0 0-1.11-1.11Z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                              <path
                                d='M3 18.81a.76.76 0 0 1-.57-.26.75.75 0 0 1 .09-1.06l5.12-4.32a2 2 0 0 1 2.7.11l2.43 2.43a.5.5 0 0 0 .65 0L15.78 14a2 2 0 0 1 2.44 0l3.25 2.59a.75.75 0 1 1-.94 1.18l-3.24-2.6a.5.5 0 0 0-.61 0L14.32 17a2 2 0 0 1-2.61-.18l-2.43-2.48a.5.5 0 0 0-.67 0l-5.13 4.3a.72.72 0 0 1-.48.17ZM15 11.75A2.75 2.75 0 1 1 17.75 9 2.75 2.75 0 0 1 15 11.75Zm0-4A1.25 1.25 0 1 0 16.25 9 1.25 1.25 0 0 0 15 7.75Z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                    {/* <!-- block 2  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add a list --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-list'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 60.123 60.123'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='M57.124 51.893H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 33.062H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 14.231H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                              <circle
                                cx='4.029'
                                cy='11.463'
                                r='4.029'
                                fill='#000000'
                                data-original='#000000'
                              ></circle>
                              <circle
                                cx='4.029'
                                cy='30.062'
                                r='4.029'
                                fill='#000000'
                                data-original='#000000'
                              ></circle>
                              <circle
                                cx='4.029'
                                cy='48.661'
                                r='4.029'
                                fill='#000000'
                                data-original='#000000'
                              ></circle>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a h1 --> */}
                      <li className=' px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-header' value='1'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM20.472 9.118A1 1 0 0 1 21 10v8a1 1 0 1 1-2 0v-6.131l-1.445.963a1 1 0 0 1-1.11-1.664l3-2a1 1 0 0 1 1.027-.05z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a h2 --> */}
                      <li className=' px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-header' value='2'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM20.066 9.427C21.166 9.793 22 10.76 22 12c0 1.016-.355 1.762-.904 2.333-.418.436-.957.766-1.375 1.023-.067.04-.131.08-.19.117-.488.305-.844.564-1.097.912-.116.16-.224.357-.303.615h2.87a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1c0-1.181.3-2.082.815-2.791.497-.683 1.141-1.111 1.654-1.432l.235-.146c.433-.268.722-.447.949-.683.201-.21.346-.464.346-.948 0-.26-.166-.543-.566-.676-.389-.13-1.051-.11-1.834.476a1 1 0 1 1-1.2-1.6c1.217-.912 2.555-1.144 3.666-.773z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a h3 --> */}
                      <li className='px-1 pt-[3px] group'>
                        <button className='ql-header' value='3'>
                          <svg
                            className='w-5 h-5 group-hover:text-blue-600'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='currentColor'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='currentColor'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM19.461 11.217c-.347-.164-.873-.196-1.454.145a1 1 0 0 1-1.014-1.724c1.12-.658 2.344-.69 3.321-.23C21.284 9.866 22 10.818 22 12a3 3 0 0 1-3 3 1 1 0 0 1 0-2 1 1 0 0 0 1-1c0-.318-.184-.615-.539-.783z'
                                  fill='currentColor'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M18 14a1 1 0 0 1 1-1 3 3 0 0 1 3 3c0 1.285-.723 2.397-1.84 2.9-1.134.51-2.518.332-3.76-.6a1 1 0 1 1 1.2-1.6c.758.569 1.374.54 1.74.376.383-.173.66-.561.66-1.076a1 1 0 0 0-1-1 1 1 0 0 1-1-1z'
                                  fill='currentColor'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                    {/* <!-- block 3  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add a sub --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-script' value='sub'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 16 16'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                fill='#444444'
                                d='M16 15v1h-4v-1s3.3-1.6 2.6-3.2c-.5-1.1-2-.2-2-.2l-.5-.9s1.9-1.4 3.1-.2c2.4 2.3-1.4 4.5-1.4 4.5H16zM12 3H8.6L6 6 3.4 3H0l4.3 5L0 13h3.4L6 10l2.6 3H12L7.7 8z'
                                data-original='#444444'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a supper --> */}
                      <li className='px-2 pt-[1px]'>
                        <button className='ql-script' value='super'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 491.882 491.882'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='m211.357 311.56 131.922 148.188h-81.178l-92.38-108.379-90.286 108.379H0L130.861 311.56 6.301 171.714h80.135l86.794 101.391 87.47-101.391h76.639L211.357 311.56zm180.379-100.2 54.373-40.033c18.542-12.741 30.724-24.56 36.563-35.468 5.834-10.902 8.748-22.618 8.748-35.172 0-20.508-6.856-37.061-20.552-49.656-13.707-12.602-31.729-18.897-54.054-18.897-21.527 0-38.745 6.375-51.637 19.115-12.919 12.747-19.367 31.957-19.367 57.651h41.523c0-15.33 2.719-25.928 8.145-31.806 5.426-5.879 12.861-8.819 22.331-8.819 9.457 0 16.929 2.991 22.473 8.964 5.521 5.967 8.275 13.388 8.275 22.257 0 8.854-2.554 16.866-7.685 24.039s-19.387 19.272-42.782 36.298c-20.014 14.635-47.097 28.422-55.218 41.364l.407 48.093h148.603v-37.93H391.736z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                    {/* <!-- block 4  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add align left --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-align' data-value='left'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add align center --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-align' value='center'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                fill='#000000'
                                d='M16 11c.28 0 .515.1.702.298A.924.924 0 0 1 17 12a.96.96 0 0 1-.298.702A.924.924 0 0 1 16 13H8a.96.96 0 0 1-.702-.298A.96.96 0 0 1 7 12c0-.28.1-.515.298-.702A.96.96 0 0 1 8 11zm4-6c.28 0 .515.1.702.298A.924.924 0 0 1 21 6a.96.96 0 0 1-.298.702A.924.924 0 0 1 20 7H4a.96.96 0 0 1-.702-.298A.96.96 0 0 1 3 6c0-.28.1-.515.298-.702A.96.96 0 0 1 4 5zm-2 12c.28 0 .515.1.702.298A.924.924 0 0 1 19 18a.96.96 0 0 1-.298.702A.924.924 0 0 1 18 19H6a.96.96 0 0 1-.702-.298A.96.96 0 0 1 5 18c0-.28.1-.515.298-.702A.96.96 0 0 1 6 17z'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add align right --> */}
                      <li className='px-2 pt-[2px]'>
                        <button className='ql-align' value='right'>
                          <svg
                            className='w-3 h-3 scale-x-[-1]'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div id='editor1'></div>
                </div>
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
                <div className='w-full'>
                  <h3 className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block'>
                    Filter By Color
                  </h3>
                  <ul className='flex items-center gap-10px'>
                    {colors.map((color) => {
                      const isSelected = selectedColors.has(color.id);
                      return (
                        <button
                          key={color.id}
                          onClick={() => toggleColor(color.id)}
                          className={`
                                w-6 h-6 rounded-full ${color.class}
                                hover:ring-2 hover:ring-offset-2 hover:ring-gray-300
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                                transition-all duration-200
                                flex items-center justify-center
                                ${
                                  isSelected
                                    ? 'ring-2 ring-offset-2 ring-gray-400'
                                    : ''
                                }`}
                          aria-label={`Filter by ${color.label}`}
                          aria-pressed={isSelected}
                        >
                          {isSelected && (
                            <Check className='w-4 h-4 text-white' />
                          )}
                        </button>
                      );
                    })}
                  </ul>
                </div>

                <div className='flex flex-col gap-2 justify-start w-full'>
                  <label className='text-xs md:text-sm leading-15px text-#8B8582'>
                    Size
                  </label>
                  <div className='flex gap-2'>
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`
                        w-12 h-12 
                        flex items-center justify-center 
                        border border-gray-200 
                        text-sm font-medium 
                        transition-colors
                        ${
                          selectedSize === size
                            ? 'border border-[#4BA099] bg-white text-black' // Change to black border when selected
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* <!-- Full Description  --> */}
              <div className='max-w-full break-words'>
                <label
                  htmlFor='productName'
                  className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block select-none'
                >
                  Full Description
                </label>
                {/* <!-- Create toolbar container --> */}
                <div className='relative rich-editor'>
                  <div
                    id='toolbar2'
                    className='flex flex-wrap gap-2 md:gap-4 border-0'
                  >
                    {/* <!-- block 1  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add a bold button --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-bold'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 32 32'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                fill='#000000'
                                fill-rule='evenodd'
                                d='M7 6a1 1 0 0 1 1-1h9.5a5.5 5.5 0 0 1 3.813 9.464A5.999 5.999 0 0 1 19 26H8a1 1 0 0 1-1-1V6Zm2 10v8h10a4 4 0 1 0 0-8H9Zm8.5-2H9V7h8.5a3.5 3.5 0 1 1 0 7Z'
                                clip-rule='evenodd'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a italic --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-italic'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                            fill-rule='evenodd'
                          >
                            <g>
                              <path
                                d='M13.557 5H12a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-2.307l-5.25 14H12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h2.307z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a underline button --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-underline'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='M20 22.5H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zM12 18c-4.1 0-7.5-3.4-7.5-7.5v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 4.1-3.4 7.5-7.5 7.5z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a link --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-link'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 511.997 511.997'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='m212.26 390.24-60.331 60.331c-25.012 25.012-65.517 25.012-90.508.005-24.996-24.996-24.996-65.505-.005-90.496l120.683-120.683c24.991-24.992 65.5-24.992 90.491 0 8.331 8.331 21.839 8.331 30.17 0 8.331-8.331 8.331-21.839 0-30.17-41.654-41.654-109.177-41.654-150.831 0L31.247 329.909c-41.654 41.654-41.654 109.177 0 150.831 41.649 41.676 109.177 41.676 150.853 0l60.331-60.331c8.331-8.331 8.331-21.839 0-30.17s-21.84-8.33-30.171.001z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                              <path
                                d='M480.751 31.24c-41.654-41.654-109.199-41.654-150.853 0l-72.384 72.384c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l72.384-72.384c24.991-24.992 65.521-24.992 90.513 0 24.991 24.991 24.991 65.5 0 90.491L317.845 284.638c-24.992 24.992-65.5 24.992-90.491 0-8.331-8.331-21.839-8.331-30.17 0s-8.331 21.839 0 30.17c41.654 41.654 109.177 41.654 150.831 0l132.736-132.736c41.654-41.654 41.654-109.178 0-150.832z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a image --> */}
                      <li className='px-1 pt-[3px]'>
                        <button className='ql-image'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='M19.14 21.75H4.86a2.61 2.61 0 0 1-2.61-2.61V4.86a2.61 2.61 0 0 1 2.61-2.61h14.28a2.61 2.61 0 0 1 2.61 2.61v14.28a2.61 2.61 0 0 1-2.61 2.61Zm-14.28-18a1.11 1.11 0 0 0-1.11 1.11v14.28a1.11 1.11 0 0 0 1.11 1.11h14.28a1.11 1.11 0 0 0 1.11-1.11V4.86a1.11 1.11 0 0 0-1.11-1.11Z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                              <path
                                d='M3 18.81a.76.76 0 0 1-.57-.26.75.75 0 0 1 .09-1.06l5.12-4.32a2 2 0 0 1 2.7.11l2.43 2.43a.5.5 0 0 0 .65 0L15.78 14a2 2 0 0 1 2.44 0l3.25 2.59a.75.75 0 1 1-.94 1.18l-3.24-2.6a.5.5 0 0 0-.61 0L14.32 17a2 2 0 0 1-2.61-.18l-2.43-2.48a.5.5 0 0 0-.67 0l-5.13 4.3a.72.72 0 0 1-.48.17ZM15 11.75A2.75 2.75 0 1 1 17.75 9 2.75 2.75 0 0 1 15 11.75Zm0-4A1.25 1.25 0 1 0 16.25 9 1.25 1.25 0 0 0 15 7.75Z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                    {/* <!-- block 2  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add a list --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-list'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 60.123 60.123'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='M57.124 51.893H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 33.062H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 14.231H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                              <circle
                                cx='4.029'
                                cy='11.463'
                                r='4.029'
                                fill='#000000'
                                data-original='#000000'
                              ></circle>
                              <circle
                                cx='4.029'
                                cy='30.062'
                                r='4.029'
                                fill='#000000'
                                data-original='#000000'
                              ></circle>
                              <circle
                                cx='4.029'
                                cy='48.661'
                                r='4.029'
                                fill='#000000'
                                data-original='#000000'
                              ></circle>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a h1 --> */}
                      <li className=' px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-header' value='1'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM20.472 9.118A1 1 0 0 1 21 10v8a1 1 0 1 1-2 0v-6.131l-1.445.963a1 1 0 0 1-1.11-1.664l3-2a1 1 0 0 1 1.027-.05z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a h2 --> */}
                      <li className=' px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-header' value='2'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM20.066 9.427C21.166 9.793 22 10.76 22 12c0 1.016-.355 1.762-.904 2.333-.418.436-.957.766-1.375 1.023-.067.04-.131.08-.19.117-.488.305-.844.564-1.097.912-.116.16-.224.357-.303.615h2.87a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1c0-1.181.3-2.082.815-2.791.497-.683 1.141-1.111 1.654-1.432l.235-.146c.433-.268.722-.447.949-.683.201-.21.346-.464.346-.948 0-.26-.166-.543-.566-.676-.389-.13-1.051-.11-1.834.476a1 1 0 1 1-1.2-1.6c1.217-.912 2.555-1.144 3.666-.773z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a h3 --> */}
                      <li className='px-1 pt-[3px] group'>
                        <button className='ql-header' value='3'>
                          <svg
                            className='w-5 h-5 group-hover:text-blue-600'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='currentColor'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='currentColor'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM19.461 11.217c-.347-.164-.873-.196-1.454.145a1 1 0 0 1-1.014-1.724c1.12-.658 2.344-.69 3.321-.23C21.284 9.866 22 10.818 22 12a3 3 0 0 1-3 3 1 1 0 0 1 0-2 1 1 0 0 0 1-1c0-.318-.184-.615-.539-.783z'
                                  fill='currentColor'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M18 14a1 1 0 0 1 1-1 3 3 0 0 1 3 3c0 1.285-.723 2.397-1.84 2.9-1.134.51-2.518.332-3.76-.6a1 1 0 1 1 1.2-1.6c.758.569 1.374.54 1.74.376.383-.173.66-.561.66-1.076a1 1 0 0 0-1-1 1 1 0 0 1-1-1z'
                                  fill='currentColor'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                    {/* <!-- block 3  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add a sub --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-script' value='sub'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 16 16'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                fill='#444444'
                                d='M16 15v1h-4v-1s3.3-1.6 2.6-3.2c-.5-1.1-2-.2-2-.2l-.5-.9s1.9-1.4 3.1-.2c2.4 2.3-1.4 4.5-1.4 4.5H16zM12 3H8.6L6 6 3.4 3H0l4.3 5L0 13h3.4L6 10l2.6 3H12L7.7 8z'
                                data-original='#444444'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a supper --> */}
                      <li className='px-2 pt-[1px]'>
                        <button className='ql-script' value='super'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 491.882 491.882'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='m211.357 311.56 131.922 148.188h-81.178l-92.38-108.379-90.286 108.379H0L130.861 311.56 6.301 171.714h80.135l86.794 101.391 87.47-101.391h76.639L211.357 311.56zm180.379-100.2 54.373-40.033c18.542-12.741 30.724-24.56 36.563-35.468 5.834-10.902 8.748-22.618 8.748-35.172 0-20.508-6.856-37.061-20.552-49.656-13.707-12.602-31.729-18.897-54.054-18.897-21.527 0-38.745 6.375-51.637 19.115-12.919 12.747-19.367 31.957-19.367 57.651h41.523c0-15.33 2.719-25.928 8.145-31.806 5.426-5.879 12.861-8.819 22.331-8.819 9.457 0 16.929 2.991 22.473 8.964 5.521 5.967 8.275 13.388 8.275 22.257 0 8.854-2.554 16.866-7.685 24.039s-19.387 19.272-42.782 36.298c-20.014 14.635-47.097 28.422-55.218 41.364l.407 48.093h148.603v-37.93H391.736z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                    {/* <!-- block 4  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add align left --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-align' data-value='left'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add align center --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-align' value='center'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                fill='#000000'
                                d='M16 11c.28 0 .515.1.702.298A.924.924 0 0 1 17 12a.96.96 0 0 1-.298.702A.924.924 0 0 1 16 13H8a.96.96 0 0 1-.702-.298A.96.96 0 0 1 7 12c0-.28.1-.515.298-.702A.96.96 0 0 1 8 11zm4-6c.28 0 .515.1.702.298A.924.924 0 0 1 21 6a.96.96 0 0 1-.298.702A.924.924 0 0 1 20 7H4a.96.96 0 0 1-.702-.298A.96.96 0 0 1 3 6c0-.28.1-.515.298-.702A.96.96 0 0 1 4 5zm-2 12c.28 0 .515.1.702.298A.924.924 0 0 1 19 18a.96.96 0 0 1-.298.702A.924.924 0 0 1 18 19H6a.96.96 0 0 1-.702-.298A.96.96 0 0 1 5 18c0-.28.1-.515.298-.702A.96.96 0 0 1 6 17z'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add align right --> */}
                      <li className='px-2 pt-[2px]'>
                        <button className='ql-align' value='right'>
                          <svg
                            className='w-3 h-3 scale-x-[-1]'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div id='editor2'></div>
                </div>
              </div>
              {/* <!-- Additional Information  --> */}
              <div className='max-w-full break-words'>
                <label
                  htmlFor='productName'
                  className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block select-none'
                >
                  Additional Information
                </label>
                {/* <!-- Create toolbar container --> */}
                <div className='relative rich-editor'>
                  <div
                    id='toolbar3'
                    className=' flex flex-wrap gap-2 md:gap-4 border-0'
                  >
                    {/* <!-- block 1  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add a bold button --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-bold'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 32 32'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                fill='#000000'
                                fill-rule='evenodd'
                                d='M7 6a1 1 0 0 1 1-1h9.5a5.5 5.5 0 0 1 3.813 9.464A5.999 5.999 0 0 1 19 26H8a1 1 0 0 1-1-1V6Zm2 10v8h10a4 4 0 1 0 0-8H9Zm8.5-2H9V7h8.5a3.5 3.5 0 1 1 0 7Z'
                                clip-rule='evenodd'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a italic --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-italic'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                            fill-rule='evenodd'
                          >
                            <g>
                              <path
                                d='M13.557 5H12a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-2.307l-5.25 14H12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h2.307z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a underline button --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-underline'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='M20 22.5H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zM12 18c-4.1 0-7.5-3.4-7.5-7.5v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 4.1-3.4 7.5-7.5 7.5z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a link --> */}
                      <li className='px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-link'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 511.997 511.997'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='m212.26 390.24-60.331 60.331c-25.012 25.012-65.517 25.012-90.508.005-24.996-24.996-24.996-65.505-.005-90.496l120.683-120.683c24.991-24.992 65.5-24.992 90.491 0 8.331 8.331 21.839 8.331 30.17 0 8.331-8.331 8.331-21.839 0-30.17-41.654-41.654-109.177-41.654-150.831 0L31.247 329.909c-41.654 41.654-41.654 109.177 0 150.831 41.649 41.676 109.177 41.676 150.853 0l60.331-60.331c8.331-8.331 8.331-21.839 0-30.17s-21.84-8.33-30.171.001z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                              <path
                                d='M480.751 31.24c-41.654-41.654-109.199-41.654-150.853 0l-72.384 72.384c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l72.384-72.384c24.991-24.992 65.521-24.992 90.513 0 24.991 24.991 24.991 65.5 0 90.491L317.845 284.638c-24.992 24.992-65.5 24.992-90.491 0-8.331-8.331-21.839-8.331-30.17 0s-8.331 21.839 0 30.17c41.654 41.654 109.177 41.654 150.831 0l132.736-132.736c41.654-41.654 41.654-109.178 0-150.832z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a image --> */}
                      <li className='px-1 pt-[3px]'>
                        <button className='ql-image'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='M19.14 21.75H4.86a2.61 2.61 0 0 1-2.61-2.61V4.86a2.61 2.61 0 0 1 2.61-2.61h14.28a2.61 2.61 0 0 1 2.61 2.61v14.28a2.61 2.61 0 0 1-2.61 2.61Zm-14.28-18a1.11 1.11 0 0 0-1.11 1.11v14.28a1.11 1.11 0 0 0 1.11 1.11h14.28a1.11 1.11 0 0 0 1.11-1.11V4.86a1.11 1.11 0 0 0-1.11-1.11Z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                              <path
                                d='M3 18.81a.76.76 0 0 1-.57-.26.75.75 0 0 1 .09-1.06l5.12-4.32a2 2 0 0 1 2.7.11l2.43 2.43a.5.5 0 0 0 .65 0L15.78 14a2 2 0 0 1 2.44 0l3.25 2.59a.75.75 0 1 1-.94 1.18l-3.24-2.6a.5.5 0 0 0-.61 0L14.32 17a2 2 0 0 1-2.61-.18l-2.43-2.48a.5.5 0 0 0-.67 0l-5.13 4.3a.72.72 0 0 1-.48.17ZM15 11.75A2.75 2.75 0 1 1 17.75 9 2.75 2.75 0 0 1 15 11.75Zm0-4A1.25 1.25 0 1 0 16.25 9 1.25 1.25 0 0 0 15 7.75Z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                    {/* <!-- block 2  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add a list --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-list'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 60.123 60.123'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='M57.124 51.893H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 33.062H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 14.231H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                              <circle
                                cx='4.029'
                                cy='11.463'
                                r='4.029'
                                fill='#000000'
                                data-original='#000000'
                              ></circle>
                              <circle
                                cx='4.029'
                                cy='30.062'
                                r='4.029'
                                fill='#000000'
                                data-original='#000000'
                              ></circle>
                              <circle
                                cx='4.029'
                                cy='48.661'
                                r='4.029'
                                fill='#000000'
                                data-original='#000000'
                              ></circle>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a h1 --> */}
                      <li className=' px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-header' value='1'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM20.472 9.118A1 1 0 0 1 21 10v8a1 1 0 1 1-2 0v-6.131l-1.445.963a1 1 0 0 1-1.11-1.664l3-2a1 1 0 0 1 1.027-.05z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a h2 --> */}
                      <li className=' px-1 pt-[3px] border-r border-r-#f2f2f2'>
                        <button className='ql-header' value='2'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM20.066 9.427C21.166 9.793 22 10.76 22 12c0 1.016-.355 1.762-.904 2.333-.418.436-.957.766-1.375 1.023-.067.04-.131.08-.19.117-.488.305-.844.564-1.097.912-.116.16-.224.357-.303.615h2.87a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1c0-1.181.3-2.082.815-2.791.497-.683 1.141-1.111 1.654-1.432l.235-.146c.433-.268.722-.447.949-.683.201-.21.346-.464.346-.948 0-.26-.166-.543-.566-.676-.389-.13-1.051-.11-1.834.476a1 1 0 1 1-1.2-1.6c1.217-.912 2.555-1.144 3.666-.773z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a h3 --> */}
                      <li className='px-1 pt-[3px] group'>
                        <button className='ql-header' value='3'>
                          <svg
                            className='w-5 h-5 group-hover:text-blue-600'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='currentColor'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='currentColor'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M4 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM19.461 11.217c-.347-.164-.873-.196-1.454.145a1 1 0 0 1-1.014-1.724c1.12-.658 2.344-.69 3.321-.23C21.284 9.866 22 10.818 22 12a3 3 0 0 1-3 3 1 1 0 0 1 0-2 1 1 0 0 0 1-1c0-.318-.184-.615-.539-.783z'
                                  fill='currentColor'
                                  data-original='#000000'
                                ></path>
                                <path
                                  d='M18 14a1 1 0 0 1 1-1 3 3 0 0 1 3 3c0 1.285-.723 2.397-1.84 2.9-1.134.51-2.518.332-3.76-.6a1 1 0 1 1 1.2-1.6c.758.569 1.374.54 1.74.376.383-.173.66-.561.66-1.076a1 1 0 0 0-1-1 1 1 0 0 1-1-1z'
                                  fill='currentColor'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                    {/* <!-- block 3  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add a sub --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-script' value='sub'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 16 16'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                fill='#444444'
                                d='M16 15v1h-4v-1s3.3-1.6 2.6-3.2c-.5-1.1-2-.2-2-.2l-.5-.9s1.9-1.4 3.1-.2c2.4 2.3-1.4 4.5-1.4 4.5H16zM12 3H8.6L6 6 3.4 3H0l4.3 5L0 13h3.4L6 10l2.6 3H12L7.7 8z'
                                data-original='#444444'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add a supper --> */}
                      <li className='px-2 pt-[1px]'>
                        <button className='ql-script' value='super'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 491.882 491.882'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                d='m211.357 311.56 131.922 148.188h-81.178l-92.38-108.379-90.286 108.379H0L130.861 311.56 6.301 171.714h80.135l86.794 101.391 87.47-101.391h76.639L211.357 311.56zm180.379-100.2 54.373-40.033c18.542-12.741 30.724-24.56 36.563-35.468 5.834-10.902 8.748-22.618 8.748-35.172 0-20.508-6.856-37.061-20.552-49.656-13.707-12.602-31.729-18.897-54.054-18.897-21.527 0-38.745 6.375-51.637 19.115-12.919 12.747-19.367 31.957-19.367 57.651h41.523c0-15.33 2.719-25.928 8.145-31.806 5.426-5.879 12.861-8.819 22.331-8.819 9.457 0 16.929 2.991 22.473 8.964 5.521 5.967 8.275 13.388 8.275 22.257 0 8.854-2.554 16.866-7.685 24.039s-19.387 19.272-42.782 36.298c-20.014 14.635-47.097 28.422-55.218 41.364l.407 48.093h148.603v-37.93H391.736z'
                                fill='#000000'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                    {/* <!-- block 4  --> */}
                    <ul className='inline-flex border border-#f2f2f2 rounded-md bg-white'>
                      {/* <!-- Add align left --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-align' data-value='left'>
                          <svg
                            className='w-4 h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add align center --> */}
                      <li className='px-2 pt-[2px] border-r border-r-#f2f2f2'>
                        <button className='ql-align' value='center'>
                          <svg
                            className='w-3 h-3'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <path
                                fill='#000000'
                                d='M16 11c.28 0 .515.1.702.298A.924.924 0 0 1 17 12a.96.96 0 0 1-.298.702A.924.924 0 0 1 16 13H8a.96.96 0 0 1-.702-.298A.96.96 0 0 1 7 12c0-.28.1-.515.298-.702A.96.96 0 0 1 8 11zm4-6c.28 0 .515.1.702.298A.924.924 0 0 1 21 6a.96.96 0 0 1-.298.702A.924.924 0 0 1 20 7H4a.96.96 0 0 1-.702-.298A.96.96 0 0 1 3 6c0-.28.1-.515.298-.702A.96.96 0 0 1 4 5zm-2 12c.28 0 .515.1.702.298A.924.924 0 0 1 19 18a.96.96 0 0 1-.298.702A.924.924 0 0 1 18 19H6a.96.96 0 0 1-.702-.298A.96.96 0 0 1 5 18c0-.28.1-.515.298-.702A.96.96 0 0 1 6 17z'
                                data-original='#000000'
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {/* <!-- Add align right --> */}
                      <li className='px-2 pt-[2px]'>
                        <button className='ql-align' value='right'>
                          <svg
                            className='w-3 h-3 scale-x-[-1]'
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            x='0'
                            y='0'
                            viewBox='0 0 24 24'
                            style={
                              { enableBackground: 'new 0 0 512 512' } as any
                            }
                            xmlSpace='preserve'
                          >
                            <g>
                              <g
                                fill='#000'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                              >
                                <path
                                  d='M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z'
                                  fill='#000000'
                                  data-original='#000000'
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div id='editor3'></div>
                </div>
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
