import React from 'react'
import {Container, Flex, Box} from '@chakra-ui/react'
import FeedPosts from '../components/feed/FeedPosts'
import SuggestionBox from '../components/suggestionBox/SuggestionBox'

export default function Home() {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={2} py={10} >
          <FeedPosts/>
        </Box>

        <Box flex={3} mr={20} maxW={'300px'}  display={{base:'none', lg:'block'}}>
          <SuggestionBox/>
        </Box>
      </Flex>
    </Container>
  )
}
