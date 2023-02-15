import { HStack, Text, Avatar as ChakraAvatar } from '@chakra-ui/react';

export const Avatar = () => {
  return (
    <HStack flexShrink={0}>
      <Text mr={3}>Emmanuel Oloke</Text>
      <ChakraAvatar name="Emmanuel Oloke" src="/images/dog-2.jpg" />
    </HStack>
  );
};
