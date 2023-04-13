import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useDispatch } from "react-redux";
import { newsApiSlice } from "../API/apiSlice";
import newsSlice from "./newsSlice";

const store = configureStore({
  reducer: {
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
    news: newsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApiSlice.middleware),
});

// setupListeners(store.dispatch);

type FuncType = typeof store.getState;

export type TRootState = ReturnType<FuncType>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
