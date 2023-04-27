import { Flex, Text } from '@chakra-ui/react';

export function Tag() {
  return (
    <Flex
      alignItems="center"
      padding="8px 32px"
      gap="4px"
      h="35px"
      background="#171923"
      opacity="0.7"
      borderRadius="0px 20px 0px 0px"
    >
      <Text display="inline" fontWeight="700" fontSize="16px" color="#FFFFFF">
        Lisbon
      </Text>
      <Text display="inline" fontWeight="400" fontSize="16px" color="#FFFFFF">
        , Portugal
      </Text>
    </Flex>
  );
}
