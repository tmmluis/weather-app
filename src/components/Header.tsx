import { Flex, Spacer, Center, Text } from '@chakra-ui/react';

type HeaderProps = {
  handleClick: () => void;
};

export function Header({ handleClick }: HeaderProps) {
  const currentDate = new Date(Date.now());
  const options = { dateStyle: 'full' } as const;
  const currentTime = currentDate.toTimeString().split(' ')[0].slice(0, 5);

  return (
    <Flex as="header" p="40px">
      <Center as="a" onClick={handleClick} cursor="pointer">
        <Text
          display="inline"
          fontWeight="400"
          fontSize="24px"
          color="gray.900"
        >
          Weather
        </Text>
        <Text
          display="inline"
          fontWeight="500"
          fontSize="24px"
          color="blue.400"
        >
          Now
        </Text>
      </Center>
      <Spacer />
      <Center>
        <Text
          fontWeight="300"
          fontSize="18px"
          color="gray.900"
          fontFamily={"'Roboto', sans-serif"}
        >
          {currentDate.toLocaleDateString(undefined, options)} | {currentTime}
        </Text>
      </Center>
    </Flex>
  );
}
