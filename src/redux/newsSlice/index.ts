import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TNewsSlice, TItems } from './types';

const initialState: TNewsSlice = {
  items: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<TItems[]>) => {
      state.items = action.payload
        .map((item) => ({ ...item, id: uuidv4(), serialNumber: item }))
        .filter((elem, index) => index < 100);
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
