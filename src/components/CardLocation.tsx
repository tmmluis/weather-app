import { Flex, Text, Image } from '@chakra-ui/react';
import mapIcon from '../assets/map-icon.png';

type CardLocationProps = {
  name: string;
  country: string;
  state: string;
};

export function CardLocation({ name, country, state }: CardLocationProps) {
  return (
    <Flex alignItems="center">
      <Image src={mapIcon} boxSize="20px" />
      <Text display="inline" fontWeight="700" fontSize="24px" ml="10px">
        {name}
      </Text>
      <Text display="inline" fontSize="24px" textOverflow="ellipsis">
        , {country}, {state}
      </Text>
    </Flex>
  );
}
