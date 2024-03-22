import React, { useState } from 'react'
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import {  firestore, storage } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import useUserProfileStore from '../store/userProfileStore';

export default function useEditProfile() {
 const[isUpdating, setIsUpdating] = useState(false);
 const authUser = useAuthStore(state=>state.user);
 const setAuthUser = useAuthStore(state=>state.setUser);
 const setUserProfile = useUserProfileStore(state=>state.setUserProfile)
 const showToast = useShowToast();
  
 const handleEditing = async(inputs, selectedFile)=>{
    if(isUpdating || !authUser) return;
    setIsUpdating(true)
    const storageRef = ref(storage, `profilePic/${authUser.uid}`)
    const userDocRef = doc(firestore, 'users', authUser.uid)
    let URL = ''
    try {
        if(selectedFile){
           await uploadString(storageRef, selectedFile, 'data_url');
           URL =  await getDownloadURL(storageRef)
        }

        const updatedUser = {
            ...authUser,
            fullname: inputs.fullname || authUser.fullname,
            username: inputs.username || authUser.username,
            bio:inputs.bio || authUser.bio,
            profilePic: URL || authUser.profilePic,
        }

        await updateDoc(userDocRef, updatedUser)
        localStorage.setItem('user-insta-info', JSON.stringify(updatedUser))
        setAuthUser(updatedUser)
        setUserProfile(updatedUser)
        showToast('Success','Profile Updated Successfully', 'success')
    } catch (error) {
        showToast('Error', error.message, 'error')
    }
 }

 return{ handleEditing, isUpdating }
}
