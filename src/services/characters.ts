import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IfethedCharacters } from './@types'

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.py4e.com/api/" }),
  endpoints: (builder) => ({

    getCharacters: builder.query<IfethedCharacters, void>({
      query: () => {
        return `people/`
      }
    }),
  }),
})

export const { useGetCharactersQuery } = charactersApi