import { configureStore } from '@reduxjs/toolkit';
import authModalReducer from './features/nav/authToggleSlice';
import imageReducer from './features/dashboard/imageSlice';
import addProductReducer from './features/dashboard/addProductSlice';
import { authApi } from './api/authApi';
import { imageApi } from './api/imageUploadApi';
import { productApi } from './api/productApi';

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: authModalReducer,
      [authApi.reducerPath]: authApi.reducer,

      images: imageReducer,
      [imageApi.reducerPath]: imageApi.reducer,

      product: addProductReducer,
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(productApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
