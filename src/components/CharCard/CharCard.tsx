import React from "react"
import { Icharacter } from "../../services/@types"
import { getCharId } from "../../services/helpers"
import { Link } from "react-router-dom"

import "./CharCard.css"

type CharCardProps = {
  char: Icharacter
}

const CharCard: React.FC<CharCardProps> = ({ char }) => {

  return (
    <li style={{ listStyleType: "none" }}>
      <article className="card">
        <div className="card-inner">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: (`url(./src/assets/chars-img/${(getCharId(char.url))}.jpg`)
            }}
            className="card-front">
            <h6 className="card-front__title">{char.name}</h6>
          </div>
          <div className="card-back">
            <div className="card-back__img">
              <img src={`./src/assets/chars-img/${(getCharId(char.url))}.jpg`} alt="char" />
            </div>
            <div className="card-back__about">
              <div className="card-back__stat">
                <h6>name:</h6>
                <span>{char.name}</span>
              </div>

              {char.birth_year &&
                <div className="card-back__stat">
                  <h6>birth year:</h6>
                  <span>{char.birth_year}</span>
                </div>
              }
              {char.gender &&
                <div className="card-back__stat">
                  <h6>gender:</h6>
                  <span>{char.gender}</span>
                </div>
              }
              {char.height &&
                <div className="card-back__stat">
                  <h6>height:</h6>
                  <span>{char.height}</span>
                </div>
              }
              {char.mass &&
                <div className="card-back__stat">
                  <h6>mass:</h6>
                  <span>{char.mass}</span>
                </div>
              }
            </div>
            <Link
              className="card-back__btn"
              to={`/characters/${getCharId(char.url)}`}>
              more info
            </Link>
          </div>

        </div>
      </article>
    </li>
  );
};

export default CharCard;