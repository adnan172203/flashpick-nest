'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const FilterColor = () => {
  const [selectedColors, setSelectedColors] = useState(new Set());
  const colors = [
    { id: 'navy', label: 'Navy Blue', class: 'bg-blue-600' },
    { id: 'teal', label: 'Teal', class: 'bg-teal-500' },
    { id: 'yellow', label: 'Yellow', class: 'bg-yellow-400' },
    { id: 'slate', label: 'Slate', class: 'bg-slate-500' },
    { id: 'darkblue', label: 'Dark Blue', class: 'bg-blue-900' },
    { id: 'pink', label: 'Pink', class: 'bg-pink-200' },
  ];

  const toggleColor = (colorId: string) => {
    const newSelected = new Set(selectedColors);
    if (newSelected.has(colorId)) {
      newSelected.delete(colorId);
    } else {
      newSelected.add(colorId);
    }
    setSelectedColors(newSelected);
  };
  return (
    <div className='w-full'>
      <h3 className='text-xs md:text-sm leading-15px text-#8B8582 pb-3 inline-block'>
        Filter By Color
      </h3>
      <ul className='flex items-center gap-10px'>
        {colors.map((color) => {
          const isSelected = selectedColors.has(color.id);
          return (
            <button
              key={color.id}
              onClick={() => toggleColor(color.id)}
              className={` w-6 h-6 rounded-full ${
                color.class
              } hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-200 flex items-center justify-center ${
                isSelected ? 'ring-2 ring-offset-2 ring-gray-400' : ''
              }`}
              aria-label={`Filter by ${color.label}`}
              aria-pressed={isSelected}
            >
              {isSelected && <Check className='w-4 h-4 text-white' />}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterColor;
