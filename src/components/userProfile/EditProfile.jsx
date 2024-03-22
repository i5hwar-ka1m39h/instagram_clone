import React, { useRef, useState } from "react";
import {
	Avatar,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import usePreviewImage from "../../hooks/usePreviewImage";
import useEditProfile from "../../hooks/useEditProfile";
import useShowToast from "../../hooks/useShowToast";

const EditProfile = ({ isOpen, onClose }) => {

  const authUser = useAuthStore(state=>state.user);
  const showToast = useShowToast()
  const [inputs, setInputs] = useState({
    fullname:'',
    username:'',
    bio:''
  });

  const{handleEditing, isUpdating}= useEditProfile();

  const fileRef = useRef(null)
  const{handleImage, selectedFile, setSelectedFile}=usePreviewImage()
  console.log(selectedFile);


  const handleEditeProfile =async()=>{
    try {
      await handleEditing(inputs, selectedFile)
      setSelectedFile(null);
      onClose();
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }


  





	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={"black"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
					<ModalHeader />
					<ModalCloseButton />
					<ModalBody>
						{/* Container Flex */}
						<Flex bg={"black"}>
							<Stack spacing={4} w={"full"} maxW={"md"} bg={"black"} p={6} my={0}>
								<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
									Edit Profile
								</Heading>
								<FormControl>
									<Stack direction={["column", "row"]} spacing={6}>
										<Center>
											<Avatar size='xl' src={selectedFile|| authUser.profilePic} border={"2px solid white "} />
										</Center>
										<Center w='full'>
											<Button w='full' onClick={()=>fileRef.current.click()}>Edit Profile Picture</Button>
										</Center>
                    <Input type="file" hidden ref={fileRef} onChange={handleImage}/>
									</Stack>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Full Name</FormLabel>
									<Input placeholder={authUser.fullname} size={"sm"} type={"text"}
                  value={inputs.fullname || authUser.fullname} 
                  onChange={e=>setInputs({...inputs, fullname:e.target.value})}/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Username</FormLabel>
									<Input placeholder={authUser.username} size={"sm"} type={"text"} 
                  value={inputs.username || authUser.username}
                  onChange={e=>setInputs({...inputs, username:e.target.value})}/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Bio</FormLabel>
									<Input placeholder={authUser.bio} size={"sm"} type={"text"} 
                  value={inputs.bio || authUser.bio}
                  onChange={e=>setInputs({...inputs, bio: e.target.value})}/>
								</FormControl>

								<Stack spacing={6} direction={["column", "row"]}>
									<Button
										bg={"gray.500"}
										color={"white"}
										w='full'
										size='sm'
										_hover={{ bg: "red.500" }} onClick={onClose}
									>
										Cancel
									</Button>
									<Button
										bg={"gray.500"}
										color={"white"}
										size='sm'
										w='full' isLoading={isUpdating}
										_hover={{ bg: "blue.500" }} onClick={handleEditeProfile}
									>
										Submit
									</Button>
								</Stack>
							</Stack>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditProfile;