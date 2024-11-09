import React from 'react';

const ShopButton = ({ btnText }: { btnText: string }) => {
  return (
    <>
      <a
        href='shop.html'
        className='btn-lg-dark mt-10px md:mt-5 xl:mt-25px inline-flex'
      >
        {btnText}
        <svg
          className='w-18px h-18px'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 18 18'
          fill='none'
        >
          <path
            d='M10.8223 4.44751L15.3748 9.00001L10.8223 13.5525'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
          <path
            d='M2.625 9H15.2475'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-miterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </a>
    </>
  );
};

export default ShopButton;
