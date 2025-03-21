import React from 'react'
import { IFilm } from '../../services/@types'
import { Card } from 'antd'
import { getFilmId } from '../../services/helpers'
import Meta from 'antd/es/card/Meta'
import Tilt from 'react-parallax-tilt'

type FilmCardProps = {
  film: IFilm
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <li>
      <Tilt>
        <Card
          style={{ width: 240 }}
          cover={
            <img alt="film-cover"
              src={`./src/assets/movies-img/${(getFilmId(film.url).match(/\d/g))?.join("")}.jpg`}
            />}>
          <Meta title={film.title} description="swapi-app" />
        </Card>
      </Tilt>
    </li>
  )
}

export default FilmCard