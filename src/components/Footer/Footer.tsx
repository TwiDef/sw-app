import React from 'react'
import { Layout } from "antd"

const Footer: React.FC = () => {
  const { Footer } = Layout

  return (
    <Footer style={{
      marginTop: "auto",
      height: "64px",
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "inherit"
    }}>
      <div style={{ fontSize: "30px", color: "#ffff92" }}>FOOTER</div>
    </Footer>
  )
}

export default Footer