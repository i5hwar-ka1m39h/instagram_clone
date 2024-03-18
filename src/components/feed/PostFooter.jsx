import React, { useState } from 'react'
import { Flex, Box, Text, InputGroup, InputRightElement, Button, Input} from '@chakra-ui/react';
import {UnlikeLogo, NotificationsLogo, CommentLogo }from './../../assets/constants'

export default function PostFooter({username, isProfilePage}) {
  const[like, setLike] = useState(false);
  const[likes, setlikes]= useState(0);

  const handleClick =()=>{
    if(like){
      setLike(!like);
      setlikes(likes - 1);
    }else{
      setLike(true);
      setlikes(likes +  1);
    }
  }


  return (
    <Box mb={4} marginTop={'auto'}>
      <Flex alignItems={'center'} pt={0} w={'full'} mt={4} gap={4} mb={2}>
        <Box onClick={handleClick} cursor={'pointer'} fontSize={18}>
          {!like ? <NotificationsLogo/> : <UnlikeLogo/>}
        </Box>

        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo/>
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={'sm'}>
          {likes} likes
        </Text>
      {
        !isProfilePage && (
          <>
            <Text fontSize={'sm'} fontWeight={700}>
              {username}{' '}
              <Text as='span' fontWeight={400}>
                hurrray!!!!!!!!!!
              </Text>
            </Text>

            <Text fontSize={'sm'} color={'gray'}>
              View all 1,000 comments
            </Text>
          </>
        )
      }

        <Flex alignItems={'center'} justifyContent={'space-between'} gap={2} width={'full'} >
          <InputGroup size='md'>
            <Input variant={'flushed'} placeholder={'Add a comment'} fontSize={14} />
            <InputRightElement >
              <Button fontSize={14} fontWeight={600} color={'blue.500'} cursor={'pointer'} _hover={{color:'white'}} bg={'transparent'}> Post </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
    </Box>
  )
}
