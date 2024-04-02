import React, { useState } from 'react'
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'
import usePostStore from '../store/postStore';
import useUserProfileStore from '../store/userProfileStore';
import {useLocation} from 'react-router-dom'
import { collection, addDoc, doc, updateDoc, arrayUnion } from "firebase/firestore"; 
import { firestore, storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

export default function useCreatePost() {
  const showToast = useShowToast()
  const[isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore(state=>state.user);
  const createPost = usePostStore(state=>state.createPost);
  const addPost = useUserProfileStore(state => state.addPost);
  const {pathname}= useLocation()

  const handleCreatePost = async( selectedFile, caption)=>{
    if(isLoading) return;
    if(!selectedFile) throw new Error('no image is selected');
    setIsLoading(true)
    const newPost = {
        caption: caption,
        likes:[],
        comments:[],
        createdAt:Date.now(),
        createdBy:authUser.uid
    }
    try {
        const postDocRef = await addDoc(collection(firestore, 'posts'), newPost);
        const userDocRef = doc(firestore, 'users', authUser.uid);
        const imageRef = ref(storage,`posts/${postDocRef.id}`);

        await updateDoc(userDocRef,{posts:arrayUnion(postDocRef.id)});
        await uploadString(imageRef, selectedFile, 'data_url');

        const downloadURL = await getDownloadURL(imageRef)

        await updateDoc(postDocRef, {imageURL:downloadURL})

        newPost.imageURL = downloadURL;

        createPost({...newPost,  id: postDocRef.id});
        addPost({...newPost,   id: postDocRef.id});

        showToast('Success', 'post created successfully', 'success');
        
    } catch (error) {
        showToast('Error', error.message, 'error')
    }finally{
        setIsLoading(false)
    }
  }


  return{isLoading, handleCreatePost}
}
