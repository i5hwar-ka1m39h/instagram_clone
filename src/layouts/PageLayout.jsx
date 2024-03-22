import React from 'react'
import {Flex, Box} from '@chakra-ui/react'
import SideBar from '../components/sidebarcomp/SideBar'
import {useLocation} from 'react-router-dom'
import { auth } from '../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from '../components/NavBar'
import { Spinner } from '@chakra-ui/react'

export default function PageLayout({children}) {
    const {pathname} = useLocation()
    const [user, loading, error] = useAuthState(auth);
    
    const canRenderSidebar = pathname !== '/auth' && user;
    const canRenderNavbar = !user && !loading && pathname !=='/auth';

    const loadingState = !user && loading;
    if(loadingState) return <PageIsLoading/>
  return (
    <>
    <Flex direction={canRenderNavbar? 'column':'row'}>
        
        {canRenderSidebar &&
            (<Box w={{base:'70px', md:'240px'}}>
                <SideBar/>
             </Box>)
        }

        {canRenderNavbar &&
          ( <NavBar/>)
        }
        

        <Box flex={1} w={{base: 'calc(100%-70px)', md: 'calc(100%-240px'}} mx={'auto'}>
            {children}
        </Box>
    </Flex>
    </>
  )
}

const PageIsLoading = ()=>{
  return(
    <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} h={'100vh'}>
      <Spinner size={'xl'}/>
    </Flex>
  )
}