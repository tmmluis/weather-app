import { Box } from '@chakra-ui/react';
import lisbon from '../assets/lisbon.png';

type BackgroundProps = {
  isPhoto: boolean;
};

export function Background({ isPhoto }: BackgroundProps) {
  return (
    <Box
      pos="fixed"
      bottom="0"
      w="100%"
      height="50%"
      backgroundImage={isPhoto ? lisbon : 'linear-gradient(#FFFFFF, #EBF8FF)'}
      backgroundSize="cover"
      backgroundPosition="center"
    />
  );
}
