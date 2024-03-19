import React from 'react'
import {Button, Input, InputGroup,InputRightElement, Alert, AlertIcon} from '@chakra-ui/react'
import { useState } from 'react'
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import useSignUpEmail from '../../hooks/useSignUpEmail'

export default function Signup() {
  const[inputs, setInputs] = useState({
    email:'',
    fullName:'',
    userName:'',
    password:'',
  })

  const [showPassword, setShowPassword] = useState(false);

  const {loading, signup, error, } = useSignUpEmail();

  
  return (
    <>
      <Input placeholder='Email' type='email' fontSize={14} value={inputs.email} size={'sm'}
        onChange={e=>setInputs({...inputs, email:e.target.value})}/>

      <Input placeholder='Username' type='text' fontSize={14} value={inputs.userName} size={'sm'}
        onChange={e=>setInputs({...inputs, userName:e.target.value})}/>

      <Input placeholder='Full name' type='text' fontSize={14} value={inputs.fullName} size={'sm'}
        onChange={e=>setInputs({...inputs, fullName:e.target.value})}/>


      <InputGroup>
        <Input placeholder='Password' type={showPassword ? 'text' :'password'} fontSize={14} value={inputs.password} size={'sm'}
          onChange={e=>setInputs({...inputs, password:e.target.value})} />
          <InputRightElement>
          <Button height={'full'} variant={'ghost'} size={'sm'} onClick={()=>setShowPassword(!showPassword)}>
          {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
          </Button>
          </InputRightElement>
      </InputGroup>

      {error && 
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      }

      <Button w={'full'} fontSize={14} size={'sm'} colorScheme='blue' isLoading={loading} onClick={()=>signup(inputs)}>
        Sign up
      </Button>
    </>
  )
}
