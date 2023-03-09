import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, TAGS_TYPES } from "constants/api";
import baseQuery from "redux/baseQuery";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery,
  tagTypes: [TAGS_TYPES.characters],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ query, page }) =>
        query
          ? `${BASE_URL}/character?page=${page}&name=${query}`
          : `${BASE_URL}/character?page=${page}`,
      providesTags: [TAGS_TYPES.characters],
      transformResponse: (response) => ({
        characters: response.results,
        pages: response.info.pages,
      }),
    }),
    getCharacterById: builder.query({
      query: (id) => `${BASE_URL}/character/${id}`,
      transformResponse: (response) => {
        const {
          image,
          name,
          gender,
          status,
          origin: { name: origin },
          type,
          species,
        } = response;
        return {
          image,
          name,
          gender,
          status,
          origin,
          type,
          species,
        };
      },
    }),
  }),
});

export const { useGetCharacterByIdQuery, useGetCharactersQuery } = characterApi;
