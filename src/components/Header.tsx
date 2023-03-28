import { Flex, Spacer, Center, Image } from '@chakra-ui/react';
import headerLogo from '../assets/header_logo.png';

export function Header() {
  const currentDate = new Date(Date.now());
  const options = { dateStyle: 'full' } as const;
  const currentTime = currentDate.toTimeString().split(' ')[0].slice(0, 5);

  return (
    <Flex as="header" p="40px">
      <Center pl="16px">
        <Image src={headerLogo} alt="WeatherNow logo" />
      </Center>
      <Spacer />
      <Center pr="16px">
        {currentDate.toLocaleDateString(undefined, options)} | {currentTime}
      </Center>
    </Flex>
  );
}
