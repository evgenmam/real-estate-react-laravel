import { Button } from '@chakra-ui/react'
import React from 'react'

export const SidebarBathrooms = ({ handlePropertyFilter, value, filter }) => {
  return (
    <Button
      _hover={{ bg: '#3347D2', color: 'white' }}
      h="56px"
      onClick={() => handlePropertyFilter({ bathrooms: value })}
      w="62px"
      sx={
        filter == value
          ? { bg: '#3347D2', color: 'white', span: { color: 'white' } }
          : ''
      }
    >
      {value}
    </Button>
  )
}
