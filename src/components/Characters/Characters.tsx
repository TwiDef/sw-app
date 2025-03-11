import React from 'react'
import { IfethedCharacters } from '../../services/@types'
import CharCard from '../CharCard'

type CharactersProps = {
  data?: IfethedCharacters
}

const Characters: React.FC<CharactersProps> = ({ data }) => {

  console.log(data)

  return (
    <section style={{ marginTop: "10px", color: "#ffd" }}>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "1rem",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1
        }}>
        {data?.results?.map((char, i: number) => {
          return (
            <CharCard char={char} key={i} />
          )
        })}
      </ul>
    </section>
  )
}

export default Characters