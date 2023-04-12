import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TNews = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: Date;
  title: string;
  type: string;
  url: string;
};

export const newsApiSlice = createApi({
  reducerPath: "newsApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hacker-news.firebaseio.com/v0/" }),
  endpoints: (builder) => ({
    getNews: builder.query<TNews[], void>({
      query: () => `newstories.json`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApiSlice;
