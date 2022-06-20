import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVacansies = createAsyncThunk(
  "vacansies/fetchVacansies",
  async ({ sortLevel, sortMode, sortRemote }) => {
    const { data } = await axios(
      `http://localhost:8000/api/vacancy/?${sortLevel}${sortMode}${sortRemote}`
    );
    console.log(data);
    return data;
  }
);
export const vacansiesCounter = createAsyncThunk(
  "vacansies/vacansiesCounter",
  async () => {
    const { data } = await axios(`http://localhost:8000/api/vacancy/`);
    return data.count;
  }
);

const initialState = {
  vacansies: [],
  isLoading: true,
  counter: null,
};

export const vacansiesSlice = createSlice({
  name: "vacansies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVacansies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchVacansies.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.vacansies = actions.payload.results;
    },
    [fetchVacansies.rejected]: (state) => {
      state.isLoading = true;
      console.log("error");
    },

    [vacansiesCounter.pending]: (state) => {},
    [vacansiesCounter.fulfilled]: (state, actions) => {
      state.counter = actions.payload;
    },
    [vacansiesCounter.rejected]: (state) => {
      state.counter = 0;
    },
  },
});

export const {} = vacansiesSlice.actions;

export default vacansiesSlice.reducer;
