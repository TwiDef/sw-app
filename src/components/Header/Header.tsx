import React from "react"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks";
import { IheaderItem } from "../../types"
import { Layout } from "antd"

import "./Header.css";

const Header: React.FC = () => {
  const { Header } = Layout
  const { screens } = useAppSelector(state => state.media)

  const headerItems: IheaderItem[] = [
    {
      children: 'Home',
      to: '/'
    },
    {
      children: 'Characters',
      to: 'characters/?page=1'
    },
    {
      children: 'Films',
      to: 'films'
    },
    {
      children: 'Species',
      to: 'species/?page=1'
    },
    {
      children: 'Search',
      to: 'search'
    }
  ]

  return (
    <Header style={{
      background: "transparent",
      position: "relative",
      zIndex: 1,
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "64px",
      lineHeight: "1.5"
    }}>
      {screens?.md &&
        <div style={{ fontSize: "30px" }}>
          <nav>
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
        </div>
      }
    </Header>
  );
};

export default Header