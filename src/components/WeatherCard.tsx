import { Box, Image, Flex, Stack, Text, Divider } from '@chakra-ui/react';
import { getWeatherFromCode } from '../util/weatherCodes';
import thermoLogo from '../assets/weather_thermometer.png';
import windLogo from '../assets/weather_wind.png';
import mapIcon from '../assets/map-icon.png';
import { LocationData } from '../App';

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
      <Flex alignItems="center">
        <Image src={mapIcon} boxSize="20px" />
        <Text display="inline" fontWeight="700" fontSize="24px" ml="10px">
          {name}
        </Text>
        <Text display="inline" fontSize="24px" textOverflow="ellipsis">
          , {country}, {state}
        </Text>
      </Flex>
      <Divider borderBottom="2px" borderBottomColor="gray.200" />
      <Flex>
        <Image src={weatherLogo} alt={weatherLabel} />
        <Box>
          <Text fontWeight="400" fontSize="24px" color="gray.500" pt="6px">
            {getWeatherFromCode(weather.weatherCode).label}
          </Text>
          <Flex alignItems="center">
            <Image src={thermoLogo} alt="Temperature" boxSize="42px" />
            <Text
              fontWeight="400"
              fontSize="54px"
              color="gray.900"
              fontFamily="Roboto, sans-serif"
            >
              {weather.temperature}&deg;
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Image
              src={windLogo}
              alt="Wind speed"
              boxSize="24px"
              ml="6px"
              mt="4px"
            />
            <Text
              fontWeight="400"
              fontSize="24px"
              color="gray.900"
              fontFamily="Roboto, sans-serif"
            >
              {weather.windSpeed} Km/h
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
}
