import { HStack, Spacer, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

import { brandRing } from 'src/utils/brandRing';
import { Avatar } from 'components/avatar';

export const SearchBar = () => {
  return (
    <HStack width="full">
      <InputGroup maxW="7xl">
        <InputLeftElement pointerEvents="none" children={<RiSearchLine />} />

        <Input
          focusBorderColor="none"
          variant="outline"
          rounded="lg"
          placeholder="Search for sounds, tracks"
          {...brandRing}
        />
      </InputGroup>
      <Spacer minW={12} />
      <Avatar />
    </HStack>
  );
};
