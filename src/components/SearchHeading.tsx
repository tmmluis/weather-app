import { Text } from '@chakra-ui/react';

type SearchHeadingProps = {
  location: string;
};

export function SearchHeading({ location }: SearchHeadingProps) {
  return (
    <Text
      fontSize="54px"
      lineHeight="65px"
      textAlign="start"
      fontFamily="400"
      marginLeft={{ base: '32px', lg: '0px' }}
    >
      <span>
        Let&apos;s check the weather now in{' '}
        {location === '' ? (
          '...'
        ) : (
          <Text display="inline" textColor="blue.400">
            {location}
          </Text>
        )}
      </span>
    </Text>
  );
}
