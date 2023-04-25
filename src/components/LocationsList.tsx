import { LocationData } from '../App';
import { WeatherCard } from './WeatherCard';

type LocationsListProps = {
  locations: LocationData[];
};

export function LocationsList({ locations }: LocationsListProps) {
  return (
    <>
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
    </>
  );
}
