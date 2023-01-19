import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISelectState {
  count: number;
  options: Array<string>;
}

const initialState:  ISelectState = {
  count: 0,
  options: ['test', 'test-1', 'test-2'],
}

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    addItem(state, action) {
      state.options.push(action.payload);
    },
    removeItem(state) {
      state.options.pop();
    }
  }
});

export default selectSlice.reducer;

export const {increment, decrement, removeItem, addItem} = selectSlice.actions;
