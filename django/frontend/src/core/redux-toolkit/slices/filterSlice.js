import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qualification: "Любая",
  mode: "Любой",
  remote: false,
  salary: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLevel(state, actions) {
      state.qualification = actions.payload;
    },
    setMode(state, actions) {
      state.mode = actions.payload;
    },
    setRemote(state, actions) {
      state.remote = actions.payload;
    },
    setSalary(state, actions) {
      state.salary = actions.payload;
    },
  },
});

export const { setLevel, setMode, setRemote,setSalary } = filterSlice.actions;

export default filterSlice.reducer;
