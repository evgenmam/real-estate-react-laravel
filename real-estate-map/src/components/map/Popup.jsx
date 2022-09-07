import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Popup = ({
  name,
  description,
  price,
  img_path,
  rooms,
  bathrooms,
}) => {
  return (
    <Box rounded="24px" padding="20px" w="484px" boxShadow={'2xl'}>
      <Box height="225px" rounded="20px" overflow="hidden" position="relative">
        <Box
          position="absolute"
          bg="#3347D2"
          px="14px"
          py="12px"
          fontSize="md"
          color="white"
          rounded="6px"
          insetBlockStart="20px"
          insetInlineStart="20px"
        >
          $ {price}/mo
        </Box>
        <Image
          height="full"
          width="full"
          src={img_path}
          // alt={`image ${name}`}

          objectFit="cover"
        />
        <Box
          position="absolute"
          insetBlockEnd="12px"
          insetInlineStart="20px"
          color="white"
        >
          <Text
            fontSize="2xl"
            fontWeight="500"
            marginBlockEnd="6px"
            textShadow="0 0 4px black"
          >
            {name}
          </Text>
          <Text fontSize="xl" fontWeight="400" textShadow="0 0 4px black">
            {description}
          </Text>
        </Box>
      </Box>

      <Box paddingBlockStart="20px">
        <Box
          as="span"
          display="inline-flex"
          alignItems="center"
          fontSize="3xl"
          fontWeight="400"
          gap="10px"
          marginInlineEnd="50px"
        >
          <svg
            width="44"
            height="34"
            viewBox="0 0 44 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.2881 15.8144L43.0347 23.3292H0.0865479L4.83319 15.8143V1.99047L6.76537 0.0582886H36.3559L38.2881 1.99047V15.8144ZM34.4238 13.5683V3.92264H8.69754V13.5683C11.1876 12.9242 15.4893 12.1299 21.5606 12.1299C27.632 12.1299 31.9337 12.9242 34.4238 13.5683Z"
              fill="#78797A"
            />
            <path
              d="M0 25.7069V29.5713H4.5023V34.8927H8.36666V29.5713H34.7547V34.8927H38.619V29.5713H43.1214V25.7069H0Z"
              fill="#78797A"
            />
            <path
              d="M29.9925 10.1194C29.9925 10.1194 18.0533 5.44855 15.6611 5.44855C13.269 5.44855 11.3298 6.53211 11.3298 7.86829V11.2473C11.3298 11.2473 13.8847 10.604 15.6408 10.4378C17.2218 10.2879 29.9925 10.1194 29.9925 10.1194Z"
              fill="#78797A"
            />
            <path
              d="M31.7916 11.2473V7.86829C31.7916 6.53211 29.8524 5.44855 27.4602 5.44855C25.0681 5.44855 13.1288 10.1194 13.1288 10.1194C13.1288 10.1194 25.8997 10.2878 27.4807 10.4378C29.2368 10.604 31.7916 11.2473 31.7916 11.2473Z"
              fill="#78797A"
            />
          </svg>
          {rooms}
        </Box>

        <Box
          as="span"
          display="inline-flex"
          alignItems="center"
          fontSize="3xl"
          fontWeight="400"
          gap="10px"
        >
          <svg
            width="44"
            height="34"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.0317 19.961H37.9339V5.32296C37.9339 2.38316 35.5507 0 32.611 0H30.6149C30.2474 0 29.9495 0.297856 29.9495 0.665341V4.05871C28.4004 4.37497 27.2878 5.73786 27.2881 7.31899C27.2881 7.68647 27.5859 7.98433 27.9534 7.98433H33.2764C33.6439 7.98433 33.9417 7.68647 33.9417 7.31899C33.942 5.73786 32.8295 4.37489 31.2803 4.05871V1.33076H32.6111C34.8159 1.33076 36.6033 3.11813 36.6033 5.32296V19.961H0.90618C0.410118 19.961 0.00793457 20.3632 0.00793457 20.8593V21.7242C0.00793457 22.2203 0.410118 22.6225 0.90618 22.6225H39.0317C39.5278 22.6225 39.93 22.2203 39.93 21.7242V20.8593C39.93 20.3632 39.5279 19.961 39.0317 19.961Z"
              fill="#78797A"
            />
            <path
              d="M37.568 23.9532H2.37009C2.18264 23.9531 2.0306 24.1049 2.03052 24.2924C2.03052 24.2969 2.0306 24.3014 2.03075 24.3059C2.29024 29.0433 4.34623 33.9471 7.35364 35.4574C6.34896 36.5304 6.4044 38.2146 7.4773 39.2193C8.55028 40.224 10.2345 40.1685 11.2392 39.0956C12.045 38.235 12.1886 36.9468 11.592 35.9299H28.326C27.9366 36.5798 27.8514 37.3676 28.0931 38.0856C28.5618 39.4788 30.0712 40.2281 31.4644 39.7593C32.8575 39.2905 33.6068 37.7811 33.138 36.3879C33.0173 36.0296 32.8218 35.701 32.5643 35.4241C35.5918 33.9137 37.6478 29.01 37.8873 24.2725C37.8775 24.1005 37.7401 23.9631 37.568 23.9532Z"
              fill="#78797A"
            />
          </svg>
          {bathrooms}
        </Box>
      </Box>
    </Box>
  )
}
