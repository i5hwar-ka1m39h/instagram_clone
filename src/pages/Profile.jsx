import React from 'react'
import {useParams} from 'react-router-dom'
import {Container, Flex,Text, Link, Skeleton, SkeletonCircle,VStack} from '@chakra-ui/react'
import ProfileHeader from '../components/userProfile/ProfileHeader'
import ProfilePosts from '../components/userProfile/ProfilePosts'
import ProfileTabs from '../components/userProfile/ProfileTabs'
import { useFetchUser } from '../hooks/useFetchUser'
import { Link as Routerlink } from 'react-router-dom'

export default function Profile() {
  const {username} = useParams()
  const {isLoading, userProfile}= useFetchUser(username);
  const userNotFound = !isLoading && !userProfile;
  if(userNotFound) return <UserNotFound/>
  return (
    <Container maxW='container.lg' py={5}>
        <Flex py={10} px={4} pl={{base:4, md:10}} w={'full'} mx={'auto'} flexDirection={'column'}>
            {!isLoading && userProfile && <ProfileHeader/>}
            {isLoading && <ProfileHeaderSkaleton/>}
        </Flex>
        <Flex px={{base:2, sm:4}} maxW={'full'} mx={'auto'} borderTop={'1px solid'} borderColor={'whiteAlpha.300'} direction={'column'}>
         < ProfileTabs/>
         <ProfilePosts/>
        </Flex>

    </Container>
  )
}

const UserNotFound = () =>{
  return(
    <>
    <Flex direction={'column'} textAlign={'center'} mx={'auto'}>
      <Text fontSize={'2xl' }>User doesn't exists</Text>
      <Link as={Routerlink} to={'/'}  color={'blue.500'} w={'max-content'} mx={'auto'}> Go to Home Page</Link>
    </Flex>
    </>
  )
}

const ProfileHeaderSkaleton = () =>{
  return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<SkeletonCircle size='24' />

			<VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
				<Skeleton height='12px' width='150px' />
				<Skeleton height='12px' width='100px' />
			</VStack>
		</Flex>
	);
}