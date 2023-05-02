import { Flex, Spacer, Center, Text, Box } from '@chakra-ui/react';

type HeaderProps = {
  handleClick: () => void;
};

export function Header({ handleClick }: HeaderProps) {
  const currentDate = new Date(Date.now());
  const currentTime = currentDate.toTimeString().split(' ')[0].slice(0, 5);
  const options = { dateStyle: 'full' } as const;
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const [weekDay, date] = formattedDate.split(',');

  return (
    <Flex as="header" p={{ base: '24px', md: '24px 32px' }} marginBottom="40px">
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
          <Box display={{ base: 'none', xl: 'inline' }}>{weekDay},</Box>
          {date} | {currentTime}
        </Text>
      </Center>
    </Flex>
  );
}
