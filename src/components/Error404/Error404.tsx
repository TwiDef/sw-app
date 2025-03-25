import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import deathstar from "./../../assets/death-star.png"

import "./Error404.css"

const Error404: React.FC = () => {
  let [letterSize, setLetterSize] = React.useState<number>(0)
  let [iconSize, setIconSize] = React.useState<number>(0)
  let [titleSize, setTitleSize] = React.useState<number>(0)
  const { screens } = useAppSelector(state => state.media)

  React.useEffect(() => {
    screens?.sm && (setLetterSize(120), setIconSize(100), setTitleSize(20))
    screens?.md && (setLetterSize(300), setIconSize(240), setTitleSize(30))
    screens?.lg && (setLetterSize(400), setIconSize(300), setTitleSize(50))
  }, [screens])

  return (
    <section style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh"
    }}>
      <div className="error__wrapper">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span
            style={{ fontSize: `${letterSize}px` }}
            className="error__letter">4</span>
          <img width={iconSize} src={deathstar} alt="O" />
          <span
            style={{ fontSize: `${letterSize}px` }}
            className="error__letter">4</span>
        </div>
        <h3
          style={{ fontSize: `${titleSize}px` }}
          className="error__title">You lost your own way, my son!</h3>
      </div>
    </section>
  )
}

export default Error404