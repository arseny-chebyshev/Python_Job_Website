import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const singleFetchVacancy = createAsyncThunk(
  "singleVacancy/singleFetchVacancy",
  async ({ id }) => {
    const { data } = await axios(`http://185.104.113.54:8000/api/vacancy/${id}/`);

    return data;
  }
);
export const AddFetchVacancy = createAsyncThunk(
  "singleVacancy/AddFetchVacancy",
  async ({ technologies }) => {
    const { data } = await axios(
      `http://185.104.113.54:8000/api/vacancy/?&technologies=${technologies}`
    );
    return data.results;
  }
);

const initialState = {
  vacancy: {},
  addVacancy: [],
  technologies: [],
};

export const singleVacancySlice = createSlice({
  name: "singleVacancy",
  initialState,
  reducers: {},
  extraReducers: {
    [singleFetchVacancy.pending]: (state) => {},
    [singleFetchVacancy.fulfilled]: (state, actions) => {
      state.vacancy = actions.payload;
      state.technologies = actions.payload.technologies[0];
    },
    [singleFetchVacancy.rejected]: (state) => {},

    [AddFetchVacancy.pending]: (state) => {
      state.addVacancy = [];
      state.technologies = [];
    },
    [AddFetchVacancy.fulfilled]: (state, actions) => {
      state.addVacancy = actions.payload;
    },
    [AddFetchVacancy.rejected]: (state) => {

    },
  },
});

export default singleVacancySlice.reducer;
