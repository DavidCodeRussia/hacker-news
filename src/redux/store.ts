import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { newsApiSlice } from "../API/apiSlice";
import newsSlice from "./newsSlice";

const store = configureStore({
  reducer: {
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
    news: newsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApiSlice.middleware),
});

setupListeners(store.dispatch);

type FuncType = typeof store.getState;
export type TRootState = ReturnType<FuncType>;
export type AppDispatch = typeof store.dispatch;

export default store;
