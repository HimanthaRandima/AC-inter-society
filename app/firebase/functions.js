import React from 'react'
import { ref,getDownloadURL,uploadBytesResumable,deleteObject} from "firebase/storage";
import {storage} from './firebaseConfig'
import {v4} from 'uuid'

export const uploadImage = (file)=>{
    const storageRef = ref(storage, `files/${file.name+v4()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',(snapshot)=>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
    },(err)=>{
        console.log(err);
        return "";
    },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            return downloadURL;
        });
    })
}    