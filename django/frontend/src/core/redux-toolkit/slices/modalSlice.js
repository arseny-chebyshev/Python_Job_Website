import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal_filters: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open_modal_filters: (state) => {
      state.modal_filters = true;
    },
    close_modal_filters: (state) => {
      state.modal_filters = false;
    },
  },
});

export const { open_modal_filters, close_modal_filters } = modalSlice.actions;

export default modalSlice.reducer;
