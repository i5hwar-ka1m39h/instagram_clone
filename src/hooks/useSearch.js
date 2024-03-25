import React, { useState } from 'react'
import useShowToast from './useShowToast'
import { collection, Firestore, getDocs, query, where } from "firebase/firestore";
import { firestore } from '../firebase/firebase';

export default function useSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [found, setFound] = useState(null);
  const showToast = useShowToast()

  const searchRequest = async(username)=>{
    setIsLoading(true)
    setFound(null)
    try {
        const q = query(collection(firestore, 'users'), where('username','==', username))
        const snapshot = await getDocs(q);
        if(snapshot.empty) return showToast('Error', 'User not found', 'error')
        snapshot.forEach(user=>{ setFound(user.data())})
    } catch (error) {
        showToast('Error', error.message, 'error')
        setFound(false)
    }finally{
        setIsLoading(false);
    }
  }

  return {searchRequest, isLoading, found, setFound}
}
