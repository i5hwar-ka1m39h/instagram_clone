import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import useUserProfileStore from '../store/userProfileStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

export default function useFollowUser(userId) {
    const [isUpdating, setIsUpdating] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const showToast = useShowToast()
    const {user, setUser} = useAuthStore();
    const {userProfile, setUserProfile} = useUserProfileStore()

    const handleFollow = async()=>{
        setIsUpdating(true)
        try {
            const currentUserRef = doc(firestore, 'users', user.uid);
            const followUPuserRef = doc(firestore, 'users', userId);

            await updateDoc(currentUserRef,{
                following:isFollowing? arrayRemove(userId): arrayUnion(userId)
            })

            await updateDoc(followUPuserRef,{
                followers: isFollowing? arrayRemove(user.uid):arrayUnion(user.uid)
            })

            if(isFollowing){
                //unfollow
                setUser(
                  {
                    ...user,
                    following:user.following.filter(uid=>uid !== userId),
                })
                setUserProfile({
                    ...userProfile,
                    followers: userProfile.followers.filter(uid=>uid !== user.uid)
                })

                localStorage.setItem('user-insta-info', JSON.stringify( {
                    ...user,
                    following:user.following.filter(uid=>uid !== userId),
                }))

                setIsFollowing(false);
                
            }else{
                //follow
                setUser({
                    ...user,
                    following: [...user.following , userId],
                })
                setUserProfile({
                    ...userProfile,
                    followers: [...userProfile.followers , user.uid]
                })
                localStorage.setItem('user-insta-info',JSON.stringify({
                    ...user,
                    following: [...user.following , userId],
                }))
                setIsFollowing(true)
            }

        } catch (error) {
            showToast('Error', error.message, 'error')
        }finally{
            setIsUpdating(false)
        }
    }

    useEffect(()=>{
        const isFollowing = user.following.includes(userId);
        setIsFollowing(isFollowing);
    },[user,userId])

    return {isUpdating, isFollowing, handleFollow}
}
