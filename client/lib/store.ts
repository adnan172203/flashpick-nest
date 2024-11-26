import { configureStore } from '@reduxjs/toolkit';
import authModalReducer from './features/nav/authToggleSlice';
import imageReducer from './features/dashboard/imageSlice';
import { authApi } from './api/authApi';

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: authModalReducer,
      [authApi.reducerPath]: authApi.reducer,
      images: imageReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
