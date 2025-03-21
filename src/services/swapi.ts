import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IfethedCharacters, IfethedFilms } from './@types'

export const swapi = createApi({
  reducerPath: "swapi",
  /* "https://swapi.py4e.com/api/" */
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({

    getCharacters: builder.query<IfethedCharacters, number>({
      query: (page) => {
        return `people/?page=${page}`
      }
    }),

    getFilms: builder.query<IfethedFilms, null>({
      query: () => {
        return "films"
      }
    }),

  }),
})

export const { useGetCharactersQuery, useGetFilmsQuery } = swapi