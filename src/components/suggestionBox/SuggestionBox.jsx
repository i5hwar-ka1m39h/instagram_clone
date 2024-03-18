import React from 'react'
import {VStack, Flex, Text, Link} from '@chakra-ui/react'
import SuggestionHeader from './SuggestionHeader'
import SuggestedUsers from './SuggestedUsers'

export default function SuggestionBox() {
  return (
   <>
   <VStack py={8} px={6} gap={4}>
    <SuggestionHeader/>
    <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
      <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>Suggested for you</Text>
      <Text fontSize={12} fontWeight={'bold'} cursor={'pointer'} _hover={{color:'gray.500'}}>See all</Text>
    </Flex>
    <SuggestedUsers name='holya' followersCount={555} avatar='/img3.png'/>
    <SuggestedUsers name='holya' followersCount={555} avatar='/img3.png'/>
    <SuggestedUsers name='holya' followersCount={555} avatar='/img3.png'/>
    <SuggestedUsers name='holya' followersCount={555} avatar='/img3.png'/>
    <SuggestedUsers name='holya' followersCount={555} avatar='/img3.png'/>

    <Text fontSize={12} textAlign={'start'} color={'gray'} mt={5}>
      © 2024 INSTAGRAM FROM {' '}
      <Link href='https://github.com/i5hwar-ka1m39h' color={'gray'} target='_blank' fontSize={14} >
        Ishwar Kalmegh
      </Link>
    </Text>

    
   </VStack>
   </>
  )
}
