import React from 'react'
import MainTitle from '../components/MainTitle'

const Home: React.FC = () => {

  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh"
    }}>
      <MainTitle />
    </section>
  )
}

export default Home