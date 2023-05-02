import { Box, Text, Image } from '@chakra-ui/react';
import mapIcon from '../assets/map-icon.svg';

type CardLocationProps = {
  name: string;
  country: string;
  state: string;
};

export function CardLocation({ name, country, state }: CardLocationProps) {
  return (
    <Box
      alignItems="center"
      mb="12px"
      overflow="hidden"
      whiteSpace="nowrap"
      textOverflow="ellipsis"
    >
      <Image src={mapIcon} alt="" boxSize="24px" display="inline" />
      <Text display="inline" fontWeight="700" fontSize="24px" ml="8px">
        {name}
      </Text>
      <Text display="inline" fontSize="24px">
        , {country}, {state}
      </Text>
    </Box>
  );
}
