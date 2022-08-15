import { Button } from '@chakra-ui/react'
import useMapStore from '../../store/MapStore'

export const Rooms = ({ value, filter }) => {
  const setFilters = useMapStore((state) => state.setFilters)

  return (
    <Button
      onClick={() => setFilters({ rooms: value })}
      variant={'filter'}
      sx={filter === value && { bg: 'blue.primary', color: 'white' }}
    >
      {value}
    </Button>
  )
}
