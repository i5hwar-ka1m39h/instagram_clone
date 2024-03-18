import React, { useEffect } from 'react'
import { useState } from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import { Skeleton } from '@chakra-ui/react'
import ProfilePostSingle from './ProfilePostSingle'


export default function ProfilePosts() {
    const[isLoading, setIsLoading] = useState(true)
    

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },2000)
    },[])

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

    {!isLoading && <Grid templateColumns={{sm:'repeat(1, 1fr)', md:'repeat(3,1fr)'}} gap={1} columnGap={1}>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
        <ProfilePostSingle img='/img4.png'/>
    </Grid>}
    
    </>
  )
}
