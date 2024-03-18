import React from 'react'
import {Flex, Avatar, Box, Text, Link} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'

export default function SuggestionHeader() {
  return (
    <>
    <Flex alignItems={'center'} justifyContent={'space-between'} width={'full'} >
        <Flex alignItems={'center'} gap={2}>
            <Avatar name='random' size={'lg'} src='/profilepic.png'/>
            <Text fontSize={12} fontWeight={'bold'}>
                my_profile
            </Text>
        </Flex>
        <Link as={RouterLink} to={'/auth'} fontSize={14} fontWeight={'medium'} color={'blue.400'} style={{textDecoration: 'none'}} cursor={'pointer'}>
            Log Out
        </Link>
        

    </Flex>
    
    </>
  )
}
