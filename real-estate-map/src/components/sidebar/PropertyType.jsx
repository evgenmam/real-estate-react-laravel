import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { PropertyContext } from '../../App'

export const PropertyType = () => {
  const { filters, setFilters } = useContext(PropertyContext)
  const [toogleType, setToggleType] = useState([])

  function setProppertyToggle(type) {
    toogleType.includes(type)
      ? setToggleType(toogleType.filter((t) => t !== type))
      : setToggleType((t) => [...t, type])
  }

  useEffect(() => {
    setFilters((filter) => ({ ...filter, types: toogleType }))
  }, [toogleType])

  return (
    <Box mt="22px">
      <Heading fontSize="2xl" mb="12px">
        Property Type
      </Heading>
      <SimpleGrid columns={2} spacing={5}>
        <Button
          _hover={{ bg: '#3347D2', color: 'white' }}
          alignItems="center"
          bg="gray.100"
          className="button_item"
          color="#3347D2"
          display="flex"
          flexDir="column"
          gap="10px"
          h="120px"
          justifyContent="center"
          onClick={() => setProppertyToggle('house')}
          sx={
            filters.types.includes('house')
              ? {
                  bg: '#3347D2',
                  color: 'white',
                  span: { color: 'white' },
                }
              : ''
          }
          rounded="10px"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M39.3649 18.0807L20.8649 0.347595C20.3818 -0.115967 19.6182 -0.115967 19.1351 0.347595L0.61676 18.0991C0.224915 18.4909 0 19.0308 0 19.5825C0 20.7309 0.935059 21.666 2.08344 21.666H5V37.4991C5 38.8791 6.12 39.9991 7.5 39.9991H14.5834C15.2734 39.9991 15.8334 39.4391 15.8334 38.7491V27.916C15.8334 27.6874 16.0199 27.4991 16.25 27.4991H23.75C23.9783 27.4991 24.1666 27.6874 24.1666 27.916V38.7491C24.1666 39.4391 24.7266 39.9991 25.4166 39.9991H32.5C33.88 39.9991 35 38.8791 35 37.4991V21.666H37.9166C39.0649 21.666 40 20.7309 40 19.5825C40 19.0308 39.7751 18.4909 39.3649 18.0807Z" />
          </svg>
          <Text
            as="span"
            color="black"
            sx={{ '.button_item:hover &': { color: 'white' } }}
          >
            Home
          </Text>
        </Button>
        <Button
          _hover={{ bg: '#3347D2', color: 'white' }}
          alignItems="center"
          bg="gray.100"
          className="button_item"
          color="#3347D2"
          display="flex"
          flexDir="column"
          gap="10px"
          h="120px"
          justifyContent="center"
          onClick={() => setProppertyToggle('commercial')}
          rounded="10px"
          sx={
            filters.types.includes('commercial')
              ? { bg: '#3347D2', color: 'white', span: { color: 'white' } }
              : ''
          }
        >
          <svg
            width="36"
            height="40"
            viewBox="0 0 36 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32.5109 4.99269V37.4453H35.0073V39.9417H0.0582848V37.4453H2.55467V4.99269C2.55467 2.23916 4.79383 0 7.54735 0H27.5182C30.2718 0 32.5109 2.23916 32.5109 4.99269ZM25.0218 7.48907H20.0291V12.4818H25.0218V7.48907ZM20.0291 14.9781H25.0218V19.9708H20.0291V14.9781ZM25.0218 22.4672H20.0291V27.4599H25.0218V22.4672ZM10.0437 7.48907H15.0364V12.4818H10.0437V7.48907ZM15.0364 14.9781H10.0437V19.9708H15.0364V14.9781ZM10.0437 22.4672H15.0364V27.4599H10.0437V22.4672ZM11.54 29.9563V37.4454H23.5255V29.9563H11.54Z" />
          </svg>
          <Text
            as="span"
            color="black"
            sx={{ '.button_item:hover &': { color: 'white' } }}
          >
            Commercial
          </Text>
        </Button>
        <Button
          _hover={{ bg: '#3347D2', color: 'white' }}
          alignItems="center"
          bg="gray.100"
          className="button_item"
          color="#3347D2"
          display="flex"
          flexDir="column"
          gap="10px"
          h="120px"
          justifyContent="center"
          onClick={() => setProppertyToggle('apartment')}
          sx={
            filters.types.includes('apartment')
              ? { bg: '#3347D2', color: 'white', span: { color: 'white' } }
              : ''
          }
          rounded="10px"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M39.9417 12.4818V7.48907L19.9709 0L0 7.48907V12.4818H2.49638V37.4453H0V39.9417H39.9417V37.4453H37.4453V12.4818H39.9417ZM22.4672 12.4818H29.9563V19.9709H22.4672V12.4818ZM17.4745 12.4818H9.98545V19.9709H17.4745V12.4818ZM9.98545 24.9636H17.4745V30.4526H9.98545V24.9636ZM22.4672 24.9636V37.4454H29.9563V24.9636H22.4672Z" />
          </svg>
          <Text
            as="span"
            color="black"
            sx={{ '.button_item:hover &': { color: 'white' } }}
          >
            Apartment
          </Text>
        </Button>
        <Button
          _hover={{ bg: '#3347D2', color: 'white' }}
          alignItems="center"
          bg="gray.100"
          className="button_item"
          color="#3347D2"
          display="flex"
          flexDir="column"
          gap="10px"
          h="120px"
          justifyContent="center"
          onClick={() => setProppertyToggle('vacant')}
          rounded="10px"
          sx={
            filters.types.includes('vacant')
              ? { bg: '#3347D2', color: 'white', span: { color: 'white' } }
              : ''
          }
        >
          <svg
            width="40"
            height="36"
            viewBox="0 0 40 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.6503 33.9919L34.1583 21.0525C33.9919 20.678 33.6174 20.4284 33.2014 20.4284H24.0481V24.9634C24.0481 27.2101 22.2175 29.0824 19.9291 29.0824C17.6824 29.0824 15.8102 27.2517 15.8102 24.9634V20.4284H6.65692C6.24086 20.4284 5.86641 20.678 5.69998 21.0525L0.29124 33.9919C0.166423 34.2831 0.208029 34.6576 0.374452 34.9488C0.58248 35.24 0.87372 35.4065 1.24817 35.4065H38.6933C39.0262 35.4065 39.359 35.24 39.5254 34.9488C39.7751 34.6576 39.7751 34.2831 39.6503 33.9919Z"
              fill="currentColor"
            />
            <path
              d="M10.6927 14.6452H18.4313V24.9218C18.4313 25.7539 19.1386 26.4612 19.9707 26.4612C20.8029 26.4612 21.5102 25.7539 21.5102 24.9218V14.6452H29.2488C29.8313 14.6452 30.289 14.1876 30.289 13.6051V1.41459C30.289 0.832114 29.8313 0.374451 29.2488 0.374451H10.6927C10.1102 0.374451 9.65253 0.832114 9.65253 1.41459V13.6051C9.65253 14.1876 10.1102 14.6452 10.6927 14.6452ZM14.77 3.16057H25.1299C25.7123 3.16057 26.17 3.83823 26.17 4.70071C26.17 5.56319 25.7123 6.24086 25.1299 6.24086H14.77C14.1876 6.24086 13.7299 5.56319 13.7299 4.70071C13.7715 3.83823 14.2292 3.16057 14.77 3.16057ZM25.1299 8.82041H14.77C14.2292 8.82041 13.7715 9.49807 13.7299 10.3606C13.7299 11.223 14.1876 11.9007 14.77 11.9007H25.1299C25.7123 11.9007 26.17 11.223 26.17 10.3606C26.17 9.49807 25.7123 8.82041 25.1299 8.82041Z"
              fill="currentColor"
            />
          </svg>
          <Text
            as="span"
            color="black"
            sx={{ '.button_item:hover &': { color: 'white' } }}
          >
            Vacant Land
          </Text>
        </Button>
      </SimpleGrid>
    </Box>
  )
}
