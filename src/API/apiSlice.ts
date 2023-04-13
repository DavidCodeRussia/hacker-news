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
  text: string;
};

export const newsApiSlice = createApi({
  reducerPath: "newsApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hacker-news.firebaseio.com/v0/" }),
  endpoints: (builder) => ({
    getNews: builder.query<number[], void>({
      query: () => `newstories.json`,
    }),

    getLonelyNews: builder.query<TNews, number | string | undefined | "">({
      query: (id) => `item/${id}.json`,
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetNewsQuery, useGetLonelyNewsQuery } = newsApiSlice;
