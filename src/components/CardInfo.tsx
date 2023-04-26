import { Box, Text, Image, Flex } from '@chakra-ui/react';
import thermoLogo from '../assets/weather_thermometer.png';
import windLogo from '../assets/weather_wind.png';

type CardInfoProps = {
  description: string;
  temperature: string;
  windSpeed: string;
  logo: string;
};

export function CardInfo({
  description,
  temperature,
  windSpeed,
  logo,
}: CardInfoProps) {
  return (
    <Flex>
      <Image src={logo} alt={description} />
      <Box>
        <Text fontWeight="400" fontSize="24px" color="gray.500" pt="6px">
          {description}
        </Text>
        <Flex alignItems="center">
          <Image src={thermoLogo} alt="Temperature" boxSize="42px" />
          <Text
            fontWeight="400"
            fontSize="54px"
            color="gray.900"
            fontFamily="Roboto, sans-serif"
          >
            {temperature}&deg;
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
            {windSpeed} Km/h
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
