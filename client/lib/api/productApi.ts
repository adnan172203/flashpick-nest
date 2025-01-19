import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie'; // Assuming you're using js-cookie

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    credentials: 'include', // Include cookies with requests
    prepareHeaders: (headers) => {
      // Retrieve the token from cookies
      const accessToken = Cookies.get('access_token'); // Make sure the key matches your cookie name

      console.log('Access Token:', accessToken); // Debugging output

      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productData) => ({
        url: '/product/create',
        method: 'POST',
        body: productData,
      }),
    }),

    // create tag endpoint
    createTag: builder.mutation({
      query: (tagData) => ({
        url: '/tags/create',
        method: 'POST',
        body: tagData,
      }),
    }),
  }),
});

export const { useAddProductMutation, useCreateTagMutation } = productApi;
