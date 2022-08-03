import { useEffect } from 'react'
import {
  ChakraProvider,
  Container,
  Flex,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './components/map/popup.css'
import theme from './theme'
import '@fontsource/poppins'
import useStore from './store/MapStore'
import { Navbar } from './components/navbar/Navbar'
import { Sidebar } from './components/sidebar/Sidebar'
import { SidebarMobil } from './components/sidebar/SidebarMobil'
import { MapView } from './components/map/MapView'

mapboxgl.accessToken = import.meta.env.VITE_ACCESS_TOKEN

const App = () => {
  const getProperties = useStore((state) => state.getProperties)
  const filters = useStore((state) => state.filters)

  const [isLargerThan768] = useMediaQuery(['(min-width: 62em)'])
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    getProperties()
  }, [filters])

  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  )
}

export default App
