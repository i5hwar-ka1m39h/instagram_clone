import React, { useEffect, useState } from 'react'
import {Container, VStack,Flex, Skeleton, SkeletonCircle, Box} from '@chakra-ui/react'
import SinglePost from './SinglePost'

export default function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => setIsLoading(false), 2000)
  },[])

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

        {!isLoading && 
        <>
          <SinglePost img='/img1.png' username='hudanadada' avatar='/img1.png'/>
          <SinglePost img='/img1.png' username='hudanadada' avatar='/img1.png'/>
          <SinglePost img='/img1.png' username='hudanadada' avatar='/img1.png'/>
          <SinglePost img='/img1.png' username='hudanadada' avatar='/img1.png'/>
          <SinglePost img='/img1.png' username='hudanadada' avatar='/img1.png'/>
          <SinglePost img='/img1.png' username='hudanadada' avatar='/img1.png'/>
          <SinglePost img='/img1.png' username='hudanadada' avatar='/img1.png'/>
          <SinglePost img='/img1.png' username='hudanadada' avatar='/img1.png'/>
       </>
        }
    </Container>
  )
}
