import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import usePostComment from './usePostComment';
import usePostStore from '../store/postStore';
import useAuthStore from '../store/authStore';
import useUserProfileStore from '../store/userProfileStore';

export default function useGetFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const {posts, setPosts} = usePostStore()
  const authUser = useAuthStore(state=>state.user)
  const {setUserProfile} = useUserProfileStore()
  const showToast = useShowToast();

  useEffect(()=>{
    const getFeed = async()=>{
        setIsLoading(true)
        if(authUser.following.length ===0){
            setPosts([])
            setIsLoading(false)
            return;
        }
        try {
            const q = query(collection(firestore, 'posts'), where('createdBy', 'in', authUser.following));
            const postSnap = await getDocs(q);

            const feed = []
            postSnap.forEach(post=>feed.push({id:post.id, ...post.data()}));

            feed.sort((a,b)=>b.createAt-a.createAt) // descending order by create date
            
            setPosts(feed)
            
        } catch (error) {
            showToast('Error', error.message, 'error')
        }finally{
            setIsLoading(false)
        }
    }

    if(authUser) getFeed();
  },[showToast, authUser, setUserProfile, setPosts])

  return { isLoading, posts }
}
