import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  categories: string;
  shortDescription: string;
  price: number;
  quantity: number;
  sku: string;
  color: string;
  size: string;
  fulllDescription: string;
  addtionalDescription: string;
}

interface AddProductState {
  products: Product[];
  tags: string[];
}

const initialState: AddProductState = {
  products: [],
  tags: [],
};

const addProductSlice = createSlice({
  name: 'addProduct',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    // create tag
    createTag: (state, action: PayloadAction<string>) => {
      console.log('tags reducer==>>>:', action.payload);
      state.tags.push(action.payload);
    },
  },
});

export const { addProduct, removeProduct } = addProductSlice.actions;

export default addProductSlice.reducer;
