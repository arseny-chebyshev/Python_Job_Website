import { createSlice } from "@reduxjs/toolkit";

// qualification: "Любая",
// mode: "Любой",
// remote: false,
// relocation: false,
// salary: "",
// technology: "",

const initialState = {
  filters: {},
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLevel(state, actions) {
      actions.payload !== "Любая"
        ? (state.filters.qualification = actions.payload)
        : delete state.filters.qualification;
    },
    setMode(state, actions) {
      actions.payload !== "Любой"
        ? (state.filters.mode = actions.payload)
        : delete state.filters.mode;
    },
    setSalary(state, actions) {
      state.filters.salary = actions.payload;
    },
    setRemote(state, actions) {
      actions.payload
        ? (state.filters.remote = "Удаленная работа")
        : delete state.filters.remote;
    },
    setRelocation(state, actions) {
      actions.payload
        ? (state.filters.relocation = "С релокацией")
        : delete state.filters.relocation;
    },
    setTechnologies: (state, actions) => {
      const { name, pick } = actions.payload;
      pick
        ? (state.filters.technologies = name)
        : delete state.filters.technologies;
    },
    delFilters(state, actions) {
      delete state.filters[actions.payload];
    },
    clearFilters(state) {
      state.filters = {};
    },
  },
});

export const {
  setLevel,
  setMode,
  setRemote,
  setSalary,
  setRelocation,
  delFilters,
  setTechnologies,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
