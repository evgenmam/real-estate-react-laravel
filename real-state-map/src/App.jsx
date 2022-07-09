import React from 'react'
import { ChakraProvider, Container, Flex } from '@chakra-ui/react'
import mapboxgl from 'mapbox-gl'
import { Navbar } from './components/navbar/Navbar'
import { Sidebar } from './components/sidebar/Sidebar'
import 'mapbox-gl/dist/mapbox-gl.css'

import { MapView } from './components/map/MapView'
mapboxgl.accessToken = import.meta.env.VITE_ACCESS_TOKEN

const App = () => {
  return (
    <ChakraProvider>
      <Container maxW="8xl" minH="100vh" p="0">
        <Navbar />
        <Flex h="calc(100vh - 80px)">
          <Sidebar />
          // <MapView />
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default App
