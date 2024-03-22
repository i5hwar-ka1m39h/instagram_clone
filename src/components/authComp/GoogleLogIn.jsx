import React from 'react'
import {Flex, Text, Image} from '@chakra-ui/react'
import { auth, firestore } from '../../firebase/firebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import useShowToast from '../../hooks/useShowToast';
import useAuthStore from '../../store/authStore';
import {  doc,  getDoc,  setDoc } from "firebase/firestore";

export default function GoogleLogIn({prefix}) {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const showToast =useShowToast();
  const loginUser = useAuthStore(state=>state.login)
  const handleAuth = async()=>{
    try {
      const newUser = await signInWithGoogle();
      if(!newUser && error){
        showToast('Error', error.message, 'error');
        return;
      }

      const userRef = doc(firestore, 'users', newUser.user.uid)
      const docSnap = await getDoc(userRef);
      if(docSnap.exists()){
        //login not sign up
        const userDoc =  docSnap.data();
        localStorage.setItem('user-insta-info', JSON.stringify(userDoc))
        loginUser(userDoc);
      }else{
        //sign up hence add new user to db
        const userDoc = {
          uid:newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split('@')[0],
          fullname: newUser.user.displayName,
          bio:'',
          posts:[],
          followers:[],
          following:[],
          profilePic:newUser.user.photoURL,
          createdAt: Date.now()
        }
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc);
        localStorage.setItem('user-insta-info', JSON.stringify(userDoc))
        loginUser(userDoc);
      }
    } catch (error) {
      showToast('Error', error.message,'error')
    }
  }
  return (
    <>
      <Flex alignItems={'center'} justifyContent={'center'} gap={4} cursor={'pointer'} 
      onClick={handleAuth} > 
        <Image src='/google.png'w={5} alt='google logo'/>
        <Text mx={2} color={'blue.500'}>
          {prefix} with Google
        </Text>
      </Flex>
    </>
  )
}
