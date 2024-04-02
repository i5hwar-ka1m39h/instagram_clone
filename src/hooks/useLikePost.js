import React, { useState } from 'react'
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

export default function useLikePost(post) {

 const  [likes, setLikes] = useState(post.likes.length)
 const authUser = useAuthStore(state=>state.user);
 const[isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));
 const [isLLoading, setIsLoading] = useState(false);
 const showToast = useShowToast();

 const addLike = async()=>{
    if(isLLoading) return
    if(!authUser) return showToast('Error', 'you need to sign up', 'error');

    
    
    setIsLoading(true)
    try {
        const postRef = doc(firestore, 'posts', post.id)
        await updateDoc(postRef,{
            likes: isLiked ?arrayRemove(authUser.uid): arrayUnion(authUser.uid)
        })

        setIsLiked(!isLiked)
        isLiked ? setLikes(likes -1) :setLikes(likes +1 )

    } catch (error) {
        showToast('Error', error.message, 'error');
    }finally{
        setIsLoading(false);
    }
 }

 return {likes, isLLoading, addLike, isLiked}
}
