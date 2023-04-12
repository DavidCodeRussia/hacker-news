import { TRootState } from "../store";

export const selectNews = (state: TRootState) => state.news.news;
