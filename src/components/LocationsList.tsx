import { Box } from '@chakra-ui/react';
import { LocationData } from '../App';
import { WeatherCard } from './WeatherCard';

type LocationsListProps = {
  locations: LocationData[];
};

export function LocationsList({ locations }: LocationsListProps) {
  return (
    <Box zIndex={1} pt={8}>
      {locations.map(
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
    </Box>
  );
}
