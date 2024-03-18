import React from 'react'
import {Flex, Container, Box, Image, VStack} from '@chakra-ui/react'
import AuthForm from './../components/authComp/AuthForm'



export default function Auth() {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignContent={'center'} px={4}>
        <Container maxW={'container.md'} padding={0}>
            <Flex justifyContent={'center'} alignContent={'center'} gap={10}>
                <Box display={{base:'none', md: 'block'}}>
                    <Image src='/auth.png' h={650} alt='auth window image'/>
                </Box>

                <VStack spacing={4} align={'stretch'} padding={10}>
                    <AuthForm/>
                    <Box textAlign={'center'}> Get the app.</Box>
                    <Flex gap={5} justifyContent={'center'}>
                        <Image src='/playstore.png' h={10} alt='playstore ad'/>
                        <Image src='/microsoft.png' h={10} alt='ms store ad'/>
                    </Flex>
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}
