import React from 'react'
import useShowToast from './useShowToast';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';

export default function useLogIn() {
    const showToast = useShowToast()
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const loginUser = useAuthStore(state=>state.login)

    const login = async(inputs)=>{
      if(!inputs.email || !inputs.password){
        showToast('Error', 'please fill all the fields', 'error')
        return;
      }
      try {
       const userInfo = await signInWithEmailAndPassword(inputs.email, inputs.password)
       if(userInfo){
        const docRef = doc(firestore, 'users', userInfo.user.uid)
        const docSnap = await getDoc(docRef);
        localStorage.setItem('user-insta-info', JSON.stringify(docSnap.data()))
        loginUser(docSnap.data());
       }
      } catch (error) {
        showToast('Error', error.message, 'error')
      }
    }
  return {loading, login, error}
}
