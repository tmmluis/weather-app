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
} from '@chakra-ui/react';
import mapIcon from './assets/map-icon.png';
import { CloseIcon, WarningIcon, Search2Icon } from '@chakra-ui/icons';

type SearchBarProps = {
  fetchLocations: (a: string) => void;
};

export function SearchBar({ fetchLocations }: SearchBarProps) {
  const [value, setValue] = useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter' && value.length > 2) {
      fetchLocations(value);
    }
  }

  function handleClick() {
    if (value.length > 2) {
      fetchLocations(value);
    }
  }

  return (
    <Flex width="668px" height="78px" alignItems="end" gap="24px">
      <Box>
        <InputGroup variant="flushed" width="437px">
          <InputLeftElement pointerEvents="none">
            <Image src={mapIcon} boxSize="30px" />
          </InputLeftElement>
          <Input
            type="text"
            value={value}
            id="search"
            placeholder="City"
            onChange={handleChange}
            onKeyDown={handleEnter}
            fontSize="36px"
          />
          <InputRightElement pointerEvents="none">
            <CloseIcon />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Button
        onClick={handleClick}
        variant="solid"
        bg="blue.400"
        color="white"
        leftIcon={<Search2Icon fontSize="20px" mr="16px" />}
        borderRadius="full"
        width="207px"
        height="50px"
        fontSize="24px"
      >
        Search
      </Button>
    </Flex>
  );
}
