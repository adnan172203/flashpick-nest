import React from 'react';

const Navtop = () => {
  return (
    <div>
      <section className='relative bg-#17201D h-12 px-5 xl:px-50px hidden md:block z-[999]'>
        <div className='flex justify-between items-center h-full gap-5'>
          <div className='flex items-center gap-[6px]'>
            <img
              src='../images/icons/icon-flash-sale-1.png'
              className='animate-pulse'
              alt=''
            />
            <h2 className='text-[13px] leading-[14px] text-#C3C7C5'>
              <span className='font-semibold'>Black Friday</span> Offer:
              <span className='text-white'>20-30%</span> off on selected
              products
            </h2>
          </div>
          <ul className='flex items-center text-[13px] leading-[14px]'>
            <li className='hidden lg:block pr-30px text-#C3C7C5 hover:text-white after:absolute after:w-[1px] after:h-[18px] after:bg-#515453 after:right-0 after:top-2/4 after:-translate-y-2/4 relative'>
              <a href='track-my-order.html' className='inline-block'>
                Track My Order
              </a>
            </li>
            <li className='hidden lg:block px-30px text-#C3C7C5 hover:text-white after:absolute after:w-[1px] after:h-[18px] after:bg-#515453 after:right-0 after:top-2/4 after:-translate-y-2/4 relative'>
              <a href='#' className='inline-block'>
                Offers
              </a>
            </li>
            <li className='hidden lg:block px-30px text-#C3C7C5 hover:text-white after:absolute after:w-[1px] after:h-[18px] after:bg-#515453 after:right-0 after:top-2/4 after:-translate-y-2/4 relative'>
              <a href='faq.html' className='inline-block'>
                FAQ
              </a>
            </li>
            <li className='group/currency relative px-30px text-#C3C7C5 hover:text-white'>
              <div className='flex justify-between items-center gap-x-10px'>
                <svg
                  className='w-[18px] h-[18px] text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <circle cx='9' cy='9' r='7.5' stroke='currentColor'></circle>
                  <path
                    d='M9 4.5V13.5'
                    stroke='currentColor'
                    strokeLinecap='round'
                  ></path>
                  <path
                    d='M11.25 7.125C11.25 6.08947 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.08947 6.75 7.125C6.75 8.16053 7.75736 9 9 9C10.2426 9 11.25 9.83947 11.25 10.875C11.25 11.9105 10.2426 12.75 9 12.75C7.75736 12.75 6.75 11.9105 6.75 10.875'
                    stroke='currentColor'
                    strokeLinecap='round'
                  ></path>
                </svg>
                <span className='text-white'>USD</span>
                <svg
                  className='w-2 h-2 text-#C3C7C5 cursor-pointer hover:text-#5B9982'
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
              <div className='invisible group-hover/currency:visible opacity-0 group-hover/currency:opacity-100 absolute w-full bottom-0 translate-y-[110%] group-hover/currency:translate-y-full left-0 transition-all duration-300'>
                <ul className='space-y-10px p-10px border bg-white rounded text-#17201D shadow-2xl z-[9999] mt-5'>
                  <li className='hover:bg-#FAFAFA p-10px cursor-pointer'>
                    EUR
                  </li>
                  <li className='hover:bg-#FAFAFA p-10px cursor-pointer text-#5B9982'>
                    USD
                  </li>
                </ul>
              </div>
            </li>
            <li className='group/language relative text-#C3C7C5 hover:text-white'>
              <div className='flex justify-between items-center gap-x-10px'>
                <svg
                  className='w-[18px] h-[18px] text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M1.5 9H16.5M12 9C12 9.98491 11.9224 10.9602 11.7716 11.8701C11.6209 12.7801 11.3999 13.6069 11.1213 14.3033C10.8427 14.9997 10.512 15.5522 10.148 15.9291C9.78407 16.306 9.39396 16.5 9 16.5C8.60603 16.5 8.21593 16.306 7.85195 15.9291C7.48797 15.5522 7.15725 14.9997 6.87868 14.3033C6.6001 13.6069 6.37912 12.7801 6.22836 11.8701C6.0776 10.9602 6 9.98491 6 9C6 8.01508 6.0776 7.03981 6.22836 6.12987C6.37912 5.21993 6.6001 4.39314 6.87868 3.6967C7.15725 3.00026 7.48797 2.44781 7.85195 2.0709C8.21593 1.69399 8.60603 1.5 9 1.5C9.39397 1.5 9.78407 1.69399 10.148 2.0709C10.512 2.44781 10.8427 3.00026 11.1213 3.6967C11.3999 4.39314 11.6209 5.21993 11.7716 6.12987C11.9224 7.03982 12 8.01508 12 9Z'
                    stroke='currentColor'
                    strokeLinecap='round'
                  ></path>
                  <path
                    d='M16.5 9C16.5 9.98491 16.306 10.9602 15.9291 11.8701C15.5522 12.7801 14.9997 13.6069 14.3033 14.3033C13.6069 14.9997 12.7801 15.5522 11.8701 15.9291C10.9602 16.306 9.98491 16.5 9 16.5C8.01508 16.5 7.03982 16.306 6.12987 15.9291C5.21993 15.5522 4.39314 14.9997 3.6967 14.3033C3.00026 13.6069 2.44781 12.7801 2.0709 11.8701C1.69399 10.9602 1.5 9.98491 1.5 9C1.5 8.01508 1.69399 7.03981 2.0709 6.12987C2.44781 5.21993 3.00026 4.39314 3.6967 3.6967C4.39314 3.00026 5.21993 2.44781 6.12987 2.0709C7.03982 1.69399 8.01509 1.5 9 1.5C9.98491 1.5 10.9602 1.69399 11.8701 2.0709C12.7801 2.44781 13.6069 3.00026 14.3033 3.6967C14.9997 4.39314 15.5522 5.21993 15.9291 6.12987C16.306 7.03982 16.5 8.01509 16.5 9L16.5 9Z'
                    stroke='currentColor'
                  ></path>
                </svg>
                <span className='text-white'>ENG</span>
                <svg
                  className='w-2 h-2 text-#C3C7C5 cursor-pointer hover:text-#5B9982'
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
              <div className='invisible group-hover/language:visible opacity-0 group-hover/language:opacity-100 absolute w-full bottom-0 translate-y-[110%] group-hover/language:translate-y-full left-0 transition-all duration-300'>
                <ul className='space-y-10px p-10px border bg-white rounded text-#17201D shadow-2xl z-[9999] mt-5'>
                  <li className='hover:bg-#FAFAFA p-10px cursor-pointer'>
                    বাংলা
                  </li>
                  <li className='hover:bg-#FAFAFA p-10px cursor-pointer text-#5B9982'>
                    ENG
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navtop;
