import React from 'react';
import ConsumerProduct from './ConsumerProduct';
import WintersProduct from './WintersProduct';

const FeaturedProduct = () => {
  return (
    <section className='pt-15px pb-5 px-10px md:p-10 xl:py-50px xl:px-60px bg-#FAFAFA'>
      <div className='w-full flex flex-wrap xl:flex-nowrap justify-between gap-10'>
        {/* <!-- productSlider-1  --> */}
        <ConsumerProduct />
        {/* <!-- productSlider-2  --> */}
        <WintersProduct />
      </div>
    </section>
  );
};

export default FeaturedProduct;
