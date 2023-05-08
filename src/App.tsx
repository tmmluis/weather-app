import { SearchBar } from './components/SearchBar';
import { useEffect, useRef, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { SearchHeading } from './components/SearchHeading';
import { LocationsList } from './components/LocationsList';
import { Background } from './components/Background';
import './global.css';
import { useWindowDimensions } from './util/useWindowDimensions';
import { LocationData, fetchLocations } from './util/fetchLocations';

function App() {
  const minContentHeight = 426;
  const [locations, setLocations] = useState<LocationData[] | null>(null);
  const [searchToken, setSearchToken] = useState<string>('');
  const [isSearchValid, setIsSearchValid] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>(minContentHeight);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContentHeight(contentRef.current?.clientHeight ?? minContentHeight);
  }, [contentRef]);

  const { height: windowHeight } = useWindowDimensions();
  const backgroundHeight = windowHeight - contentHeight;

  const hasLocations = locations != null;

  const handleSearch = async () => {
    setIsLoading(true);
    const locations = await fetchLocations(searchToken);
    setIsLoading(false);
    setLocations(locations);

    if (locations) {
      setIsSearchValid(true);
      inputRef?.current?.blur();
    } else {
      setIsSearchValid(false);
    }
  };

  const resetSearch = () => {
    setIsLoading(false);
    setLocations(null);
    setIsSearchValid(true);
    setSearchToken('');
    inputRef?.current?.focus();
  };

  const updateSearchToken = (token: string) => {
    setSearchToken(token);
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
          <SearchHeading location={searchToken} />
          <SearchBar
            fetchLocations={handleSearch}
            updateLocation={updateSearchToken}
            location={searchToken}
            ref={inputRef}
            isValid={isSearchValid}
            isLoading={isLoading}
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
        top={contentHeight}
      >
        {hasLocations && <LocationsList locations={locations} />}
      </Flex>
    </Box>
  );
}

export default App;
