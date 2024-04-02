import React, { useEffect } from 'react'
import { useState } from 'react'
import {Grid, GridItem, Flex, Text} from '@chakra-ui/react'
import { Skeleton } from '@chakra-ui/react'
import ProfilePostSingle from './ProfilePostSingle'
import useGetUserPosts from '../../hooks/useGetUserPosts'


export default function ProfilePosts() {
   const{isLoading, posts} = useGetUserPosts()
    
    console.log(posts);

   if(!isLoading && posts.length ===0) return <NoPostFound/>

  return (
    <>
    {isLoading &&
        <Grid templateColumns={{sm:'repeat(1, 1fr)', md:'repeat(3,1fr)'}} gap={1} columnGap={1}>
            <Skeleton>
                <GridItem w='100%' h={300} bg='blue.500' />
            </Skeleton>
            <Skeleton>
                <GridItem w='100%' h={300} bg='blue.500' />
            </Skeleton>
            <Skeleton>
                <GridItem w='100%' h={300} bg='blue.500' />
            </Skeleton>
            <Skeleton>
                <GridItem w='100%' h={300} bg='blue.500' />
            </Skeleton>
            <Skeleton>
                <GridItem w='100%' h={300} bg='blue.500' />
            </Skeleton>
            <Skeleton>
                <GridItem w='100%' h={300} bg='blue.500' />
            </Skeleton>
        </Grid>
    }

    {/* {!isLoading && <Grid templateColumns={{sm:'repeat(1, 1fr)', md:'repeat(3,1fr)'}} gap={1} columnGap={1}>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
    </Grid>} */}
    {!isLoading && (
        <Grid templateColumns={{sm:'repeat(1, 1fr)', md:'repeat(3,1fr)'}} gap={1} columnGap={1}>
            {posts.map(post=>(
                <>
                    <ProfilePostSingle post={post} key={post.id}/>
                </>
            ))}
        </Grid>

    )}





    </>
  )
}


const NoPostFound = ()=>{
    return(
        <>
        <Flex flexDirection={'column'} textAlign={'center'} mx={'auto'} mt={10}>
            <Text fontSize={'2xl'}>No post by this user</Text>
        </Flex>
        </>
    )
}