import { Button } from '@chakra-ui/react'
import useMapStore from '../../store/MapStore'

export const Bathrooms = ({ value, filter }) => {
  const setFilters = useMapStore((state) => state.setFilters)

  return (
    <Button
      variant={'filter'}
      onClick={() => setFilters({ bathrooms: value })}
      sx={filter == value ? { bg: '#3347D2', color: 'white' } : ''}
    >
      {value}
    </Button>
  )
}
