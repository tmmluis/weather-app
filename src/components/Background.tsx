import { Flex, Box, Image } from '@chakra-ui/react';
import lisbon from '../assets/lisbon.png';

type BackgroundProps = {
  isPhoto: boolean;
};

export function Background({ isPhoto }: BackgroundProps) {
  return (
    <Flex pos="fixed" bottom="0" w="100%" height="55%" zIndex="-1">
      {isPhoto ? (
        <Image src={lisbon} flexGrow="1" objectFit="cover" />
      ) : (
        <Box flexGrow="1" backgroundColor="blue.50" />
      )}
    </Flex>
  );
}
