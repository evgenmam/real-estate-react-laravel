import React, { useEffect, useState, createContext } from 'react'
import { ChakraProvider, Container, Flex } from '@chakra-ui/react'
import mapboxgl from 'mapbox-gl'
import { Navbar } from './components/navbar/Navbar'
import { Sidebar } from './components/sidebar/Sidebar'
import { MapView } from './components/map/MapView'
import { api } from './components/utils/api'

import 'mapbox-gl/dist/mapbox-gl.css'
import './components/map/popup.css'

mapboxgl.accessToken = import.meta.env.VITE_ACCESS_TOKEN

export const PropertyContext = createContext(null)

const App = () => {
  const [properties, setProperties] = useState([])

  const [filters, setFilters] = useState({
    types: [],
    price: [1000, 20000],
    rooms: '',
    bathrooms: '',
  })

  useEffect(() => {
    api
      .get('properties', {
        searchParams: filters,
      })
      .json()
      .then(({ data }) => {
        setProperties(data)
      })
      .catch((err) => console.log(err))
  }, [filters])

  return (
    <ChakraProvider>
      <Container maxW="8xl" minH="100vh" p="0">
        <Navbar />
        <Flex h="calc(100vh - 80px)">
          <PropertyContext.Provider
            value={{ properties, setProperties, filters, setFilters }}
          >
            <Sidebar />
            <MapView />
          </PropertyContext.Provider>
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default App
