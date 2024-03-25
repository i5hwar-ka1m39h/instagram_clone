import React, { useRef } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
   
  } from '@chakra-ui/react'
import {Input, FormControl, FormLabel, Flex, Button} from '@chakra-ui/react'
import useSearch from '../../hooks/useSearch'
import SuggestedUsers from '../suggestionBox/SuggestedUsers'



export default function SearchModal({isOpen, onClose}) {
    const {searchRequest, found, isLoading,setFound} = useSearch()
    const serachRef = useRef(null);

    const handleSearchUser =(e)=>{
        e.preventDefault()
        console.log(serachRef.current.value);
        searchRequest(serachRef.current.value)
    }
  
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' >
    <ModalOverlay > <ModalCloseButton/></ModalOverlay>
				<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Search</ModalHeader>
					
					<ModalBody pb={6}>
						<form onSubmit={handleSearchUser}>
							<FormControl>
								<FormLabel>Username</FormLabel>
								<Input placeholder='find a friend'  ref={serachRef}/>
							</FormControl>

							<Flex w={"full"} justifyContent={"flex-end"}>
								<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading} >
									Search
								</Button>
							</Flex>
						</form>
                        
                    {found && <SuggestedUsers user={found} setUser={setFound}/>}
						
					</ModalBody>
				</ModalContent>
      </Modal>
    </>
  )
}
