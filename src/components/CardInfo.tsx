import { Text, Image, Flex } from '@chakra-ui/react';
import thermoLogo from '../assets/weather_thermometer.svg';
import windLogo from '../assets/weather_wind.svg';

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
      <Image
        src={weatherLogo}
        alt={description}
        boxSize={{ base: '100px', md: '142px' }}
      />
      <Flex
        flexDir="column"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="8px"
        width="554px"
      >
        <Flex flexDir="column" alignItems="flex-start" gap="4px">
          <Text
            fontWeight="400"
            fontSize={{ base: '16px', md: '24px' }}
            color="gray.500"
            pl="8px"
          >
            {description}
          </Text>
          <Flex alignItems="center" gap="8px">
            <Image
              src={thermoLogo}
              alt="Temperature"
              boxSize={{ base: '32px', md: '42px' }}
            />
            <Text
              fontWeight="400"
              fontSize={{ base: '36px', md: '54px' }}
              color="gray.900"
              fontFamily="Roboto, sans-serif"
              lineHeight={{ base: '42px', md: '63px' }}
            >
              {temperature}&deg;
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="flex-start" gap="8px" pl="8px">
          <Image
            src={windLogo}
            alt="Wind speed"
            boxSize={{ base: '20px', md: '24px' }}
          />
          <Text
            fontWeight="400"
            fontSize={{ base: '16px', md: '24px' }}
            color="gray.900"
            fontFamily="Roboto, sans-serif"
            lineHeight={{ base: '18px', md: '28px' }}
          >
            {windSpeed} Km/h
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
