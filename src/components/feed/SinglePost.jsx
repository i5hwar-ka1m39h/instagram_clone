import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import {Box, Image} from '@chakra-ui/react'
import useGetUserByID from '../../hooks/useGetUserByID'

export default function SinglePost({post}) {
  const {userProfile}=useGetUserByID(post.createdBy)
  console.log(userProfile);
  
  return (
    <>
    <PostHeader post={post} userProfile={userProfile} />
    <Box borderRadius={4} overflow={'hidden'}>
        <Image src={post.imageURL} alt={post.caption}/>
    </Box>
    <PostFooter post={post} isProfilePage={false} userProfile={userProfile}/>
    </>
  )
}
