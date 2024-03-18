import React from 'react'
import {Flex, Box, GridItem, Text, Image, useDisclosure, VStack, Avatar, Divider} from '@chakra-ui/react'
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import {Modal,ModalOverlay,ModalContent, ModalBody,ModalCloseButton , ModalHeader,} from '@chakra-ui/react'
import { MdDelete } from "react-icons/md";
import CommentBy from './CommentBy';
import PostFooter from './../feed/PostFooter'

export default function ProfilePostSingle({img}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <GridItem cursor={'pointer'} borderRadius={4} overflow={'hidden'} border={'1px solid'} borderColor={'whiteAlpha.300'} 
        position={'relative'} aspectRatio={1/1}>

            <Flex opacity={0}
            _hover={{opacity:1}}
            position={'absolute'}
            top={0} bottom={0} left={0} right={0}
            bg={'blackAlpha.700'}
            zIndex={1}
            transition={'all 0.3s ease'}
            justifyContent={'center'}
            onClick={onOpen}>

                   

                <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
                    <Flex>
                        <AiFillHeart size={20}/>
                        <Text fontWeight={'bold'} ml={2}>234</Text>
                    </Flex>
                    <Flex>
                        <FaComment/>
                        <Text fontWeight={'bold'} ml={2}>234</Text>
                    </Flex>
                </Flex>

            </Flex>
            <Image src={img} w={'100%'} h={'100%'} alt='some post '/>

            
        </GridItem>

        <Modal isOpen={isOpen} onClose={onClose}
        isCentered={true} size={{base:'3xl', md:'5xl'}}>
             <ModalOverlay >
                <ModalCloseButton size={'lg'} />
             </ModalOverlay>
                <ModalContent>
                    
                 
                        <ModalBody bg={'black'} p={5}>
                            <Flex  gap={4} w={{base:'90%', sm:'70%', md:'full'}} mx={'auto'}>
                                <Box overflow={'hidden'} borderRadius={4} border={'1px solid'} borderColor={'whiteAlpha.300'} flex={1.5} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <Image src={img}/>
                                </Box> 

                                <Flex flex={1} px={10} flexDirection={'column'} display={{base:'none', md:'flex'}} >
                                    <Flex alignItems={'center'} justifyContent={'space-between'} >

                                        <Flex alignItems={'center'} justifyContent={'center'} gap={5}>
                                            <Avatar src='/profilepic.png' size={'sm'} name='oyeee'/>
                                            <Text fontSize={12} fontWeight={'bold'}>usename</Text>
                                        </Flex>

                                        <Flex _hover={{color:'red.600', bg:'whiteAlpha.300'}} borderRadius={4} p={1} alignItems={'center'} justifyContent={'center'} gap={2}>
                                            <MdDelete size={20} cursor={'pointer'}/>
                                        </Flex>
                                    </Flex>
                                    <Divider  my={4} bg={'gray.500'}/>
                                    <VStack w={'full'} alignItems={'start'} maxH={'350px'} overflowY={'auto'}>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>
                                        <CommentBy createdAt='1d ago' username='haiyaaa' avatar='/img2.png' commentBody='o this is supposed to be commment'/>

                                    </VStack>
                                    <Divider my={4} bg={'gray.800'}/>
                                    <PostFooter isProfilePage={true}/>

                                </Flex>

                            </Flex>
                        </ModalBody>
                </ModalContent>
         </Modal>
    </>
  )
}
