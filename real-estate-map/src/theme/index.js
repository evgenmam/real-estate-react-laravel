import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', cursive`,
    body: `'Poppins', sans-serif`,
  },

  colors: {
    blue: {
      primary: '#3347D2',
    },
  },

  components: {
    Button: {
      variants: {
        filter: {
          bg: 'gray.200',
          width: '62px',
          height: '56px',
          borderRadius: '16px',
          _hover: {
            bg: 'blue.primary',
            color: 'white',
          },
          _active: {
            bg: '#dddfe2',
            transform: 'scale(0.98)',
          },
        },

        property: {
          _hover: { bg: '#3347D2', color: 'white' },
          fontWeight: '500',
          alignItems: 'center',
          bg: 'gray.200',
          borderRadius: '10px',
          color: '#3347D2',
          display: 'flex',
          flexDir: 'column',
          gap: '10px',
          h: '120px',
          justifyContent: 'center',
          _active: {
            bg: '#dddfe2',
            transform: 'scale(0.98)',
          },
        },
      },
    },
  },
})

export default theme
