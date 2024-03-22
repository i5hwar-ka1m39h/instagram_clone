import React from 'react'
import {auth, firestore} from './../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';


const useSignUpEmail = () => {
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore(state=> state.login)

      const signup =async(inputs)=>{
        if(!inputs.email || !inputs.password || !inputs.userName || !inputs.fullName){
          showToast('Error', "Please fill all fields", 'error');
          return
        }

        const userRef = collection(firestore, 'users')
        const userQuery = query(userRef, where('username','==', inputs.userName));
        const queryDoc = await getDocs(userQuery);
        if(!queryDoc.empty){
          showToast('Error', 'username already in use', 'error');
          return;
        }


        try {
          const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
          if(!newUser && error){
            showToast('Error', error.message, 'error');
            return;
          }
          if(newUser){
            const userDoc = {
              uid:newUser.user.uid,
              email:inputs.email,
              username: inputs.userName,
              fullname: inputs.fullName,
              bio:'',
              posts:[],
              followers:[],
              following:[],
              profilePic:'',
              createdAt: Date.now()
            }

            await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc);
            localStorage.setItem('user-insta-info', JSON.stringify(userDoc))
            loginUser(userDoc);
          }
        } catch (error) {
          showToast('Error', error, 'error');
        }
      }
  return {
    loading,
    error,
    signup
  }
  
}

export default useSignUpEmail