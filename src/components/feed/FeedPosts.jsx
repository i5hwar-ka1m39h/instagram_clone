import React, { useEffect, useState } from 'react'
import {Container, VStack,Flex, Skeleton, SkeletonCircle, Text,Box} from '@chakra-ui/react'
import SinglePost from './SinglePost'
import useGetFeed from '../../hooks/useGetFeed';

export default function FeedPosts() {
  const {posts, isLoading} = useGetFeed()
  

  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      {isLoading && 
        [0,1,2,3].map((_, index)=>(
          <VStack key={index} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2} >
              <SkeletonCircle size='10' />
              <VStack>
                <Skeleton height='10px' width={'200px'} />
              </VStack>
            </Flex>
            <Skeleton width={'full'}>
              <Box h={'500px'}> content </Box>
            </Skeleton>
            
          </VStack>
        ))}

      {!isLoading && posts.length > 0 && posts.map((post) => <SinglePost key={post.id} post={post} />)}
			{!isLoading && posts.length === 0 && (
				<>
					<Text fontSize={"md"} color={"red.400"}>
						If this is the situation then you have transcended the limitations of your mind and soul to seek out a resume project of this lowly one
					</Text>
					
				</>
			)}  
    </Container>
  )
}
