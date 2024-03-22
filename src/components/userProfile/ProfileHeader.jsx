import React from 'react'
import {Flex, Avatar, AvatarGroup,VStack, Text, Button} from '@chakra-ui/react'
import { useFetchUser } from '../../hooks/useFetchUser'
import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore';
import { useDisclosure } from '@chakra-ui/react'
import EditProfile from './EditProfile';
import useFollowUser from '../../hooks/useFollowUser';

export default function ProfileHeader() {
  const {userProfile} = useUserProfileStore();
  const authUser = useAuthStore(state=>state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isFollowing,isUpdating,handleFollow} = useFollowUser(userProfile?.uid)
  
  const ownerProfileAuth = authUser && authUser.username == userProfile.username;
  const notMEProfileAuth = authUser && authUser.username !== userProfile.username;

  return (
    <Flex gap={{base:4, sm:10}} direction={{base:'column', sm:'row'}} py={10}>
      <AvatarGroup size={{base:'xl', md:'2xl'}} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'}>
      <Avatar src={userProfile.profilePic}/>
      </AvatarGroup>
      
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex gap={4} direction={{base:'column', sm:'row'}} justifyContent={{base:'center', sm:'flex-start'}} alignItems={'center'} w={'full'}>

          <Text fontSize={{base:'sm', sm:'lg'}} >{userProfile.username}</Text>

          {ownerProfileAuth &&( <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button backgroundColor={'white'} color={'black'} _hover={{bg:'whiteAlpha.500'}} size={{base:'xs', md: 'sm'}}
            onClick={onOpen}> 
              Edit Profile
            </Button>
          </Flex>)
          }

          {notMEProfileAuth &&( <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button backgroundColor={'white'} color={'black'} _hover={{bg:'whiteAlpha.500'}} size={{base:'xs', md: 'sm'}} 
            onClick={handleFollow} isLoading={isUpdating}>
              {isFollowing? "Unfollow" : "Follow"}
            </Button>
          </Flex>)
          }
        </Flex>

        <Flex alignItems={'center'} gap={{base:2, sm:4}}>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>{userProfile.posts.length}</Text>
            posts
          </Text>

          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>{userProfile.followers.length}</Text>
            followers
          </Text>

          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>{userProfile.following.length}</Text>
            following
          </Text>
        </Flex>

        <Flex alignItems={'center'} gap={2}>
          <Text fontSize={'sm'} fontWeight={'bold'}>{userProfile.fullname}</Text>
        </Flex>
        <Text fontSize={'sm'}>{userProfile.bio}</Text>

      </VStack>
          {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
    </Flex>
  )
}
