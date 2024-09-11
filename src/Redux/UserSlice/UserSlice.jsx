import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    value: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
      console.log("users", action.payload); 
    }
  }
});

export const { getUsers } = userSlice.actions;
export default userSlice.reducer;
