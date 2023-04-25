import { Box } from '@chakra-ui/react';
import { LocationData } from '../App';
import { WeatherCard } from './WeatherCard';

type LocationsListProps = {
  locations: LocationData[];
};

export function LocationsList({ locations }: LocationsListProps) {
  return (
    <Box zIndex={1} pt={8}>
      {locations.map((location: LocationData) => (
        <WeatherCard
          location={location}
          key={'' + location.latitude + location.longitude}
        />
      ))}
    </Box>
  );
}
