import { Box, Text, Image, Flex } from '@chakra-ui/react';
import mapIcon from '../assets/map-icon.svg';

type CardLocationProps = {
  name: string;
  country: string;
  state: string;
};

export function CardLocation({ name, country, state }: CardLocationProps) {
  return (
    <Flex mb="20px" alignItems="center">
      <Image src={mapIcon} alt="" boxSize="24px" display="inline" />
      <Box overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
        <Text display="inline" fontWeight="700" fontSize="24px" ml="8px">
          {name}
        </Text>
        <Text display="inline" fontSize="24px">
          , {country}, {state}
        </Text>
      </Box>
    </Flex>
  );
}
