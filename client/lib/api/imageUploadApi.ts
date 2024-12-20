import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      async queryFn(images, { getState }, extraOptions, baseQuery) {
        try {
          // Prepare FormData
          const data = new FormData();
          if (images && images.length > 0) {
            images.forEach((image: File, index: number) => {
              data.append(`file${index}`, image);
            });
          }

          // Append environment-specific data
          if (process.env.UPLOAD_PRESET) {
            data.append('upload_preset', process.env.UPLOAD_PRESET);
          }
          if (process.env.CLOUD_NAME) {
            data.append('cloud_name', process.env.CLOUD_NAME);
          }

          // Check if CLOUDINARY_URL is provided
          if (!process.env.CLOUDINARY_URL) {
            return {
              error: { status: 400, data: 'CLOUDINARY_URL is not defined' },
            };
          }

          // Make the request using axios
          const response = await axios.post(process.env.CLOUDINARY_URL, data);
          const mediaUrl = response.data.url;

          return { data: mediaUrl };
        } catch (error: unknown) {
          if (error instanceof Error) {
            return {
              error: {
                status: (error as any).response?.status,
                data: error.message,
              },
            };
          }
          return { error: { status: 500, data: 'An unknown error occurred' } };
        }
      },
    }),
  }),
});

export const { useUploadImageMutation } = imageApi;
