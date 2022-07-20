import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal_filters: false,
  modal_burger:true,
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
    open_burger: (state) => {
      state.modal_burger= !state.modal_burger;
    },
    burger_close: (state) => {
      if (!state.modal_burger) state.modal_burger= true;
    },


  },
});

export const { open_modal_filters, close_modal_filters,open_burger,burger_close } = modalSlice.actions;

export default modalSlice.reducer;
