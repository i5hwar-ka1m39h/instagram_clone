import React from 'react'
import {Flex, Avatar, AvatarGroup,VStack, Text, Button} from '@chakra-ui/react'

export default function ProfileHeader() {
  return (
    <Flex gap={{base:4, sm:10}} direction={{base:'column', sm:'row'}} py={10}>
      <AvatarGroup size={{base:'xl', md:'2xl'}} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'}>
      <Avatar src='/profilepic.png' />
      </AvatarGroup>
      
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex gap={4} direction={{base:'column', sm:'row'}} justifyContent={{base:'center', sm:'flex-start'}} alignItems={'center'} w={'full'}>

          <Text fontSize={{base:'sm', sm:'lg'}} >my name</Text>
          <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button backgroundColor={'white'} color={'black'} _hover={{bg:'whiteAlpha.500'}} size={{base:'xs', md: 'sm'}}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={'center'} gap={{base:2, sm:4}}>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>4</Text>
            posts
          </Text>

          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>4</Text>
            followers
          </Text>

          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>4</Text>
            following
          </Text>
        </Flex>

        <Flex alignItems={'center'} gap={2}>
          <Text fontSize={'sm'} fontWeight={'bold'}>heaading\username</Text>
        </Flex>
        <Text fontSize={'sm'}>user information</Text>

      </VStack>

    </Flex>
  )
}
