import React, { useState } from 'react'
import useShowToast from './useShowToast'

export default function usePreviewImage() {
    const [selectedFile, setSelectedFile] = useState(null)
    const showToast = useShowToast();
    const fileSize = 2*1024*1024;

    const handleImage = (e)=>{
        const file = e.target.files[0];
        if(file && file.type.startsWith('image/')){
            if(file.size > fileSize){
                showToast('Error', 'file size should be less that 2mb', 'error');
                setSelectedFile(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend=()=>{
                setSelectedFile(reader.result)
            }
            reader.readAsDataURL(file);
        }else{
            showToast('Error', 'Please selecte an image', 'error');
            setSelectedFile(null);
        }
    }

   
  return {selectedFile, setSelectedFile, handleImage}
}
