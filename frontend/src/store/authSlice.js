import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  user: null,
  otp: {
    phone: '',
    hash: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      //
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
