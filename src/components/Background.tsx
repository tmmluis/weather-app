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
    <>
      {isPhoto ? (
        <Box key={city.name} className="fade-in">
          <Flex pos="fixed" bottom="0" w="100%" height="55%" zIndex="-1">
            <Image src={city.image} flexGrow="1" objectFit="cover" />
          </Flex>
          <Box pos="fixed" bottom="0" left="0">
            <Tag city={city.name} country={city.country} />
          </Box>
        </Box>
      ) : (
        <Box
          pos="fixed"
          bottom="0"
          w="100%"
          height="55%"
          zIndex="-1"
          backgroundColor="blue.50"
        />
      )}
    </>
  );
}
