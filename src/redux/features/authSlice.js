import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.auth = payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
