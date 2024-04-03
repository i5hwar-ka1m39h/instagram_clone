import React from 'react'
import {Flex, Avatar, Text, Skeleton, SkeletonCircle} from '@chakra-ui/react'
import useGetUserByID from '../../hooks/useGetUserByID'
import timeSince from '../../generalFunction/timeSince'

export default function CommentBy({ comment}) {
  const{isLoading, userProfile}=useGetUserByID(comment.createdBy)
  
  let timeago = timeSince(comment.createdAt)
  if(isLoading || !userProfile)  return <CommentSkaleton/>
  return (
    <Flex  gap={4}>
        <Avatar src={userProfile.profilePic} size={'sm'}/>
        <Flex  gap={2} direction={'column'}>
            <Flex alignItems={'center'}  gap={2}>
                <Text fontSize={12} fontWeight={'bold'}>{userProfile.username}</Text>
                <Text fontSize={14}>{comment.comment}</Text>
            </Flex>
        
            <Text fontSize={12} color={'gray'}>{timeago}</Text>
        </Flex>
    </Flex>
  )
}

const CommentSkaleton=()=>{
  return(
    <Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
  )
}
