import React, { useState } from 'react'
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import { updateDoc, doc, arrayUnion } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import usePostStore from '../store/postStore';

export default function usePostComment() {
  const [isLoading, setIsLoading] = useState();
  const showToast = useShowToast();
  const authUser = useAuthStore(state=>state.user);
  const {addComment} = usePostStore()

  const handleCommentAdd = async(postId, comment)=>{
    if(isLoading) return;
    if(!authUser) showToast('Error', 'You must be logged in to add a comment', 'error');
    setIsLoading(true);
    const newComment ={
        comment:comment,
        createdAt:Date.now(),
        createdBy:authUser.uid,
        postId:postId
    }
    
    try {
       await updateDoc(doc(firestore,'posts', postId),{
        comments: arrayUnion(newComment),
       })
       addComment(postId, newComment);
        
    } catch (error) {
        showToast('Error', error.message, 'error');
    }finally{
        setIsLoading(false)
    }
  }
  return {isLoading, handleCommentAdd}
}
