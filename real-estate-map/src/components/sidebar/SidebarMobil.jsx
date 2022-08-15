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

export const SidebarMobil = ({ onClose, isOpen }) => {
  return (
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
