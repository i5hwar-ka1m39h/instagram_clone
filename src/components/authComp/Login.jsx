import React from 'react'
import {Button, Input, Alert, AlertIcon} from '@chakra-ui/react'
import { useState } from 'react'
import useLogIn from '../../hooks/useLogIn'

export default function Login() {
  const[inputs, setInputs] = useState({
    email:'',
    password:'',
  })
  const {login , loading, error} = useLogIn();
  return (
    <>
        <Input placeholder='Email' type='email' fontSize={14} value={inputs.email} size={'sm'}
          onChange={e=>setInputs({...inputs, email:e.target.value})}/>


        <Input placeholder='Password' type='password' fontSize={14} value={inputs.password} size={'sm'}
          onChange={e=>setInputs({...inputs, password:e.target.value})} />

        {error && 
            <Alert status='error' fontSize={13} p={2} borderRadius={4}>
              <AlertIcon fontSize={12} />
              {error.message}
            </Alert>
        }

        <Button w={'full'} fontSize={14} size={'sm'} isLoading={loading} colorScheme='blue' onClick={()=>login(inputs.email, inputs.password)} >
          Log in 
        </Button>

    </>
  )
}
