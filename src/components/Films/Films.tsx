import React from 'react'
import { IFilm } from '../../services/@types'

import FilmCard from '../FilmCard'

type FilmsProps = {
  filmList?: Array<IFilm>
}

const Films: React.FC<FilmsProps> = ({ filmList }) => {

  console.log(filmList)

  return (
    <section style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 1,
      marginTop: "10px"
    }}>
      <ul
        style={{
          maxWidth: "1060px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1
        }}>
        {
          filmList?.map((film) => {
            return <FilmCard key={film.episode_id} film={film} />
          })
        }
      </ul>
    </section>
  )
}

export default Films