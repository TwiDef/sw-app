import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Drawer } from "antd"
import { NavLink } from 'react-router-dom'
import { headerItems } from '../Header/HeaderItems'

import "./DrawerMenu.css"

type DrawerMenuProps = {
  isOpen: boolean,
  setIsOpen: (prev) => void
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, setIsOpen }) => {
  const { screens } = useAppSelector(state => state.media)

  React.useEffect(() => {
    screens?.md && setIsOpen(false)
  }, [screens])

  return (
    <Drawer
      style={{ background: "#4b4b4b", }}
      open={isOpen}
      onClose={() => setIsOpen(prev => !prev)}>
      <div style={{ fontSize: "30px" }}>
        <nav>
          <ul style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            {headerItems.map((item, i: number) => {
              return (
                <li
                  style={{ listStyleType: "none" }}
                  key={i}>
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    to={item.to}>
                    {item.children}
                  </NavLink>
                </li>
              )
            })}
            <img
              width={40}
              alt="sw-icon"
              src="https://cdn-icons-png.flaticon.com/512/3873/3873296.png" />
          </ul>
        </nav>
      </div>
    </Drawer>
  );
};

export default DrawerMenu