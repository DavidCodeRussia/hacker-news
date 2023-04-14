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
    getNews: builder.query<number[], string>({
      query: (mock) => `newstories.json${mock}`,
    }),

    getLonelyNews: builder.query<TNews, number | string | undefined | "">({
      query: (id) => `item/${id}.json`,
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetNewsQuery, useGetLonelyNewsQuery } = newsApiSlice;
