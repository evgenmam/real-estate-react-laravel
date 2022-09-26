import { Button } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import useMapStore from '../../store/MapStore'

export const Bathrooms = ({ value, filter }) => {
  const setFilters = useMapStore((state) => state.setFilters)
  const [params, setParams] = useSearchParams()

  function setBathrooms(value) {
    params.set('bathrooms', value)
    setParams(params)
    setFilters({ bathrooms: value })
  }

  return (
    <Button
      onClick={() => setBathrooms(value)}
      variant={'filter'}
      sx={filter === value && { bg: '#3347D2', color: 'white' }}
    >
      {value}
    </Button>
  )
}
