import { create } from "zustand";

const useUserProfileStore = create((set)=>({
    userProfile:null,
    setUserProfile:(userProfile)=>set({userProfile}),
    //update the number of post in profile header
    addPost:(post)=>set(state=>({
        userProfile:{...state.userProfile, posts:[post.id, ...state.userProfile.posts] }
    })),
    deletePost:(id)=>set(state=>({
        userProfile:{
            ...state.userProfile,
            posts: state.userProfile.posts.filter(postId=>postId!==id)}
    }))
}))


export default useUserProfileStore;