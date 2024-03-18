import React from 'react'
import {Flex, Avatar, Text} from '@chakra-ui/react'

export default function CommentBy({createdAt, username, commentBody, avatar}) {
  return (
    <Flex  gap={4}>
        <Avatar src={avatar} size={'sm'}/>
        <Flex  gap={2} direction={'column'}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={2}>
                <Text fontSize={12} fontWeight={'bold'}>{username}</Text>
                <Text fontSize={14}>{commentBody}</Text>
            </Flex>
        
            <Text fontSize={12} color={'gray'}>{createdAt}</Text>
        </Flex>
    </Flex>
  )
}
