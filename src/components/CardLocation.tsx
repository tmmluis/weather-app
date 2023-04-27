import { Flex, Text, Image } from '@chakra-ui/react';
import mapIcon from '../assets/map-icon.svg';

type CardLocationProps = {
  name: string;
  country: string;
  state: string;
};

export function CardLocation({ name, country, state }: CardLocationProps) {
  return (
    <Flex alignItems="center" mb="12px">
      <Image src={mapIcon} boxSize="24px" />
      <Text display="inline" fontWeight="700" fontSize="24px" ml="8px">
        {name}
      </Text>
      <Text display="inline" fontSize="24px" textOverflow="ellipsis">
        , {country}, {state}
      </Text>
    </Flex>
  );
}
