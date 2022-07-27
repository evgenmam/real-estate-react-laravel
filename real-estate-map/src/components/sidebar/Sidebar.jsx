import React, { useMemo, useState } from 'react'

import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { api } from '../utils/api'
import { useContext } from 'react'
import { PropertyContext } from '../../App'
import debounce from 'lodash.debounce'
import { SidebarRooms } from './SidebarRooms'
import { SidebarBathrooms } from './SidebarBathrooms'
import { SidebarPrice } from './SidebarPrice'
import { PropertyType } from './PropertyType'

export const Sidebar = () => {
  const [search, setSearch] = useState('')

  const buttons = [1, 2, 3, 4, 5]

  const { filters, setFilters } = useContext(PropertyContext)
  const [min, max] = filters.price

  function handlePropertyFilter(filter) {
    setFilters((f) => ({ ...f, ...filter }))
  }

  function handleInputChange({ target }) {
    setSearch(target.value)
  }

  // const debouncedResults = useMemo(() => {
  //   return debounce(handleInputChange, 300)
  // }, [])

  // useEffect(() => {
  //   if (search !== '') {
  //     api
  //       .get('search', {
  //         searchParams: { text: search },
  //       })
  //       .json()
  //       .then(({ data }) => {
  //         setProperties(data)
  //       })
  //   }
  //   return debouncedResults.cancel()
  // })

  return (
    <Box
      maxW={{ sm: '340px', xl: '400px', '2xl': '472px' }}
      h="full"
      bg="white"
      px="40px"
      paddingBlockStart="30px"
      flexShrink="0"
      overflow="auto"
    >
      <InputGroup bg="gray.100" rounded="30px">
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          type="text"
          placeholder="Search"
          rounded="inherit"
          onInput={handleInputChange}
        />
      </InputGroup>

      <PropertyType />

      <SidebarPrice
        min={min}
        max={max}
        handlePropertyFilter={handlePropertyFilter}
      />

      <Box mt="22px">
        <Heading fontSize="2xl">Property Room</Heading>
        <Text mt="8px">Bedroom</Text>
        <Stack mt="6px" direction="row" spacing="20px">
          {buttons.map((value) => (
            <SidebarRooms
              key={value}
              handlePropertyFilter={handlePropertyFilter}
              value={value}
              type={'rooms'}
              filter={filters.rooms}
            />
          ))}
        </Stack>

        <Text mt="14px">Bathroom</Text>
        <Stack mt="6px" direction="row" spacing="20px">
          {buttons.map((value) => (
            <SidebarBathrooms
              key={value}
              handlePropertyFilter={handlePropertyFilter}
              value={value}
              filter={filters.bathrooms}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
