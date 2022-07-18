import React from 'react'
import { Flex, Box, Heading, Avatar, Icon } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'

export const Navbar = () => {
  return (
    <Flex
      bg="#3347D2"
      h="80px"
      px="20px"
      py="18px"
      alignItems="center"
      gap="16px"
      justify="end"
    >
      <Heading textColor="white" marginInlineEnd="auto">
        Real State
      </Heading>
      <BellIcon color="white" w="24px" h="24px" />
      <Avatar h="50px" w="50px" />
      <Box textColor="white">Name</Box>
    </Flex>
  )
}
