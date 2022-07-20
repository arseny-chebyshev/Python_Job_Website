import { configureStore } from "@reduxjs/toolkit";
import vacansiesSlice from "../slices/vacansiesSlice";
import filterSlice from "../slices/filterSlice";
import paginationSlice from "../slices/paginationSlice";
import singleVacancySlice from "../slices/singleVacancy";
import modalSlice from "../slices/modalSlice";

export const store = configureStore({
  reducer: {
    vacansies: vacansiesSlice,
    filter: filterSlice,
    pagination: paginationSlice,
    singleVacancy: singleVacancySlice,
    modal: modalSlice,
  },
});
