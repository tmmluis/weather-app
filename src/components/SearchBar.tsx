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
import mapIcon from '../assets/map-icon.svg';
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { forwardRef } from 'react';

type SearchBarProps = {
  fetchLocations: () => void;
  updateLocation: (location: string) => void;
  location: string | null;
};

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ fetchLocations, updateLocation, location }: SearchBarProps, ref) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      updateLocation(e.target.value);
    }

    function handleInputEnter(event: React.KeyboardEvent) {
      if (event.key === 'Enter') {
        fetchLocations();
      }
    }

    function handleSearchButtonClick() {
      fetchLocations();
    }

    function handleInputClear() {
      updateLocation('');
    }

    return (
      <Flex width="3xl" height="78px" alignItems="end" gap="24px">
        <Box>
          <InputGroup variant="flushed" size="lg">
            <InputLeftElement pointerEvents="none">
              <Image src={mapIcon} alt="Search for a location" boxSize="30px" />
            </InputLeftElement>
            <Input
              type="text"
              value={location ?? ''}
              id="search"
              placeholder="City"
              onChange={handleChange}
              onKeyDown={handleInputEnter}
              fontSize="36px"
              width="xl"
              pl="68px"
              ref={ref}
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
);

SearchBar.displayName = 'SearchBar';
