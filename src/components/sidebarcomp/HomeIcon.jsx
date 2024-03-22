import React from 'react'
import {Tooltip, Link, Box} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
export default function HomeIcon() {
  return (
    <>
    <Tooltip  hasArrow label={'Home'} placement='right' ml={1} openDelay={500} display={{base:'block', md:'none'}} >
                        <Link to={'/' || "/random"} display={'flex'} w={{base:10, md: 'full'}}
                         justifyContent={{base:'center', md:'flex-start'}} p={2} gap={4} borderRadius={6} alignItems={'center'} _hover={{bg:'whiteAlpha.400'}} as={RouterLink}>
                            <AiFillHome />
                            <Box display={{base:'none', md:'block'}}>
                                Home
                            </Box>
                        </Link>
     </Tooltip>
    </>
  )
}
