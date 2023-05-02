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
      <Box>
        <Box height="78px" alignItems="end" gap="24px" display={{ lg: 'flex' }}>
          <InputGroup
            variant="flushed"
            width={{
              base: '342px',
              sm: '432px',
              md: '704px',
              lg: '485px',
              xl: '563px',
            }}
            marginTop={{ base: '40px', sm: '32px', md: '40px', lg: '0px' }}
          >
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
              height="50px"
              fontSize={{ base: '24px', sm: '36px' }}
              padding="0 0 12px 64px"
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
            leftIcon={<Search2Icon fontSize="20px" mr="8px" />}
            borderRadius="full"
            width={{ base: '342px', sm: '432px', md: '704px', lg: '165px' }}
            height="50px"
            fontSize="24px"
            marginTop={{ base: '32px', sm: '40px', lg: '0px' }}
          >
            Search
          </Button>
        </Box>
        {!isValid && (
          <Box mt="40px">
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
