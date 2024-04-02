import React, { useRef, useState } from 'react'
import { Flex, Box, Text, InputGroup, InputRightElement, Button, Input} from '@chakra-ui/react';
import {UnlikeLogo, NotificationsLogo, CommentLogo }from './../../assets/constants'
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';
import useLikePost from '../../hooks/useLikePost';

export default function PostFooter({post,username, isProfilePage}) {
  
  
  const[comment, setComment] = useState('');
  const authUser= useAuthStore(state=>state.user)
  const commentRef = useRef(null);

  const{isLoading,handleCommentAdd}=usePostComment()
  const{likes, isLLoading, addLike, isLiked} = useLikePost(post);

  const handleClick =async()=>{
   await addLike();
  }

  const handlePostComment =async()=>{
    await handleCommentAdd(post.id, comment )
    setComment('');
  }


  return (
    <Box mb={4} marginTop={'auto'}>
      <Flex alignItems={'center'} pt={0} w={'full'} mt={4} gap={4} mb={2}>
        <Box onClick={handleClick} cursor={'pointer'} fontSize={18} isLoading={isLLoading}>
          {!isLiked ? <NotificationsLogo/> : <UnlikeLogo/>}
        </Box>

        <Box cursor={'pointer'} fontSize={18} onClick={()=>commentRef.current.focus()}>
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
      {authUser &&(
        <Flex alignItems={'center'} justifyContent={'space-between'} gap={2} width={'full'} >
          <InputGroup size='md'>
            <Input variant={'flushed'} placeholder={'Add a comment'} fontSize={14} value={comment} 
            onChange={e=>setComment(e.target.value)} ref={commentRef} />
            <InputRightElement >
              <Button fontSize={14} fontWeight={600} isLoading={isLoading}
              onClick={handlePostComment} color={'blue.500'} cursor={'pointer'} _hover={{color:'white'}} bg={'transparent'}> Post </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  )
}
