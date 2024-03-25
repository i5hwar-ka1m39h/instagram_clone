import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Textarea, Input,Button
  } from '@chakra-ui/react'
  import { BsFillImageFill } from "react-icons/bs";

export default function CreateModal({isOpen, onClose}) {
    const[caption, setCaption] = useState('');
    
  return (
    <>
    
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' >
        <ModalOverlay > <ModalCloseButton/></ModalOverlay>
				<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Create</ModalHeader>
					
					<ModalBody pb={6}>
						<Textarea placeholder='Add some caption...' value={caption} onChange={e=>setCaption(e.target.value)}/>
                        <Input type='file' hidden/>
                        <BsFillImageFill  style={{marginTop:'15px', marginLeft:'5px', cursor:'pointer'}} size={16}/>
						
					</ModalBody>
                    <ModalFooter>
                        <Button>Post</Button>
                    </ModalFooter>
				</ModalContent>
    </Modal>
    </>
  )
}
