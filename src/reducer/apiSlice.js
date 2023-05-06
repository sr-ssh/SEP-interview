import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" });

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => ({
                url: "?apikey=7d96d0a8&s=all",
            }),
        }),
    }),
});

export const { useGetMoviesQuery } = apiSlice;
