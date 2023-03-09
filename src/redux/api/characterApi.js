import { createApi } from "@reduxjs/toolkit/query/react";
import { CHARACTER_URL, TAGS_TYPES } from "constants/api";
import baseQuery from "redux/baseQuery";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery,
  tagTypes: [TAGS_TYPES.characters],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ query, page }) =>
        query
          ? `${CHARACTER_URL}?page=${page}&name=${query}`
          : `${CHARACTER_URL}?page=${page}`,
      providesTags: [TAGS_TYPES.characters],
      transformResponse: (response) => ({
        characters: response.results,
        pages: response.info.pages,
      }),
    }),
    getCharacterById: builder.query({
      query: (id) => `${CHARACTER_URL}/${id}`,
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
