import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
  },
  reducers: {
    addition: (state, action) => {
      const { value1, value2 } = action.payload;
      state.value = Number(value1) + Number(value2);
    },
    subtraction: (state, action) => {
      const { value1, value2 } = action.payload;
      state.value = value1 - value2;
    },
    multiply: (state, action) => {
      const { value1, value2 } = action.payload;
      state.value = value1 * value2;
    },
    divide: (state, action) => {
      const { value1, value2 } = action.payload;
      state.value = value1 / value2;
    },

  },
});

export const { addition, subtraction , divide , multiply } = calculatorSlice.actions;
export default calculatorSlice.reducer;
