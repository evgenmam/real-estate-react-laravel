import {
  Box,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react'
import React from 'react'

export const SidebarPrice = ({ min, max, handlePropertyFilter }) => {
  return (
    <Box mt="32px">
      <Heading fontSize="2xl" mb="20px">
        Your Budget
      </Heading>

      <RangeSlider
        aria-label={['min', 'max']}
        min={1000}
        max={100000}
        onChangeEnd={(val) => handlePropertyFilter({ price: val })}
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
