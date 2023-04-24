import { SearchBar } from './SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { useState } from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { Header } from './components/Header';

type WeatherData = {
  temperature: string;
  windSpeed: string;
  weatherCode: string;
};

type LocationData = {
  name: string;
  country: string;
  latitude: string;
  longitude: string;
  weather: WeatherData;
};

function App() {
  const [locations, setLocations] = useState<LocationData[]>([]);

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

  async function fetchLocations(name: string) {
    setLocations([]);

    if (name.length > 2) {
      const baseUrl = 'https://geocoding-api.open-meteo.com/v1/';
      const response = await fetch(`${baseUrl}search?name=${name}`);
      const data = await response.json();

      const locations: LocationData[] = await Promise.all(
        data.results.map(
          async (location: {
            latitude: string;
            longitude: string;
            name: string;
            country: string;
          }) => {
            const weatherData = await fetchWeather(
              location.latitude,
              location.longitude
            );
            return {
              name: location.name,
              country: location.country,
              latitude: location.latitude,
              longitude: location.longitude,
              weather: weatherData,
            };
          }
        )
      );

      setLocations(locations);
    }
  }

  return (
    <>
      <Header />
      <Flex className="App" direction="column" align="center">
        <Text
          fontSize="54px"
          lineHeight="65px"
          textAlign="center"
          fontFamily="400"
        >
          Let&apos;s check the weather now in...
        </Text>
        <SearchBar fetchLocations={fetchLocations} />
        {locations &&
          locations.map(
            ({ name, country, latitude, longitude, weather }: LocationData) => (
              <WeatherCard
                name={name}
                country={country}
                temperature={weather.temperature}
                windSpeed={weather.windSpeed}
                weatherCode={weather.weatherCode}
                key={'' + latitude + longitude}
              />
            )
          )}
      </Flex>
    </>
  );
}

export default App;
