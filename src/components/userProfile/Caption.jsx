import React from 'react'
import {Flex, Avatar, Text, Skeleton, SkeletonCircle} from '@chakra-ui/react'
import useUserProfileStore from '../../store/userProfileStore'
import timeSince from '../../generalFunction/timeSince'

export default function Caption({post}) {
    const {userProfile} = useUserProfileStore()

  return (
    <>
    <Flex  gap={4}>
        <Avatar src={userProfile.profilePic} size={'sm'}/>
        <Flex  gap={2} direction={'column'}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={2}>
                <Text fontSize={12} fontWeight={'bold'}>{userProfile.username}</Text>
                <Text fontSize={14}>{post.caption}</Text>
            </Flex>
        
            <Text fontSize={12} color={'gray'}>{timeSince(post.createdAt)}</Text>
        </Flex>
    </Flex>
    </>
  )
}
