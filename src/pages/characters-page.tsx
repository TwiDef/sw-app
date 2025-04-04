import React from 'react'
import { useGetCharactersQuery } from '../services/swapi'

import PageNavigation from '../components/PageNavigation'
import Characters from '../components/Characters'
import Loader from '../components/Loader'
import Error404 from '../components/Error404'

const CharactersPage: React.FC = () => {
  let [currentPage, setCurrentPage] = React.useState<number>(1)
  const { data, isError, isLoading, isFetching } = useGetCharactersQuery(currentPage)

  if (isLoading) {
    return <Loader />
  }

  if (isFetching) {
    return <Loader />
  }

  if (isError) {
    return <Error404 />
  }

  return (
    <section>
      <Characters data={data} />
      <PageNavigation
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalElements={data?.count} />
    </section>
  )
}

export default CharactersPage