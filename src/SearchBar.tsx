import { useState } from 'react';
import { Input, Box, Button, Center, Flex, Heading } from '@chakra-ui/react';

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
    <Flex width="md" justify="space-evenly" pb="16px">
      <Center>
        <Heading size="md">
          <label htmlFor="search">Search for a location: </label>
        </Heading>
      </Center>
      <Box width="10rem">
        <Input
          type="text"
          value={value}
          id="search"
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </Box>
      <Button onClick={handleClick}>Go</Button>
    </Flex>
  );
}
