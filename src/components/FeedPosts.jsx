import React from 'react'
import {Container} from '@chakra-ui/react'
import SinglePost from './SinglePost'

export default function FeedPosts() {
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
    </Container>
  )
}
