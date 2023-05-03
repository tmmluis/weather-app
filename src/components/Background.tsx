import { Flex, Box, Image } from '@chakra-ui/react';
import { Tag } from './Tag';
import { City, getCity } from '../util/cities';
import { useEffect, useState } from 'react';
import './backround.css';

type BackgroundProps = {
  isPhoto: boolean;
};

export function Background({ isPhoto }: BackgroundProps) {
  const [city, setCity] = useState<City>(getCity());

  useEffect(() => {
    if (isPhoto) {
      const interval = setInterval(() => setCity(getCity()), 3000);
      return () => clearInterval(interval);
    }
  }, [isPhoto]);

  return (
    <Box zIndex="-1" height="100%" position="relative">
      {isPhoto ? (
        <Box key={city.name} className="fade-in" height="100%">
          <Flex height="100%">
            <Image src={city.image} flexGrow="1" objectFit="cover" />
          </Flex>
          <Box pos="absolute" bottom="0">
            <Tag city={city.name} country={city.country} />
          </Box>
        </Box>
      ) : (
        <Box backgroundColor="blue.50" height="100%" />
      )}
    </Box>
  );
}
