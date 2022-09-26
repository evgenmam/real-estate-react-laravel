import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import App from '../App'

export const RouteApp = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}
