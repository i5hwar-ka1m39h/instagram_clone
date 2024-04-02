import React, { useState } from 'react'
import {Flex, Box, GridItem, Text, Image, useDisclosure, Button,VStack, Avatar, Divider} from '@chakra-ui/react'
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import {Modal,ModalOverlay,ModalContent, ModalBody,ModalCloseButton , ModalHeader,} from '@chakra-ui/react'
import { MdDelete } from "react-icons/md";
import CommentBy from './CommentBy';
import PostFooter from './../feed/PostFooter'
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/authStore';
import useShowToast from '../../hooks/useShowToast';
import { deleteObject, ref } from 'firebase/storage';
import { firestore, storage } from '../../firebase/firebase';
import { arrayRemove, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import usePostStore from '../../store/postStore';
import Caption from './Caption';

export default function ProfilePostSingle({post}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const userProfile = useUserProfileStore(state=>state.userProfile)
    const authUser = useAuthStore(state=>state.user);
    const showToast = useShowToast()
    const {deletePost} =usePostStore()
    const deletePOST = useUserProfileStore(state=>state.deletePost);
    const [isDeleting, setisDeleting] = useState();

    const handleDelete = async()=>{
        if(!window.confirm( "Are you sure to delete this post?")) return;
        if(isDeleting) return;
        setisDeleting(true);
        try {
            const imageRef = ref(storage, `posts/${post.id}`);
            await deleteObject(imageRef)
            const userRef = doc(firestore,  "users", authUser.uid);
            await deleteDoc(doc(firestore, 'posts', post.id))
            await updateDoc(userRef,{posts: arrayRemove(post.id)});
            deletePost(post.id)
            deletePOST(post.id)
            showToast('Success', 'deleted the post', 'success')
        } catch (error) {
            showToast('Error', error.message, 'error')
        }finally{
            setisDeleting(false);
        }

    }
    
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
            onClick={onOpen} >

                   

                <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
                    <Flex>
                        <AiFillHeart size={20}/>
                        <Text fontWeight={'bold'} ml={2}>{post.likes.length}</Text>
                    </Flex>
                    <Flex>
                        <FaComment/>
                        <Text fontWeight={'bold'} ml={2}>{post.comments.length}</Text>
                    </Flex>
                </Flex>

            </Flex>
            <Image src={post.imageURL} w={'100%'} h={'100%'} alt='some post '/>

            
        </GridItem>

        <Modal isOpen={isOpen} onClose={onClose} 
        isCentered={true} size={{base:'3xl', md:'5xl'}}>
             <ModalOverlay >
                <ModalCloseButton size={'lg'} />
             </ModalOverlay>
                <ModalContent>
                    
                 
                        <ModalBody bg={'black'} p={5}>
                            <Flex  gap={4} w={{base:'90%', sm:'70%', md:'full'}} mx={'auto'}
                            maxH={'90vh'} minH={'50vh'}>
                                <Box overflow={'hidden'} borderRadius={4} border={'1px solid'} borderColor={'whiteAlpha.300'} flex={1.5} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <Image src={post.imageURL}/>
                                </Box> 

                                <Flex flex={1} px={10} flexDirection={'column'} display={{base:'none', md:'flex'}} >
                                    <Flex alignItems={'center'} justifyContent={'space-between'} >

                                        <Flex alignItems={'center'} justifyContent={'center'} gap={5}>
                                            <Avatar src={userProfile.profilePic} size={'sm'} name='oyeee'/>
                                            <Text fontSize={12} fontWeight={'bold'}>{userProfile.username}</Text>
                                        </Flex>

                                        {authUser?.uid === userProfile.uid &&(
                                        <Button _hover={{color:'red.600', bg:'whiteAlpha.300'}} onClick={handleDelete} isLoading={isDeleting}
                                        size={'sm'} bg={'transparent'} borderRadius={4} p={1} alignItems={'center'} justifyContent={'center'} gap={2}>
                                            <MdDelete size={20} cursor={'pointer'}/>
                                        </Button>)}
                                    </Flex>
                                    <Divider  my={4} bg={'gray.500'}/>


                                    <VStack w={'full'} alignItems={'start'} maxH={'350px'} overflowY={'auto'}>
                                        {/* {post caption} */}
                                        {post.caption && <Caption post={post}/>}
                                        <Divider my={4} bg={'gray.800'}/>


                                            {/* {comment section} */}
                                        {post.comments.map(comment=>(
                                            <CommentBy key={comment.id} comment={comment}/>
                                        ))}

                                    </VStack>
                                    <Divider my={4} bg={'gray.800'}/>
                                    <PostFooter isProfilePage={true} post={post}/>

                                </Flex>

                            </Flex>
                        </ModalBody>
                </ModalContent>
         </Modal>
    </>
  )
}
