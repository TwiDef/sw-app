import React from 'react'
import { IfethedCharacters } from '../../services/@types'

type CharactersProps = {
  data?: IfethedCharacters
}

const Characters: React.FC<CharactersProps> = ({ data }) => {

  console.log(data)

  return (
    <section style={{ marginTop: "10px", color: "#ffd" }}>
      <ul>
        {data?.results?.map((char, i: number) => {
          return (
            <li key={i}>
              {char.name}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Characters