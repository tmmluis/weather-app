import { SearchBar } from './components/SearchBar';
import { useRef, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { Header } from './components/Header';
import { SearchHeading } from './components/SearchHeading';
import { LocationsList } from './components/LocationsList';
import { Background } from './components/Background';

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
    <>
      <Header handleClick={handleLogoClick} />
      <Flex className="App" direction="column" align="center">
        <SearchHeading location={searchToken} />
        <SearchBar
          fetchLocations={fetchLocations}
          updateLocation={updateSearchToken}
          location={searchToken}
          ref={inputRef}
          isValid={isSearchValid}
        />
        {hasLocations && <LocationsList locations={locations} />}
      </Flex>
      <Background isPhoto={!hasLocations} />
    </>
  );
}

export default App;
