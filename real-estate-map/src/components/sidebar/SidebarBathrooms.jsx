import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { PropertyContext } from '../../App'

export const SidebarBathrooms = ({ handlePropertyFilter, value, filter }) => {
  const { filters, setFilters, setProperties } = useContext(PropertyContext)

  return (
    <Button
      _hover={{ bg: '#3347D2', color: 'white' }}
      h="56px"
      onClick={() => setFilters((filter) => ({ ...filter, bathrooms: value }))}
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
