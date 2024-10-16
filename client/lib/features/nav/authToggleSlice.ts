// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer

// store/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isRegisterModalOpen: boolean;
  isLoginModalOpen: boolean;
}

const initialState: ModalState = {
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
};

const authModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleRegisterModal: (state: ModalState) => {
      state.isRegisterModalOpen = !state.isRegisterModalOpen;
    },
    toggleLoginModal: (state: ModalState) => {
      state.isLoginModalOpen = !state.isLoginModalOpen;
    },
  },
});

export const { toggleRegisterModal, toggleLoginModal } = authModalSlice.actions;
export default authModalSlice.reducer;
