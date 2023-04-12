import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { TNewsSlice, TNews } from "./types";

const initialState: TNewsSlice = {
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<TNews[]>) => {
      state.news = action.payload
        .map((item) => ({ ...item, id: uuidv4() }))
        .filter((elem, index) => index < 101);
    },
  },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
