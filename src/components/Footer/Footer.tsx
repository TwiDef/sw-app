import React from 'react'
import { Layout } from "antd"

const Footer: React.FC = () => {
  const { Footer } = Layout

  return (
    <Footer style={{ textAlign: 'center', marginTop: "auto" }}>
      <div style={{ fontSize: "30px" }}>FOOTER</div>
    </Footer>
  );
};

export default Footer