import React from 'react'
import { IfethedCharacters } from '../../services/@types'

type CharactersProps = {
  data?: IfethedCharacters
}

const Characters: React.FC<CharactersProps> = ({ data }) => {

  console.log(data)

  return (
    <div style={{ color: "#ffd" }}>
      CHARACTERS=+
    </div>
  )
}

export default Characters