import React, { useState } from 'react'
import {Flex, Avatar, Text, VStack, Button, Box} from '@chakra-ui/react'

export default function SuggestedUsers({name, followersCount, avatar}) {
    const[isFollowed, setIsFollowed] = useState(false)
    const handleClick =()=>{
        setIsFollowed(!isFollowed);
    }
  return (
    <>
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar src={avatar} size={'md'} name={name}/>
            <VStack spacing={2} alignItems={'flex-start'}>
               <Box fontSize={14} fontWeight={'bold'} >
                {name}
               </Box>

               <Box fontSize={11} color={'gray.500'} >
                {followersCount} followers
               </Box>
                
            </VStack>
        </Flex>

        <Button _hover={{color:"white"}} color={'blue.400'} onClick={handleClick} h={'max-content'} fontSize={13} bg={'transparent'} p={0} fontWeight={'medium'} >
            {isFollowed ? "Unfollow" : 'Follow'}
        </Button>
    </Flex>
    </>
  )
}
