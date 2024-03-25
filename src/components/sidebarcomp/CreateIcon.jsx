import React from 'react'
import { CreatePostLogo } from '../../assets/constants'
import {Tooltip, Flex, Box} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import CreateModal from './CreateModal'

export default function CreateIcon() {
	const{isOpen, onClose, onOpen} = useDisclosure()
  return (
    <>
    <Tooltip
			hasArrow
			label={"Create"}
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
				<CreatePostLogo/>
				<Box display={{ base: "none", md: "block" }}>Create</Box>
			</Flex>
		</Tooltip>
		{isOpen && <CreateModal isOpen={isOpen} onClose={onClose}/>}
    </>
  )
}
