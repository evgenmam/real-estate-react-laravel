import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import useMapStore from '../../store/MapStore'
import { PropertyTypeItem } from './PropertyTypeItem'
import { propertyTypes } from '../icons/Types'

export const PropertyTypeList = () => {
  const [toogleType, setToggleType] = useState([])
  const setFilters = useMapStore((state) => state.setFilters)

  function setProppertyToggle(type) {
    toogleType.includes(type)
      ? setToggleType(toogleType.filter((t) => t !== type))
      : setToggleType((t) => [...t, type])
  }

  useEffect(() => {
    setFilters({ types: toogleType })
  }, [toogleType])

  return (
    <Box mt="22px">
      <Heading fontSize="2xl" mb="12px">
        Property Type
      </Heading>

      <SimpleGrid columns={2} spacing={5}>
        {propertyTypes.map((type, index) => (
          <PropertyTypeItem
            key={index}
            setProppertyToggle={setProppertyToggle}
            {...type}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}
