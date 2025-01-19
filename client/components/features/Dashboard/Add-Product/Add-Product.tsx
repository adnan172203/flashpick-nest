'use client';

import React, { StrictMode, useState } from 'react';
import FilterColor from './components/Filter-Color';
import FilterSize from './components/Filter-Size';
import RichTextEditor from './components/Tex-editor';
import ImageUpload from './components/Image-Upload';
import { DescriptionType } from './components/Tex-editor';
import { handleImageUpload } from '@/utils/ImageUpload';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useUploadImageMutation } from '@/lib/api/imageUploadApi';
import {
  useAddProductMutation,
  useCreateTagMutation,
} from '@/lib/api/productApi';

interface Category {
  id: string;
  categoryName: string;
}

interface Tags {
  id: string;
}

interface ProductFormInput {
  name: string;
  description: string;
  price: number;
  quantity: number;
  sku: string;
  color: string[];
  size: string;
  stock: number;
  status: boolean;
  fullDescription: string;
  additionalText: string;
  categoryIds: string[];
  tags?: Tags[];
  categories?: Category[];
}

const Product = {
  name: '',
  categories: '',
  shortDescription: '',
  price: 0,
  quantity: 0,
  sku: '',
  color: '',
  size: '',
  fulllDescription: '',
  addtionalDescription: '',
  images: [],
  status: true,
};

const AddProduct = () => {
  // const [shortDescription, setShortDescription] = useState<string>('');

  const images = useSelector((state: RootState) => state.images.images);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormInput>();

  const [descriptions, setDescriptions] = useState({
    full: '',
    short: '',
    additional: '',
  });

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [tagArray, setTagArray] = useState<string[]>([]);

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const input = e.currentTarget;
      const value = input.value.trim();

      if (value && !tagArray.includes(value)) {
        setTagArray([...tagArray, value]);
        input.value = ''; // Clear the input
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTagArray(tagArray.filter((tag) => tag !== tagToRemove));
  };

  const handleColorChange = (color: string[]) => {
    setSelectedColors(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleContentChange = (value: string, type: DescriptionType) => {
    setDescriptions((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const [uploadImage, { isLoading, isError, error }] = useUploadImageMutation();
  const [
    addProduct,
    {
      isLoading: isAddingProduct,
      isError: isAddProductError,
      error: addProductError,
    },
  ] = useAddProductMutation();

  const [
    createTag,
    { isLoading: isAddingTag, isError: isAddTagError, error: addTagError },
  ] = useCreateTagMutation();

  const onSubmit: SubmitHandler<ProductFormInput> = async (data) => {
    try {
      // const tagData = await createTag({ name: data.name }).unwrap();

      const imageUrl = await handleImageUpload(images);

      // When sending the data:
      const tagData = await createTag({ name: tagArray }).unwrap();
      console.log('tagData==============>>>>>:', tagData);

      if (tagData.length > 0 && tagData.some((tag: Tags) => tag.id)) {
        const productData = {
          ...data,
          price: Number(data.price),
          quantity: Number(data.quantity),
          size: String(selectedSize),
          color: selectedColors,
          tags: tagData.map((tag: Tags) => ({ id: tag.id })),
          images: imageUrl.map((url) => ({ imageUrl: url })),
          fullDescription: descriptions.full,
          shortDescription: descriptions.short,
          additionalText: descriptions.additional,
        };

        await addProduct(productData).unwrap();
        console.log('Product Created successfully');
      }
    } catch (err) {
      console.error('Product Creation failed:', err);
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col 2xl:flex-row gap-6'>
              {/* <!-- upload an image    --> */}
              <div className='w-full 2xl:max-w-[606px] 2xl:min-w-[606px]'>
                <ImageUpload />
                <div
                  id='imagePreviewContainer'
                  className='flex flex-wrap gap-4 mt-30px'
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className='w-60px h-60px min-[608px]:w-[100px] min-[608px]:h-[100px] min-[796px]:w-[132px] min-[796px]:h-[146px] py-25px px-[23px] bg-[#F8F8F8] relative'
                    >
                      <img
                        src={image}
                        className='w-full h-full object-cover'
                        alt=''
                      />
                      <img
                        src='../../../images/icons/icon-close-solid.png'
                        className='max-[607px]:w-15px absolute top-0 right-0 min-[608px]:top-5px min-[608px]:right-5px cursor-pointer'
                        alt=''
                      />
                    </div>
                  ))}
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
                      {...register('name')}
                      className='w-full py-[22px] px-5 bg-[#F2F2F2] rounded border-none outline-none focus:ring-[#57AD8D] font-medium text-sm leading-15px text-[#17201D]'
                    />
                    {errors.name && (
                      <p className='text-red-500 text-xs mt-1'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className='w-full'>
                    <label
                      htmlFor='selectCategories'
                      className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block select-none'
                    >
                      Select Categories
                    </label>
                    <select
                      id='selectCategories'
                      {...register('categories')}
                      className='w-full py-[22px] px-5 bg-[#F2F2F2] rounded border-none outline-none focus:ring-[#57AD8D] font-medium text-sm leading-15px text-[#17201D] capitalize'
                    >
                      <option value='snacks'>snacks</option>
                      <option value='furniture'>furniture</option>
                      <option value='electronics'>electronics</option>
                    </select>
                    {errors.categories && (
                      <p className='text-red-500 text-xs mt-1'>
                        {errors.categories.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* <!-- Short Description  --> */}
                <div className='max-w-full break-words'>
                  <RichTextEditor
                    title='Short Description'
                    descriptionType='short'
                    register={register}
                    onChange={handleContentChange}
                  />
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
                        {...register('price')}
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
                        {...register('quantity')}
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
                      {...register('sku')}
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
                      {/* <input
                        id='tag-input-main'
                        type='text'
                        {...register('tags')}
                        placeholder='Enter tags'
                        className='py-4 px-0 border-none outline-none bg-transparent font-medium text-sm leading-15px text-#17201D focus:ring-0'
                      /> */}

                      <div className='bg-#F2F2F2 rounded p-2'>
                        <div className='flex flex-wrap gap-2 mb-2'>
                          {tagArray.map((tag, index) => (
                            <span
                              key={index}
                              className='bg-#57AD8D text-white px-2 py-1 rounded-full text-sm flex items-center gap-2'
                            >
                              {tag}
                              <button
                                type='button'
                                onClick={() => removeTag(tag)}
                                className='hover:text-red-500'
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                        <input
                          id='tag-input-main'
                          type='text'
                          onKeyDown={handleTagInput}
                          placeholder='press Enter or comma to add'
                          className='py-4 px-0 border-none outline-none bg-transparent font-medium text-sm leading-15px text-#17201D focus:ring-0 w-full'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Colors | Size  --> */}
                <div className='flex flex-col md:flex-row gap-6'>
                  <FilterColor onColorChange={handleColorChange} />
                  <FilterSize onSizeChange={handleSizeChange} />
                </div>
                {/* <!-- Full Description  --> */}
                <div className='max-w-full break-words'>
                  <RichTextEditor
                    title='Full Description'
                    descriptionType='full'
                    register={register}
                    onChange={handleContentChange}
                  />
                </div>
                {/* <!-- Additional Information  --> */}
                <div className='max-w-full break-words'>
                  <RichTextEditor
                    title='Additional Description'
                    descriptionType='additional'
                    register={register}
                    onChange={handleContentChange}
                  />
                </div>
                <button className='flex items-center gap-2 md:gap-10px p-10px md:px-6 md:py-15px bg-#5B9982 hover:bg-#57AD8D rounded font-medium text-xs md:text-[15px] leading-15px tracking-[-0.3px] text-white capitalize shadow-btn transition-colors duration-300 -translate-y-5px'>
                  <span className='whitespace-nowrap'>Add Product</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default AddProduct;
