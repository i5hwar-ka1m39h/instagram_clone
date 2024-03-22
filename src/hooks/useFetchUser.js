import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import useUserProfileStore from '../store/userProfileStore';

export const useFetchUser = (username) => {
    const[isLoading, setIsLoading] = useState(true);
    const showToast = useShowToast();
    const {userProfile, setUserProfile} = useUserProfileStore()

    useEffect(()=>{
        const getUserProfile = async()=>{
            try {
                const queryUser = query(collection(firestore, 'users'), where('username', '==', username))
                const userSnapshot = await getDocs(queryUser);
                
                if(userSnapshot.empty) return setUserProfile(null)
                let userDoc;
                userSnapshot.forEach(user=>{
                    userDoc = user.data();
                }) 
                setUserProfile(userDoc)
                console.log(userDoc);

            } catch (error) {
                showToast('Error', error.message, 'error');
            }finally{
                setIsLoading(false);
            }
        }

        getUserProfile();
    },[setUserProfile, username, showToast])
  return {isLoading, userProfile}
}
