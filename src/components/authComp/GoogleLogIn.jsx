import React from 'react'
import {Flex, Text, Image} from '@chakra-ui/react'

export default function GoogleLogIn() {
  return (
    <>
      <Flex alignItems={'center'} justifyContent={'center'} gap={4} cursor={'pointer'}>
        <Image src='/google.png'w={5} alt='google logo'/>
        <Text mx={2} color={'blue.500'}>
          Log in with Google
        </Text>
      </Flex>
    </>
  )
}
