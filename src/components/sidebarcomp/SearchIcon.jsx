import React from 'react'
import {Tooltip,Flex,Box } from '@chakra-ui/react'
import { SearchLogo } from '../../assets/constants'
import SearchModal from './SearchModal'
import { useDisclosure } from '@chakra-ui/react'

export default function SearchIcon() {
  const{isOpen, onClose, onOpen} = useDisclosure()
  return (
    <>
    <Tooltip
			hasArrow
			label={"Search"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Flex
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
        onClick={onOpen}
			>
				<SearchLogo/>
				<Box display={{ base: "none", md: "block" }}>Search</Box>
			</Flex>
		</Tooltip>
    {isOpen && <SearchModal isOpen={isOpen} onClose={onClose}/>}
    </>
  )
}
