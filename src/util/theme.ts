import { extendTheme } from '@chakra-ui/react';
import '@fontsource/alegreya-sans';
import '@fontsource/roboto';

const theme = extendTheme({
  fonts: {
    body: `'Alegreya Sans', sans-serif`,
    heading: `'Alegreya Sans', sans-serif`,
  },
  colors: {
    weather: {
      500: '#4299E1',
      600: '#2B6CB0',
      700: '#2C5282',
    },
  },
});

export default theme;
