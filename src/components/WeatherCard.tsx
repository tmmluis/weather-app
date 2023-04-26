import { Flex, Divider } from '@chakra-ui/react';
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
    <Flex
      flexDir="column"
      alignItems="flex-start"
      border="1px solid #E2E8F0"
      width="752px"
      height="263px"
      mb="32px"
      p="24px"
    >
      <CardLocation {...{ name, country, state }} />
      <Divider borderBottom="2px" borderBottomColor="gray.200" />
      <CardInfo
        description={weatherLabel}
        temperature={weather.temperature}
        windSpeed={weather.windSpeed}
        weatherLogo={weatherLogo}
      />
    </Flex>
  );
}
