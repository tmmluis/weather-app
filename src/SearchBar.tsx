import { useState } from 'react';
import {
  Input,
  Box,
  Button,
  Flex,
  InputGroup,
  Image,
  InputLeftElement,
  InputRightElement,
  Link,
} from '@chakra-ui/react';
import mapIcon from './assets/map-icon.png';
import { CloseIcon, WarningIcon, Search2Icon } from '@chakra-ui/icons';

type SearchBarProps = {
  fetchLocations: (a: string) => void;
};

export function SearchBar({ fetchLocations }: SearchBarProps) {
  const [searchToken, setSearchToken] = useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchToken(e.target.value);
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      fetchLocations(searchToken);
    }
  }

  function handleSearchButtonClick() {
    fetchLocations(searchToken);
  }

  function handleInputClear() {
    setSearchToken('');
    fetchLocations('');
  }

  return (
    <Flex width="3xl" height="78px" alignItems="end" gap="24px">
      <Box>
        <InputGroup variant="flushed" size="lg">
          <InputLeftElement pointerEvents="none">
            <Image src={mapIcon} boxSize="30px" />
          </InputLeftElement>
          <Input
            type="text"
            value={searchToken}
            id="search"
            placeholder="City"
            onChange={handleChange}
            onKeyDown={handleInputEnter}
            fontSize="36px"
            width="xl"
            pl="68px"
          />
          <InputRightElement>
            <Link>
              <CloseIcon onClick={handleInputClear} />
            </Link>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Button
        onClick={handleSearchButtonClick}
        variant="solid"
        bg="blue.400"
        color="white"
        leftIcon={<Search2Icon fontSize="20px" mr="16px" />}
        borderRadius="full"
        width="md"
        height="50px"
        fontSize="24px"
      >
        Search
      </Button>
    </Flex>
  );
}
