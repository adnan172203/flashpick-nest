import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const DashboardHeader = () => {
  return (
    <>
      <header className='bg-white col-start-2 row-start-1 px-5 md:px-10 md:pr-70px z-[998]'>
        <div className='flex justify-between items-center gap-30px w-full h-full'>
          {/* <!-- search bar  --> */}
          <div className='flex-auto max-w-[328px] md:max-w-[828px]'>
            <form>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:pl-5 sm:pointer-events-none'>
                  <svg
                    className='w-5 h-5 text-#17201D cursor-pointer'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='none'
                  >
                    <path
                      d='M9.58334 17.5001C13.9556 17.5001 17.5 13.9557 17.5 9.58341C17.5 5.21116 13.9556 1.66675 9.58334 1.66675C5.21108 1.66675 1.66667 5.21116 1.66667 9.58341C1.66667 13.9557 5.21108 17.5001 9.58334 17.5001Z'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                    <path
                      d='M18.3333 18.3334L16.6667 16.6667'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  className='hidden sm:block w-full p-5 pl-14 font-light text-sm leading-4 text-gray-900 rounded-lg bg-#F2F2F2 focus:border-none border-none outline-none focus:ring-#5B9982 focus:ring-1 max-[640px]:placeholder:text-xs'
                  placeholder='What are you looking for...'
                  required
                />
                <button className='hidden sm:block absolute right-[7px] top-2/4 -translate-y-2/4 p-[11px] md:px-30px font-medium text-xs md:text-sm leading-14px text-white bg-#5B9982 hover:bg-#17201D rounded'>
                  Search
                </button>
              </div>
            </form>
          </div>
          {/* <!-- user profile  --> */}
          <ul className='flex gap-5 sm:gap-25px items-center'>
            {/* <!-- notification  --> */}
            <li>
              <div className='group flex flex-col gap-[5px] justify-center items-center cursor-pointer relative'>
                <svg
                  className='w-[23px] h-[23px] text-#79788E group-hover:text-#5B9982'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <g clip-path='url(#clip0_356_12446)'>
                    <path
                      d='M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17'
                      stroke='#79788E'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_356_12446'>
                      <rect width='24' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <div className='w-[26px] h-[26px] absolute top-[-20px] right-[-15px]'>
                  <div className='w-5 h-5 left-0 top-2 absolute bg-black rounded-full'>
                    <div className='absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-center text-white text-[12px] font-bold leading-3 z-10'>
                      2
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- user profile  --> */}
            <li className='relative flex gap-10px sm:gap-14px user-profile-pic'>
              <img
                src='../../../../images/admin-dashboard/user.png'
                className='min-w-[44px] h-[44px] rounded-full cursor-pointer'
                alt=''
              />
              <div>
                <h2 className='font-bold text-sm leading-14px text-#79788E capitalize'>
                  Jennifer Loren
                </h2>
                <h3 className='font-medium text-[13px] leading-14px text-#A2A1BB mt-2'>
                  Admin
                </h3>
              </div>
              {/* <!-- user profile dropdown  --> */}
              <div className='user-profile-dropdown invisible opacity-0 bg-white shadow-userProfile absolute bottom-5 sm:bottom-0 -left-20 md:-left-70px translate-y-[calc(100%+39px)] w-max rounded transition-all duration-300'>
                <div className='flex gap-14px px-5 sm:px-30px py-5 border-b border-b-#F2F2F2'>
                  <img
                    src='../../../../images/admin-dashboard/user.png'
                    className='min-w-[44px] h-[44px] rounded-full'
                    alt=''
                  />
                  <div>
                    <h2 className='font-bold text-sm leading-14px text-#79788E capitalize'>
                      Jennifer Loren
                    </h2>
                    <a
                      href='#'
                      className='font-medium text-[13px] leading-14px text-#A2A1BB mt-2'
                    >
                      jennifer321@gmail.com
                    </a>
                  </div>
                </div>
                <ul className='p-5 sm:p-30px sm:pt-5 space-y-15px'>
                  <li>
                    <a
                      href='user-profile.html'
                      className='inline-flex items-center gap-[9px]'
                    >
                      <svg
                        className='w-6 h-6 text-#847DD2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <g clip-path='url(#clip0_425_5753)'>
                          <path
                            d='M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C14.267 15 14.529 15.026 14.781 15.076'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M19 16L17 19H21L19 22'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_425_5753'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className='font-medium text-sm leading-14px text-#17201D hover:text-#847DD2'>
                        Profile
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='inline-flex items-center gap-[9px]'>
                      <svg
                        className='w-6 h-6 text-#847DD2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <g clip-path='url(#clip0_425_5745)'>
                          <path
                            d='M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M9 12H21L18 9'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M18 15L21 12'
                            stroke='currentColor'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_425_5745'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className='font-medium text-sm leading-14px text-#17201D hover:text-#847DD2'>
                        Logout
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>

      <Sidebar />
    </>
  );
};

export default DashboardHeader;
