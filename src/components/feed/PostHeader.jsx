import React from 'react'
import {Flex, Box, Avatar, Text} from '@chakra-ui/react'
import timeSince from '../../generalFunction/timeSince'
import useAuthStore from '../../store/authStore'
import { Link } from 'react-router-dom'

export default function PostHeader({post, userProfile, }) {
     console.log(userProfile);
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} py={2}>
        <Flex alignItems={'center'} gap={2}>
            {userProfile ?():()}
            <Link to={`/${userProfile.username}`}> 
                <Avatar src={userProfile.profilePic} size={'sm'} alt='user profile pic' />
            </Link>
            <Flex fontSize={14} fontWeight={'bold'} gap={2}>

                <Link to={`/${userProfile.username}`}>
                    {userProfile.username}
                </Link>

                <Box color={'gray.500'} fontSize={10}>
                    1w
                </Box>
            </Flex>

        </Flex>
        <Box cursor={'pointer'}>
            <Text fontSize={14} color={'blue.500'} fontWeight={'bold'}
             _hover={{color:'white'}} transition={'0.2s ease-in-out'}>
                {`something`}
            </Text>
        </Box>
    </Flex>
    
  )
}
