import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleCharQuery } from '../services/swapi'

import Loader from '../components/Loader'
import Error404 from '../components/Error404'

const SingleCharPage: React.FC = () => {
  const params = useParams()
  const id = params.id
  const { data, isLoading, isError } = useGetSingleCharQuery(id!)

  console.log(data)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error404 />
  }

  return (
    <section style={{ position: "relative" }}>
      <div>{id}</div>
    </section>
  )
}

export default SingleCharPage