import React from 'react'
import { Layout } from "antd"

const Header: React.FC = () => {
  const { Header } = Layout

  return (
    <Header style={{ padding: 0, textAlign: "center" }}>
      <div style={{ color: "#fff", fontSize: "30px" }}>HEADER</div>
    </Header>
  );
};

export default Header