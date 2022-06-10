import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  check: false,
  vacancy: [
    {
      role: "React Native Developer",
      salary: "от 50 000",
      level: "Junior",
      mode: "Полный день, удалённая работа",
      location: "Россия, Москва",
      techology: ["ReactJS", "Docker"],
    },
    {
      role: "Python Developer",
      salary: "от 100 000 до 150 000",
      level: "Junior",
      mode: "Частичная занятость, удалённая",
      location: "Беларусь, Минск",
      techology: ["Python", "Django"],
    },
    {
      role: " JavaScript developer",
      salary: "от 90 000 до 130 000",
      level: "Junior",
      mode: "Полный день, офис",
      location: "Россия, Казань",
      techology: ["JS ES6+", "Angular", "Redux"],
    },
  ],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    distantWork_filter(state) {
      state.check = !state.check;

    },
  },
});

export const { distantWork_filter } = filterSlice.actions;

export default filterSlice.reducer;
