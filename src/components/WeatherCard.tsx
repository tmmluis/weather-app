import { Box, Image, Flex } from '@chakra-ui/react';
import { getWeatherFromCode } from '../util/weatherCodes';
import thermoLogo from '../assets/weather_thermometer.png';
import windLogo from '../assets/weather_wind.png';

type Props = {
  name: string;
  country: string;
  temperature: string;
  windSpeed: string;
  weatherCode: string;
};

export function WeatherCard({
  name,
  country,
  temperature,
  windSpeed,
  weatherCode,
}: Props) {
  const { label, logo } = getWeatherFromCode(weatherCode);

  const hasLocation = name && country;

  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="md"
      mb="8px"
    >
      <Image src={logo} alt={label} boxSize="100px" />
      <Box>
        <Box fontWeight="semibold" pt="6px" pb="5px" noOfLines={1}>
          {hasLocation ? `${name}, ${country}` : 'Your current location'}
        </Box>
        <Box display="flex">
          {temperature}&deg;
          <Image src={thermoLogo} alt="Temperature" boxSize="29px" />
        </Box>
        <Box display="flex">
          {windSpeed} Km/h
          <Image
            src={windLogo}
            alt="Wind speed"
            boxSize="20px"
            ml="6px"
            mt="4px"
          />
        </Box>
      </Box>
    </Flex>
  );
}
