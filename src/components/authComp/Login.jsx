import React from 'react'
import {Button, Input} from '@chakra-ui/react'
import { useState } from 'react'

export default function Login() {
  const[inputs, setInputs] = useState({
    email:'',
    password:'',
  })
  return (
    <>
        <Input placeholder='Email' type='email' fontSize={14} value={inputs.email} size={'sm'}
          onChange={e=>setInputs({...inputs, email:e.target.value})}/>


        <Input placeholder='Password' type='password' fontSize={14} value={inputs.password} size={'sm'}
          onChange={e=>setInputs({...inputs, password:e.target.value})} />

        <Button w={'full'} fontSize={14} size={'sm'} colorScheme='blue' >
          Log in 
        </Button>

    </>
  )
}
