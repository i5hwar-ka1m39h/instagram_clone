import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore';
import usePostStore from '../store/postStore';
import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';
import { collection, getDocs, query, where } from "firebase/firestore";
import {firestore} from '../firebase/firebase'
export default function useGetUserPosts() {
  
  const[isLoading, setIsLoading] = useState(true);
  const{posts, setPosts} = usePostStore()
  const showToast = useShowToast();
  const userProfile = useUserProfileStore(state=>state.userProfile);

  useEffect(()=>{
    const getPost = async()=>{
      if(!userProfile) return;
      setPosts([])
      setIsLoading(true);
      try {
        const q = query(collection(firestore,'posts'), where('createdBy', '==', userProfile.uid))
        const querySnapShot = await getDocs(q);
       

        const posts = []
        querySnapShot.forEach(doc=>{
          posts.push({...doc.data(), id: doc.id})
        })

        posts.sort((a, b)=>b.createdAt- a.createdAt);
        
        setPosts(posts)
       

      } catch (error) {
        showToast('Error', error.message, 'error');
        setPosts([]);
      }finally{
        setIsLoading(false);
      }
    }

    getPost();
  },[showToast, setPosts, userProfile])

  return {isLoading, posts}

}
