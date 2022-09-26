import { ArrowBackIcon, LinkIcon } from '@chakra-ui/icons'
import { Box, Button, ChakraProvider, IconButton } from '@chakra-ui/react'
import { useNavigate, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Box>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>

        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => navigate('/')}
        >
          <ArrowBackIcon /> Go back
        </Button>
      </Box>
    </ChakraProvider>
  )
}
