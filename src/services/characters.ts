import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IfethedCharacters } from './@types'

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  /* "https://swapi.py4e.com/api/" */
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({

    getCharacters: builder.query<IfethedCharacters, number>({
      query: (page) => {
        return `people/?page=${page}`
      }
    }),
  }),
})

export const { useGetCharactersQuery } = charactersApi