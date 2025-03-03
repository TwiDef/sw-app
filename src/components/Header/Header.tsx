import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout } from "antd"
import { headerItem } from '../../types'

const Header: React.FC = () => {
  const { Header } = Layout

  const headerItems: headerItem[] = [
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
      <div style={{ fontSize: "30px" }}>
        <nav>
          <ul style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {headerItems.map((item, i: number) => {
              return (
                <li key={i}>
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
    </Header>
  );
};

export default Header