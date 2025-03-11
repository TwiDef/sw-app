import React from "react"
import { Icharacter } from "../../services/@types"
import { getCharId } from "../../services/helpers"

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
              backgroundImage: (`url(./src/assets/chars-img/${(getCharId(char.url)
                .match(/\d/g))
                ?.join("")}.jpg`)
            }}
            className="card-front">
            <h6 className="card-front__title">{char.name}</h6>
          </div>
          <div className="card-back">
            <p>Back Side</p>
          </div>
        </div>
      </article>
    </li>
  );
};

export default CharCard;