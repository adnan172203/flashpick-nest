'use client';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
// import './RichTextEditor.css'; // Optional custom styles (defined below)

interface RichTextEditorProps {
  title: string;
  descriptionType: DescriptionType;
  onChange: (value: string, type: DescriptionType) => void;
  register: any;
}

export type DescriptionType = 'full' | 'short' | 'additional';
const RichTextEditor = ({
  title,
  descriptionType,
  onChange,
  register,
}: RichTextEditorProps) => {
  const [content, setContent] = useState<string>('');

  // Function to handle editor content changes
  const handleContentChange = (value: string) => {
    setContent(value);
    onChange(value, descriptionType);
  };

  // Custom toolbar options
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'], // Text formatting options
      [{ header: [1, 2, 3, false] }], // Headers: H1, H2, H3
      [{ list: 'ordered' }, { list: 'bullet' }], // Lists: Ordered, Bullet
      ['link', 'image'], // Insert options
      ['clean'], // Clear formatting
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'link',
    'image',
  ];

  return (
    <>
      <div className='w-full mx-auto mt-10'>
        <label
          htmlFor='editor'
          className='text-xs md:text-sm leading-15px text-#8B8582 mb-4'
        >
          {title}
        </label>
        <div className='rounded-lg shadow-sm bg-white border-red-600 mt-2'>
          <ReactQuill
            id='editor' // Unique ID
            value={content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            theme='snow'
            className='h-[200px] bg-[#f2f2f2]'
          />
        </div>
      </div>
    </>
  );
};
export default RichTextEditor;
