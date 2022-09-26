import { Button } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import useMapStore from '../../store/MapStore'

export const Rooms = ({ value, filter }) => {
  const setFilters = useMapStore((state) => state.setFilters)
  const [params, setParams] = useSearchParams()

  function setRooms(value) {
    params.set('rooms', value)
    setParams(params)
    setFilters({ rooms: value })
  }

  return (
    <Button
      onClick={() => setRooms(value)}
      variant={'filter'}
      sx={filter === value && { bg: 'blue.primary', color: 'white' }}
    >
      {value}
    </Button>
  )
}
