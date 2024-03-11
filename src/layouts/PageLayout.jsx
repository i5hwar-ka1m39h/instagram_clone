import React from 'react'
import {Flex, Box} from '@chakra-ui/react'
import SideBar from '../components/SideBar'
import {useLocation} from 'react-router-dom'

export default function PageLayout({children}) {
    const {pathname} = useLocation()
    
  return (
    <>
    <Flex>
        
        {pathname !== '/auth' &&
            (<Box w={{base:'70px', md:'240px'}}>
                <SideBar/>
             </Box>)
        }
        

        <Box flex={1} w={{base: 'calc(100%-70px)', md: 'calc(100%-240px'}}>
            {children}
        </Box>
    </Flex>
    </>
  )
}
