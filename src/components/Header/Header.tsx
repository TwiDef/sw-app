import React from "react"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"
import { MenuOutlined } from "@ant-design/icons"
import { Button, Layout } from "antd"
import { headerItems } from "./HeaderItems"

import "./Header.css"

type HeaderProps = {
  setIsOpen: (prev) => void
}

const Header: React.FC<HeaderProps> = ({ setIsOpen }) => {
  const { Header } = Layout
  const { screens } = useAppSelector(state => state.media)

  return (
    <Header style={{
      background: "transparent",
      position: "relative",
      zIndex: 1,
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: screens?.md ? "center" : "end",
      paddingRight: screens?.md ? "0" : "10px",
      height: "64px",
      lineHeight: "1.5"
    }}>
      {screens?.md ?
        <nav className="header-nav">
          <ul style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {headerItems.map((item, i: number) => {
              return (
                <li
                  style={{ listStyleType: "none" }}
                  key={i}>
                  <NavLink
                    to={item.to}>
                    {item.children}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
        :
        <Button
          onClick={() => setIsOpen((prev: boolean) => !prev)}
          size="large"
          style={{ background: "#ffff92" }}
          icon={<MenuOutlined style={{ color: "#000" }} />} />
      }
    </Header>
  )
}

export default Header