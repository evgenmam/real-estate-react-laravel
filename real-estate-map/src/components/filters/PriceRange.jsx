import {
  Box,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import useMapStore from '../../store/MapStore'

export const PriceRange = () => {
  const setFilters = useMapStore((state) => state.setFilters)
  const [min, max] = useMapStore((state) => state.filters.price)
  const [params, setParams] = useSearchParams()

  function setPrice(price) {
    params.set('price', price)
    setParams(params)
    setFilters({ price })
  }

  return (
    <Box mt="32px">
      <Heading fontSize="2xl" mb="20px">
        Your Budget
      </Heading>

      <RangeSlider
        aria-label={['min', 'max']}
        min={1000}
        max={100000}
        onChangeEnd={(price) => setPrice(price)}
        defaultValue={[min, max]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="#3347D2" />
        </RangeSliderTrack>
        <RangeSliderThumb
          boxSize={4}
          index={0}
          color="red.400"
          boxShadow="0px 0px 0px 2px #3347D2"
        />
        <RangeSliderThumb
          boxSize={4}
          index={1}
          boxShadow="0px 0px 0px 2px #3347D2"
        />
      </RangeSlider>
      <Text as="span" mt="8px">
        $ {min / 1000}K - {max / 1000}K
      </Text>
    </Box>
  )
}
