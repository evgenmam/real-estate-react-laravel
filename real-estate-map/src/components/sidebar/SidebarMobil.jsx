import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from './Sidebar'
//   import { NavMenu } from './NavMenu'

export const SidebarMobil = ({ onClose, isOpen }) => {
  return (
    // <Drawer onClose={onClose} isOpen={isOpen} size="full">
    //   <DrawerOverlay />
    //   <DrawerContent bg="blue.secondary">
    //     <DrawerCloseButton color="white" />
    //     <DrawerHeader color="white">Menu</DrawerHeader>
    //     <DrawerBody>
    //       <Sidebar />
    //       {/* <Sideba onHandleCloseMenu={handleCloseMenu} /> */}
    //     </DrawerBody>
    //   </DrawerContent>
    // </Drawer>

    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody p="0">
          <Sidebar />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )

  function handleCloseMenu() {
    onClose()
  }
}
