import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Drawer } from "antd"

const DrawerMenu: React.FC = () => {
  const { screens } = useAppSelector(state => state.media)
  const [isOpen, setIsOpen] = React.useState<boolean>(true)

  React.useEffect(() => {
    screens?.md ? setIsOpen(false) : setIsOpen(true)
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