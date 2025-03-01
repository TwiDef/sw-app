import React from 'react'
import { Drawer } from "antd"
import { Grid } from "antd"

const DrawerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()

  React.useEffect(() => {
    screens.sm ? setIsOpen(false) : setIsOpen(true)
  }, [screens])


  return (
    <Drawer
      open={isOpen}
      onClose={() => setIsOpen(prev => !prev)}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default DrawerMenu