import React from 'react'
import {Tooltip, Link, Box} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import HomeIcon from './HomeIcon'
import NotificationIcon from './NotificationIcon'
import ProfileIcon from './ProfileIcon'

export default function SideBarItems() {
  return (
   <>
   <HomeIcon/>
   <NotificationIcon/>
   <ProfileIcon/>
   </>
  )
}
