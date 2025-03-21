import React from 'react'
import { useGetFilmsQuery } from '../services/swapi'

import Films from '../components/Films'
import Loader from '../components/Loader'

const FilmsPage: React.FC = () => {
  const { data, isError, isLoading } = useGetFilmsQuery(null)

  if (isLoading) {
    return <Loader />
  }

  return (
    <Films filmList={data?.results} />
  )
}

export default FilmsPage