import React from 'react';

const ConsumerProduct = () => {
  return (
    <>
      <div className='w-full xl:max-w-[49%]'>
        <div className='flex gap-5 items-center justify-between bg-white px-10px md:px-5 py-3 mb-4'>
          <h2 className='h2-title2 text-#17201D'>
            <span>Consumer</span> Electronics
          </h2>
          {/* <!-- swiper nav btns  --> */}
          <div className='flex gap-5px items-center justify-between'>
            <button className='relative prev-productSlider-1 text-#17201D hover:text-white hover:bg-#17201D rounded-full w-7 h-7'>
              <svg
                className='w-4 h-4 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 12 12'
                fill='none'
              >
                <path
                  d='M4.78503 2.96497L1.75003 5.99997L4.78503 9.03497'
                  stroke='currentColor'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
                <path
                  d='M10.25 6L1.835 6'
                  stroke='currentColor'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </button>

            <button className='relative next-productSlider-1 text-#17201D hover:text-white hover:bg-#17201D rounded-full w-7 h-7'>
              <svg
                className='w-4 h-4 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 12 12'
                fill='none'
              >
                <path
                  d='M7.21497 2.96497L10.25 5.99997L7.21497 9.03497'
                  stroke='currentColor'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
                <path
                  d='M1.75 6L10.165 6'
                  stroke='currentColor'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className='px-10px md:px-0'>
          <div className='swiper productSlider productSlider-1'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                {/* <!-- product card type 1 , product name, cardProduct --> */}
                <div className='group/product card-container'>
                  {/* <!-- badge  --> */}
                  <span className='badge-sale'>sale</span>
                  {/* <!-- product image, category, title  --> */}
                  <div className='card-block-1 group-hover/product:border-#F2F2F2'>
                    {/* <!-- image  --> */}
                    <div className='group-hover/product:hidden card-image-t1'>
                      <img src='../../../images/products/01.png' alt='' />
                    </div>
                    {/* <!-- images slider  --> */}
                    <div className='hidden group-hover/product:block'>
                      <div className='swiper productImageSlider productImageSlider-cardProduct'>
                        {/* <!-- slider prev btn --> */}
                        <button className='card-image-slider-prev group-hover/product:block prev-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M4.78503 2.96497L1.75003 5.99997L4.78503 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M10.25 6L1.835 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- slider prev btn --> */}

                        <div className='swiper-wrapper'>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/02.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/03.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/03.png' alt='' />
                          </div>
                        </div>

                        {/* <!-- slider next btn  --> */}

                        {/* <!-- pagination  --> */}

                        {/* <!-- slider next btn  --> */}
                        <button className='card-image-slider-next group-hover/product:block next-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M7.21497 2.96497L10.25 5.99997L7.21497 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M1.75 6L10.165 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- pagination  --> */}
                        <div className='custom-swiper-pagination-cardProduct card-image-slider-pagination'></div>
                      </div>
                    </div>
                    <div className='card-space'>
                      {/* <!-- category  --> */}
                      <div className='card-category'>
                        <h3>Smart TV</h3>
                      </div>
                      {/* <!-- product title  --> */}
                      <h3 className='card-title'>
                        <a href='product-details-1.html'>
                          Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* <!-- pricing, rating, quickview, favourite, compare product  --> */}
                  <div className='card-block-2 group-hover/product:border-transparent'>
                    {/* <!-- pricing and rating  --> */}
                    <div className='group-hover/product:hidden h-full flex flex-col justify-center'>
                      {/* <!-- rating  --> */}
                      <div className='card-rating'>
                        <svg
                          className='w-[68px] h-3'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 68 12'
                          fill='none'
                        >
                          <path
                            d='M11.6815 4.28914L7.99255 3.7248L6.33906 0.197544C6.21556 -0.065848 5.78406 -0.065848 5.66056 0.197544L4.00756 3.7248L0.318574 4.28914C0.0155746 4.33571 -0.105425 4.70475 0.107074 4.92258L2.78707 7.67368L2.15357 11.563C2.10307 11.8719 2.43257 12.1038 2.70507 11.952L6.00006 10.1283L9.29505 11.9525C9.56505 12.1028 9.89755 11.8754 9.84655 11.5635L9.21305 7.67418L11.893 4.92308C12.1055 4.70476 11.984 4.33571 11.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M25.6815 4.28914L21.9926 3.7248L20.3391 0.197544C20.2156 -0.065848 19.7841 -0.065848 19.6606 0.197544L18.0076 3.7248L14.3186 4.28914C14.0156 4.33571 13.8946 4.70475 14.1071 4.92258L16.7871 7.67368L16.1536 11.563C16.1031 11.8719 16.4326 12.1038 16.7051 11.952L20.0001 10.1283L23.295 11.9525C23.565 12.1028 23.8975 11.8754 23.8465 11.5635L23.2131 7.67418L25.893 4.92308C26.1055 4.70476 25.984 4.33571 25.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M39.6815 4.28914L35.9926 3.7248L34.3391 0.197544C34.2156 -0.065848 33.7841 -0.065848 33.6606 0.197544L32.0076 3.7248L28.3186 4.28914C28.0156 4.33571 27.8946 4.70475 28.1071 4.92258L30.7871 7.67368L30.1536 11.563C30.1031 11.8719 30.4326 12.1038 30.7051 11.952L34.0001 10.1283L37.295 11.9525C37.565 12.1028 37.8975 11.8754 37.8465 11.5635L37.2131 7.67418L39.893 4.92308C40.1055 4.70476 39.984 4.33571 39.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M53.6815 4.28914L49.9926 3.7248L48.3391 0.197544C48.2156 -0.065848 47.7841 -0.065848 47.6606 0.197544L46.0076 3.7248L42.3186 4.28914C42.0156 4.33571 41.8946 4.70475 42.1071 4.92258L44.7871 7.67368L44.1536 11.563C44.1031 11.8719 44.4326 12.1038 44.7051 11.952L48.0001 10.1283L51.295 11.9525C51.565 12.1028 51.8975 11.8754 51.8465 11.5635L51.2131 7.67418L53.893 4.92308C54.1055 4.70476 53.984 4.33571 53.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M67.6815 4.28914L63.9926 3.7248L62.3391 0.197544C62.2156 -0.065848 61.7841 -0.065848 61.6606 0.197544L60.0076 3.7248L56.3186 4.28914C56.0156 4.33571 55.8946 4.70475 56.1071 4.92258L58.7871 7.67368L58.1536 11.563C58.1031 11.8719 58.4326 12.1038 58.7051 11.952L62.0001 10.1283L65.295 11.9525C65.565 12.1028 65.8975 11.8754 65.8465 11.5635L65.2131 7.67418L67.893 4.92308C68.1055 4.70476 67.984 4.33571 67.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                        <span>(5.0)</span>
                      </div>
                      {/* <!-- pricing --> */}
                      <div className='flex items-end gap-1'>
                        {/* <!-- sale price  --> */}
                        <span className='card-price-sale'>$ 2036.00</span>
                        {/* <!-- price  --> */}
                        <span className='card-price-original'> $3000.00 </span>
                      </div>
                    </div>
                    {/* <!-- quickview, favourite, compare product  --> */}
                    <div className='group-hover/product:flex card-qfc'>
                      {/* <!-- quickview  --> */}
                      <div className='group/qfc card-qfc-wrapper open-quickview-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-q-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 17 17'
                          fill='none'
                        >
                          <path
                            d='M2.31968 10.8345C1.71764 10.0523 1.41663 9.66126 1.41663 8.50004C1.41663 7.33882 1.71764 6.94775 2.31968 6.16561C3.52177 4.60389 5.53779 2.83337 8.49996 2.83337C11.4621 2.83337 13.4782 4.60389 14.6802 6.16561C15.2823 6.94775 15.5833 7.33882 15.5833 8.50004C15.5833 9.66126 15.2823 10.0523 14.6802 10.8345C13.4782 12.3962 11.4621 14.1667 8.49996 14.1667C5.53779 14.1667 3.52177 12.3962 2.31968 10.8345Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                          <path
                            d='M10.625 8.5C10.625 9.67361 9.67361 10.625 8.5 10.625C7.32639 10.625 6.375 9.67361 6.375 8.5C6.375 7.32639 7.32639 6.375 8.5 6.375C9.67361 6.375 10.625 7.32639 10.625 8.5Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- favourite  --> */}
                      <div className='group/qfc card-qfc-wrapper'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-f-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4095)'>
                            <path
                              d='M14.7145 2.64647C12.9744 0.906815 10.1436 0.906815 8.40393 2.64647L7.99986 3.05031L7.59603 2.64647C5.85637 0.906579 3.02531 0.906579 1.28565 2.64647C-0.418688 4.35081 -0.429756 7.05236 1.25998 8.93072C2.80114 10.6433 7.34643 14.3432 7.53928 14.4998C7.6702 14.6063 7.82773 14.6581 7.98432 14.6581C7.9895 14.6581 7.99468 14.6581 7.99962 14.6578C8.16163 14.6654 8.32481 14.6098 8.45997 14.4998C8.65282 14.3432 13.1986 10.6433 14.7402 8.93048C16.4297 7.05236 16.4186 4.35081 14.7145 2.64647ZM13.69 7.98554C12.4884 9.32042 9.18546 12.0735 7.99962 13.0505C6.81379 12.0738 3.51155 9.32089 2.31018 7.98577C1.13142 6.67561 1.12035 4.80974 2.28452 3.64558C2.87908 3.05125 3.6599 2.75385 4.44072 2.75385C5.22154 2.75385 6.00236 3.05101 6.59693 3.64558L7.48512 4.53377C7.59085 4.6395 7.72412 4.7026 7.86399 4.72474C8.09099 4.77348 8.33729 4.71014 8.51389 4.53401L9.40256 3.64558C10.5919 2.45668 12.5265 2.45692 13.7152 3.64558C14.8794 4.80974 14.8683 6.67561 13.69 7.98554Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4095_59_116'>
                              <rect width='16' height='16' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- compare product  --> */}
                      <div className='group/qfc card-qfc-wrapper open-compare-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-c-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 12'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4156)'>
                            <path
                              d='M7.93702 7.41736L5.64597 9.67796V1.23474C5.64597 1.05415 5.57283 0.88096 5.44263 0.753266C5.31243 0.625571 5.13585 0.553833 4.95172 0.553833C4.76759 0.553833 4.591 0.625571 4.4608 0.753266C4.33061 0.88096 4.25746 1.05415 4.25746 1.23474V9.67796L1.96642 7.43098C1.90188 7.36716 1.82509 7.3165 1.74049 7.28193C1.65589 7.24736 1.56514 7.22957 1.47349 7.22957C1.38184 7.22957 1.2911 7.24736 1.2065 7.28193C1.1219 7.3165 1.04511 7.36716 0.980571 7.43098C0.851265 7.55855 0.778687 7.73113 0.778687 7.91102C0.778687 8.0909 0.851265 8.26348 0.980571 8.39105L4.45185 11.7956C4.51606 11.8614 4.59429 11.9126 4.68096 11.9454C4.76406 11.9814 4.85392 12 4.94478 12C5.03563 12 5.12549 11.9814 5.20859 11.9454C5.29618 11.9143 5.37479 11.8629 5.4377 11.7956L8.90898 8.39105C9.03829 8.26348 9.11086 8.0909 9.11086 7.91102C9.11086 7.73113 9.03829 7.55855 8.90898 7.43098C8.78103 7.30438 8.60756 7.23204 8.42583 7.2295C8.24411 7.22695 8.06861 7.2944 7.93702 7.41736Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M15.1712 4.16949L11.6999 0.764963C11.6357 0.699117 11.5575 0.647969 11.4708 0.615164C11.3018 0.547061 11.1122 0.547061 10.9432 0.615164C10.8556 0.646205 10.777 0.697606 10.7141 0.764963L7.24278 4.16949C7.11347 4.29707 7.04089 4.46964 7.04089 4.64953C7.04089 4.82941 7.11347 5.00199 7.24278 5.12957C7.30732 5.19339 7.3841 5.24404 7.46871 5.27861C7.55331 5.31318 7.64405 5.33098 7.7357 5.33098C7.82735 5.33098 7.91809 5.31318 8.0027 5.27861C8.0873 5.24404 8.16408 5.19339 8.22862 5.12957L10.5058 2.86896V11.3122C10.5058 11.4928 10.5789 11.666 10.7091 11.7937C10.8393 11.9214 11.0159 11.9931 11.2 11.9931C11.3842 11.9931 11.5608 11.9214 11.691 11.7937C11.8212 11.666 11.8943 11.4928 11.8943 11.3122V2.86896L14.1853 5.11595C14.2502 5.17906 14.3271 5.22898 14.4117 5.26287C14.4963 5.29675 14.5869 5.31393 14.6783 5.31341C14.7696 5.31393 14.8602 5.29675 14.9448 5.26287C15.0294 5.22898 15.1063 5.17906 15.1712 5.11595C15.2963 4.98898 15.3663 4.8193 15.3663 4.64272C15.3663 4.46613 15.2963 4.29646 15.1712 4.16949Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4156_60_117'>
                              <rect width='16' height='12' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <!-- add to cart button  --> */}
                  <div className='card-btn-wrapper group-hover/product:border-#F2F2F2'>
                    <button className='btn-product w-full'>
                      Add to cart
                      <svg
                        className='w-17px h-17px'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 17 17'
                        fill='none'
                      >
                        <path
                          d='M2.68757 8.52063C3.06806 6.61816 3.25831 5.66692 3.88693 5.05427C4.00312 4.94103 4.12881 4.83799 4.26263 4.74626C4.98668 4.25 5.95675 4.25 7.8969 4.25H9.10315C11.0433 4.25 12.0134 4.25 12.7374 4.74626C12.8712 4.83799 12.9969 4.94103 13.1131 5.05427C13.7417 5.66692 13.932 6.61816 14.3125 8.52063C14.8588 11.252 15.1319 12.6176 14.5031 13.5854C14.3893 13.7606 14.2564 13.9227 14.1069 14.0687C13.2813 14.875 11.8886 14.875 9.10315 14.875H7.8969C5.11147 14.875 3.71876 14.875 2.89314 14.0687C2.74365 13.9227 2.61077 13.7606 2.49692 13.5854C1.86816 12.6176 2.1413 11.252 2.68757 8.52063Z'
                          stroke='currentColor'
                          stroke-width='1.4'
                        ></path>
                        <ellipse
                          cx='10.625'
                          cy='7.43746'
                          rx='0.708333'
                          ry='0.708333'
                          fill='currentColor'
                        ></ellipse>
                        <circle
                          cx='6.37502'
                          cy='7.43746'
                          r='0.708333'
                          fill='currentColor'
                        ></circle>
                        <path
                          d='M6.375 4.24996V3.54163C6.375 2.36802 7.32639 1.41663 8.5 1.41663C9.6736 1.41663 10.625 2.36802 10.625 3.54163V4.24996'
                          stroke='currentColor'
                          stroke-width='1.4'
                          stroke-linecap='round'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='swiper-slide'>
                {/* <!-- product card type 1 , product name, cardProduct --> */}
                <div className='group/product card-container'>
                  {/* <!-- badge  --> */}
                  <span className='badge-new'>new</span>
                  {/* <!-- product image, category, title  --> */}
                  <div className='card-block-1 group-hover/product:border-#F2F2F2'>
                    {/* <!-- image  --> */}
                    <div className='group-hover/product:hidden card-image-t1'>
                      <img src='../../../images/products/04.png' alt='' />
                    </div>
                    {/* <!-- images slider  --> */}
                    <div className='hidden group-hover/product:block'>
                      <div className='swiper productImageSlider productImageSlider-cardProduct'>
                        {/* <!-- slider prev btn --> */}
                        <button className='card-image-slider-prev group-hover/product:block prev-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M4.78503 2.96497L1.75003 5.99997L4.78503 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M10.25 6L1.835 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- slider prev btn --> */}

                        <div className='swiper-wrapper'>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/05.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/06.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/04.png' alt='' />
                          </div>
                        </div>

                        {/* <!-- slider next btn  --> */}

                        {/* <!-- pagination  --> */}

                        {/* <!-- slider next btn  --> */}
                        <button className='card-image-slider-next group-hover/product:block next-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M7.21497 2.96497L10.25 5.99997L7.21497 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M1.75 6L10.165 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- pagination  --> */}
                        <div className='custom-swiper-pagination-cardProduct card-image-slider-pagination'></div>
                      </div>
                    </div>
                    <div className='card-space'>
                      {/* <!-- category  --> */}
                      <div className='card-category'>
                        <h3>Gaming</h3>
                      </div>
                      {/* <!-- product title  --> */}
                      <h3 className='card-title'>
                        <a href='product-details-1.html'>
                          Lomitech F310 - Wifi &amp; USB RGB Dual Gamepad - for
                          smooth experience
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* <!-- pricing, rating, quickview, favourite, compare product  --> */}
                  <div className='card-block-2 group-hover/product:border-transparent'>
                    {/* <!-- pricing and rating  --> */}
                    <div className='group-hover/product:hidden h-full flex flex-col justify-center'>
                      {/* <!-- rating  --> */}
                      <div className='card-rating'>
                        <svg
                          className='w-[68px] h-3'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 68 12'
                          fill='none'
                        >
                          <path
                            d='M11.6815 4.28914L7.99255 3.7248L6.33906 0.197544C6.21556 -0.065848 5.78406 -0.065848 5.66056 0.197544L4.00756 3.7248L0.318574 4.28914C0.0155746 4.33571 -0.105425 4.70475 0.107074 4.92258L2.78707 7.67368L2.15357 11.563C2.10307 11.8719 2.43257 12.1038 2.70507 11.952L6.00006 10.1283L9.29505 11.9525C9.56505 12.1028 9.89755 11.8754 9.84655 11.5635L9.21305 7.67418L11.893 4.92308C12.1055 4.70476 11.984 4.33571 11.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M25.6815 4.28914L21.9926 3.7248L20.3391 0.197544C20.2156 -0.065848 19.7841 -0.065848 19.6606 0.197544L18.0076 3.7248L14.3186 4.28914C14.0156 4.33571 13.8946 4.70475 14.1071 4.92258L16.7871 7.67368L16.1536 11.563C16.1031 11.8719 16.4326 12.1038 16.7051 11.952L20.0001 10.1283L23.295 11.9525C23.565 12.1028 23.8975 11.8754 23.8465 11.5635L23.2131 7.67418L25.893 4.92308C26.1055 4.70476 25.984 4.33571 25.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M39.6815 4.28914L35.9926 3.7248L34.3391 0.197544C34.2156 -0.065848 33.7841 -0.065848 33.6606 0.197544L32.0076 3.7248L28.3186 4.28914C28.0156 4.33571 27.8946 4.70475 28.1071 4.92258L30.7871 7.67368L30.1536 11.563C30.1031 11.8719 30.4326 12.1038 30.7051 11.952L34.0001 10.1283L37.295 11.9525C37.565 12.1028 37.8975 11.8754 37.8465 11.5635L37.2131 7.67418L39.893 4.92308C40.1055 4.70476 39.984 4.33571 39.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M53.6815 4.28914L49.9926 3.7248L48.3391 0.197544C48.2156 -0.065848 47.7841 -0.065848 47.6606 0.197544L46.0076 3.7248L42.3186 4.28914C42.0156 4.33571 41.8946 4.70475 42.1071 4.92258L44.7871 7.67368L44.1536 11.563C44.1031 11.8719 44.4326 12.1038 44.7051 11.952L48.0001 10.1283L51.295 11.9525C51.565 12.1028 51.8975 11.8754 51.8465 11.5635L51.2131 7.67418L53.893 4.92308C54.1055 4.70476 53.984 4.33571 53.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M67.6815 4.28914L63.9926 3.7248L62.3391 0.197544C62.2156 -0.065848 61.7841 -0.065848 61.6606 0.197544L60.0076 3.7248L56.3186 4.28914C56.0156 4.33571 55.8946 4.70475 56.1071 4.92258L58.7871 7.67368L58.1536 11.563C58.1031 11.8719 58.4326 12.1038 58.7051 11.952L62.0001 10.1283L65.295 11.9525C65.565 12.1028 65.8975 11.8754 65.8465 11.5635L65.2131 7.67418L67.893 4.92308C68.1055 4.70476 67.984 4.33571 67.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                        <span>(5.0)</span>
                      </div>
                      <div className='flex items-end gap-1'>
                        {/* <!-- sale price  --> */}
                        <span className='card-price-sale'>$ 36.00</span>
                        {/* <!-- price  --> */}
                        <span className='card-price-original'> $40.00 </span>
                      </div>
                    </div>
                    {/* <!-- quickview, favourite, compare product  --> */}
                    <div className='group-hover/product:flex card-qfc'>
                      {/* <!-- quickview  --> */}
                      <div className='group/qfc card-qfc-wrapper open-quickview-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-q-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 17 17'
                          fill='none'
                        >
                          <path
                            d='M2.31968 10.8345C1.71764 10.0523 1.41663 9.66126 1.41663 8.50004C1.41663 7.33882 1.71764 6.94775 2.31968 6.16561C3.52177 4.60389 5.53779 2.83337 8.49996 2.83337C11.4621 2.83337 13.4782 4.60389 14.6802 6.16561C15.2823 6.94775 15.5833 7.33882 15.5833 8.50004C15.5833 9.66126 15.2823 10.0523 14.6802 10.8345C13.4782 12.3962 11.4621 14.1667 8.49996 14.1667C5.53779 14.1667 3.52177 12.3962 2.31968 10.8345Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                          <path
                            d='M10.625 8.5C10.625 9.67361 9.67361 10.625 8.5 10.625C7.32639 10.625 6.375 9.67361 6.375 8.5C6.375 7.32639 7.32639 6.375 8.5 6.375C9.67361 6.375 10.625 7.32639 10.625 8.5Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- favourite  --> */}
                      <div className='group/qfc card-qfc-wrapper'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-f-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4095)'>
                            <path
                              d='M14.7145 2.64647C12.9744 0.906815 10.1436 0.906815 8.40393 2.64647L7.99986 3.05031L7.59603 2.64647C5.85637 0.906579 3.02531 0.906579 1.28565 2.64647C-0.418688 4.35081 -0.429756 7.05236 1.25998 8.93072C2.80114 10.6433 7.34643 14.3432 7.53928 14.4998C7.6702 14.6063 7.82773 14.6581 7.98432 14.6581C7.9895 14.6581 7.99468 14.6581 7.99962 14.6578C8.16163 14.6654 8.32481 14.6098 8.45997 14.4998C8.65282 14.3432 13.1986 10.6433 14.7402 8.93048C16.4297 7.05236 16.4186 4.35081 14.7145 2.64647ZM13.69 7.98554C12.4884 9.32042 9.18546 12.0735 7.99962 13.0505C6.81379 12.0738 3.51155 9.32089 2.31018 7.98577C1.13142 6.67561 1.12035 4.80974 2.28452 3.64558C2.87908 3.05125 3.6599 2.75385 4.44072 2.75385C5.22154 2.75385 6.00236 3.05101 6.59693 3.64558L7.48512 4.53377C7.59085 4.6395 7.72412 4.7026 7.86399 4.72474C8.09099 4.77348 8.33729 4.71014 8.51389 4.53401L9.40256 3.64558C10.5919 2.45668 12.5265 2.45692 13.7152 3.64558C14.8794 4.80974 14.8683 6.67561 13.69 7.98554Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4095_61_118'>
                              <rect width='16' height='16' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- compare product  --> */}
                      <div className='group/qfc card-qfc-wrapper open-compare-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-c-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 12'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4156)'>
                            <path
                              d='M7.93702 7.41736L5.64597 9.67796V1.23474C5.64597 1.05415 5.57283 0.88096 5.44263 0.753266C5.31243 0.625571 5.13585 0.553833 4.95172 0.553833C4.76759 0.553833 4.591 0.625571 4.4608 0.753266C4.33061 0.88096 4.25746 1.05415 4.25746 1.23474V9.67796L1.96642 7.43098C1.90188 7.36716 1.82509 7.3165 1.74049 7.28193C1.65589 7.24736 1.56514 7.22957 1.47349 7.22957C1.38184 7.22957 1.2911 7.24736 1.2065 7.28193C1.1219 7.3165 1.04511 7.36716 0.980571 7.43098C0.851265 7.55855 0.778687 7.73113 0.778687 7.91102C0.778687 8.0909 0.851265 8.26348 0.980571 8.39105L4.45185 11.7956C4.51606 11.8614 4.59429 11.9126 4.68096 11.9454C4.76406 11.9814 4.85392 12 4.94478 12C5.03563 12 5.12549 11.9814 5.20859 11.9454C5.29618 11.9143 5.37479 11.8629 5.4377 11.7956L8.90898 8.39105C9.03829 8.26348 9.11086 8.0909 9.11086 7.91102C9.11086 7.73113 9.03829 7.55855 8.90898 7.43098C8.78103 7.30438 8.60756 7.23204 8.42583 7.2295C8.24411 7.22695 8.06861 7.2944 7.93702 7.41736Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M15.1712 4.16949L11.6999 0.764963C11.6357 0.699117 11.5575 0.647969 11.4708 0.615164C11.3018 0.547061 11.1122 0.547061 10.9432 0.615164C10.8556 0.646205 10.777 0.697606 10.7141 0.764963L7.24278 4.16949C7.11347 4.29707 7.04089 4.46964 7.04089 4.64953C7.04089 4.82941 7.11347 5.00199 7.24278 5.12957C7.30732 5.19339 7.3841 5.24404 7.46871 5.27861C7.55331 5.31318 7.64405 5.33098 7.7357 5.33098C7.82735 5.33098 7.91809 5.31318 8.0027 5.27861C8.0873 5.24404 8.16408 5.19339 8.22862 5.12957L10.5058 2.86896V11.3122C10.5058 11.4928 10.5789 11.666 10.7091 11.7937C10.8393 11.9214 11.0159 11.9931 11.2 11.9931C11.3842 11.9931 11.5608 11.9214 11.691 11.7937C11.8212 11.666 11.8943 11.4928 11.8943 11.3122V2.86896L14.1853 5.11595C14.2502 5.17906 14.3271 5.22898 14.4117 5.26287C14.4963 5.29675 14.5869 5.31393 14.6783 5.31341C14.7696 5.31393 14.8602 5.29675 14.9448 5.26287C15.0294 5.22898 15.1063 5.17906 15.1712 5.11595C15.2963 4.98898 15.3663 4.8193 15.3663 4.64272C15.3663 4.46613 15.2963 4.29646 15.1712 4.16949Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4156_62_119'>
                              <rect width='16' height='12' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <!-- add to cart button  --> */}
                  <div className='card-btn-wrapper group-hover/product:border-#F2F2F2'>
                    <button className='btn-product w-full'>
                      Add to cart
                      <svg
                        className='w-17px h-17px'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 17 17'
                        fill='none'
                      >
                        <path
                          d='M2.68757 8.52063C3.06806 6.61816 3.25831 5.66692 3.88693 5.05427C4.00312 4.94103 4.12881 4.83799 4.26263 4.74626C4.98668 4.25 5.95675 4.25 7.8969 4.25H9.10315C11.0433 4.25 12.0134 4.25 12.7374 4.74626C12.8712 4.83799 12.9969 4.94103 13.1131 5.05427C13.7417 5.66692 13.932 6.61816 14.3125 8.52063C14.8588 11.252 15.1319 12.6176 14.5031 13.5854C14.3893 13.7606 14.2564 13.9227 14.1069 14.0687C13.2813 14.875 11.8886 14.875 9.10315 14.875H7.8969C5.11147 14.875 3.71876 14.875 2.89314 14.0687C2.74365 13.9227 2.61077 13.7606 2.49692 13.5854C1.86816 12.6176 2.1413 11.252 2.68757 8.52063Z'
                          stroke='currentColor'
                          stroke-width='1.4'
                        ></path>
                        <ellipse
                          cx='10.625'
                          cy='7.43746'
                          rx='0.708333'
                          ry='0.708333'
                          fill='currentColor'
                        ></ellipse>
                        <circle
                          cx='6.37502'
                          cy='7.43746'
                          r='0.708333'
                          fill='currentColor'
                        ></circle>
                        <path
                          d='M6.375 4.24996V3.54163C6.375 2.36802 7.32639 1.41663 8.5 1.41663C9.6736 1.41663 10.625 2.36802 10.625 3.54163V4.24996'
                          stroke='currentColor'
                          stroke-width='1.4'
                          stroke-linecap='round'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='swiper-slide'>
                {/* <!-- product card type 1 , product name, cardProduct --> */}
                <div className='group/product card-container'>
                  {/* <!-- badge  --> */}
                  <span className='badge-sale'>sale</span>
                  {/* <!-- product image, category, title  --> */}
                  <div className='card-block-1 group-hover/product:border-#F2F2F2'>
                    {/* <!-- image  --> */}
                    <div className='group-hover/product:hidden card-image-t1'>
                      <img src='../../../images/products/07.png' alt='' />
                    </div>
                    {/* <!-- images slider  --> */}
                    <div className='hidden group-hover/product:block'>
                      <div className='swiper productImageSlider productImageSlider-cardProduct'>
                        {/* <!-- slider prev btn --> */}
                        <button className='card-image-slider-prev group-hover/product:block prev-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M4.78503 2.96497L1.75003 5.99997L4.78503 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M10.25 6L1.835 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- slider prev btn --> */}

                        <div className='swiper-wrapper'>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/08.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/09.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/07.png' alt='' />
                          </div>
                        </div>

                        {/* <!-- slider next btn  --> */}

                        {/* <!-- pagination  --> */}

                        {/* <!-- slider next btn  --> */}
                        <button className='card-image-slider-next group-hover/product:block next-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M7.21497 2.96497L10.25 5.99997L7.21497 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M1.75 6L10.165 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- pagination  --> */}
                        <div className='custom-swiper-pagination-cardProduct card-image-slider-pagination'></div>
                      </div>
                    </div>
                    <div className='card-space'>
                      {/* <!-- category  --> */}
                      <div className='card-category'>
                        <h3>Headphone</h3>
                      </div>
                      {/* <!-- product title  --> */}
                      <h3 className='card-title'>
                        <a href='product-details-1.html'>
                          Fabitech Sonata MH90 Multi-Platform RGB Gaming Headset
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* <!-- pricing, rating, quickview, favourite, compare product  --> */}
                  <div className='card-block-2 group-hover/product:border-transparent'>
                    {/* <!-- pricing and rating  --> */}
                    <div className='group-hover/product:hidden h-full flex flex-col justify-center'>
                      {/* <!-- rating  --> */}
                      <div className='card-rating'>
                        <svg
                          className='w-[68px] h-3'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 68 12'
                          fill='none'
                        >
                          {/* <!-- pricing --> */}
                          <path
                            d='M11.6815 4.28914L7.99255 3.7248L6.33906 0.197544C6.21556 -0.065848 5.78406 -0.065848 5.66056 0.197544L4.00756 3.7248L0.318574 4.28914C0.0155746 4.33571 -0.105425 4.70475 0.107074 4.92258L2.78707 7.67368L2.15357 11.563C2.10307 11.8719 2.43257 12.1038 2.70507 11.952L6.00006 10.1283L9.29505 11.9525C9.56505 12.1028 9.89755 11.8754 9.84655 11.5635L9.21305 7.67418L11.893 4.92308C12.1055 4.70476 11.984 4.33571 11.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M25.6815 4.28914L21.9926 3.7248L20.3391 0.197544C20.2156 -0.065848 19.7841 -0.065848 19.6606 0.197544L18.0076 3.7248L14.3186 4.28914C14.0156 4.33571 13.8946 4.70475 14.1071 4.92258L16.7871 7.67368L16.1536 11.563C16.1031 11.8719 16.4326 12.1038 16.7051 11.952L20.0001 10.1283L23.295 11.9525C23.565 12.1028 23.8975 11.8754 23.8465 11.5635L23.2131 7.67418L25.893 4.92308C26.1055 4.70476 25.984 4.33571 25.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M39.6815 4.28914L35.9926 3.7248L34.3391 0.197544C34.2156 -0.065848 33.7841 -0.065848 33.6606 0.197544L32.0076 3.7248L28.3186 4.28914C28.0156 4.33571 27.8946 4.70475 28.1071 4.92258L30.7871 7.67368L30.1536 11.563C30.1031 11.8719 30.4326 12.1038 30.7051 11.952L34.0001 10.1283L37.295 11.9525C37.565 12.1028 37.8975 11.8754 37.8465 11.5635L37.2131 7.67418L39.893 4.92308C40.1055 4.70476 39.984 4.33571 39.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M53.6815 4.28914L49.9926 3.7248L48.3391 0.197544C48.2156 -0.065848 47.7841 -0.065848 47.6606 0.197544L46.0076 3.7248L42.3186 4.28914C42.0156 4.33571 41.8946 4.70475 42.1071 4.92258L44.7871 7.67368L44.1536 11.563C44.1031 11.8719 44.4326 12.1038 44.7051 11.952L48.0001 10.1283L51.295 11.9525C51.565 12.1028 51.8975 11.8754 51.8465 11.5635L51.2131 7.67418L53.893 4.92308C54.1055 4.70476 53.984 4.33571 53.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M67.6815 4.28914L63.9926 3.7248L62.3391 0.197544C62.2156 -0.065848 61.7841 -0.065848 61.6606 0.197544L60.0076 3.7248L56.3186 4.28914C56.0156 4.33571 55.8946 4.70475 56.1071 4.92258L58.7871 7.67368L58.1536 11.563C58.1031 11.8719 58.4326 12.1038 58.7051 11.952L62.0001 10.1283L65.295 11.9525C65.565 12.1028 65.8975 11.8754 65.8465 11.5635L65.2131 7.67418L67.893 4.92308C68.1055 4.70476 67.984 4.33571 67.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                        <span>(5.0)</span>
                      </div>
                      <div className='flex items-end gap-1'>
                        {/* <!-- sale price  --> */}
                        <span className='card-price-sale'>$ 124.00</span>
                        {/* <!-- price  --> */}
                        <span className='card-price-original'> $150.00 </span>
                      </div>
                    </div>
                    {/* <!-- quickview, favourite, compare product  --> */}
                    <div className='group-hover/product:flex card-qfc'>
                      {/* <!-- quickview  --> */}
                      <div className='group/qfc card-qfc-wrapper open-quickview-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-q-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 17 17'
                          fill='none'
                        >
                          <path
                            d='M2.31968 10.8345C1.71764 10.0523 1.41663 9.66126 1.41663 8.50004C1.41663 7.33882 1.71764 6.94775 2.31968 6.16561C3.52177 4.60389 5.53779 2.83337 8.49996 2.83337C11.4621 2.83337 13.4782 4.60389 14.6802 6.16561C15.2823 6.94775 15.5833 7.33882 15.5833 8.50004C15.5833 9.66126 15.2823 10.0523 14.6802 10.8345C13.4782 12.3962 11.4621 14.1667 8.49996 14.1667C5.53779 14.1667 3.52177 12.3962 2.31968 10.8345Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                          <path
                            d='M10.625 8.5C10.625 9.67361 9.67361 10.625 8.5 10.625C7.32639 10.625 6.375 9.67361 6.375 8.5C6.375 7.32639 7.32639 6.375 8.5 6.375C9.67361 6.375 10.625 7.32639 10.625 8.5Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- favourite  --> */}
                      <div className='group/qfc card-qfc-wrapper'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-f-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4095)'>
                            <path
                              d='M14.7145 2.64647C12.9744 0.906815 10.1436 0.906815 8.40393 2.64647L7.99986 3.05031L7.59603 2.64647C5.85637 0.906579 3.02531 0.906579 1.28565 2.64647C-0.418688 4.35081 -0.429756 7.05236 1.25998 8.93072C2.80114 10.6433 7.34643 14.3432 7.53928 14.4998C7.6702 14.6063 7.82773 14.6581 7.98432 14.6581C7.9895 14.6581 7.99468 14.6581 7.99962 14.6578C8.16163 14.6654 8.32481 14.6098 8.45997 14.4998C8.65282 14.3432 13.1986 10.6433 14.7402 8.93048C16.4297 7.05236 16.4186 4.35081 14.7145 2.64647ZM13.69 7.98554C12.4884 9.32042 9.18546 12.0735 7.99962 13.0505C6.81379 12.0738 3.51155 9.32089 2.31018 7.98577C1.13142 6.67561 1.12035 4.80974 2.28452 3.64558C2.87908 3.05125 3.6599 2.75385 4.44072 2.75385C5.22154 2.75385 6.00236 3.05101 6.59693 3.64558L7.48512 4.53377C7.59085 4.6395 7.72412 4.7026 7.86399 4.72474C8.09099 4.77348 8.33729 4.71014 8.51389 4.53401L9.40256 3.64558C10.5919 2.45668 12.5265 2.45692 13.7152 3.64558C14.8794 4.80974 14.8683 6.67561 13.69 7.98554Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4095_63_120'>
                              <rect width='16' height='16' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- compare product  --> */}
                      <div className='group/qfc card-qfc-wrapper open-compare-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-c-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 12'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4156)'>
                            <path
                              d='M7.93702 7.41736L5.64597 9.67796V1.23474C5.64597 1.05415 5.57283 0.88096 5.44263 0.753266C5.31243 0.625571 5.13585 0.553833 4.95172 0.553833C4.76759 0.553833 4.591 0.625571 4.4608 0.753266C4.33061 0.88096 4.25746 1.05415 4.25746 1.23474V9.67796L1.96642 7.43098C1.90188 7.36716 1.82509 7.3165 1.74049 7.28193C1.65589 7.24736 1.56514 7.22957 1.47349 7.22957C1.38184 7.22957 1.2911 7.24736 1.2065 7.28193C1.1219 7.3165 1.04511 7.36716 0.980571 7.43098C0.851265 7.55855 0.778687 7.73113 0.778687 7.91102C0.778687 8.0909 0.851265 8.26348 0.980571 8.39105L4.45185 11.7956C4.51606 11.8614 4.59429 11.9126 4.68096 11.9454C4.76406 11.9814 4.85392 12 4.94478 12C5.03563 12 5.12549 11.9814 5.20859 11.9454C5.29618 11.9143 5.37479 11.8629 5.4377 11.7956L8.90898 8.39105C9.03829 8.26348 9.11086 8.0909 9.11086 7.91102C9.11086 7.73113 9.03829 7.55855 8.90898 7.43098C8.78103 7.30438 8.60756 7.23204 8.42583 7.2295C8.24411 7.22695 8.06861 7.2944 7.93702 7.41736Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M15.1712 4.16949L11.6999 0.764963C11.6357 0.699117 11.5575 0.647969 11.4708 0.615164C11.3018 0.547061 11.1122 0.547061 10.9432 0.615164C10.8556 0.646205 10.777 0.697606 10.7141 0.764963L7.24278 4.16949C7.11347 4.29707 7.04089 4.46964 7.04089 4.64953C7.04089 4.82941 7.11347 5.00199 7.24278 5.12957C7.30732 5.19339 7.3841 5.24404 7.46871 5.27861C7.55331 5.31318 7.64405 5.33098 7.7357 5.33098C7.82735 5.33098 7.91809 5.31318 8.0027 5.27861C8.0873 5.24404 8.16408 5.19339 8.22862 5.12957L10.5058 2.86896V11.3122C10.5058 11.4928 10.5789 11.666 10.7091 11.7937C10.8393 11.9214 11.0159 11.9931 11.2 11.9931C11.3842 11.9931 11.5608 11.9214 11.691 11.7937C11.8212 11.666 11.8943 11.4928 11.8943 11.3122V2.86896L14.1853 5.11595C14.2502 5.17906 14.3271 5.22898 14.4117 5.26287C14.4963 5.29675 14.5869 5.31393 14.6783 5.31341C14.7696 5.31393 14.8602 5.29675 14.9448 5.26287C15.0294 5.22898 15.1063 5.17906 15.1712 5.11595C15.2963 4.98898 15.3663 4.8193 15.3663 4.64272C15.3663 4.46613 15.2963 4.29646 15.1712 4.16949Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4156_64_121'>
                              <rect width='16' height='12' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <!-- add to cart button  --> */}
                  <div className='card-btn-wrapper group-hover/product:border-#F2F2F2'>
                    <button className='btn-product w-full'>
                      Add to cart
                      <svg
                        className='w-17px h-17px'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 17 17'
                        fill='none'
                      >
                        <path
                          d='M2.68757 8.52063C3.06806 6.61816 3.25831 5.66692 3.88693 5.05427C4.00312 4.94103 4.12881 4.83799 4.26263 4.74626C4.98668 4.25 5.95675 4.25 7.8969 4.25H9.10315C11.0433 4.25 12.0134 4.25 12.7374 4.74626C12.8712 4.83799 12.9969 4.94103 13.1131 5.05427C13.7417 5.66692 13.932 6.61816 14.3125 8.52063C14.8588 11.252 15.1319 12.6176 14.5031 13.5854C14.3893 13.7606 14.2564 13.9227 14.1069 14.0687C13.2813 14.875 11.8886 14.875 9.10315 14.875H7.8969C5.11147 14.875 3.71876 14.875 2.89314 14.0687C2.74365 13.9227 2.61077 13.7606 2.49692 13.5854C1.86816 12.6176 2.1413 11.252 2.68757 8.52063Z'
                          stroke='currentColor'
                          stroke-width='1.4'
                        ></path>
                        <ellipse
                          cx='10.625'
                          cy='7.43746'
                          rx='0.708333'
                          ry='0.708333'
                          fill='currentColor'
                        ></ellipse>
                        <circle
                          cx='6.37502'
                          cy='7.43746'
                          r='0.708333'
                          fill='currentColor'
                        ></circle>
                        <path
                          d='M6.375 4.24996V3.54163C6.375 2.36802 7.32639 1.41663 8.5 1.41663C9.6736 1.41663 10.625 2.36802 10.625 3.54163V4.24996'
                          stroke='currentColor'
                          stroke-width='1.4'
                          stroke-linecap='round'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='swiper-slide'>
                {/* <!-- product card type 1 , product name, cardProduct --> */}
                <div className='group/product card-container'>
                  {/* <!-- badge  --> */}
                  <span className='badge-sale'>sale</span>
                  {/* <!-- product image, category, title  --> */}
                  <div className='card-block-1 group-hover/product:border-#F2F2F2'>
                    {/* <!-- image  --> */}
                    <div className='group-hover/product:hidden card-image-t1'>
                      <img src='../../../images/products/01.png' alt='' />
                    </div>
                    {/* <!-- images slider  --> */}
                    <div className='hidden group-hover/product:block'>
                      <div className='swiper productImageSlider productImageSlider-cardProduct'>
                        {/* <!-- slider prev btn --> */}
                        <button className='card-image-slider-prev group-hover/product:block prev-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M4.78503 2.96497L1.75003 5.99997L4.78503 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M10.25 6L1.835 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- slider prev btn --> */}

                        <div className='swiper-wrapper'>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/02.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/03.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/01.png' alt='' />
                          </div>
                        </div>

                        {/* <!-- slider next btn  --> */}

                        {/* <!-- pagination  --> */}

                        {/* <!-- slider next btn  --> */}
                        <button className='card-image-slider-next group-hover/product:block next-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M7.21497 2.96497L10.25 5.99997L7.21497 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M1.75 6L10.165 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- pagination  --> */}
                        <div className='custom-swiper-pagination-cardProduct card-image-slider-pagination'></div>
                      </div>
                    </div>
                    <div className='card-space'>
                      {/* <!-- category  --> */}
                      <div className='card-category'>
                        <h3>Smart TV</h3>
                      </div>
                      {/* <!-- product title  --> */}
                      <h3 className='card-title'>
                        <a href='product-details-1.html'>
                          Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* <!-- pricing, rating, quickview, favourite, compare product  --> */}
                  <div className='card-block-2 group-hover/product:border-transparent'>
                    {/* <!-- pricing and rating  --> */}
                    <div className='group-hover/product:hidden h-full flex flex-col justify-center'>
                      {/* <!-- rating  --> */}
                      <div className='card-rating'>
                        <svg
                          className='w-[68px] h-3'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 68 12'
                          fill='none'
                        >
                          <path
                            d='M11.6815 4.28914L7.99255 3.7248L6.33906 0.197544C6.21556 -0.065848 5.78406 -0.065848 5.66056 0.197544L4.00756 3.7248L0.318574 4.28914C0.0155746 4.33571 -0.105425 4.70475 0.107074 4.92258L2.78707 7.67368L2.15357 11.563C2.10307 11.8719 2.43257 12.1038 2.70507 11.952L6.00006 10.1283L9.29505 11.9525C9.56505 12.1028 9.89755 11.8754 9.84655 11.5635L9.21305 7.67418L11.893 4.92308C12.1055 4.70476 11.984 4.33571 11.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M25.6815 4.28914L21.9926 3.7248L20.3391 0.197544C20.2156 -0.065848 19.7841 -0.065848 19.6606 0.197544L18.0076 3.7248L14.3186 4.28914C14.0156 4.33571 13.8946 4.70475 14.1071 4.92258L16.7871 7.67368L16.1536 11.563C16.1031 11.8719 16.4326 12.1038 16.7051 11.952L20.0001 10.1283L23.295 11.9525C23.565 12.1028 23.8975 11.8754 23.8465 11.5635L23.2131 7.67418L25.893 4.92308C26.1055 4.70476 25.984 4.33571 25.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M39.6815 4.28914L35.9926 3.7248L34.3391 0.197544C34.2156 -0.065848 33.7841 -0.065848 33.6606 0.197544L32.0076 3.7248L28.3186 4.28914C28.0156 4.33571 27.8946 4.70475 28.1071 4.92258L30.7871 7.67368L30.1536 11.563C30.1031 11.8719 30.4326 12.1038 30.7051 11.952L34.0001 10.1283L37.295 11.9525C37.565 12.1028 37.8975 11.8754 37.8465 11.5635L37.2131 7.67418L39.893 4.92308C40.1055 4.70476 39.984 4.33571 39.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M53.6815 4.28914L49.9926 3.7248L48.3391 0.197544C48.2156 -0.065848 47.7841 -0.065848 47.6606 0.197544L46.0076 3.7248L42.3186 4.28914C42.0156 4.33571 41.8946 4.70475 42.1071 4.92258L44.7871 7.67368L44.1536 11.563C44.1031 11.8719 44.4326 12.1038 44.7051 11.952L48.0001 10.1283L51.295 11.9525C51.565 12.1028 51.8975 11.8754 51.8465 11.5635L51.2131 7.67418L53.893 4.92308C54.1055 4.70476 53.984 4.33571 53.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M67.6815 4.28914L63.9926 3.7248L62.3391 0.197544C62.2156 -0.065848 61.7841 -0.065848 61.6606 0.197544L60.0076 3.7248L56.3186 4.28914C56.0156 4.33571 55.8946 4.70475 56.1071 4.92258L58.7871 7.67368L58.1536 11.563C58.1031 11.8719 58.4326 12.1038 58.7051 11.952L62.0001 10.1283L65.295 11.9525C65.565 12.1028 65.8975 11.8754 65.8465 11.5635L65.2131 7.67418L67.893 4.92308C68.1055 4.70476 67.984 4.33571 67.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                        <span>(5.0)</span>
                      </div>
                      {/* <!-- pricing --> */}
                      <div className='flex items-end gap-1'>
                        {/* <!-- sale price  --> */}
                        <span className='card-price-sale'>$ 2036.00</span>
                        {/* <!-- price  --> */}
                        <span className='card-price-original'> $3000.00 </span>
                      </div>
                    </div>
                    {/* <!-- quickview, favourite, compare product  --> */}
                    <div className='group-hover/product:flex card-qfc'>
                      {/* <!-- quickview  --> */}
                      <div className='group/qfc card-qfc-wrapper open-quickview-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-q-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 17 17'
                          fill='none'
                        >
                          <path
                            d='M2.31968 10.8345C1.71764 10.0523 1.41663 9.66126 1.41663 8.50004C1.41663 7.33882 1.71764 6.94775 2.31968 6.16561C3.52177 4.60389 5.53779 2.83337 8.49996 2.83337C11.4621 2.83337 13.4782 4.60389 14.6802 6.16561C15.2823 6.94775 15.5833 7.33882 15.5833 8.50004C15.5833 9.66126 15.2823 10.0523 14.6802 10.8345C13.4782 12.3962 11.4621 14.1667 8.49996 14.1667C5.53779 14.1667 3.52177 12.3962 2.31968 10.8345Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                          <path
                            d='M10.625 8.5C10.625 9.67361 9.67361 10.625 8.5 10.625C7.32639 10.625 6.375 9.67361 6.375 8.5C6.375 7.32639 7.32639 6.375 8.5 6.375C9.67361 6.375 10.625 7.32639 10.625 8.5Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- favourite  --> */}
                      <div className='group/qfc card-qfc-wrapper'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-f-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4095)'>
                            <path
                              d='M14.7145 2.64647C12.9744 0.906815 10.1436 0.906815 8.40393 2.64647L7.99986 3.05031L7.59603 2.64647C5.85637 0.906579 3.02531 0.906579 1.28565 2.64647C-0.418688 4.35081 -0.429756 7.05236 1.25998 8.93072C2.80114 10.6433 7.34643 14.3432 7.53928 14.4998C7.6702 14.6063 7.82773 14.6581 7.98432 14.6581C7.9895 14.6581 7.99468 14.6581 7.99962 14.6578C8.16163 14.6654 8.32481 14.6098 8.45997 14.4998C8.65282 14.3432 13.1986 10.6433 14.7402 8.93048C16.4297 7.05236 16.4186 4.35081 14.7145 2.64647ZM13.69 7.98554C12.4884 9.32042 9.18546 12.0735 7.99962 13.0505C6.81379 12.0738 3.51155 9.32089 2.31018 7.98577C1.13142 6.67561 1.12035 4.80974 2.28452 3.64558C2.87908 3.05125 3.6599 2.75385 4.44072 2.75385C5.22154 2.75385 6.00236 3.05101 6.59693 3.64558L7.48512 4.53377C7.59085 4.6395 7.72412 4.7026 7.86399 4.72474C8.09099 4.77348 8.33729 4.71014 8.51389 4.53401L9.40256 3.64558C10.5919 2.45668 12.5265 2.45692 13.7152 3.64558C14.8794 4.80974 14.8683 6.67561 13.69 7.98554Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4095_65_122'>
                              <rect width='16' height='16' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- compare product  --> */}
                      <div className='group/qfc card-qfc-wrapper open-compare-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-c-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 12'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4156)'>
                            <path
                              d='M7.93702 7.41736L5.64597 9.67796V1.23474C5.64597 1.05415 5.57283 0.88096 5.44263 0.753266C5.31243 0.625571 5.13585 0.553833 4.95172 0.553833C4.76759 0.553833 4.591 0.625571 4.4608 0.753266C4.33061 0.88096 4.25746 1.05415 4.25746 1.23474V9.67796L1.96642 7.43098C1.90188 7.36716 1.82509 7.3165 1.74049 7.28193C1.65589 7.24736 1.56514 7.22957 1.47349 7.22957C1.38184 7.22957 1.2911 7.24736 1.2065 7.28193C1.1219 7.3165 1.04511 7.36716 0.980571 7.43098C0.851265 7.55855 0.778687 7.73113 0.778687 7.91102C0.778687 8.0909 0.851265 8.26348 0.980571 8.39105L4.45185 11.7956C4.51606 11.8614 4.59429 11.9126 4.68096 11.9454C4.76406 11.9814 4.85392 12 4.94478 12C5.03563 12 5.12549 11.9814 5.20859 11.9454C5.29618 11.9143 5.37479 11.8629 5.4377 11.7956L8.90898 8.39105C9.03829 8.26348 9.11086 8.0909 9.11086 7.91102C9.11086 7.73113 9.03829 7.55855 8.90898 7.43098C8.78103 7.30438 8.60756 7.23204 8.42583 7.2295C8.24411 7.22695 8.06861 7.2944 7.93702 7.41736Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M15.1712 4.16949L11.6999 0.764963C11.6357 0.699117 11.5575 0.647969 11.4708 0.615164C11.3018 0.547061 11.1122 0.547061 10.9432 0.615164C10.8556 0.646205 10.777 0.697606 10.7141 0.764963L7.24278 4.16949C7.11347 4.29707 7.04089 4.46964 7.04089 4.64953C7.04089 4.82941 7.11347 5.00199 7.24278 5.12957C7.30732 5.19339 7.3841 5.24404 7.46871 5.27861C7.55331 5.31318 7.64405 5.33098 7.7357 5.33098C7.82735 5.33098 7.91809 5.31318 8.0027 5.27861C8.0873 5.24404 8.16408 5.19339 8.22862 5.12957L10.5058 2.86896V11.3122C10.5058 11.4928 10.5789 11.666 10.7091 11.7937C10.8393 11.9214 11.0159 11.9931 11.2 11.9931C11.3842 11.9931 11.5608 11.9214 11.691 11.7937C11.8212 11.666 11.8943 11.4928 11.8943 11.3122V2.86896L14.1853 5.11595C14.2502 5.17906 14.3271 5.22898 14.4117 5.26287C14.4963 5.29675 14.5869 5.31393 14.6783 5.31341C14.7696 5.31393 14.8602 5.29675 14.9448 5.26287C15.0294 5.22898 15.1063 5.17906 15.1712 5.11595C15.2963 4.98898 15.3663 4.8193 15.3663 4.64272C15.3663 4.46613 15.2963 4.29646 15.1712 4.16949Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4156_66_123'>
                              <rect width='16' height='12' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <!-- add to cart button  --> */}
                  <div className='card-btn-wrapper group-hover/product:border-#F2F2F2'>
                    <button className='btn-product w-full'>
                      Add to cart
                      <svg
                        className='w-17px h-17px'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 17 17'
                        fill='none'
                      >
                        <path
                          d='M2.68757 8.52063C3.06806 6.61816 3.25831 5.66692 3.88693 5.05427C4.00312 4.94103 4.12881 4.83799 4.26263 4.74626C4.98668 4.25 5.95675 4.25 7.8969 4.25H9.10315C11.0433 4.25 12.0134 4.25 12.7374 4.74626C12.8712 4.83799 12.9969 4.94103 13.1131 5.05427C13.7417 5.66692 13.932 6.61816 14.3125 8.52063C14.8588 11.252 15.1319 12.6176 14.5031 13.5854C14.3893 13.7606 14.2564 13.9227 14.1069 14.0687C13.2813 14.875 11.8886 14.875 9.10315 14.875H7.8969C5.11147 14.875 3.71876 14.875 2.89314 14.0687C2.74365 13.9227 2.61077 13.7606 2.49692 13.5854C1.86816 12.6176 2.1413 11.252 2.68757 8.52063Z'
                          stroke='currentColor'
                          stroke-width='1.4'
                        ></path>
                        <ellipse
                          cx='10.625'
                          cy='7.43746'
                          rx='0.708333'
                          ry='0.708333'
                          fill='currentColor'
                        ></ellipse>
                        <circle
                          cx='6.37502'
                          cy='7.43746'
                          r='0.708333'
                          fill='currentColor'
                        ></circle>
                        <path
                          d='M6.375 4.24996V3.54163C6.375 2.36802 7.32639 1.41663 8.5 1.41663C9.6736 1.41663 10.625 2.36802 10.625 3.54163V4.24996'
                          stroke='currentColor'
                          stroke-width='1.4'
                          stroke-linecap='round'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='swiper-slide'>
                {/* <!-- product card type 1 , product name, cardProduct --> */}
                <div className='group/product card-container'>
                  {/* <!-- badge  --> */}
                  <span className='badge-new'>new</span>
                  {/* <!-- product image, category, title  --> */}
                  <div className='card-block-1 group-hover/product:border-#F2F2F2'>
                    {/* <!-- image  --> */}
                    <div className='group-hover/product:hidden card-image-t1'>
                      <img src='../../../images/products/04.png' alt='' />
                    </div>
                    {/* <!-- images slider  --> */}
                    <div className='hidden group-hover/product:block'>
                      <div className='swiper productImageSlider productImageSlider-cardProduct'>
                        {/* <!-- slider prev btn --> */}
                        <button className='card-image-slider-prev group-hover/product:block prev-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M4.78503 2.96497L1.75003 5.99997L4.78503 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M10.25 6L1.835 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- slider prev btn --> */}

                        <div className='swiper-wrapper'>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/05.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/06.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/04.png' alt='' />
                          </div>
                        </div>

                        {/* <!-- slider next btn  --> */}

                        {/* <!-- pagination  --> */}

                        {/* <!-- slider next btn  --> */}
                        <button className='card-image-slider-next group-hover/product:block next-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M7.21497 2.96497L10.25 5.99997L7.21497 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M1.75 6L10.165 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- pagination  --> */}
                        <div className='custom-swiper-pagination-cardProduct card-image-slider-pagination'></div>
                      </div>
                    </div>
                    <div className='card-space'>
                      {/* <!-- category  --> */}
                      <div className='card-category'>
                        <h3>Gaming</h3>
                      </div>
                      {/* <!-- product title  --> */}
                      <h3 className='card-title'>
                        <a href='product-details-1.html'>
                          Lomitech F310 - Wifi &amp; USB RGB Dual Gamepad - for
                          smooth experience
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* <!-- pricing, rating, quickview, favourite, compare product  --> */}
                  <div className='card-block-2 group-hover/product:border-transparent'>
                    {/* <!-- pricing and rating  --> */}
                    <div className='group-hover/product:hidden h-full flex flex-col justify-center'>
                      {/* <!-- rating  --> */}
                      <div className='card-rating'>
                        <svg
                          className='w-[68px] h-3'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 68 12'
                          fill='none'
                        >
                          <path
                            d='M11.6815 4.28914L7.99255 3.7248L6.33906 0.197544C6.21556 -0.065848 5.78406 -0.065848 5.66056 0.197544L4.00756 3.7248L0.318574 4.28914C0.0155746 4.33571 -0.105425 4.70475 0.107074 4.92258L2.78707 7.67368L2.15357 11.563C2.10307 11.8719 2.43257 12.1038 2.70507 11.952L6.00006 10.1283L9.29505 11.9525C9.56505 12.1028 9.89755 11.8754 9.84655 11.5635L9.21305 7.67418L11.893 4.92308C12.1055 4.70476 11.984 4.33571 11.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M25.6815 4.28914L21.9926 3.7248L20.3391 0.197544C20.2156 -0.065848 19.7841 -0.065848 19.6606 0.197544L18.0076 3.7248L14.3186 4.28914C14.0156 4.33571 13.8946 4.70475 14.1071 4.92258L16.7871 7.67368L16.1536 11.563C16.1031 11.8719 16.4326 12.1038 16.7051 11.952L20.0001 10.1283L23.295 11.9525C23.565 12.1028 23.8975 11.8754 23.8465 11.5635L23.2131 7.67418L25.893 4.92308C26.1055 4.70476 25.984 4.33571 25.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M39.6815 4.28914L35.9926 3.7248L34.3391 0.197544C34.2156 -0.065848 33.7841 -0.065848 33.6606 0.197544L32.0076 3.7248L28.3186 4.28914C28.0156 4.33571 27.8946 4.70475 28.1071 4.92258L30.7871 7.67368L30.1536 11.563C30.1031 11.8719 30.4326 12.1038 30.7051 11.952L34.0001 10.1283L37.295 11.9525C37.565 12.1028 37.8975 11.8754 37.8465 11.5635L37.2131 7.67418L39.893 4.92308C40.1055 4.70476 39.984 4.33571 39.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M53.6815 4.28914L49.9926 3.7248L48.3391 0.197544C48.2156 -0.065848 47.7841 -0.065848 47.6606 0.197544L46.0076 3.7248L42.3186 4.28914C42.0156 4.33571 41.8946 4.70475 42.1071 4.92258L44.7871 7.67368L44.1536 11.563C44.1031 11.8719 44.4326 12.1038 44.7051 11.952L48.0001 10.1283L51.295 11.9525C51.565 12.1028 51.8975 11.8754 51.8465 11.5635L51.2131 7.67418L53.893 4.92308C54.1055 4.70476 53.984 4.33571 53.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M67.6815 4.28914L63.9926 3.7248L62.3391 0.197544C62.2156 -0.065848 61.7841 -0.065848 61.6606 0.197544L60.0076 3.7248L56.3186 4.28914C56.0156 4.33571 55.8946 4.70475 56.1071 4.92258L58.7871 7.67368L58.1536 11.563C58.1031 11.8719 58.4326 12.1038 58.7051 11.952L62.0001 10.1283L65.295 11.9525C65.565 12.1028 65.8975 11.8754 65.8465 11.5635L65.2131 7.67418L67.893 4.92308C68.1055 4.70476 67.984 4.33571 67.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                        <span>(5.0)</span>
                      </div>
                      <div className='flex items-end gap-1'>
                        {/* <!-- sale price  --> */}
                        <span className='card-price-sale'>$ 36.00</span>
                        {/* <!-- price  --> */}
                        <span className='card-price-original'> $40.00 </span>
                      </div>
                    </div>
                    {/* <!-- quickview, favourite, compare product  --> */}
                    <div className='group-hover/product:flex card-qfc'>
                      {/* <!-- quickview  --> */}
                      <div className='group/qfc card-qfc-wrapper open-quickview-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-q-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 17 17'
                          fill='none'
                        >
                          <path
                            d='M2.31968 10.8345C1.71764 10.0523 1.41663 9.66126 1.41663 8.50004C1.41663 7.33882 1.71764 6.94775 2.31968 6.16561C3.52177 4.60389 5.53779 2.83337 8.49996 2.83337C11.4621 2.83337 13.4782 4.60389 14.6802 6.16561C15.2823 6.94775 15.5833 7.33882 15.5833 8.50004C15.5833 9.66126 15.2823 10.0523 14.6802 10.8345C13.4782 12.3962 11.4621 14.1667 8.49996 14.1667C5.53779 14.1667 3.52177 12.3962 2.31968 10.8345Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                          <path
                            d='M10.625 8.5C10.625 9.67361 9.67361 10.625 8.5 10.625C7.32639 10.625 6.375 9.67361 6.375 8.5C6.375 7.32639 7.32639 6.375 8.5 6.375C9.67361 6.375 10.625 7.32639 10.625 8.5Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- favourite  --> */}
                      <div className='group/qfc card-qfc-wrapper'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-f-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4095)'>
                            <path
                              d='M14.7145 2.64647C12.9744 0.906815 10.1436 0.906815 8.40393 2.64647L7.99986 3.05031L7.59603 2.64647C5.85637 0.906579 3.02531 0.906579 1.28565 2.64647C-0.418688 4.35081 -0.429756 7.05236 1.25998 8.93072C2.80114 10.6433 7.34643 14.3432 7.53928 14.4998C7.6702 14.6063 7.82773 14.6581 7.98432 14.6581C7.9895 14.6581 7.99468 14.6581 7.99962 14.6578C8.16163 14.6654 8.32481 14.6098 8.45997 14.4998C8.65282 14.3432 13.1986 10.6433 14.7402 8.93048C16.4297 7.05236 16.4186 4.35081 14.7145 2.64647ZM13.69 7.98554C12.4884 9.32042 9.18546 12.0735 7.99962 13.0505C6.81379 12.0738 3.51155 9.32089 2.31018 7.98577C1.13142 6.67561 1.12035 4.80974 2.28452 3.64558C2.87908 3.05125 3.6599 2.75385 4.44072 2.75385C5.22154 2.75385 6.00236 3.05101 6.59693 3.64558L7.48512 4.53377C7.59085 4.6395 7.72412 4.7026 7.86399 4.72474C8.09099 4.77348 8.33729 4.71014 8.51389 4.53401L9.40256 3.64558C10.5919 2.45668 12.5265 2.45692 13.7152 3.64558C14.8794 4.80974 14.8683 6.67561 13.69 7.98554Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4095_67_124'>
                              <rect width='16' height='16' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- compare product  --> */}
                      <div className='group/qfc card-qfc-wrapper open-compare-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-c-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 12'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4156)'>
                            <path
                              d='M7.93702 7.41736L5.64597 9.67796V1.23474C5.64597 1.05415 5.57283 0.88096 5.44263 0.753266C5.31243 0.625571 5.13585 0.553833 4.95172 0.553833C4.76759 0.553833 4.591 0.625571 4.4608 0.753266C4.33061 0.88096 4.25746 1.05415 4.25746 1.23474V9.67796L1.96642 7.43098C1.90188 7.36716 1.82509 7.3165 1.74049 7.28193C1.65589 7.24736 1.56514 7.22957 1.47349 7.22957C1.38184 7.22957 1.2911 7.24736 1.2065 7.28193C1.1219 7.3165 1.04511 7.36716 0.980571 7.43098C0.851265 7.55855 0.778687 7.73113 0.778687 7.91102C0.778687 8.0909 0.851265 8.26348 0.980571 8.39105L4.45185 11.7956C4.51606 11.8614 4.59429 11.9126 4.68096 11.9454C4.76406 11.9814 4.85392 12 4.94478 12C5.03563 12 5.12549 11.9814 5.20859 11.9454C5.29618 11.9143 5.37479 11.8629 5.4377 11.7956L8.90898 8.39105C9.03829 8.26348 9.11086 8.0909 9.11086 7.91102C9.11086 7.73113 9.03829 7.55855 8.90898 7.43098C8.78103 7.30438 8.60756 7.23204 8.42583 7.2295C8.24411 7.22695 8.06861 7.2944 7.93702 7.41736Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M15.1712 4.16949L11.6999 0.764963C11.6357 0.699117 11.5575 0.647969 11.4708 0.615164C11.3018 0.547061 11.1122 0.547061 10.9432 0.615164C10.8556 0.646205 10.777 0.697606 10.7141 0.764963L7.24278 4.16949C7.11347 4.29707 7.04089 4.46964 7.04089 4.64953C7.04089 4.82941 7.11347 5.00199 7.24278 5.12957C7.30732 5.19339 7.3841 5.24404 7.46871 5.27861C7.55331 5.31318 7.64405 5.33098 7.7357 5.33098C7.82735 5.33098 7.91809 5.31318 8.0027 5.27861C8.0873 5.24404 8.16408 5.19339 8.22862 5.12957L10.5058 2.86896V11.3122C10.5058 11.4928 10.5789 11.666 10.7091 11.7937C10.8393 11.9214 11.0159 11.9931 11.2 11.9931C11.3842 11.9931 11.5608 11.9214 11.691 11.7937C11.8212 11.666 11.8943 11.4928 11.8943 11.3122V2.86896L14.1853 5.11595C14.2502 5.17906 14.3271 5.22898 14.4117 5.26287C14.4963 5.29675 14.5869 5.31393 14.6783 5.31341C14.7696 5.31393 14.8602 5.29675 14.9448 5.26287C15.0294 5.22898 15.1063 5.17906 15.1712 5.11595C15.2963 4.98898 15.3663 4.8193 15.3663 4.64272C15.3663 4.46613 15.2963 4.29646 15.1712 4.16949Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4156_68_125'>
                              <rect width='16' height='12' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <!-- add to cart button  --> */}
                  <div className='card-btn-wrapper group-hover/product:border-#F2F2F2'>
                    <button className='btn-product w-full'>
                      Add to cart
                      <svg
                        className='w-17px h-17px'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 17 17'
                        fill='none'
                      >
                        <path
                          d='M2.68757 8.52063C3.06806 6.61816 3.25831 5.66692 3.88693 5.05427C4.00312 4.94103 4.12881 4.83799 4.26263 4.74626C4.98668 4.25 5.95675 4.25 7.8969 4.25H9.10315C11.0433 4.25 12.0134 4.25 12.7374 4.74626C12.8712 4.83799 12.9969 4.94103 13.1131 5.05427C13.7417 5.66692 13.932 6.61816 14.3125 8.52063C14.8588 11.252 15.1319 12.6176 14.5031 13.5854C14.3893 13.7606 14.2564 13.9227 14.1069 14.0687C13.2813 14.875 11.8886 14.875 9.10315 14.875H7.8969C5.11147 14.875 3.71876 14.875 2.89314 14.0687C2.74365 13.9227 2.61077 13.7606 2.49692 13.5854C1.86816 12.6176 2.1413 11.252 2.68757 8.52063Z'
                          stroke='currentColor'
                          stroke-width='1.4'
                        ></path>
                        <ellipse
                          cx='10.625'
                          cy='7.43746'
                          rx='0.708333'
                          ry='0.708333'
                          fill='currentColor'
                        ></ellipse>
                        <circle
                          cx='6.37502'
                          cy='7.43746'
                          r='0.708333'
                          fill='currentColor'
                        ></circle>
                        <path
                          d='M6.375 4.24996V3.54163C6.375 2.36802 7.32639 1.41663 8.5 1.41663C9.6736 1.41663 10.625 2.36802 10.625 3.54163V4.24996'
                          stroke='currentColor'
                          stroke-width='1.4'
                          stroke-linecap='round'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className='swiper-slide'>
                {/* <!-- product card type 1 , product name, cardProduct --> */}
                <div className='group/product card-container'>
                  {/* <!-- badge  --> */}
                  <span className='badge-sale'>sale</span>
                  {/* <!-- product image, category, title  --> */}
                  <div className='card-block-1 group-hover/product:border-#F2F2F2'>
                    {/* <!-- image  --> */}
                    <div className='group-hover/product:hidden card-image-t1'>
                      <img src='../../../images/products/07.png' alt='' />
                    </div>
                    {/* <!-- images slider  --> */}
                    <div className='hidden group-hover/product:block'>
                      <div className='swiper productImageSlider productImageSlider-cardProduct'>
                        {/* <!-- slider prev btn --> */}
                        <button className='card-image-slider-prev group-hover/product:block prev-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M4.78503 2.96497L1.75003 5.99997L4.78503 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M10.25 6L1.835 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- slider prev btn --> */}

                        <div className='swiper-wrapper'>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/08.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/09.png' alt='' />
                          </div>
                          <div className='swiper-slide'>
                            <img src='../../../images/products/07.png' alt='' />
                          </div>
                        </div>

                        {/* <!-- slider next btn  --> */}

                        {/* <!-- pagination  --> */}

                        {/* <!-- slider next btn  --> */}
                        <button className='card-image-slider-next group-hover/product:block next-btn-cardProduct'>
                          <svg
                            className='card-image-slider-nav-svg'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              d='M7.21497 2.96497L10.25 5.99997L7.21497 9.03497'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                            <path
                              d='M1.75 6L10.165 6'
                              stroke='currentColor'
                              stroke-miterlimit='10'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- pagination  --> */}
                        <div className='custom-swiper-pagination-cardProduct card-image-slider-pagination'></div>
                      </div>
                    </div>
                    <div className='card-space'>
                      {/* <!-- category  --> */}
                      <div className='card-category'>
                        <h3>Headphone</h3>
                      </div>
                      {/* <!-- product title  --> */}
                      <h3 className='card-title'>
                        <a href='product-details-1.html'>
                          Fabitech Sonata MH90 Multi-Platform RGB Gaming Headset
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* <!-- pricing, rating, quickview, favourite, compare product  --> */}
                  <div className='card-block-2 group-hover/product:border-transparent'>
                    {/* <!-- pricing and rating  --> */}
                    <div className='group-hover/product:hidden h-full flex flex-col justify-center'>
                      {/* <!-- rating  --> */}
                      <div className='card-rating'>
                        <svg
                          className='w-[68px] h-3'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 68 12'
                          fill='none'
                        >
                          {/* <!-- pricing --> */}
                          <path
                            d='M11.6815 4.28914L7.99255 3.7248L6.33906 0.197544C6.21556 -0.065848 5.78406 -0.065848 5.66056 0.197544L4.00756 3.7248L0.318574 4.28914C0.0155746 4.33571 -0.105425 4.70475 0.107074 4.92258L2.78707 7.67368L2.15357 11.563C2.10307 11.8719 2.43257 12.1038 2.70507 11.952L6.00006 10.1283L9.29505 11.9525C9.56505 12.1028 9.89755 11.8754 9.84655 11.5635L9.21305 7.67418L11.893 4.92308C12.1055 4.70476 11.984 4.33571 11.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M25.6815 4.28914L21.9926 3.7248L20.3391 0.197544C20.2156 -0.065848 19.7841 -0.065848 19.6606 0.197544L18.0076 3.7248L14.3186 4.28914C14.0156 4.33571 13.8946 4.70475 14.1071 4.92258L16.7871 7.67368L16.1536 11.563C16.1031 11.8719 16.4326 12.1038 16.7051 11.952L20.0001 10.1283L23.295 11.9525C23.565 12.1028 23.8975 11.8754 23.8465 11.5635L23.2131 7.67418L25.893 4.92308C26.1055 4.70476 25.984 4.33571 25.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M39.6815 4.28914L35.9926 3.7248L34.3391 0.197544C34.2156 -0.065848 33.7841 -0.065848 33.6606 0.197544L32.0076 3.7248L28.3186 4.28914C28.0156 4.33571 27.8946 4.70475 28.1071 4.92258L30.7871 7.67368L30.1536 11.563C30.1031 11.8719 30.4326 12.1038 30.7051 11.952L34.0001 10.1283L37.295 11.9525C37.565 12.1028 37.8975 11.8754 37.8465 11.5635L37.2131 7.67418L39.893 4.92308C40.1055 4.70476 39.984 4.33571 39.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M53.6815 4.28914L49.9926 3.7248L48.3391 0.197544C48.2156 -0.065848 47.7841 -0.065848 47.6606 0.197544L46.0076 3.7248L42.3186 4.28914C42.0156 4.33571 41.8946 4.70475 42.1071 4.92258L44.7871 7.67368L44.1536 11.563C44.1031 11.8719 44.4326 12.1038 44.7051 11.952L48.0001 10.1283L51.295 11.9525C51.565 12.1028 51.8975 11.8754 51.8465 11.5635L51.2131 7.67418L53.893 4.92308C54.1055 4.70476 53.984 4.33571 53.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                          <path
                            d='M67.6815 4.28914L63.9926 3.7248L62.3391 0.197544C62.2156 -0.065848 61.7841 -0.065848 61.6606 0.197544L60.0076 3.7248L56.3186 4.28914C56.0156 4.33571 55.8946 4.70475 56.1071 4.92258L58.7871 7.67368L58.1536 11.563C58.1031 11.8719 58.4326 12.1038 58.7051 11.952L62.0001 10.1283L65.295 11.9525C65.565 12.1028 65.8975 11.8754 65.8465 11.5635L65.2131 7.67418L67.893 4.92308C68.1055 4.70476 67.984 4.33571 67.6815 4.28914Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                        <span>(5.0)</span>
                      </div>
                      <div className='flex items-end gap-1'>
                        {/* <!-- sale price  --> */}
                        <span className='card-price-sale'>$ 124.00</span>
                        {/* <!-- price  --> */}
                        <span className='card-price-original'> $150.00 </span>
                      </div>
                    </div>
                    {/* <!-- quickview, favourite, compare product  --> */}
                    <div className='group-hover/product:flex card-qfc'>
                      {/* <!-- quickview  --> */}
                      <div className='group/qfc card-qfc-wrapper open-quickview-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-q-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 17 17'
                          fill='none'
                        >
                          <path
                            d='M2.31968 10.8345C1.71764 10.0523 1.41663 9.66126 1.41663 8.50004C1.41663 7.33882 1.71764 6.94775 2.31968 6.16561C3.52177 4.60389 5.53779 2.83337 8.49996 2.83337C11.4621 2.83337 13.4782 4.60389 14.6802 6.16561C15.2823 6.94775 15.5833 7.33882 15.5833 8.50004C15.5833 9.66126 15.2823 10.0523 14.6802 10.8345C13.4782 12.3962 11.4621 14.1667 8.49996 14.1667C5.53779 14.1667 3.52177 12.3962 2.31968 10.8345Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                          <path
                            d='M10.625 8.5C10.625 9.67361 9.67361 10.625 8.5 10.625C7.32639 10.625 6.375 9.67361 6.375 8.5C6.375 7.32639 7.32639 6.375 8.5 6.375C9.67361 6.375 10.625 7.32639 10.625 8.5Z'
                            stroke='currentColor'
                            stroke-width='1.5'
                          ></path>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- favourite  --> */}
                      <div className='group/qfc card-qfc-wrapper'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-f-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4095)'>
                            <path
                              d='M14.7145 2.64647C12.9744 0.906815 10.1436 0.906815 8.40393 2.64647L7.99986 3.05031L7.59603 2.64647C5.85637 0.906579 3.02531 0.906579 1.28565 2.64647C-0.418688 4.35081 -0.429756 7.05236 1.25998 8.93072C2.80114 10.6433 7.34643 14.3432 7.53928 14.4998C7.6702 14.6063 7.82773 14.6581 7.98432 14.6581C7.9895 14.6581 7.99468 14.6581 7.99962 14.6578C8.16163 14.6654 8.32481 14.6098 8.45997 14.4998C8.65282 14.3432 13.1986 10.6433 14.7402 8.93048C16.4297 7.05236 16.4186 4.35081 14.7145 2.64647ZM13.69 7.98554C12.4884 9.32042 9.18546 12.0735 7.99962 13.0505C6.81379 12.0738 3.51155 9.32089 2.31018 7.98577C1.13142 6.67561 1.12035 4.80974 2.28452 3.64558C2.87908 3.05125 3.6599 2.75385 4.44072 2.75385C5.22154 2.75385 6.00236 3.05101 6.59693 3.64558L7.48512 4.53377C7.59085 4.6395 7.72412 4.7026 7.86399 4.72474C8.09099 4.77348 8.33729 4.71014 8.51389 4.53401L9.40256 3.64558C10.5919 2.45668 12.5265 2.45692 13.7152 3.64558C14.8794 4.80974 14.8683 6.67561 13.69 7.98554Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4095_69_126'>
                              <rect width='16' height='16' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className='w-[1px] h-7 bg-#EBEBEB'></span>
                      {/* <!-- compare product  --> */}
                      <div className='group/qfc card-qfc-wrapper open-compare-modal'>
                        <div className='card-qfc-bg group-hover/qfc:bg-black'></div>
                        <svg
                          className='card-qfc-c-svg group-hover/qfc:text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 12'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_1_4156)'>
                            <path
                              d='M7.93702 7.41736L5.64597 9.67796V1.23474C5.64597 1.05415 5.57283 0.88096 5.44263 0.753266C5.31243 0.625571 5.13585 0.553833 4.95172 0.553833C4.76759 0.553833 4.591 0.625571 4.4608 0.753266C4.33061 0.88096 4.25746 1.05415 4.25746 1.23474V9.67796L1.96642 7.43098C1.90188 7.36716 1.82509 7.3165 1.74049 7.28193C1.65589 7.24736 1.56514 7.22957 1.47349 7.22957C1.38184 7.22957 1.2911 7.24736 1.2065 7.28193C1.1219 7.3165 1.04511 7.36716 0.980571 7.43098C0.851265 7.55855 0.778687 7.73113 0.778687 7.91102C0.778687 8.0909 0.851265 8.26348 0.980571 8.39105L4.45185 11.7956C4.51606 11.8614 4.59429 11.9126 4.68096 11.9454C4.76406 11.9814 4.85392 12 4.94478 12C5.03563 12 5.12549 11.9814 5.20859 11.9454C5.29618 11.9143 5.37479 11.8629 5.4377 11.7956L8.90898 8.39105C9.03829 8.26348 9.11086 8.0909 9.11086 7.91102C9.11086 7.73113 9.03829 7.55855 8.90898 7.43098C8.78103 7.30438 8.60756 7.23204 8.42583 7.2295C8.24411 7.22695 8.06861 7.2944 7.93702 7.41736Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M15.1712 4.16949L11.6999 0.764963C11.6357 0.699117 11.5575 0.647969 11.4708 0.615164C11.3018 0.547061 11.1122 0.547061 10.9432 0.615164C10.8556 0.646205 10.777 0.697606 10.7141 0.764963L7.24278 4.16949C7.11347 4.29707 7.04089 4.46964 7.04089 4.64953C7.04089 4.82941 7.11347 5.00199 7.24278 5.12957C7.30732 5.19339 7.3841 5.24404 7.46871 5.27861C7.55331 5.31318 7.64405 5.33098 7.7357 5.33098C7.82735 5.33098 7.91809 5.31318 8.0027 5.27861C8.0873 5.24404 8.16408 5.19339 8.22862 5.12957L10.5058 2.86896V11.3122C10.5058 11.4928 10.5789 11.666 10.7091 11.7937C10.8393 11.9214 11.0159 11.9931 11.2 11.9931C11.3842 11.9931 11.5608 11.9214 11.691 11.7937C11.8212 11.666 11.8943 11.4928 11.8943 11.3122V2.86896L14.1853 5.11595C14.2502 5.17906 14.3271 5.22898 14.4117 5.26287C14.4963 5.29675 14.5869 5.31393 14.6783 5.31341C14.7696 5.31393 14.8602 5.29675 14.9448 5.26287C15.0294 5.22898 15.1063 5.17906 15.1712 5.11595C15.2963 4.98898 15.3663 4.8193 15.3663 4.64272C15.3663 4.46613 15.2963 4.29646 15.1712 4.16949Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_1_4156_70_127'>
                              <rect width='16' height='12' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <!-- add to cart button  --> */}
                  <div className='card-btn-wrapper group-hover/product:border-#F2F2F2'>
                    <button className='btn-product w-full'>
                      Add to cart
                      <svg
                        className='w-17px h-17px'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 17 17'
                        fill='none'
                      >
                        <path
                          d='M2.68757 8.52063C3.06806 6.61816 3.25831 5.66692 3.88693 5.05427C4.00312 4.94103 4.12881 4.83799 4.26263 4.74626C4.98668 4.25 5.95675 4.25 7.8969 4.25H9.10315C11.0433 4.25 12.0134 4.25 12.7374 4.74626C12.8712 4.83799 12.9969 4.94103 13.1131 5.05427C13.7417 5.66692 13.932 6.61816 14.3125 8.52063C14.8588 11.252 15.1319 12.6176 14.5031 13.5854C14.3893 13.7606 14.2564 13.9227 14.1069 14.0687C13.2813 14.875 11.8886 14.875 9.10315 14.875H7.8969C5.11147 14.875 3.71876 14.875 2.89314 14.0687C2.74365 13.9227 2.61077 13.7606 2.49692 13.5854C1.86816 12.6176 2.1413 11.252 2.68757 8.52063Z'
                          stroke='currentColor'
                          stroke-width='1.4'
                        ></path>
                        <ellipse
                          cx='10.625'
                          cy='7.43746'
                          rx='0.708333'
                          ry='0.708333'
                          fill='currentColor'
                        ></ellipse>
                        <circle
                          cx='6.37502'
                          cy='7.43746'
                          r='0.708333'
                          fill='currentColor'
                        ></circle>
                        <path
                          d='M6.375 4.24996V3.54163C6.375 2.36802 7.32639 1.41663 8.5 1.41663C9.6736 1.41663 10.625 2.36802 10.625 3.54163V4.24996'
                          stroke='currentColor'
                          stroke-width='1.4'
                          stroke-linecap='round'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsumerProduct;
