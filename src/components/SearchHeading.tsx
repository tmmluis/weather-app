import { Text } from '@chakra-ui/react';

type SearchHeadingProps = {
  location: string;
};

export function SearchHeading({ location }: SearchHeadingProps) {
  return (
    <Text
      fontSize={{ base: '36px', sm: '54px' }}
      lineHeight={{ base: '43px', sm: '65px' }}
      textAlign="start"
      fontFamily="400"
      margin={{ base: '0px 24px', md: '0px 32px', lg: '0px' }}
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
