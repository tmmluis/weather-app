import { Box, Divider } from '@chakra-ui/react';
import { getWeatherFromCode } from '../util/weatherCodes';
import { LocationData } from '../util/fetchLocations';
import { CardLocation } from './CardLocation';
import { CardInfo } from './CardInfo';

type WeatherCardProps = {
  location: LocationData;
};

export function WeatherCard({ location }: WeatherCardProps) {
  const { name, country, admin1: state, weather } = location;
  const { label: weatherLabel, logo: weatherLogo } = getWeatherFromCode(
    weather.weatherCode
  );

  return (
    <Box
      border="1px solid #E2E8F0"
      width={{
        base: '100%',
        xl: '752px',
      }}
      height={{ base: '222px', md: '263px' }}
      mb="32px"
      p="24px"
      backgroundColor="white"
      boxShadow="md"
    >
      <CardLocation {...{ name, country, state }} />
      <Divider borderBottom="2px" borderBottomColor="gray.200" />
      <CardInfo
        description={weatherLabel}
        temperature={weather.temperature}
        windSpeed={weather.windSpeed}
        weatherLogo={weatherLogo}
      />
    </Box>
  );
}
