import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OPTIONS, IOptions, IOption} from "../data";

interface ISelectState {
  tags: IOptions;
  options: IOptions;
  multi: boolean;
}

const initialState: ISelectState = {
  tags: [],
  options: OPTIONS,
  multi: true,
}

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setMulti(state, action: PayloadAction<boolean>) {
      state.multi = action.payload;
    },
    setOptions(state, action: PayloadAction<IOptions>) {
      state.options = action.payload;
    },
    addTag(state, action: PayloadAction<IOption>) {
      if (state.multi) {
        state.tags.push(action.payload);
      } else {
        state.tags = [action.payload];
      }
    },
    deleteTag(state, action: PayloadAction<string>) {
      state.tags.filter(tag => tag.id !== action.payload);
    },
  }
});

export default selectSlice.reducer;

export const {setMulti, setOptions, addTag, deleteTag} = selectSlice.actions;
