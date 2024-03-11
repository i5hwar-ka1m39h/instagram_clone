import { Box, VStack,Image, Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function AuthForm() {
  const[isLogin, setIsLogin] = useState(true);
  const[inputs, setInputs] = useState({
    email:'',
    password:'',
    confirmPassword:''
  })
  const navigate = useNavigate();

  const handleSubmit =()=>{
    console.log('input:', inputs);
    if(!inputs.email || !inputs.password){
      alert('please fill all the fields');
      return;
    }
    navigate('/') 
  }

  
  return (
    <>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <VStack>
          <Image src='/logo.png' height={24} alt='instagram logo'/>

          <Input placeholder='Email' type='email' fontSize={14} value={inputs.email} 
          onChange={e=>setInputs({...inputs, email:e.target.value})}/>

          <Input placeholder='Password' type='password' fontSize={14} value={inputs.password}
          onChange={e=>setInputs({...inputs, password:e.target.value})} />

          {isLogin ?   null:
           <Input placeholder='Confirm Password' type='password' fontSize={14} value={inputs.confirmPassword}
           onChange={e=>setInputs({...inputs, confirmPassword:e.target.value})}/>}
          <Button w={'full'} fontSize={14} size={'sm'} colorScheme='blue' onClick={handleSubmit}>
            {isLogin ? 'Log in' : 'Sign up'}
          </Button>

          <Flex alignItems={'center'} justifyContent={'center'} my={1} gap={4} w={'full'}>
            <Box flex={2} bg={'gray.400'} h={'1px'}/>
            <Text mx={1} color={'white'}>OR</Text>
            <Box flex={2} bg={'gray.400'} h={'1px'}/> 
          </Flex>

          <Flex alignItems={'center'} justifyContent={'center'} gap={4} cursor={'pointer'}>
            <Image src='/google.png'w={5} alt='google logo'/>
            <Text mx={2} color={'blue.500'}>
              Log in with Google
            </Text>
          </Flex>
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
