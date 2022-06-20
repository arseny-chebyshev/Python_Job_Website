import { configureStore } from "@reduxjs/toolkit";
import vacansiesSlice from "../slices/vacansiesSlice";
import filterSlice from "../slices/filterSlice";

export const store = configureStore({
  reducer: {
    vacansies: vacansiesSlice,
    filter: filterSlice,
  },
});
