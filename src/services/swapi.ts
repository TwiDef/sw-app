import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Icharacter, IfethedCharacters, IfethedFilms, IFilm } from './@types'

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

    getSingleChar: builder.query<Icharacter, string>({
      query: (id) => {
        return `people/${id}`
      }
    }),

    getFilms: builder.query<IfethedFilms, null>({
      query: () => {
        return "films"
      }
    }),

    getSingleFilm: builder.query<IFilm, string>({
      query: (id) => {
        return `films/${id}`
      }
    }),

  }),
})

export const {
  useGetCharactersQuery,
  useGetSingleCharQuery,
  useGetFilmsQuery,
  useGetSingleFilmQuery } = swapi