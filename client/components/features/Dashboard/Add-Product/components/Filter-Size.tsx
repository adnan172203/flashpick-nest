'use client';
import React, { useState, useEffect } from 'react';

interface SizeFilterProps {
  onSizeChange: (value: string) => void;
}

const FilterSize = ({ onSizeChange }: SizeFilterProps) => {
  const [selectedSize, setSelectedSize] = useState('S');

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  useEffect(() => {
    onSizeChange(selectedSize);
  }, []);

  return (
    <div className='flex flex-col gap-2 justify-start w-full'>
      <label className='text-xs md:text-sm leading-15px text-#8B8582'>
        Size
      </label>
      <div className='flex gap-2'>
        {sizes.map((size) => (
          <button
            type='button'
            key={size}
            onClick={() => setSelectedSize(size)}
            className={` w-12 h-12 flex items-center justify-center border border-gray-200 text-sm font-medium 
transition-colors ${
              selectedSize === size
                ? 'border-2 border-[#3ec1b6] bg-white text-black'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSize;
