import { Box } from '@chakra-ui/react';
import { LocationData } from '../util/fetchLocations';
import { WeatherCard } from './WeatherCard';

type LocationsListProps = {
  locations: LocationData[];
};

export function LocationsList({ locations }: LocationsListProps) {
  return (
    <Box width={{ base: '100%', xl: 'auto' }}>
      {locations.map((location: LocationData) => (
        <WeatherCard
          location={location}
          key={'' + location.latitude + location.longitude}
        />
      ))}
    </Box>
  );
}
