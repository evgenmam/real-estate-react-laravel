import React, { useEffect, useMemo, useState } from 'react'

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
import { api } from '../../utils/api'
import debounce from 'lodash.debounce'
import { Rooms } from '../filters/Rooms'
import { PropertyType } from '../filters/PropertyType'
import useMapStore from '../../store/MapStore'
import { Bathrooms } from '../filters/Bathrooms'
import { PriceRange } from '../filters/PriceRange'
import { useCallback } from 'react'
import { SearchInput } from '../filters/SearchInput'

export const Sidebar = () => {
  const [search, setSearch] = useState('')
  // const [result, setResult] = useState([])
  // const [loading, setLoading] = useState(false)

  const buttons = [1, 2, 3, 4, 5]

  const filters = useMapStore((state) => state.filters)
  const { rooms, bathrooms } = filters

  // async function fetchData() {
  //   if (!search) return
  //   setLoading(true)
  //   const { data } = await api
  //     .get('search', { searchParams: { text: search } })
  //     .json()
  //   setResult(data)
  //   setLoading(false)
  // }

  // const debounceFn = useCallback(debounce(fetchData, 300), [])

  // useEffect(() => {
  //   debounceFn()
  // }, [search])
  // console.log('resultados', debounceFn)

  return (
    <Box
      width={{ sm: '300px', xl: '400px', '2xl': '472px' }}
      h="full"
      bg="white"
      px={{ sm: '16px', xl: '40px' }}
      paddingBlockStart="30px"
      flexShrink="0"
      overflow="auto"
    >
      <SearchInput />

      <PropertyType />

      <PriceRange />

      <Box mt="22px">
        <Heading fontSize="2xl">Property Room</Heading>
        <Text mt="8px">Bedroom</Text>
        <Stack mt="6px" direction="row" spacing="20px">
          {buttons.map((value) => (
            <Rooms key={value} value={value} filter={rooms} />
          ))}
        </Stack>

        <Text mt="14px">Bathroom</Text>
        <Stack mt="6px" direction="row" spacing="20px">
          {buttons.map((value) => (
            <Bathrooms key={value} value={value} filter={bathrooms} />
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
