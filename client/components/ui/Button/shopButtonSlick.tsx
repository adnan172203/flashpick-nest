import React from 'react';

const ShopNowButton = () => {
  return (
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
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <path
          d='M2.625 9H15.2475'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
    </a>
  );
};

export default ShopNowButton;
