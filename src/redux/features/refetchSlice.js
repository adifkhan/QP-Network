import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refetch: false,
};

export const refetchSlice = createSlice({
  name: "refetchSlice",
  initialState,
  reducers: {
    setRefetch: (state, { payload }) => {
      state.refetch = payload;
    },
  },
});

export const { setRefetcha } = refetchSlice.actions;
export default refetchSlice.reducer;
