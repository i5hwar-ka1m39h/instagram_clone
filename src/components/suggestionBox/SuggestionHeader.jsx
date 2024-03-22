import React from 'react'
import {Flex, Avatar, Box, Text,  Button, Spinner} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import useLogOut from '../../hooks/useLogOut';
import useAuthStore from '../../store/authStore';

export default function SuggestionHeader() {
  const {handleLOGOUT, loading, error} = useLogOut();
  const authUser = useAuthStore(state=>state.user)

  if(!authUser) return <LoadingElement/>
 
  return (
    <>
    <Flex alignItems={'center'} justifyContent={'space-between'} width={'full'} >
        <Flex alignItems={'center'} gap={2}>
            <Link to={`${authUser.username}`}>
              <Avatar  size={'md'} src={authUser.profilePic}/>
            </Link>
            <Link to={`${authUser.username}`}>
              <Text fontSize={12} fontWeight={'bold'}>
                {authUser.username}
              </Text>
            </Link> 
            
        </Flex>
        <Button size={'xs'} background={'transparent'} _hover={{background:'transperent'}} isLoading={loading} 
        fontSize={14} fontWeight={'medium'} color={'blue.400'}  
        cursor={'pointer'} onClick={handleLOGOUT}>
            Log Out
        </Button>
        

    </Flex>
    
    </>
  )
}

const LoadingElement =()=>{
  return(
    <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} h={'100vh'}>
      <Spinner size={'xl'}/>
    </Flex>
  )
}