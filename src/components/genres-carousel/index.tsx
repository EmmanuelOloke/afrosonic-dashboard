import {
  HStack,
  VStack,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';

import { genres } from './genres-data';
import { Image } from 'components/image';

export const GenresCarousel = () => {
  //   const imageSize = useBreakpointValue({ base: 20, md: 24, '2xl': 48 }) ?? 48;
  //   const imageSize = useBreakpointValue({ base: '80px', md: '96px', '2xl': '192px' }) ?? '192px';
  const imageSize = useBreakpointValue({ base: 20, md: 100, '2xl': 192 }) ?? 192;

  return (
    <HStack width="full" spacing={12} overflowX="auto" rounded="lg" flexShrink={0}>
      {genres.map(({ name, image }, index) => (
        <LinkBox as="article" pb={3} role="group" key={`${index}-${name}`}>
          <VStack spacing={4}>
            <Box rounded="lg" overflow="hidden" width={imageSize} height={imageSize}>
              <LinkOverlay href="#">
                <Image
                  transition="ease-out"
                  transitionProperty="all"
                  transitionDuration="normal"
                  _groupHover={{ transform: 'scale(1.1, 1.1)' }}
                  src={image}
                  width={imageSize}
                  height={imageSize}
                  objectFit="cover"
                  quality="100"
                  alt=""
                />
              </LinkOverlay>
            </Box>
            <Text fontWeight="medium">{name}</Text>
          </VStack>
        </LinkBox>
      ))}
    </HStack>
  );
};
