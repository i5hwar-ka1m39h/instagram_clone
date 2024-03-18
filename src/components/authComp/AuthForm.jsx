import { Box, VStack,Image, Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import GoogleLogIn from './GoogleLogIn';

export default function AuthForm() {
  const[isLogin, setIsLogin] = useState(true);
  
 

  

  
  return (
    <>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <VStack>
          <Image src='/logo.png' height={24} alt='instagram logo'/>

         {isLogin ? <Login/> :<Signup/>}

          <Flex alignItems={'center'} justifyContent={'center'} my={1} gap={4} w={'full'}>
            <Box flex={2} bg={'gray.400'} h={'1px'}/>
            <Text mx={1} color={'white'}>OR</Text>
            <Box flex={2} bg={'gray.400'} h={'1px'}/> 
          </Flex>

          <GoogleLogIn/>
        </VStack>
      </Box>

      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account" : "Already have an account"}
          </Box>
          <Box onClick={()=>{setIsLogin(!isLogin)}} cursor={'pointer'} color={'blue.500'}>
            {isLogin ? 'Sign up' : 'Log in'}
          </Box>

        </Flex>
      </Box>
    </>
  )
}
