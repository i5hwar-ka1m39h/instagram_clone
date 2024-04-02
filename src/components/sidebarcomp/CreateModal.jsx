import React, { useRef, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Textarea, Input,Button, Flex, Image
  } from '@chakra-ui/react'
import { BsFillImageFill } from "react-icons/bs";
import usePreviewImage from './../../hooks/usePreviewImage'
import { CloseButton } from '@chakra-ui/react'
import useCreatePost from '../../hooks/useCreatePost';
import useShowToast from '../../hooks/useShowToast';

export default function CreateModal({isOpen, onClose}) {
    const[caption, setCaption] = useState('');
    const imageRef = useRef(null);
    const{selectedFile, setSelectedFile, handleImage} = usePreviewImage()
    const{isLoading, handleCreatePost} =useCreatePost()
    const showToast = useShowToast()

    const handleSimpleClick =async()=>{
      try {
        await handleCreatePost(selectedFile, caption);
        onClose();
        setCaption('');
        setSelectedFile(null);
      } catch (error) {
        showToast('Error', error.message, 'error')
      }
    }

  return (
    <>
    
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' >
        <ModalOverlay > <ModalCloseButton/></ModalOverlay>
				<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Create</ModalHeader>
					
					<ModalBody pb={6}>
						<Textarea placeholder='Add some caption...' value={caption} onChange={e=>setCaption(e.target.value)}/>
                        <Input type='file' hidden ref={imageRef} onChange={handleImage} />
                        <BsFillImageFill  style={{marginTop:'15px', marginLeft:'5px', cursor:'pointer'}} size={16}
                        onClick={()=>imageRef.current.click()}/>
                        {selectedFile && (
                            <Flex mt={5} w={'full'} justifyContent={'center'} position={'relative'}>
                                <Image src={selectedFile} alt='selected image'/>
                                <CloseButton onClick={()=>{setSelectedFile(null)}}
                                position={'absolute'} top={2} right={2} bg={'red'}/>

                            </Flex>
                        )}
						
					</ModalBody>
                    <ModalFooter>
                        <Button isLoading={isLoading} onClick={handleSimpleClick}>Post</Button>
                    </ModalFooter>
				</ModalContent>
    </Modal>
    </>
  )
}
