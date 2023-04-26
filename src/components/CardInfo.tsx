import { Box, Text, Image, Flex } from '@chakra-ui/react';
import thermoLogo from '../assets/weather_thermometer.png';
import windLogo from '../assets/weather_wind.png';

type CardInfoProps = {
  description: string;
  temperature: string;
  windSpeed: string;
  weatherLogo: string;
};

export function CardInfo({
  description,
  temperature,
  windSpeed,
  weatherLogo,
}: CardInfoProps) {
  return (
    <Flex pt="16px" gap="8px">
      <Image src={weatherLogo} alt={description} boxSize="142px" />
      <Flex
        flexDir="column"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="8px"
        height="142px"
        width="554px"
      >
        <Flex flexDir="column" alignItems="flex-start" gap="4px" h="106px">
          <Text fontWeight="400" fontSize="24px" color="gray.500" pl="8px">
            {description}
          </Text>
          <Flex alignItems="center" gap="8px">
            <Image src={thermoLogo} alt="Temperature" boxSize="42px" />
            <Text
              fontWeight="400"
              fontSize="54px"
              color="gray.900"
              fontFamily="Roboto, sans-serif"
              lineHeight="63px"
            >
              {temperature}&deg;
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="flex-start" gap="8px" pl="8px">
          <Image src={windLogo} alt="Wind speed" boxSize="24px" />
          <Text
            fontWeight="400"
            fontSize="24px"
            color="gray.900"
            fontFamily="Roboto, sans-serif"
            lineHeight="28px"
          >
            {windSpeed} Km/h
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
