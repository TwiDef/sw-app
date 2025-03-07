import React from 'react'
import MainTitle from '../components/MainTitle'

const HomePage: React.FC = () => {

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

export default HomePage