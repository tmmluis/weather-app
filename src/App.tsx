import { SearchBar } from './components/SearchBar';
import { useRef, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { SearchHeading } from './components/SearchHeading';
import { LocationsList } from './components/LocationsList';
import { Background } from './components/Background';
import './global.css';
import { useWindowDimensions } from './util/useWindowDimensions';

type WeatherData = {
  temperature: string;
  windSpeed: string;
  weatherCode: string;
};

export type LocationData = {
  name: string;
  country: string;
  admin1: string;
  latitude: string;
  longitude: string;
  weather: WeatherData;
};

function App() {
  const [locations, setLocations] = useState<LocationData[] | null>(null);
  const [searchToken, setSearchToken] = useState<string>('');
  const [isSearchValid, setIsSearchValid] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { height: windowHeight } = useWindowDimensions();
  const minContentHeight = 426;
  const contentHeight = contentRef.current?.clientHeight ?? minContentHeight;
  const backgroundHeight = windowHeight - contentHeight;

  const hasLocations = locations != null;

  const resetSearch = () => {
    setLocations(null);
    setIsSearchValid(true);
    setSearchToken('');
    inputRef?.current?.focus();
  };

  async function fetchWeather(latitude: string, longitude: string) {
    const baseUrl = 'https://api.open-meteo.com/v1/';
    const response = await fetch(
      `${baseUrl}forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const data = await response.json();

    return {
      temperature: data.current_weather.temperature,
      windSpeed: data.current_weather.windspeed,
      weatherCode: data.current_weather.weathercode,
    };
  }

  async function fetchLocations() {
    if (searchToken.length > 2) {
      const baseUrl = 'https://geocoding-api.open-meteo.com/v1/';
      const response = await fetch(`${baseUrl}search?name=${searchToken}`);
      const data = await response.json();

      if (data.results) {
        const locations: LocationData[] = await Promise.all(
          data.results.map(async (location: LocationData) => {
            const weatherData = await fetchWeather(
              location.latitude,
              location.longitude
            );
            return {
              name: location.name,
              country: location.country,
              admin1: location.admin1,
              latitude: location.latitude,
              longitude: location.longitude,
              weather: weatherData,
            } as LocationData;
          })
        );

        setLocations(locations);
        setIsSearchValid(true);
        inputRef?.current?.blur();
      } else {
        setLocations(null);
        setIsSearchValid(false);
      }
    }
  }

  function updateSearchToken(token: string) {
    setSearchToken(token);
    if (token === '') {
      resetSearch();
    }
  }

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
            fetchLocations={fetchLocations}
            updateLocation={updateSearchToken}
            location={searchToken}
            ref={inputRef}
            isValid={isSearchValid}
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
