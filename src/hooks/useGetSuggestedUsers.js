import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import useAuthStore from '../store/authStore';

export default function useGetSuggestedUsers() {
    const[isLoading, setIsLoading] = useState(true);
    const [multiUsers, setMultiUsers]  = useState([]);
    const authUser = useAuthStore(state=>state.user)
    const showToast = useShowToast()

    useEffect(()=>{
        const getAllUsers= async()=>{
            setIsLoading(true);
            try {
                const q = query(collection(firestore, 'users'), where('uid', 'not-in', [authUser.uid, ...authUser.following]), 
                orderBy("uid"), limit(3));
                const snapShot = await getDocs(q)
                // if(snapShot.empty) return showToast('Error', 'No Suggestions found', 'error')
                let users = []
                snapShot.forEach(doc => users.push({...doc.data(), id: doc.id}))
               
                setMultiUsers(users)
                
            } catch (error) {
                showToast('Error', error.message, 'error');
            }finally{
                setIsLoading(false)
            }
        }
        if(authUser) getAllUsers();
    },[authUser, showToast])
    

    


return {multiUsers, isLoading}
}
