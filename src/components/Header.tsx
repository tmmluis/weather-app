import { Flex, Spacer, Center, Image } from '@chakra-ui/react';
import headerLogo from '../assets/header_logo.png';

export function Header() {
  return (
    <Flex as="header" p="40px">
      <Center pl="16px">
        <Image src={headerLogo} alt="WeatherNow logo" />
      </Center>
      <Spacer />
      <Center pr="16px">Friday, 24 March, 2023 | 10:33</Center>
    </Flex>
  );
}
