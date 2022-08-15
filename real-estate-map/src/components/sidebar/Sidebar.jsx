import { useEffect } from 'react'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { Rooms } from '../filters/Rooms'
import { PropertyTypeList } from '../filters/PropertyTypeList'
import { Bathrooms } from '../filters/Bathrooms'
import { PriceRange } from '../filters/PriceRange'
import { SearchInput } from '../filters/SearchInput'
import useMapStore from '../../store/MapStore'

const buttons = [1, 2, 3, 4, 5]

export const Sidebar = () => {
  const filters = useMapStore((state) => state.filters)
  const getProperties = useMapStore((state) => state.getProperties)

  const { rooms, bathrooms } = filters

  useEffect(() => {
    getProperties()
  }, [filters])

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

      <PropertyTypeList />

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
