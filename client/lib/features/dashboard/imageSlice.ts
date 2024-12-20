import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
  images: string[];
  imageUrls: string[];
}

const initialState: ImageState = {
  images: [],
  imageUrls: [],
};

export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: (state, action: PayloadAction<string[]>) => {
      const newImages = action.payload.filter(
        (image) => !state.images.includes(image)
      );
      state.images = [...state.images, ...newImages];
    },
    removeImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter((image) => image !== action.payload);
    },
    clearImages: (state) => {
      state.images = [];
    },
  },
});

export const { addImages, removeImage, clearImages } = imageSlice.actions;

export default imageSlice.reducer;
