import React, { useState } from 'react'
import {Flex, Avatar, Text, VStack, Button, Box} from '@chakra-ui/react'
import useFollowUser from '../../hooks/useFollowUser';
import useAuthStore from '../../store/authStore';

export default function SuggestedUsers({user, setUser}) {
    const {isFollowing,isUpdating,handleFollow} = useFollowUser(user.uid)
    const authUser = useAuthStore(state=>state.user);
    console.log(user.followers.length);
   const handleClickFollow = async()=>{
     await handleFollow();
     setUser({
        ...user,
        followers: isFollowing ? user.followers.filter((follower)=> follower.uid !==authUser?.uid):[...user.followers,authUser]
     })
   }
  return (
    <>
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar src={user.profilePic} size={'md'} name={name}/>
            <VStack spacing={2} alignItems={'flex-start'}>
               <Box fontSize={14} fontWeight={'bold'} >
                {user.username}
               </Box>

               <Box fontSize={11} color={'gray.500'} >
                {user.followers.length} followers
               </Box>
                
            </VStack>
        </Flex>

        {authUser.uid !== user.uid && (
            <Button _hover={{color:"white"}} 
            isLoading={isUpdating} color={'blue.400'} onClick={handleClickFollow} h={'max-content'} fontSize={13} bg={'transparent'} p={0} fontWeight={'medium'} >
               {isFollowing ? "Unfollow" : 'Follow'}
           </Button>
        )}
    </Flex>
    </>
  )
}
