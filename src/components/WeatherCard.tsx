import { Stack, Divider } from '@chakra-ui/react';
import { getWeatherFromCode } from '../util/weatherCodes';
import { LocationData } from '../App';
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
    <Stack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="3xl"
      height="2xs"
      mb="32px"
      p="24px"
    >
      <CardLocation {...{ name, country, state }} />
      <Divider borderBottom="2px" borderBottomColor="gray.200" />
      <CardInfo
        description={weatherLabel}
        temperature={weather.temperature}
        windSpeed={weather.windSpeed}
        logo={weatherLogo}
      />
    </Stack>
  );
}
