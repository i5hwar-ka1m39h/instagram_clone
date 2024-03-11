import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import {Box, Image} from '@chakra-ui/react'

export default function SinglePost() {
  return (
    <>
    <PostHeader/>
    <Box>
        <Image src='/img1.png' alt='some post'/>
    </Box>
    <PostFooter/>
    </>
  )
}
