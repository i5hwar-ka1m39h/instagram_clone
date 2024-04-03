import React from 'react'
import {Flex, Box, Avatar, Text , SkeletonCircle, Skeleton, Button} from '@chakra-ui/react'
import timeSince from '../../generalFunction/timeSince'
import useAuthStore from '../../store/authStore'
import { Link } from 'react-router-dom'
import useFollowUser from './../../hooks/useFollowUser'

export default function PostHeader({post, userProfile, }) {
     const {isUpdating, isFollowing, handleFollow} = useFollowUser(post.createdBy);
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} py={2}>
        <Flex alignItems={'center'} gap={2}>

            {userProfile ?(
                <Link to={`/${userProfile.username}`}> 
                    <Avatar src={userProfile.profilePic} size={'sm'} alt='user profile pic' />
                </Link>):
                (
                    <SkeletonCircle  size={10}/>
                )}
            
            <Flex fontSize={14} fontWeight={'bold'} gap={2} alignItems={'center'} >

                {userProfile ?(
                    <>
                    <Link to={`/${userProfile.username}`}>
                        {userProfile.username}
                    </Link>
                    
                    </>
                ):
                (
                    <Skeleton  />
                )}

                
                <Box color={'gray.500'} fontSize={12}>▪ {timeSince(post.createdAt)}</Box>
                
            </Flex>

        </Flex>
        <Box cursor={'pointer'}>
            {!isFollowing ? (
                <Button fontSize={12} color={'blue.500'} fontWeight={'bold'} bg={'transparent'}
                 _hover={{color:'white'}} transition={'0.2s ease-in-out'} onClick={handleFollow} isLoading={isUpdating}> 
                    Follow
                </Button>
            ):(
                <Button fontSize={12} color={'blue.500'} fontWeight={'bold'} bg={'transparent'}
                 _hover={{color:'red'}} transition={'0.2s ease-in-out'} onClick={handleFollow} isLoading={isUpdating}>
                    Unfollow
                </Button>
            )}
            

            
        </Box>
    </Flex>
    
  )
}
