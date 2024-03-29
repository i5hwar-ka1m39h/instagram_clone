import React from 'react'
import {Box, Flex, Link, Avatar, Tooltip, Button} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogOut from '../../hooks/useLogOut';
import SideBarItems from './SideBarItems';


export default function SideBar() {
    const {handleLOGOUT, loading, error} = useLogOut();
    const sideBarItems = [
        {
            icon:<AiFillHome size={25}/>,
            text:"Home",
            link:"/"
        },

        {
            icon:<SearchLogo/>,
            text:"Search",
            
        },

        {
            icon:<NotificationsLogo/>,
            text:"Notifications",
            
        },

        {
            icon:<CreatePostLogo/>,
            text:"Create",
            
        },

        {
            icon:<Avatar size={'sm'} name='profileHolder' src='/profilepic.png'/>,
            text:"Profile",
            link:"/random"
        },

    ]







  return (
    <>
    <Box 
    height={'100vh'}
    borderRight={'1px solid'}
    borderColor={'whiteAlpha.300'}
    position={'sticky'}
    top={0}
    left={0}
    py={8}
    px={{base:2, md:4}}>

        <Flex direction={'column'} w={'full'} height={'full'} gap={10}>
            <Link to={'/'} as={RouterLink} pl={2} display={{base:'none', md: 'block'}} cursor={'pointer'} >
                <InstagramLogo/>
            </Link>

            <Link to={'/'} as={RouterLink} p={2} display={{base:'block', md: 'none'}} borderRadius={6}
            _hover={{bg:'whiteAlpha.200'}} w={10} cursor={'pointer'} >
                <InstagramMobileLogo/>
            </Link>

            <Flex direction={'column'} gap={5} cursor={'pointer'}>
               <SideBarItems/> 
            </Flex>

            <Flex direction={'column'} gap={5} cursor={'pointer'} mt={'auto'}>
                
                    <Tooltip  hasArrow label={'logout'} placement='right' ml={1} openDelay={500} display={{base:'block', md:'none'}} >

                        <Flex  w={{base:10, md: 'full'}} onClick={handleLOGOUT}
                        justifyContent={{base:'center', md:'flex-start'}} p={2} gap={4} borderRadius={6} alignItems={'center'} _hover={{bg:'whiteAlpha.400'}} as={RouterLink}>
                            <BiLogOut size={25}/>
                            <Button display={{base:'none', md:'block'}} variant={'ghost'} _hover={{bg:'transperent'}} isLoading={loading}>
                               Logout
                            </Button>
                        </Flex>
                    </Tooltip>
                

            </Flex>


        </Flex>

    </Box>
    </>
  )
}
