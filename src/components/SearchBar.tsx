import {
  Input,
  Box,
  Button,
  InputGroup,
  Image,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';
import mapIcon from '../assets/map-icon.svg';
import { CloseIcon, Search2Icon, WarningIcon } from '@chakra-ui/icons';
import { forwardRef } from 'react';

type SearchBarProps = {
  fetchLocations: () => void;
  updateLocation: (location: string) => void;
  location: string | null;
  isValid: boolean;
};

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    { fetchLocations, updateLocation, location, isValid }: SearchBarProps,
    ref
  ) => {
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
      <Box width={{ base: '100%', lg: 'auto' }}>
        <Box
          gap={6}
          display={{ lg: 'flex' }}
          width={{ base: '100%', lg: '690px', xl: '752px' }}
        >
          <InputGroup variant="flushed">
            <InputLeftElement pointerEvents="none">
              <Image
                src={mapIcon}
                alt="Search for a location"
                boxSize={{ base: '24px', sm: '40px' }}
              />
            </InputLeftElement>
            <Input
              type="text"
              value={location ?? ''}
              id="search"
              placeholder="City"
              onChange={handleChange}
              onKeyDown={handleInputEnter}
              height={{ base: '40px', sm: '50px' }}
              fontSize={{ base: '24px', sm: '36px' }}
              paddingLeft="64px"
              paddingBottom={{ base: '0px', sm: '12px' }}
              ref={ref}
              isInvalid={!isValid}
              focusBorderColor={isValid ? 'blue.400' : 'red.400'}
            />
            <InputRightElement>
              {isValid ? (
                <Link>
                  <CloseIcon
                    onClick={handleInputClear}
                    boxSize={{ base: '11px', sm: '21px' }}
                  />
                </Link>
              ) : (
                <WarningIcon boxSize="33px" color="red.400" />
              )}
            </InputRightElement>
          </InputGroup>
          <Button
            onClick={handleSearchButtonClick}
            variant="solid"
            bg="blue.400"
            color="white"
            leftIcon={<Search2Icon fontSize="20px" mr={3} />}
            borderRadius="full"
            height="50px"
            width={{ base: '100%', lg: 'auto' }}
            fontSize="24px"
            pl={10}
            pr={10}
            marginTop={{ base: '32px', sm: '40px', lg: '0px' }}
          >
            Search
          </Button>
        </Box>
        {!isValid && (
          <Box mt={{ base: 8, sm: 10 }}>
            <Text
              fontWeight="400"
              fontSize="24px"
              color="gray.900"
              fontFamily={"'Roboto', sans-serif"}
            >
              There are no results matching your search.
            </Text>
            <Text
              fontWeight="300"
              fontSize="24px"
              color="gray.900"
              fontFamily={"'Roboto', sans-serif"}
            >
              Please try a different city.
            </Text>
          </Box>
        )}
      </Box>
    );
  }
);

SearchBar.displayName = 'SearchBar';
