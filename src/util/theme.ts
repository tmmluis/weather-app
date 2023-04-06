import { extendTheme } from '@chakra-ui/react';
import '@fontsource/alegreya-sans';
import '@fontsource/roboto';

const theme = extendTheme({
  fonts: {
    body: `'Alegreya Sans', sans-serif`,
    heading: `'Alegreya Sans', sans-serif`,
  },
});

export default theme;
