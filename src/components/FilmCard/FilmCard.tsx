import React from 'react'
import { Link } from 'react-router-dom'
import { IFilm } from '../../services/@types'
import { Card } from 'antd'
import { getFilmId } from '../../services/helpers'
import Meta from 'antd/es/card/Meta'
import Tilt from 'react-parallax-tilt'

type FilmCardProps = {
  film: IFilm,
  order: number
}

const FilmCard: React.FC<FilmCardProps> = ({ film, order }) => {

  return (
    <li style={{ cursor: "pointer" }}>
      <Link to={`${order}`}>
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
      </Link>
    </li>
  )
}

export default FilmCard