import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleFilmQuery } from '../services/swapi'
import Loader from '../components/Loader'
import Error404 from '../components/Error404'

const SingleFilmPage: React.FC = () => {
  const params = useParams()
  const id = params.id
  const { data, isLoading, isError } = useGetSingleFilmQuery(id!)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error404 />
  }

  return (
    <section style={{ position: "relative" }}>
      <img src={`./src/assets/movies-img/${id}.jpg`} />
    </section>
  )
}

export default SingleFilmPage