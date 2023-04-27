import { Flex, Box, Image } from '@chakra-ui/react';
import { Tag } from './Tag';
import { City, getCity } from '../util/cities';
import { useEffect, useState } from 'react';

type BackgroundProps = {
  isPhoto: boolean;
};

export function Background({ isPhoto }: BackgroundProps) {
  const [city, setCity] = useState<City>(getCity());

  useEffect(() => {
    const interval = setInterval(() => setCity(getCity()), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Flex pos="fixed" bottom="0" w="100%" height="55%" zIndex="-1">
        {isPhoto ? (
          <Image src={city.image} flexGrow="1" objectFit="cover" />
        ) : (
          <Box flexGrow="1" backgroundColor="blue.50" />
        )}
      </Flex>
      {isPhoto && (
        <Box pos="fixed" bottom="0" left="0">
          <Tag city={city.name} country={city.country} />
        </Box>
      )}
    </>
  );
}
