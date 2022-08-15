import { Button, Text } from '@chakra-ui/react'
import useMapStore from '../../store/MapStore'

export const PropertyTypeItem = ({ type, setProppertyToggle, icon }) => {
  const filters = useMapStore((state) => state.filters)
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
