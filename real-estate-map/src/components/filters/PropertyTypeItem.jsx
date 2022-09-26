import { Button, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import useMapStore from '../../store/MapStore'

export const PropertyTypeItem = ({ type, setProppertyToggle, icon }) => {
  const filters = useMapStore((state) => state.filters)
  const setFilters = useMapStore((state) => state.setFilters)
  const [params, setParams] = useSearchParams()

  const [types, setTypes] = useState(filters.types)

  // function setProppertyToggle(type, prevTypes) {
  //
  // }

  // const setProppertyToggle = (type) => {
  //   // let types = prevTypes
  //   let type2 = [...types]
  //   console.log(type2)
  //   type2.includes(type)
  //     ? setTypes(type2.filter((type) => type !== type))
  //     : setTypes([...type2, type])

  //   console.log({ type2 })
  //   // params.set('types', types)
  //   // setParams(params)
  //   // setFilters({ types })
  // }

  return (
    <Button
      className="button_item"
      variant="property"
      onClick={() => setProppertyToggle(type)}
      sx={
        filters.types.includes(type) && {
          bg: '#3347D2',
          color: 'white',
          span: { color: 'white' },
        }
      }
    >
      {icon}
      <Text
        as="span"
        color="black"
        sx={{ '.button_item:hover &': { color: 'white' } }}
      >
        {type}
      </Text>
    </Button>
  )
}
