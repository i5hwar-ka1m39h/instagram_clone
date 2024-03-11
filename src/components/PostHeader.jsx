import React from 'react'
import {Flex, Box, Avatar, Text} from '@chakra-ui/react'

export default function PostHeader() {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} py={2}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar src='/img1.png' size={'sm'} alt='user profile pic' />
            <Flex fontSize={12} fontWeight={'bold'} gap={2}>
                randoom shit
                <Box color={'gray.500'}>
                    ▪ 1w
                </Box>
            </Flex>

        </Flex>
        <Box cursor={'pointer'}>
            <Text fontSize={12} color={'blue.500'} fontWeight={'bold'}
             _hover={{color:'white'}} transition={'0.2s ease-in-out'}>
                Unfollow
            </Text>
        </Box>
    </Flex>
  )
}
