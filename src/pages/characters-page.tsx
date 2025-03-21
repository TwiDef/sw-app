import React from 'react'
import { useGetCharactersQuery } from '../services/swapi'
import PageNavigation from '../components/PageNavigation'
import Characters from '../components/Characters'
import Loader from '../components/Loader'

const CharactersPage: React.FC = () => {
  let [currentPage, setCurrentPage] = React.useState<number>(1)
  const { data, isError, isLoading, isFetching } = useGetCharactersQuery(currentPage)

  if (isLoading) {
    return <Loader />
  }

  if (isFetching) {
    return <Loader />
  }

  return (
    <>
      <Characters data={data} />
      <PageNavigation
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalElements={data?.count} />
    </>
  )
}

export default CharactersPage