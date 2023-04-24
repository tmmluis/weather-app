import { Text } from '@chakra-ui/react';

type SearchHeadingProps = {
  location: string;
};

export function SearchHeading({ location }: SearchHeadingProps) {
  return (
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
  );
}
