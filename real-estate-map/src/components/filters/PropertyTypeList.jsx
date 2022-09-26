import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

import { PropertyTypeItem } from './PropertyTypeItem'
import { propertyTypes } from '../icons/Types'
import useMapStore from '../../store/MapStore'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const PropertyTypeList = () => {
  const filters = useMapStore((state) => state.filters)
  const setFilters = useMapStore((state) => state.setFilters)
  const [params, setParams] = useSearchParams()

  const [types, setTypes] = useState(filters.types)

  function setProppertyToggle(type) {
    types.includes(type)
      ? setTypes(types.filter((t) => t !== type))
      : setTypes((t) => [...t, type])
  }
  useEffect(() => {
    params.set('types', types)
    setParams(params)
    setFilters({ types })
  }, [types])

  return (
    <Box mt="22px">
      <Heading fontSize="2xl" mb="12px">
        Property Type
      </Heading>

      <SimpleGrid columns={2} spacing={5}>
        {propertyTypes.map((type) => (
          <PropertyTypeItem
            key={type.type}
            setProppertyToggle={setProppertyToggle}
            {...type}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}
