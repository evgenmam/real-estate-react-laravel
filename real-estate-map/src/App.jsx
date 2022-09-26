import { Container, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './components/map/popup.css'
import '@fontsource/poppins'
import { Navbar } from './components/navbar/Navbar'
import { Sidebar } from './components/sidebar/Sidebar'
import { SidebarMobil } from './components/sidebar/SidebarMobil'
import { MapView } from './components/map/MapView'
import { useSearchParams } from 'react-router-dom'
import useMapStore from './store/MapStore'
import { useEffect } from 'react'
import {
  getParamsNumber,
  getParamsPrices,
  getParamsTypes,
} from './utils/validateParmeters'

mapboxgl.accessToken = import.meta.env.VITE_ACCESS_TOKEN

const App = () => {
  const [isLargerThan768] = useMediaQuery(['(min-width: 62em)'])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const setFilters = useMapStore((state) => state.setFilters)

  //lo de los parametros
  const [params, setParams] = useSearchParams()

  const types = getParamsTypes(params.get('types'))
  const price = getParamsPrices(params.get('price'))
  const rooms = getParamsNumber(params.get('rooms'))
  const bathrooms = getParamsNumber(params.get('bathrooms'))
  const search = params.get('search')

  useEffect(() => {
    setFilters({ types, price, rooms, bathrooms, search })
  }, [])

  return (
    <Container maxW="8xl" minH="100vh" p="0">
      <Navbar onOpen={onOpen} />
      <Flex h="calc(100vh - 80px)">
        {isLargerThan768 ? (
          <Sidebar />
        ) : (
          <SidebarMobil isOpen={isOpen} onClose={onClose} />
        )}
        <MapView />
      </Flex>
    </Container>
  )
}

export default App
