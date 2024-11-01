'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import {
  toggleLoginModal,
  toggleRegisterModal,
} from '@/lib/features/nav/authToggleSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignUpMutation } from '@/lib/api/authApi';

interface FormInputs {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

const Register = () => {
  const dispatch = useDispatch();

  const isRegisterModalOpen = useSelector(
    (state: RootState) => state.modal.isRegisterModalOpen
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [signUp, { isLoading, isError, error }] = useSignUpMutation();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleRegisterModal());
    }
  };

  const handleLoginClick = () => {
    dispatch(toggleLoginModal());
    dispatch(toggleRegisterModal());
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await signUp(data).unwrap();
      console.log('User registered successfully');
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <div
      id='register-wrapper'
      onClick={handleOverlayClick}
      className={`${
        isRegisterModalOpen ? 'opacity-100 visible' : 'invisible opacity-0'
      } w-full h-screen fixed top-0 left-0 bg-#17201D/50 z-[999] overflow-y-scroll overflow-x-hidden 2xl:overflow-hidden transition-all duration-500`}
    >
      <div
        id='register-main'
        className={`bg-white absolute left-1/2 -translate-x-1/2 w-full h-full max-w-[560px] max-h-[804px] py-10 px-5 md:py-60px md:px-30px rounded flex flex-col items-center justify-center transition-all duration-500 ${
          isRegisterModalOpen ? 'top-[7%]' : '-top-full'
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
          Register with your name, email and password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <!-- Name  --> */}
          <div className='relative inline-block w-full'>
            <input
              type='text'
              {...register('name', { required: 'Name is required' })}
              className='w-full text-sm leading-[15px] capitalize pl-70px md:pl-[84px] pr-4 py-3 sm:py-5 bg-#F2F2F2 text-#8B8582 placeholder-#8B8582 border-none focus:outline-none focus:ring-1 focus:ring-#A0CFA0 rounded'
              placeholder='Name'
            />
            {errors.name && (
              <span className='text-red-500'>{errors.name.message}</span>
            )}
            <img
              src='../../../../images/icons/icon-user-edit.svg'
              className='absolute z-20 left-0 top-2/4 -translate-y-2/4 flex items-center pl-5'
              alt=''
            />

            <span className='absolute inset-y-0 left-0 top-2/4 -translate-y-2/4 h-6 w-[1px] bg-#DEDEDE ml-50px md:ml-[60px]'></span>
          </div>
          {/* <!-- email  --> */}
          <div className='relative inline-block w-full mt-5'>
            <input
              type='email'
              {...register('email', { required: 'Email is required' })}
              className='w-full text-sm leading-[15px] capitalize pl-70px md:pl-[84px] pr-4 py-3 sm:py-5 bg-#F2F2F2 text-#8B8582 placeholder-#8B8582 border-none focus:outline-none focus:ring-1 focus:ring-#A0CFA0 rounded'
              placeholder='Email'
            />
            {errors.email && (
              <span className='text-red-500'>{errors.email.message}</span>
            )}

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
              id='passwordInputRegister'
              {...register('password', { required: 'Password is required' })}
              className='w-full text-sm leading-[15px] capitalize pl-70px md:pl-[84px] pr-4 py-3 sm:py-5 bg-#F2F2F2 text-#8B8582 placeholder-#8B8582 border-none focus:outline-none focus:ring-1 focus:ring-#A0CFA0 rounded'
              placeholder='Password'
            />
            {errors.password && (
              <span className='text-red-500'>{errors.password.message}</span>
            )}

            <img
              src='../../../../images/icons/icon-lock.svg'
              className='absolute z-20 left-0 top-2/4 -translate-y-2/4 flex items-center pl-5'
              alt=''
            />
            <img
              id='eyeIcon'
              src='../../../../images/icons/icon-eye.svg'
              className='absolute z-20 right-0 top-2/4 -translate-y-2/4 flex items-center pr-14px cursor-pointer transition-all duration-200'
              alt=''
            />
            <img
              id='closeEyeIcon'
              src='../../../../images/icons/icon-close-eye.svg'
              className='invisible absolute z-20 right-0 top-2/4 -translate-y-2/4 flex items-center pr-14px cursor-pointer transition-all duration-200'
              alt=''
            />

            <span className='absolute inset-y-0 left-0 top-2/4 -translate-y-2/4 h-6 w-[1px] bg-#DEDEDE ml-50px md:ml-[60px]'></span>
          </div>

          {/* Terms Checkbox */}
          <label htmlFor='terms-register' className='flex items-center mb-5'>
            <input
              type='checkbox'
              id='terms-register'
              {...register('terms', {
                required: 'You must agree to the terms',
              })}
              className='form-checkbox appearance-none text-#53615B w-3 h-3 md:w-18px md:h-18px border border-#53615B checked:border-none rounded-full focus:ring-#53615B outline-none ring-#53615B checked:ring-#53615B active:ring-#53615B transition duration-150 ease-in-out'
            />
            <span className='ml-6px font-medium text-xs md:text-sm text-#8B8582 leading-[14px]'>
              By signing up, you agree to our
              <a className='text-#5B9982 underline' href='privacy-policy.html'>
                terms
              </a>
              &amp;
              <a className='text-#5B9982 underline' href='privacy-policy.html'>
                policy
              </a>
            </span>
          </label>
          {errors.terms && (
            <span className='text-red-500'>{errors.terms.message}</span>
          )}

          <button className='btn-grad-green py-17px px-5 w-full rounded font-medium text-[15px] leading-[15px]'>
            Register Now
          </button>
        </form>
        <div className='w-full flex items-center py-5'>
          <div className='grow h-px bg-#F2F2F2'></div>
          <p className='text-sm leading-14px text-#4B4B4B px-30px'>Or</p>
          <div className='grow h-px bg-#F2F2F2'></div>
        </div>
        <div className='w-full flex flex-col space-y-15px'>
          <button className='bg-#F44336 hover:bg-#17201D text-white py-17px px-5 w-full rounded font-medium text-[15px] leading-[15px] flex gap-2 items-center justify-center'>
            <img src='../../../../images/icons/icon-google.svg' alt='' />
            Register With Google
          </button>
          <button className='bg-#847DD2 hover:bg-#17201D text-white py-17px px-5 w-full rounded font-medium text-[15px] leading-[15px] flex gap-2 items-center justify-center'>
            <img src='../../../../images/icons/icon-mobile.svg' alt='' />
            Register With Mobile
          </button>
        </div>
        <h3 className='pt-30px md:pt-60px leading-4 text-#4E5B56 tracking-[-0.32px]'>
          Already have an account?
          <span
            className='open-login close-register font-semibold text-#5B9982 hover:text-#17201D cursor-pointer'
            onClick={handleLoginClick}
          >
            Login
          </span>
        </h3>
        <button className='close-register absolute right-5 top-5 sm:hidden cursor-pointer'>
          <img src='../../../../images/icons/icon-close.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default Register;
