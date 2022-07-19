import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePage(state, actions) {
      state.currentPage = actions.payload;
    },
  },
});

export const { changePage } = paginationSlice.actions;

export default paginationSlice.reducer;
