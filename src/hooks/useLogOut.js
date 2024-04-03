import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth';
import {auth} from './../firebase/firebase'
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';


export default function useLogOut() {
    const [signOut, loading, error] = useSignOut(auth);
    const logOutUser = useAuthStore((state) => state.logout);
    const showToast = useShowToast()
    
    const handleLOGOUT = async()=>{
       try {
        await signOut();
        localStorage.removeItem('user-insta-info')
        logOutUser()
       } catch (error) {
        showToast('Error', error, 'error');
       }
    }
  return {handleLOGOUT, loading,error}
}
