import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <section className='bg-#222B27 col-start-1 row-span-3 z-[999]'>
      <div className='sticky top-0'>
        {/* <!-- logo  --> */}
        <div className='lg:px-30px pt-30px'>
          <div className='pb-25px border-b border-b-#454360'>
            <a
              className='flex justify-center lg:justify-start items-start'
              href='index.html'
            >
              <img
                src='./assets/logo-icon.svg'
                className='min-w-[22px]'
                alt=''
              />
              <span className='hidden lg:block font-bold text-2xl leading-26px text-white -mt-[3px]'>
                lashpick
              </span>
            </a>
          </div>
        </div>
        {/* <!-- nav links  --> */}
        <div className='mt-7 lg:px-5'>
          <ul className='space-y-10px'>
            {/* <!-- Dashboard  --> */}
            <li>
              <a
                href='admin-dashboard.html'
                className='flex justify-center lg:justify-start items-center gap-3 text-white bg-#847DD2 p-3 lg:rounded'
              >
                <svg
                  className='w-5 min-w-[20px] h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <g clip-path='url(#clip0_356_12440)'>
                    <path
                      d='M3.33337 4.16671C3.33337 3.94569 3.42117 3.73373 3.57745 3.57745C3.73373 3.42117 3.94569 3.33337 4.16671 3.33337H7.50004C7.72105 3.33337 7.93302 3.42117 8.0893 3.57745C8.24558 3.73373 8.33337 3.94569 8.33337 4.16671V7.50004C8.33337 7.72105 8.24558 7.93302 8.0893 8.0893C7.93302 8.24558 7.72105 8.33337 7.50004 8.33337H4.16671C3.94569 8.33337 3.73373 8.24558 3.57745 8.0893C3.42117 7.93302 3.33337 7.72105 3.33337 7.50004V4.16671Z'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M11.6666 4.16671C11.6666 3.94569 11.7544 3.73373 11.9107 3.57745C12.067 3.42117 12.2789 3.33337 12.5 3.33337H15.8333C16.0543 3.33337 16.2663 3.42117 16.4225 3.57745C16.5788 3.73373 16.6666 3.94569 16.6666 4.16671V7.50004C16.6666 7.72105 16.5788 7.93302 16.4225 8.0893C16.2663 8.24558 16.0543 8.33337 15.8333 8.33337H12.5C12.2789 8.33337 12.067 8.24558 11.9107 8.0893C11.7544 7.93302 11.6666 7.72105 11.6666 7.50004V4.16671Z'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M3.33337 12.5C3.33337 12.2789 3.42117 12.067 3.57745 11.9107C3.73373 11.7544 3.94569 11.6666 4.16671 11.6666H7.50004C7.72105 11.6666 7.93302 11.7544 8.0893 11.9107C8.24558 12.067 8.33337 12.2789 8.33337 12.5V15.8333C8.33337 16.0543 8.24558 16.2663 8.0893 16.4225C7.93302 16.5788 7.72105 16.6666 7.50004 16.6666H4.16671C3.94569 16.6666 3.73373 16.5788 3.57745 16.4225C3.42117 16.2663 3.33337 16.0543 3.33337 15.8333V12.5Z'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M11.6666 12.5C11.6666 12.2789 11.7544 12.067 11.9107 11.9107C12.067 11.7544 12.2789 11.6666 12.5 11.6666H15.8333C16.0543 11.6666 16.2663 11.7544 16.4225 11.9107C16.5788 12.067 16.6666 12.2789 16.6666 12.5V15.8333C16.6666 16.0543 16.5788 16.2663 16.4225 16.4225C16.2663 16.5788 16.0543 16.6666 15.8333 16.6666H12.5C12.2789 16.6666 12.067 16.5788 11.9107 16.4225C11.7544 16.2663 11.6666 16.0543 11.6666 15.8333V12.5Z'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_356_12440'>
                      <rect width='20' height='20' fill='currentColor' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='hidden lg:block leading-4 tracking-[0.16px]'>
                  Dashboard
                </span>
              </a>
            </li>
            {/* <!-- Products  --> */}
            <li className='group relative bg-#222B27 nav-links-sidebar'>
              <div className='flex justify-between items-center gap-3 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-3 lg:rounded cursor-pointer'>
                <div className='flex items-center gap-3 mx-auto lg:mx-0'>
                  <svg
                    className='w-6 min-w-[24px] h-6'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <g clip-path='url(#clip0_356_12434)'>
                      <path
                        d='M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M12 12L20 7.5'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M12 12V21'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M12 12L4 7.5'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_356_12434'>
                        <rect width='24' height='24' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className='hidden lg:block xl:leading-4 tracking-[0.16px]'>
                    Products
                  </span>
                </div>
                {/* <!-- arrow  --> */}
                <svg
                  className='arrow-navlinks hidden lg:block w-4 min-w-[16px] h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <g clip-path='url(#clip0_356_11044)'>
                    <path
                      d='M7.99999 8.78132L11.3 5.48132L12.2427 6.42399L7.99999 10.6667L3.75732 6.42399L4.69999 5.48132L7.99999 8.78132Z'
                      fill='currentColor'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_356_11044'>
                      <rect width='16' height='16' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* <ul className='nav-links-list-sidebar absolute lg:static max-[1023px]:top-0 max-[1023px]:right-px max-[1023px]:translate-x-full lg:space-y-5px lg:max-h-0 transition-all duration-300 invisible max-[1023px]:w-max opacity-0 bg-#222B27 z-10'> */}
              <ul className='nav-links-list-sidebar absolute lg:static max-[1023px]:top-0 max-[1023px]:right-px max-[1023px]:translate-x-full lg:space-y-5px lg:max-h-[1000px] transition-all duration-300  max-[1023px]:w-max opacity-100 bg-#222B27 z-10'>
                {/* <!-- Products List  --> */}
                <li>
                  <a
                    href='product-list.html'
                    className='group flex items-center gap-3 lg:gap-5 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-14px lg:pl-22px lg:rounded'
                  >
                    <span className='min-w-[3px] h-[3px] lg:min-w-[5px] lg:h-5px bg-#BCBBC7 group-hover:bg-white rounded-full inline-block'></span>
                    <span className='text-xs lg:text-base xl:leading-4 tracking-[0.16px]'>
                      Products List
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    href='/admin-dashboard/products/create'
                    className='group flex items-center gap-3 lg:gap-5 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-14px lg:pl-22px lg:rounded'
                  >
                    <span className='min-w-[3px] h-[3px] lg:min-w-[5px] lg:h-5px bg-#BCBBC7 group-hover:bg-white rounded-full inline-block'></span>
                    <span className='text-xs lg:text-base xl:leading-4 tracking-[0.16px]'>
                      Add New Product
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* <!-- Orders  --> */}
            <li className='group relative bg-#222B27 nav-links-sidebar'>
              <div className='flex justify-between items-center gap-3 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-3 lg:rounded cursor-pointer'>
                <div className='flex items-center gap-3 mx-auto lg:mx-0'>
                  <svg
                    className='w-6 min-w-[24px] h-6'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <g clip-path='url(#clip0_356_12566)'>
                      <path
                        d='M3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6C21 6.53043 20.7893 7.03914 20.4142 7.41421C20.0391 7.78929 19.5304 8 19 8H5C4.46957 8 3.96086 7.78929 3.58579 7.41421C3.21071 7.03914 3 6.53043 3 6Z'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M5 8V18C5 18.5304 5.21071 19.0391 5.58579 19.4142C5.96086 19.7893 6.46957 20 7 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V8'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M10 12H14'
                        stroke='currentColor'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_356_12566'>
                        <rect width='24' height='24' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className='hidden lg:block xl:leading-4 tracking-[0.16px]'>
                    Orders
                  </span>
                </div>
                {/* <!-- arrow  --> */}
                <svg
                  className='arrow-navlinks hidden lg:block w-4 min-w-[16px] h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <g clip-path='url(#clip0_356_110441)'>
                    <path
                      d='M7.99999 8.78132L11.3 5.48132L12.2427 6.42399L7.99999 10.6667L3.75732 6.42399L4.69999 5.48132L7.99999 8.78132Z'
                      fill='currentColor'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_356_110441'>
                      <rect width='16' height='16' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <ul className='nav-links-list-sidebar absolute lg:static max-[1023px]:top-0 max-[1023px]:right-px max-[1023px]:translate-x-full lg:space-y-5px lg:max-h-0 transition-all duration-300 invisible max-[1023px]:w-max opacity-0 bg-#222B27 z-10'>
                {/* <!-- Order List  --> */}
                <li>
                  <a
                    href='order-list.html'
                    className='group flex items-center gap-3 lg:gap-5 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-14px lg:pl-22px lg:rounded'
                  >
                    <span className='min-w-[3px] h-[3px] lg:min-w-[5px] lg:h-5px bg-#BCBBC7 group-hover:bg-white rounded-full inline-block'></span>
                    <span className='text-xs lg:text-base xl:leading-4 tracking-[0.16px]'>
                      Order List
                    </span>
                  </a>
                </li>
                {/* <!-- Order Details  --> */}
                <li>
                  <a
                    href='order-details.html'
                    className='group flex items-center gap-3 lg:gap-5 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-14px lg:pl-22px lg:rounded'
                  >
                    <span className='min-w-[3px] h-[3px] lg:min-w-[5px] lg:h-5px bg-#BCBBC7 group-hover:bg-white rounded-full inline-block'></span>
                    <span className='text-xs lg:text-base xl:leading-4 tracking-[0.16px]'>
                      Order Details
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            {/* <!-- Users  --> */}
            <li>
              <a
                href='users.html'
                className='flex justify-center lg:justify-start items-center gap-3 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-3 lg:rounded'
              >
                <svg
                  className='w-6 min-w-[24px] h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <g clip-path='url(#clip0_356_12557)'>
                    <path
                      d='M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_356_12557'>
                      <rect width='24' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='hidden lg:block leading-4 tracking-[0.16px]'>
                  Users
                </span>
              </a>
            </li>
            {/* <!-- Categories  --> */}
            <li>
              <a
                href='add-category.html'
                className='flex justify-center lg:justify-start items-center gap-3 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-3 lg:rounded'
              >
                <svg
                  className='w-6 min-w-[24px] h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <g clip-path='url(#clip0_356_12454)'>
                    <path
                      d='M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M4 12H20'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M12 4V20'
                      stroke='currentColor'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_356_12454'>
                      <rect width='24' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='hidden lg:block leading-4 tracking-[0.16px]'>
                  Categories
                </span>
              </a>
            </li>
            {/* <!-- Profile  --> */}
            <li>
              <a
                href='user-profile.html'
                className='flex justify-center lg:justify-start items-center gap-3 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-3 lg:rounded'
              >
                <svg
                  className='w-5 min-w-[20px] h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <g clip-path='url(#clip0_425_57531)'>
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
                    <clipPath id='clip0_425_57531'>
                      <rect width='24' height='24' fill='currentColor' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='hidden lg:block leading-4 tracking-[0.16px]'>
                  Profile
                </span>
              </a>
            </li>
            {/* <!-- Logout  --> */}
            <li>
              <div className='flex justify-center lg:justify-start items-center gap-3 text-#BCBBC7 hover:text-white hover:bg-#847DD2 p-3 lg:rounded cursor-pointer'>
                <svg
                  className='w-6 min-w-[24px] h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <g clip-path='url(#clip0_356_12561)'>
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
                    <clipPath id='clip0_356_12561'>
                      <rect width='24' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='hidden lg:block leading-4 tracking-[0.16px]'>
                  Logout
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
