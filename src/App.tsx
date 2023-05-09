import { SearchBar } from './components/SearchBar';
import { useEffect, useRef, useReducer } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { SearchHeading } from './components/SearchHeading';
import { LocationsList } from './components/LocationsList';
import { Background } from './components/Background';
import './global.css';
import { useWindowDimensions } from './util/useWindowDimensions';
import { fetchLocations } from './util/fetchLocations';
import { reducer } from './appReducer';

function App() {
  const initialState = {
    locations: null,
    searchToken: '',
    isSearchValid: true,
    contentHeight: 426,
    isLoading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch({
      type: 'update_height',
      height: contentRef.current?.clientHeight,
    });
  }, [contentRef]);

  const { height: windowHeight } = useWindowDimensions();
  const backgroundHeight = windowHeight - state.contentHeight;

  const hasLocations = state.locations != null;

  const handleSearch = async () => {
    dispatch({ type: 'loading' });
    const locations = await fetchLocations(state.searchToken);
    dispatch({ type: 'fetch_locations', locations: locations });

    if (locations) {
      dispatch({ type: 'valid' });
      inputRef?.current?.blur();
    } else {
      dispatch({ type: 'invalid' });
    }
  };

  const resetSearch = () => {
    dispatch({ type: 'reset' });
    inputRef?.current?.focus();
  };

  const updateSearchToken = (token: string) => {
    dispatch({ type: 'update_search', token });
    if (token === '') {
      resetSearch();
    }
  };

  const handleLogoClick = () => {
    resetSearch();
  };

  return (
    <Box height="100%" width={'100%'}>
      <Box
        alignItems={{ base: 'flex-start', md: 'center' }}
        pl={{ base: 6, md: 8, xl: 10 }}
        pr={{ base: 6, md: 8, xl: 10 }}
        ref={contentRef}
        zIndex={'2'}
        position={'fixed'}
        bg={'white'}
        width={'100%'}
      >
        <Box pt={6} pb={6} w={'100%'}>
          <Header handleClick={handleLogoClick} />
        </Box>
        <Flex
          direction="column"
          align="center"
          gap={{ base: 8, md: 10 }}
          marginBottom={{
            base: 16,
            md: 20,
          }}
          width={'100%'}
        >
          <SearchHeading location={state.searchToken} />
          <SearchBar
            fetchLocations={handleSearch}
            updateLocation={updateSearchToken}
            location={state.searchToken}
            ref={inputRef}
            isValid={state.isSearchValid}
            isLoading={state.isLoading}
          />
        </Flex>
      </Box>
      <Box
        zIndex={'-1'}
        height={backgroundHeight}
        width={'100%'}
        position={'fixed'}
        bottom={0}
        left={0}
        paddingTop={{ base: hasLocations ? 20 : 0, xl: 20 }}
      >
        <Background isPhoto={!hasLocations} />
      </Box>
      <Flex
        flexDir={'column'}
        position={'relative'}
        zIndex={'1'}
        pl={{ base: 6, md: 8 }}
        pr={{ base: 6, md: 8 }}
        alignItems={'center'}
        top={state.contentHeight}
      >
        {state.locations && <LocationsList locations={state.locations} />}
      </Flex>
    </Box>
  );
}

export default App;
