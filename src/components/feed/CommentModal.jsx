import React, { useRef } from 'react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,ModalBody,ModalCloseButton,Input, Flex, Button} from '@chakra-ui/react'
import CommentBy from '../userProfile/CommentBy'
import usePostComment from '../../hooks/usePostComment'

export default function CommentModal({isOpen, onClose, post}) {
    const {isLoading,handleCommentAdd} = usePostComment()
    const commentRef = useRef(null);
    const handleSubmitComment = async(event)=>{
        event.preventDefault();
        await handleCommentAdd(post.id, commentRef.current.value);
        commentRef.current.value = '';

    }
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' >
    <ModalOverlay > <ModalCloseButton/></ModalOverlay>
				<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Comments</ModalHeader>
					
					<ModalBody pb={6}>
                    <Flex mb={4} gap={6} flexDirection={'column'} maxH={'250px'} overflow={'auto'}>
                    {post.comments.map(comment=>(
                                            <CommentBy key={comment.id} comment={comment}/>
                                        ))}
                    </Flex>

                    <form onSubmit={handleSubmitComment} style={{ marginTop: "2rem" }}>
						<Input placeholder='Comment' size={"sm"} ref={commentRef} />
						<Flex w={"full"} justifyContent={"flex-end"}>
							<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
								Post
							</Button>
						</Flex>
					</form>
					</ModalBody>
				</ModalContent>
      </Modal>
      </>
  )
}
