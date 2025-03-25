import React from 'react'
import { useGetFilmsQuery } from '../services/swapi'

import Films from '../components/Films'
import Loader from '../components/Loader'
import Error404 from '../components/Error404'

const FilmsPage: React.FC = () => {
  const { data, isError, isLoading } = useGetFilmsQuery(null)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error404 />
  }

  return (
    <Films filmList={data?.results} />
  )
}

export default FilmsPage