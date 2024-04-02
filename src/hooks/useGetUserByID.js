import { useEffect, useState } from "react";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { collection, getDoc, query, where, doc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";



export default function useGetUserByID(userId) {
  const[isLoading, setIsLoading] = useState(false);
  const[userProfile, setUserProfile] = useState(null);
  const showToast = useShowToast();

  useEffect(()=>{
    const getUserByID = async()=>{
        setIsLoading(true)
        setUserProfile(null);
        try {
          const docRef = doc(firestore, 'users', userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
          setUserProfile(docSnap.data());
          }
        } catch (error) {
            showToast('Error', error.message, 'error')
        }finally{
            setIsLoading(false)
        }
    }  
    getUserByID()
    },[userId, setIsLoading, showToast])

 return {isLoading, userProfile, setUserProfile}
}

