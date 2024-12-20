import React, { useState, useRef, DragEvent } from 'react';
import { CloudUpload, ImageIcon } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { addImages } from '@/lib/features/dashboard/imageSlice';
import { handleImageUpload } from '@/utils/ImageUpload';

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  acceptedTypes?: string[];
}

const ImageUpload = ({
  onFileSelect,
  acceptedTypes = ['image/png', 'image/jpeg'],
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateFile = (file: File): boolean => {
    if (!acceptedTypes.includes(file.type)) {
      setError('Please upload only PNG or JPG files');
      return false;
    }
    setError('');
    return true;
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && validateFile(files[0])) {
      onFileSelect?.(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length && validateFile(files[0])) {
      onFileSelect?.(files[0]);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const newImageUrls = fileArray.map((file) => URL.createObjectURL(file));

      const filteredNewImages = newImageUrls.filter(
        (url) => !images.includes(url)
      );
      const updatedImages = [...images, ...filteredNewImages];
      setImages(updatedImages);
      dispatch(addImages(updatedImages));
    }
  };

  return (
    <div
      className={`
        w-full 2xl:max-w-[606px] 2xl:min-w-[606px] aspect-video
        rounded-lg border-2 border-dashed
        flex flex-col items-center justify-center
        transition-colors duration-200
        ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 bg-gray-50'
        }
        hover:bg-gray-100 cursor-pointer
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        multiple
        type='file'
        className='hidden'
        accept={acceptedTypes.join(',')}
        onChange={handleImageChange}
      />

      <CloudUpload
        className={`w-10 h-10 mb-2 ${
          isDragging ? 'text-blue-500' : 'text-gray-400'
        }`}
      />

      <p className='text-sm font-medium text-gray-700'>
        Upload an Image or drag and drop
      </p>
      <p className='text-xs text-gray-500 mt-1'>PNG, JPG</p>

      {error && <p className='text-xs text-red-500 mt-2'>{error}</p>}
    </div>
  );
};

export default ImageUpload;
