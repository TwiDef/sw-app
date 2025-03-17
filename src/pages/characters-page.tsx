import React from 'react'
import Characters from '../components/Characters'
import { useGetCharactersQuery } from '../services/characters'

const CharactersPage: React.FC = () => {
  const [nextPage, setNextPage] = React.useState<string | null>(null)
  const [prevPage, setPrevPage] = React.useState<string | null>(null)

  const { data, error, isLoading } = useGetCharactersQuery(2)

  return (
    <Characters data={data} />
  )
}

export default CharactersPage