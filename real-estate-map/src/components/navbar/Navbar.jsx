import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Avatar,
  Hide,
  Button,
  Icon,
} from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'

export const Navbar = ({ onOpen }) => {
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
        <Hide above="lg">
          <Button variant="icon" onClick={onOpen}>
            <Icon
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                fill="white"
              />
            </Icon>
          </Button>
        </Hide>
      </Heading>

      <BellIcon color="white" w="24px" h="24px" />
      <Avatar h="50px" w="50px" />
      <Box textColor="white">Name</Box>
    </Flex>
  )
}
