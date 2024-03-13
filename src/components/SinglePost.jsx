import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import {Box, Image} from '@chakra-ui/react'

export default function SinglePost({img, username, avatar}) {
  return (
    <>
    <PostHeader username={username} avatar={avatar}/>
    <Box borderRadius={4} overflow={'hidden'}>
        <Image src={img} alt={username}/>
    </Box>
    <PostFooter avatar={avatar}/>
    </>
  )
}
