import { VStack, HStack } from '@chakra-ui/react';

import { TopProducers } from 'components/top-producers';
import { TopPicks } from 'components/top-picks';
import { Sidebar } from 'components/sidebar';
import { SearchBar } from 'components/search-bar';
import { GenresCarousel } from 'components/genres-carousel';

export const Content = () => {
  return (
    <HStack width="full" flex={1} overflow="hidden">
      <Sidebar />
      <VStack px={12} pt={12} width="full" height="full" spacing={6} overflow="hidden">
        <SearchBar />
        <GenresCarousel />
        <HStack width="full" alignItems="flex-start" overflow="hidden" flex={1}>
          <TopPicks flex={1} />
          <TopProducers flexShrink={0} />
        </HStack>
      </VStack>
    </HStack>
  );
};
