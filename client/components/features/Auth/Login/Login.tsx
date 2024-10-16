'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import {
  toggleLoginModal,
  toggleRegisterModal,
} from '@/lib/features/nav/authToggleSlice';

const Login = () => {
  const dispatch = useDispatch();

  const isLoginModalOpen = useSelector(
    (state: RootState) => state.modal.isLoginModalOpen
  );

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleLoginModal());
    }
  };

  const handleRegisterClick = () => {
    dispatch(toggleLoginModal());
    dispatch(toggleRegisterModal());
  };

  return (
    <div
      id='login-wrapper'
      onClick={handleOverlayClick}
      className={`${
        isLoginModalOpen ? 'opacity-100 visible' : 'invisible opacity-0'
      } w-full h-screen fixed top-0 left-0 bg-#17201D/50 z-[999] overflow-y-scroll overflow-x-hidden 2xl:overflow-hidden transition-all duration-500`}
    >
      <div
        id='login-main'
        className={`bg-white absolute  -translate-y-full left-2/4 -translate-x-2/4 w-full h-full max-w-[560px] max-h-[746px] transition-transform duration-500 py-10 px-5 md:py-60px md:px-30px rounded flex flex-col items-center justify-center ${
          isLoginModalOpen ? 'top-[92%]' : '-top-full'
        }`}
      >
        {/* <!-- logo  --> */}
        <div className='max-w-[100px] md:max-w-[183px]'>
          <img
            src='../../../../images/logo-183.svg'
            className='w-[183px]'
            alt=''
          />
        </div>
        <h2 className='text-sm leading-14px md:text-base md:leading-4 text-#4E5B56 text-center pt-10px pb-30px md:pb-50px'>
          Login with your email &amp; password
        </h2>

        <form>
          {/* <!-- email  --> */}
          <div className='relative inline-block w-full'>
            <input
              type='email'
              className='w-full text-sm leading-[15px] capitalize pl-70px md:pl-[84px] pr-4 py-3 sm:py-5 bg-#F2F2F2 text-#8B8582 placeholder-#8B8582 border-none focus:outline-none focus:ring-1 focus:ring-#A0CFA0 rounded'
              placeholder='Email'
            />
            <img
              src='../../../../images/icons/icon-mail.svg'
              className='absolute z-20 left-0 top-2/4 -translate-y-2/4 flex items-center pl-5'
              alt=''
            />

            <span className='absolute inset-y-0 left-0 top-2/4 -translate-y-2/4 h-6 w-[1px] bg-#DEDEDE ml-50px md:ml-[60px]'></span>
          </div>
          {/* <!-- password  --> */}
          <div className='relative inline-block w-full mt-5 mb-18px'>
            <input
              type='password'
              id='passwordInputLogin'
              className='w-full text-sm leading-[15px] capitalize pl-70px md:pl-[84px] pr-4 py-3 sm:py-5 bg-#F2F2F2 text-#8B8582 placeholder-#8B8582 border-none focus:outline-none focus:ring-1 focus:ring-#A0CFA0 rounded'
              placeholder='password'
            />
            <img
              src='../../../../images/icons/icon-lock.svg'
              className='absolute z-20 left-0 top-2/4 -translate-y-2/4 flex items-center pl-5'
              alt=''
            />
            <img
              id='eyeIconLogin'
              src='../../../../images/icons/icon-eye.svg'
              className='absolute z-20 right-0 top-2/4 -translate-y-2/4 flex items-center pr-14px cursor-pointer transition-all duration-200'
              alt=''
            />
            <img
              id='closeEyeIconLogin'
              src='../../../../images/icons/icon-close-eye.svg'
              className='invisible absolute z-20 right-0 top-2/4 -translate-y-2/4 flex items-center pr-14px cursor-pointer transition-all duration-200'
              alt=''
            />

            <span className='absolute inset-y-0 left-0 top-2/4 -translate-y-2/4 h-6 w-[1px] bg-#DEDEDE ml-50px md:ml-[60px]'></span>
          </div>

          <div className='flex justify-between items-center mb-5'>
            <label htmlFor='terms-login' className='flex items-center'>
              <input
                type='checkbox'
                id='terms-login'
                name='terms-login'
                required
                className='form-checkbox appearance-none text-#53615B w-3 h-3 md:w-18px md:h-18px border border-#53615B checked:border-none rounded-full focus:ring-#53615B outline-none ring-#53615B checked:ring-#53615B active:ring-#53615B transition duration-150 ease-in-out'
              />
              <span className='ml-6px font-medium text-xs md:text-sm text-#8B8582 leading-[14px]'>
                Remember Me
              </span>
            </label>
            <a
              href='#'
              className='font-medium text-sm leading-14px text-#5B9982'
            >
              Forgot Password?
            </a>
          </div>
          <button className='btn-grad-green py-17px px-5 w-full rounded font-medium text-[15px] leading-[15px] capitalize'>
            login Now
          </button>
        </form>
        <div className='w-full flex items-center py-5'>
          <div className='grow h-px bg-#F2F2F2'></div>
          <p className='text-sm leading-14px text-#4B4B4B px-30px'>Or</p>
          <div className='grow h-px bg-#F2F2F2'></div>
        </div>
        <div className='w-full flex flex-col space-y-15px'>
          <button className='bg-#F44336 hover:bg-#17201D text-white py-17px px-5 w-full rounded font-medium text-[15px] leading-[15px] flex gap-2 items-center justify-center capitalize'>
            <img src='../../../../images/icons/icon-google.svg' alt='' />
            login With Google
          </button>
          <button className='bg-#847DD2 hover:bg-#17201D text-white py-17px px-5 w-full rounded font-medium text-[15px] leading-[15px] flex gap-2 items-center justify-center capitalize'>
            <img src='../../../../images/icons/icon-mobile.svg' alt='' />
            login With Mobile
          </button>
        </div>
        <h3 className='pt-30px md:pt-60px leading-4 text-#4E5B56 tracking-[-0.32px]'>
          Don’t have an account?
          <span
            className='open-register close-login font-semibold text-#5B9982 hover:text-#17201D cursor-pointer'
            onClick={handleRegisterClick}
          >
            Register
          </span>
        </h3>
        <button className='close-login absolute right-5 top-5 sm:hidden cursor-pointer'>
          <img src='../../../../images/icons/icon-close.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default Login;
